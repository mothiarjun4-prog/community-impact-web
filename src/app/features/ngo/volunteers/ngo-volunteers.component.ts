import { Component, OnInit } from '@angular/core';
import { VolunteerService, VolunteerProfile } from '../../../core/services/volunteer.service';
import { IncidentService } from '../../../core/services/incident.service';
import { Incident } from '../../../models/incident.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ngo-volunteers',
  templateUrl: './ngo-volunteers.component.html',
  styleUrls: ['./ngo-volunteers.component.scss']
})
export class NgoVolunteersComponent implements OnInit {
  volunteers: VolunteerProfile[] = [];
  pendingIncidents: Incident[] = [];
  searchQuery = '';
  showAssignModal = false;
  selectedVol: VolunteerProfile | null = null;

  get availableCount() { return this.volunteers.filter(v => v.status === 'available').length; }
  get assignedCount() { return this.volunteers.filter(v => v.status === 'assigned').length; }

  get filteredVolunteers(): VolunteerProfile[] {
    if (!this.searchQuery.trim()) return this.volunteers;
    const q = this.searchQuery.toLowerCase();
    return this.volunteers.filter(v =>
      v.displayName.toLowerCase().includes(q) || v.email.toLowerCase().includes(q)
    );
  }

  constructor(
    private volunteerService: VolunteerService,
    private incidentService: IncidentService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.volunteerService.getVolunteers().subscribe(vols => {
      this.volunteers = vols;
    });
    this.incidentService.getActiveIncidents().subscribe(incidents => {
      this.pendingIncidents = incidents.filter(i => i.status === 'pending' || i.status === 'active');
    });
  }

  openAssignModal(vol: VolunteerProfile) {
    this.selectedVol = vol;
    this.showAssignModal = true;
  }

  closeModal() {
    this.showAssignModal = false;
    this.selectedVol = null;
  }

  async confirmAssign(incident: Incident) {
    if (!this.selectedVol || !incident.id) return;
    try {
      await this.incidentService.assignVolunteer(incident.id, this.selectedVol.id, this.selectedVol.displayName);
      this.volunteerService.updateVolunteerStatus(this.selectedVol.id, 'assigned');
      this.snackBar.open(`✅ ${this.selectedVol.displayName} assigned to "${incident.title}"`, 'OK', { duration: 4000 });
      this.closeModal();
    } catch {
      this.snackBar.open('Assignment failed. Try again.', 'OK', { duration: 3000 });
    }
  }

  getUrgencyColor(urgency: string): string {
    const map: any = { Critical: '#d32f2f', High: '#f57c00', Medium: '#fbc02d', Low: '#388e3c' };
    return map[urgency] || '#388e3c';
  }
}
