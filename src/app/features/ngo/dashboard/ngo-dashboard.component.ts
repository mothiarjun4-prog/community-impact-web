import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../../core/services/incident.service';
import { VolunteerService, VolunteerProfile } from '../../../core/services/volunteer.service';
import { GeminiService } from '../../../core/services/gemini.service';
import { Incident } from '../../../models/incident.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ngo-dashboard',
  templateUrl: './ngo-dashboard.component.html',
  styleUrls: ['./ngo-dashboard.component.scss']
})
export class NgoDashboardComponent implements OnInit {
  incidents: Incident[] = [];
  volunteers: VolunteerProfile[] = [];
  showVolunteerPicker = false;
  selectedIncident: Incident | null = null;

  mapCenter: google.maps.LatLngLiteral = { lat: 20.5937, lng: 78.9629 };
  zoom = 5;
  mapOptions: google.maps.MapOptions = {
    styles: [{ featureType: 'poi', stylers: [{ visibility: 'off' }] }]
  };

  get activeCount() { return this.incidents.filter(i => i.status === 'active' || i.status === 'pending').length; }
  get assignedCount() { return this.incidents.filter(i => i.status === 'assigned').length; }
  get criticalCount() { return this.incidents.filter(i => i.urgency === 'Critical').length; }
  get resolvedCount() { return this.incidents.filter(i => i.status === 'completed').length; }
  get availableVolunteers() { return this.volunteers.filter(v => v.status === 'available'); }

  constructor(
    private incidentService: IncidentService,
    private volunteerService: VolunteerService,
    private geminiService: GeminiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.incidentService.getActiveIncidents().subscribe(data => { this.incidents = data; });
    this.volunteerService.getVolunteers().subscribe(vols => { this.volunteers = vols; });
  }

  openVolunteerPicker(incident: Incident) {
    if (incident.status === 'assigned') return;
    this.selectedIncident = incident;
    this.showVolunteerPicker = true;
  }

  closeVolunteerPicker() {
    this.showVolunteerPicker = false;
    this.selectedIncident = null;
  }

  async pickVolunteer(vol: VolunteerProfile) {
    if (!this.selectedIncident?.id) return;
    try {
      await this.incidentService.assignVolunteer(this.selectedIncident.id, vol.id, vol.displayName);
      this.volunteerService.updateVolunteerStatus(vol.id, 'assigned');
      this.snackBar.open(`✅ ${vol.displayName} assigned to "${this.selectedIncident.title}"`, 'OK', { duration: 4000 });
      this.closeVolunteerPicker();
    } catch {
      this.snackBar.open('Assignment failed. Try again.', 'OK', { duration: 3000 });
    }
  }

  async autoAssign(incident: Incident) {
    if (!incident.id) return;
    const available = this.volunteers.filter(v => v.status === 'available');
    if (!available.length) {
      this.snackBar.open('No available volunteers at the moment.', 'OK', { duration: 3000 });
      return;
    }
    this.snackBar.open('AI is finding the best match...', '', { duration: 2000 });
    try {
      const bestVol = available[0]; // Simple: pick first available (replace with Gemini later)
      await this.incidentService.assignVolunteer(incident.id, bestVol.id, bestVol.displayName);
      this.volunteerService.updateVolunteerStatus(bestVol.id, 'assigned');
      this.snackBar.open(`✅ ${bestVol.displayName} auto-assigned!`, 'OK', { duration: 4000 });
    } catch {
      this.snackBar.open('Auto-assign failed.', 'OK', { duration: 3000 });
    }
  }

  getMarkerOptions(urgency: string): google.maps.MarkerOptions {
    const color = urgency === 'Critical' ? 'red' : urgency === 'High' ? 'orange' : 'yellow';
    return { icon: `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png` };
  }

  getUrgencyColor(urgency: string): string {
    const map: any = { Critical: '#d32f2f', High: '#f57c00', Medium: '#fbc02d', Low: '#388e3c' };
    return map[urgency] || '#388e3c';
  }
}
