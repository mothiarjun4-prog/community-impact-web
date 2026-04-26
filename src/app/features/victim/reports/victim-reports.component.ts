import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IncidentService } from '../../../core/services/incident.service';
import { AuthService } from '../../../core/services/auth.service';
import { Incident } from '../../../models/incident.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RatingDialogComponent } from '../../../shared/components/rating-dialog/rating-dialog.component';

@Component({
  selector: 'app-victim-reports',
  templateUrl: './victim-reports.component.html',
  styleUrls: ['./victim-reports.component.scss']
})
export class VictimReportsComponent implements OnInit {
  myReports: Incident[] = [];
  deletingId: string | null = null;
  confirmDeleteId: string | null = null;

  constructor(
    private incidentService: IncidentService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const victimId = this.authService.getUserId();
    this.incidentService.getIncidentsByVictim(victimId).subscribe(r => { this.myReports = r; });
  }

  // ✅ FIX 4: open star-rating dialog for completed incidents that have no review yet
  openRatingDialog(report: Incident) {
    if (report.reviews && report.reviews.length > 0) {
      this.snackBar.open('You have already rated this volunteer.', 'OK', { duration: 2500 });
      return;
    }
    this.dialog.open(RatingDialogComponent, {
      width: '440px',
      panelClass: 'rating-dialog-panel',
      data: {
        incidentId: report.id,
        volunteerName: report.volunteerName || 'Volunteer',
        volunteerId: report.volunteerId || ''
      }
    });
  }

  hasRated(report: Incident): boolean {
    return !!(report.reviews && report.reviews.length > 0);
  }

  // Delete handlers
  requestDelete(reportId: string) { this.confirmDeleteId = reportId; }
  cancelDelete() { this.confirmDeleteId = null; }

  async confirmDelete(reportId: string) {
    if (this.deletingId) return;
    this.deletingId = reportId;
    this.confirmDeleteId = null;
    const victimId = this.authService.getUserId();
    try {
      await this.incidentService.deleteIncident(reportId, victimId);
      this.snackBar.open('Report deleted successfully.', 'OK', { duration: 3000 });
    } catch (err: any) {
      this.snackBar.open(err.message || 'Failed to delete report.', 'Close', { duration: 4000 });
    } finally { this.deletingId = null; }
  }

  getStatusColor(s: string): string { return s === 'completed' ? '#388e3c' : s === 'assigned' ? '#f57c00' : '#d32f2f'; }
  getStatusLabel(s: string): string { return s === 'completed' ? 'Help Arrived' : s === 'assigned' ? 'Volunteer En Route' : 'Awaiting Response'; }
  getStatusIcon(s: string): string { return s === 'completed' ? 'check_circle' : s === 'assigned' ? 'directions_run' : 'hourglass_empty'; }
  getUrgencyColor(u: string): string { const m: any = { Critical: '#d32f2f', High: '#f57c00', Medium: '#fbc02d', Low: '#388e3c' }; return m[u] || '#388e3c'; }
  getUrgencyBg(u: string): string { const m: any = { Critical: 'linear-gradient(135deg,#ef5350,#c62828)', High: 'linear-gradient(135deg,#ffa726,#e65100)', Medium: 'linear-gradient(135deg,#ffee58,#f9a825)', Low: 'linear-gradient(135deg,#66bb6a,#2e7d32)' }; return m[u] || m['Low']; }
}
