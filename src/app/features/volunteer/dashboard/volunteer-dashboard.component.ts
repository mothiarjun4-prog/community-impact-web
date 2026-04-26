import { Component, OnInit, OnDestroy } from '@angular/core';
import { IncidentService } from '../../../core/services/incident.service';
import { AuthService } from '../../../core/services/auth.service';
import { Incident } from '../../../models/incident.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-volunteer-dashboard',
  templateUrl: './volunteer-dashboard.component.html',
  styleUrls: ['./volunteer-dashboard.component.scss']
})
export class VolunteerDashboardComponent implements OnInit, OnDestroy {
  currentLocation: google.maps.LatLngLiteral = { lat: 20.5937, lng: 78.9629 };
  assignedIncident: Incident | null = null;
  isCompleting = false;
  private sub?: Subscription;
  private watchId?: number;

  constructor(
    private incidentService: IncidentService,
    private authService: AuthService,  // ✅ FIX 2: inject AuthService
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.trackLocation();

    // ✅ FIX 2: Use real volunteer ID (their email) — not hardcoded 'current-volunteer-id'
    const volunteerId = this.authService.getUserId();
    this.sub = this.incidentService.getIncidentsByVolunteer(volunteerId).subscribe(incidents => {
      this.assignedIncident = incidents.length > 0 ? incidents[0] : null;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    if (this.watchId !== undefined) navigator.geolocation.clearWatch(this.watchId);
  }

  trackLocation() {
    if (navigator.geolocation) {
      this.watchId = navigator.geolocation.watchPosition(
        pos => { this.currentLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude }; },
        () => {}
      );
    }
  }

  async markServed() {
    if (!this.assignedIncident?.id) return;
    this.isCompleting = true;
    try {
      await this.incidentService.markCompleted(this.assignedIncident.id);
      this.snackBar.open('✅ Mission completed! Victim has been notified.', 'OK', { duration: 4000 });
      this.assignedIncident = null;
    } catch {
      this.snackBar.open('Failed to update status. Please try again.', 'OK', { duration: 3000 });
    } finally { this.isCompleting = false; }
  }

  // ✅ FIX 2: getDirectionsUrl opens Google Maps with current location as origin
  // Uses the volunteer's live GPS location as "origin" so Maps gives turn-by-turn routing
  getDirectionsUrl(): string {
    if (!this.assignedIncident) return '';
    const dest = `${this.assignedIncident.latitude},${this.assignedIncident.longitude}`;
    const origin = `${this.currentLocation.lat},${this.currentLocation.lng}`;
    // travelmode=driving gives full turn-by-turn navigation on mobile
    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}&travelmode=driving`;
  }

  getUrgencyColor(urgency: string): string {
    const map: any = { Critical: '#d32f2f', High: '#f57c00', Medium: '#fbc02d', Low: '#388e3c' };
    return map[urgency] || '#388e3c';
  }
}
