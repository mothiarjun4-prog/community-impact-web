import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../../core/services/incident.service';
import { AuthService } from '../../../core/services/auth.service';
import { Incident } from '../../../models/incident.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-volunteer-missions',
  templateUrl: './volunteer-missions.component.html',
  styleUrls: ['./volunteer-missions.component.scss']
})
export class VolunteerMissionsComponent implements OnInit {
  missions: Incident[] = [];
  completedMissions: Incident[] = [];
  isCompleting = false;

  constructor(
    private incidentService: IncidentService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const volId = this.authService.getUserId();
    this.incidentService.getActiveIncidents().subscribe(all => {
      this.missions = all.filter(i => i.volunteerId === volId && i.status === 'assigned');
      this.completedMissions = all.filter(i => i.volunteerId === volId && i.status === 'completed');
    });
  }

  async markServed(incident: Incident) {
    if (!incident.id) return;
    this.isCompleting = true;
    try {
      await this.incidentService.markCompleted(incident.id);
      this.snackBar.open('Mission completed! Great work.', 'OK', { duration: 3000 });
    } catch { this.snackBar.open('Failed to update. Try again.', 'OK', { duration: 3000 }); }
    finally { this.isCompleting = false; }
  }

  getUrgencyColor(u: string): string {
    const m: any = { Critical: '#d32f2f', High: '#f57c00', Medium: '#fbc02d', Low: '#388e3c' };
    return m[u] || '#388e3c';
  }

  getDirectionsUrl(inc: Incident): string {
    return `https://www.google.com/maps/dir/?api=1&destination=${inc.latitude},${inc.longitude}`;
  }
}
