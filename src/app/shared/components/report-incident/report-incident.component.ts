// src/app/shared/components/report-incident/report-incident.component.ts
// FIX 1: Use geminiService.extractTextFromImage() for OCR — passes MIME-detected image
// FIX 2: analyzeIncidentReport now uses proper severity criteria

import { Component } from '@angular/core';
import { GeminiService } from '../../../core/services/gemini.service';
import { IncidentService } from '../../../core/services/incident.service';
import { AuthService } from '../../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-report-incident',
  templateUrl: './report-incident.component.html',
  styleUrls: ['./report-incident.component.scss']
})
export class ReportIncidentComponent {
  reportText    = '';
  isAnalyzing   = false;
  isRecording   = false;
  imageBase64: string | null = null;
  imagePreviewUrl: string | null = null;
  imageFileName: string | null = null;   // FIX 1: track filename for MIME detection
  currentLat    = 11.0168;
  currentLng    = 76.9558;
  locationLabel = 'Fetching location...';

  constructor(
    private geminiService: GeminiService,
    private incidentService: IncidentService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.refreshLocation();
  }

  refreshLocation() {
    this.locationLabel = 'Fetching location...';
    if (!navigator.geolocation) {
      this.locationLabel = 'Geolocation not supported';
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.currentLat = pos.coords.latitude;
        this.currentLng = pos.coords.longitude;
        this.locationLabel = `${this.currentLat.toFixed(4)}, ${this.currentLng.toFixed(4)}`;
      },
      () => { this.locationLabel = 'Location unavailable — using default'; }
    );
  }

  // ── FIX 1: OCR via dedicated extractTextFromImage ──────────────────────────
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    this.imageFileName = file.name;  // save for MIME detection

    const reader = new FileReader();
    reader.onload = async (e: any) => {
      this.imagePreviewUrl = e.target.result;
      // Strip data URL prefix to get raw base64
      this.imageBase64 = (e.target.result as string).split(',')[1];
      this.isAnalyzing = true;

      try {
        // FIX 1: Use dedicated OCR method with correct MIME type and image-first ordering
        const extractedText = await this.geminiService.extractTextFromImage(
          this.imageBase64!,
          this.imageFileName!
        );
        this.reportText = extractedText;
        this.snackBar.open('Image analyzed successfully!', 'OK', { duration: 2500 });
      } catch (err: any) {
        console.error('[OCR] Failed:', err);
        // Show specific error so user understands what went wrong
        const msg = err?.message?.includes('404')
          ? 'Gemini model not available. Check your API key.'
          : err?.message?.includes('400')
            ? 'Invalid image format. Please try a JPG or PNG.'
            : err?.message?.includes('403')
              ? 'API key unauthorized. Check environment config.'
              : 'OCR failed — please describe the incident manually.';
        this.snackBar.open(msg, 'OK', { duration: 5000 });
      } finally {
        this.isAnalyzing = false;
      }
    };
    reader.readAsDataURL(file);
  }

  clearImage() {
    this.imageBase64 = null;
    this.imagePreviewUrl = null;
    this.imageFileName = null;
  }

  // ── Voice input ───────────────────────────────────────────────────────────
  startVoiceRecording() {
    const SR = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SR) {
      this.snackBar.open('Voice recognition not supported in this browser.', 'OK', { duration: 3000 });
      return;
    }
    const rec = new SR();
    rec.lang = 'en-IN';
    rec.continuous = false;
    rec.interimResults = false;
    this.isRecording = true;
    rec.onresult = (e: any) => { this.reportText = e.results[0][0].transcript; this.isRecording = false; };
    rec.onerror  = () => { this.isRecording = false; this.snackBar.open('Voice error. Try again.', 'OK', { duration: 3000 }); };
    rec.onend    = () => { this.isRecording = false; };
    rec.start();
    this.snackBar.open('Listening... Speak now.', '', { duration: 3000 });
  }

  // ── Submit report ─────────────────────────────────────────────────────────
  async submitReport() {
    if (!this.reportText.trim()) return;
    this.isAnalyzing = true;

    const victimId = this.authService.getUserId();

    try {
      // FIX 2: Always call Gemini analysis — now uses correct severity criteria
      // Pass imageBase64 + fileName so Gemini gets the image in addition to text
      let analysis: any = this._localFallback();
      try {
        const result = await this.geminiService.analyzeIncidentReport(
          this.reportText,
          this.imageBase64 ?? undefined,
          this.imageFileName ?? undefined
        );
        if (result?.summary) analysis = result;
      } catch (geminiErr) {
        console.warn('[Submit] Gemini analysis failed, using local inference:', geminiErr);
        // Local fallback still tries to classify severity from keywords
        analysis = this._localFallback();
      }

      await this.incidentService.createIncident({
        title:       analysis.summary || this.reportText.substring(0, 80).trim(),
        description: this.reportText,
        urgency:     analysis.severity || 'Medium',
        type:        analysis.type || 'Other',
        status:      'pending',
        timestamp:   new Date().toISOString(),
        latitude:    this.currentLat,
        longitude:   this.currentLng,
        victimId
      });

      this.snackBar.open('Report submitted! Help is on the way.', 'OK', {
        duration: 5000, panelClass: ['success-snackbar']
      });
      this.reportText = '';
      this.imageBase64 = null;
      this.imagePreviewUrl = null;
      this.imageFileName = null;

    } catch (err: any) {
      console.error('[Submit] Error:', err);
      if (err?.code === 'permission-denied') {
        this.snackBar.open('Permission denied. Please log in again.', 'Close', { duration: 5000 });
      } else {
        this.snackBar.open('Submission failed. Please try again.', 'Close', { duration: 4000 });
      }
    } finally {
      this.isAnalyzing = false;
    }
  }

  // Client-side severity+type inference (used when Gemini is unavailable)
  private _localFallback(): any {
    const s = this.reportText.toLowerCase();
    const critical = ['fire','flood','trapped','collapse','cardiac','unconscious','drowning',
      'gas leak','explosion','bleeding','casualties','urgent','emergency','ambulance'];
    const high = ['accident','crash','injured','elderly','child','stranded','rain','storm',
      'students','suffering','hostel','bridge','road','major damage'];
    let severity: string = 'Medium';
    if (critical.some(k => s.includes(k))) severity = 'Critical';
    else if (high.some(k => s.includes(k))) severity = 'High';

    let type = 'Other';
    if (s.includes('fire') || s.includes('burn'))    type = 'Fire';
    else if (s.includes('flood') || s.includes('water') || s.includes('rain')) type = 'Flood';
    else if (s.includes('accident') || s.includes('crash')) type = 'Accident';
    else if (s.includes('medical') || s.includes('heart'))  type = 'Medical';

    return {
      summary: this.reportText.substring(0, 80).trim(),
      severity,
      type,
      recommendations: ['Contact local emergency services', 'Dispatch nearest volunteer']
    };
  }
}
