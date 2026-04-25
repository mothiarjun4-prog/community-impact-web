// src/app/core/services/gemini.service.ts

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Incident } from '../../models/incident.model';

const GEMINI_API_KEY = environment.geminiApiKey;

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

@Injectable({ providedIn: 'root' })
export class GeminiService {

  async analyzeIncidentReport(description: string, imageBase64?: string): Promise<any> {
    const prompt = `
You are an emergency response AI assistant. Analyze the following incident report and classify its severity level accurately.

SEVERITY CLASSIFICATION RULES (follow strictly):
- "Critical": Immediate life-threatening danger, mass casualties, structural collapse, active fire with people trapped, severe medical emergency (cardiac arrest, unconsciousness, inability to breathe), large-scale flooding with people stranded, violent crime in progress, or any situation where death is imminent without immediate intervention.
- "High": Serious injury requiring urgent medical attention, significant property damage, localized flooding, accidents with injured persons, missing person in danger, oxygen/resource shortage in medical facilities, situations worsening rapidly.
- "Medium": Moderate injuries (non-life-threatening), minor accidents, contained small fires, infrastructure damage without immediate danger to people, situations stable but requiring response within hours.
- "Low": No injuries, minor property damage, non-urgent community issues, vandalism, nuisance situations, informational reports.

Respond ONLY with valid JSON (no markdown, no explanation, no code fences):
{
  "summary": "brief 1-sentence title describing the incident clearly",
  "severity": "Critical" or "High" or "Medium" or "Low",
  "type": "Flood" or "Fire" or "Earthquake" or "Medical" or "Violence" or "Accident" or "Other",
  "recommendations": ["specific action 1", "specific action 2"]
}

Incident report: ${description}
`;

    const parts: any[] = [{ text: prompt }];

    if (imageBase64) {
      parts.push({
        inline_data: {
          mime_type: 'image/jpeg',
          data: imageBase64
        }
      });
    }

    const response = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts }]
      })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Gemini API error: ${response.status} - ${err}`);
    }

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // Strip markdown code fences if present
    const cleaned = rawText.replace(/```json|```/g, '').trim();

    try {
      const parsed = JSON.parse(cleaned);

      // Normalize severity to ensure it exactly matches the expected union type
      parsed.severity = this.normalizeSeverity(parsed.severity);

      return parsed;
    } catch {
      // If JSON parse fails, return safe defaults
      return {
        summary: description.substring(0, 80),
        severity: 'Medium',
        type: 'Other',
        recommendations: ['Contact local authorities', 'Stay safe']
      };
    }
  }

  /**
   * Normalizes Gemini's severity output to the exact urgency values used by the app.
   * Handles casing variations and unexpected values gracefully.
   */
  private normalizeSeverity(raw: string): 'Critical' | 'High' | 'Medium' | 'Low' {
    if (!raw || typeof raw !== 'string') return 'Medium';

    const normalized = raw.trim().toLowerCase();

    if (normalized === 'critical') return 'Critical';
    if (normalized === 'high') return 'High';
    if (normalized === 'medium') return 'Medium';
    if (normalized === 'low') return 'Low';

    // Handle edge cases like "Highest" → Critical, "Lowest" → Low
    if (normalized.includes('critical') || normalized === 'highest') return 'Critical';
    if (normalized.includes('high')) return 'High';
    if (normalized.includes('low') || normalized === 'lowest') return 'Low';

    return 'Medium'; // safe fallback
  }

  async suggestVolunteer(incident: Incident, volunteers: any[]): Promise<string> {
    if (!volunteers.length) return 'volunteer-001';

    const prompt = `
Given this emergency incident:

- Title: ${incident.title}
- Urgency: ${incident.urgency}
- Type: ${incident.type}
- Location: ${incident.latitude}, ${incident.longitude}

And these available volunteers: ${JSON.stringify(volunteers)}

Respond ONLY with the volunteerId string of the best match. No explanation.
`;

    try {
      const response = await fetch(GEMINI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });

      if (!response.ok) throw new Error('Gemini API error');

      const data = await response.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

      return rawText.trim() || 'volunteer-001';
    } catch {
      return volunteers[0]?.id || 'volunteer-001';
    }
  }
}