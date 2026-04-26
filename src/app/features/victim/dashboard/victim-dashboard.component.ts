import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../../core/services/incident.service';
import { AuthService } from '../../../core/services/auth.service';
import { Incident } from '../../../models/incident.model';

@Component({
  selector: 'app-victim-dashboard',
  templateUrl: './victim-dashboard.component.html',
  styleUrls: ['./victim-dashboard.component.scss']
})
export class VictimDashboardComponent implements OnInit {
  // ✅ Fixed: subscribe reactively to victim's own reports
  myReports: Incident[] = [];
  currentLocation: google.maps.LatLngLiteral = { lat: 11.0168, lng: 76.9558 };
  zoom = 12;

  constructor(
    private incidentService: IncidentService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.currentLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        this.zoom = 14;
      });
    }

    // ✅ Filter by logged-in user's email (same id used in submitReport)
    const victimId = this.authService.getUserId();
    this.incidentService.getIncidentsByVictim(victimId).subscribe(incidents => {
      this.myReports = incidents;
    });
  }

  getStatusColor(status: string): string {
    return status === 'completed' ? '#388e3c' : status === 'assigned' ? '#f57c00' : '#d32f2f';
  }

  getStatusLabel(status: string): string {
    return status === 'completed' ? 'Help Arrived' : status === 'assigned' ? 'Volunteer En Route' : 'Awaiting Response';
  }
}
