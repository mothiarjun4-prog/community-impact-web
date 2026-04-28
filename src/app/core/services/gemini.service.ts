// src/app/core/services/gemini.service.ts
// FIX 1: OCR — detect real MIME type, put image FIRST in parts array
// FIX 2: Severity — explicit keyword criteria, proper classification

import { Injectable } from '@angular/core';
import { Incident } from '../../models/incident.model';
import { environment } from '../../../environments/environment';

const MODEL = 'gemini-1.5-flash';
const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models';
const getUrl = () => {
  const env = (window as any).__env || {};
  const key = env['GEMINI_API_KEY'] || environment.geminiApiKey;
  const maskedKey = key ? `${key.substring(0, 6)}...${key.substring(key.length - 4)}` : 'MISSING';
  console.log(`[Gemini] Using key: ${maskedKey} for model: ${MODEL}`);
  return `${BASE_URL}/${MODEL}:generateContent?key=${key}`;
};

const SAFETY = [
  { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
  { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
  { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
  { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
];

// Detect actual MIME type from base64 magic bytes
function detectMime(b64: string, fileName?: string): string {
  try {
    const bytes = atob(b64.substring(0, 16));
    const b = (i: number) => bytes.charCodeAt(i);
    if (b(0) === 0xFF && b(1) === 0xD8) return 'image/jpeg';
    if (b(0) === 0x89 && b(1) === 0x50) return 'image/png';
    if (b(0) === 0x47 && b(1) === 0x49) return 'image/gif';
    if (b(0) === 0x52 && b(1) === 0x49) return 'image/webp';
    if (b(0) === 0x49 && b(1) === 0x49) return 'image/tiff';
    if (b(0) === 0x4D && b(1) === 0x4D) return 'image/tiff';
  } catch { /* ignore */ }
  const ext = fileName?.split('.').pop()?.toLowerCase();
  const m: Record<string, string> = {
    jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png',
    gif: 'image/gif', webp: 'image/webp', heic: 'image/heic',
    bmp: 'image/bmp', tiff: 'image/tiff', tif: 'image/tiff'
  };
  return (ext && m[ext]) || 'image/jpeg';
}

@Injectable({ providedIn: 'root' })
export class GeminiService {

  // ── Main analysis (text + optional image) ──────────────────────────────────
  async analyzeIncidentReport(
    description: string,
    imageBase64?: string,
    fileName?: string
  ): Promise<any> {

    const severityRules = `
SEVERITY — apply these rules strictly:
- "Critical": Active life threat RIGHT NOW. Fire burning, drowning, flooding with people trapped, cardiac arrest, unconscious victim, building collapse, multiple casualties, active violence, gas leak.
- "High":  Serious but not immediately fatal. Road accident with injuries, major flooding, elderly/child alone, spreading infection risk, stranded group, bridge/road damage blocking emergency access.
- "Medium": Property damage or moderate harm, no immediate life threat. Minor car accident, local waterlogging, non-urgent medical complaint, infrastructure issue.
- "Low":  No danger, informational only. Pothole, stray animal, minor road marking, non-urgent maintenance.`;

    const prompt = `You are an AI emergency dispatcher for Community Impact, a disaster response NGO platform.
${severityRules}

Analyze the incident and respond ONLY with a valid JSON object — no markdown, no extra text:
{
  "summary": "one sentence describing the emergency (max 100 chars)",
  "severity": "Critical | High | Medium | Low",
  "type": "Flood | Fire | Earthquake | Medical | Accident | Violence | Infrastructure | Other",
  "recommendations": ["action 1", "action 2", "action 3"]
}

${imageBase64 ? 'Analyze BOTH the attached image AND the text.' : ''}
Report: "${description}"`;

    // FIX 1: Image MUST be first in parts for Gemini multimodal
    const parts: any[] = [];
    if (imageBase64) {
      parts.push({ inline_data: { mime_type: detectMime(imageBase64, fileName), data: imageBase64 } });
    }
    parts.push({ text: prompt });

    try {
      console.log('[Gemini] Analyzing report:', { description, hasImage: !!imageBase64 });
      const res = await fetch(getUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts }],
          safetySettings: SAFETY,
          generationConfig: { temperature: 0.1, topP: 0.8, maxOutputTokens: 1024 }
        })
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error('[Gemini] HTTP Error:', res.status, errText);
        throw new Error(`Gemini API error ${res.status}: ${errText}`);
      }

      const data = await res.json();
      if (data?.promptFeedback?.blockReason) throw new Error(`Content blocked: ${data.promptFeedback.blockReason}`);

      const raw: string = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      console.log('[Gemini] Raw response:', raw);
      
      const cleaned = raw.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '').trim();
      let parsed;
      try {
        parsed = JSON.parse(cleaned);
      } catch (e) {
        console.error('[Gemini] JSON Parse failed, attempting to extract JSON from text');
        const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          parsed = JSON.parse(jsonMatch[0]);
        } else {
          throw new Error('No valid JSON found in response');
        }
      }

      // Validate severity
      if (!['Critical', 'High', 'Medium', 'Low'].includes(parsed.severity)) {
        parsed.severity = this._inferSeverity(description);
      }
      return parsed;

    } catch (err) {
      console.error('[Gemini] analyzeIncidentReport failed:', err);
      return this._fallback(description);
    }
  }

  // ── Dedicated OCR: extract text from image ─────────────────────────────────
  async extractTextFromImage(imageBase64: string, fileName?: string): Promise<string> {
    const mimeType = detectMime(imageBase64, fileName);

    // FIX 1: Image FIRST, instruction text second
    const parts = [
      { inline_data: { mime_type: mimeType, data: imageBase64 } },
      {
        text: `You are an OCR assistant for an emergency response app.
1. If the image contains visible text (like street signs, documents, or labels), extract it exactly as written.
2. If the image shows an emergency scene (accident, flood, fire, etc.), describe the situation clearly: what type of emergency, number of people involved, and visible hazards.
3. If there is both text and a scene, provide both.
Respond ONLY with the extracted text or description — no labels, no preamble, no markdown formatting.` }
    ];

    try {
      console.log('[Gemini OCR] Extracting text from image...');
      const res = await fetch(getUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts }],
          safetySettings: SAFETY,
          generationConfig: { temperature: 0.0, maxOutputTokens: 1024 }
        })
      });

      if (!res.ok) {
        const body = await res.text();
        console.error('[Gemini OCR] HTTP Error:', res.status, body);
        throw new Error(`OCR API error ${res.status}: ${body}`);
      }

      const data = await res.json();
      if (data?.promptFeedback?.blockReason) {
        throw new Error(`OCR blocked: ${data.promptFeedback.blockReason}`);
      }

      const rawText: string = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      console.log('[Gemini OCR] Raw text:', rawText);

      // Clean markdown if present
      const cleanedText = rawText.replace(/^```(?:markdown|text)?\s*/i, '').replace(/```\s*$/i, '').trim();
      
      if (!cleanedText) throw new Error('Empty OCR response');
      return cleanedText;
    } catch (err) {
      console.error('[Gemini OCR] extraction failed:', err);
      throw err;
    }
  }

  // ── Volunteer matching ─────────────────────────────────────────────────────
  async suggestVolunteer(incident: Incident, volunteers: any[]): Promise<string> {
    if (!volunteers.length) return '';
    const prompt = `Emergency incident: ${incident.title} (${incident.urgency}) at lat ${incident.latitude}, lng ${incident.longitude}.
Available volunteers: ${JSON.stringify(volunteers)}.
Pick the volunteer with status "available" closest to the incident. Respond ONLY with their id value.`;
    try {
      const res = await fetch(getUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          safetySettings: SAFETY,
          generationConfig: { temperature: 0.0, maxOutputTokens: 64 }
        })
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      return (data?.candidates?.[0]?.content?.parts?.[0]?.text || '').trim() || (volunteers[0]?.id ?? '');
    } catch {
      return volunteers[0]?.id ?? '';
    }
  }

  // ── Helpers ────────────────────────────────────────────────────────────────
  private _fallback(desc: string): any {
    return {
      summary: desc.substring(0, 100).trim(),
      severity: this._inferSeverity(desc),
      type: this._inferType(desc),
      recommendations: ['Contact local emergency services', 'Dispatch nearest volunteer', 'Document the situation']
    };
  }

  // FIX 2: Keyword-based severity as client-side fallback
  private _inferSeverity(t: string): 'Critical' | 'High' | 'Medium' | 'Low' {
    const s = t.toLowerCase();
    const critical = ['fire', 'burning', 'flames', 'drown', 'flood', 'trapped', 'collapse', 'cardiac', 'heart attack',
      'unconscious', 'bleeding', 'dead', 'explosion', 'electrocution', 'gas leak', 'poisoning', 'critical',
      'emergency', 'ambulance', 'bomb', 'shooting', 'attack', 'severe', 'casualties', 'urgent', 'sinking'];
    const high = ['accident', 'crash', 'injured', 'injury', 'hurt', 'broken', 'fracture', 'elderly', 'child',
      'stuck', 'stranded', 'damage', 'major', 'serious', 'significant', 'help', 'suffering', 'students',
      'bus', 'bridge', 'building', 'road', 'highway', 'hostel', 'people', 'rain', 'storm'];
    const low = ['pothole', 'stray', 'minor', 'small', 'little', 'slight', 'slow'];
    if (critical.some(k => s.includes(k))) return 'Critical';
    if (high.some(k => s.includes(k))) return 'High';
    if (low.some(k => s.includes(k))) return 'Low';
    return 'Medium';
  }

  private _inferType(t: string): string {
    const s = t.toLowerCase();
    if (s.includes('fire') || s.includes('burn') || s.includes('flame')) return 'Fire';
    if (s.includes('flood') || s.includes('rain') || s.includes('water') || s.includes('stagnant')) return 'Flood';
    if (s.includes('quake') || s.includes('earthquake')) return 'Earthquake';
    if (s.includes('accident') || s.includes('crash') || s.includes('car') || s.includes('vehicle')) return 'Accident';
    if (s.includes('heart') || s.includes('medical') || s.includes('bleeding') || s.includes('hospital')) return 'Medical';
    if (s.includes('attack') || s.includes('violence') || s.includes('assault')) return 'Violence';
    if (s.includes('bridge') || s.includes('road') || s.includes('building') || s.includes('collapse')) return 'Infrastructure';
    return 'Other';
  }
}
