import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe, DecimalPipe, TitleCasePipe } from '@angular/common';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';  // ✅ for RatingDialog
import { GoogleMapsModule } from '@angular/google-maps';

// Auth
import { AppComponent } from './app.component';
import { LandingComponent } from './features/auth/landing/landing.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';

// NGO
import { NgoDashboardComponent } from './features/ngo/dashboard/ngo-dashboard.component';
import { NgoVolunteersComponent } from './features/ngo/volunteers/ngo-volunteers.component';
import { NgoIncidentsComponent } from './features/ngo/incidents/ngo-incidents.component';
import { NgoMapComponent } from './features/ngo/map/ngo-map.component';
import { NgoReportsComponent } from './features/ngo/reports/ngo-reports.component';

// Volunteer
import { VolunteerDashboardComponent } from './features/volunteer/dashboard/volunteer-dashboard.component';
import { VolunteerMissionsComponent } from './features/volunteer/missions/volunteer-missions.component';
import { VolunteerReportComponent } from './features/volunteer/report/volunteer-report.component';

// Victim
import { VictimDashboardComponent } from './features/victim/dashboard/victim-dashboard.component';
import { VictimReportsComponent } from './features/victim/reports/victim-reports.component';
import { VictimEmergencyComponent } from './features/victim/emergency/victim-emergency.component';

// Profile
import { ProfileComponent } from './features/profile/profile/profile.component';

// Shared
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ReportIncidentComponent } from './shared/components/report-incident/report-incident.component';
import { RatingDialogComponent } from './shared/components/rating-dialog/rating-dialog.component'; // ✅ FIX 4
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ngo/dashboard', component: NgoDashboardComponent, canActivate: [AuthGuard], data: { role: 'ngo' } },
  { path: 'ngo/volunteers', component: NgoVolunteersComponent, canActivate: [AuthGuard], data: { role: 'ngo' } },
  { path: 'ngo/incidents', component: NgoIncidentsComponent, canActivate: [AuthGuard], data: { role: 'ngo' } },
  { path: 'ngo/map', component: NgoMapComponent, canActivate: [AuthGuard], data: { role: 'ngo' } },
  { path: 'ngo/reports', component: NgoReportsComponent, canActivate: [AuthGuard], data: { role: 'ngo' } },
  { path: 'volunteer/dashboard', component: VolunteerDashboardComponent, canActivate: [AuthGuard], data: { role: 'volunteer' } },
  { path: 'volunteer/missions', component: VolunteerMissionsComponent, canActivate: [AuthGuard], data: { role: 'volunteer' } },
  { path: 'volunteer/report', component: VolunteerReportComponent, canActivate: [AuthGuard], data: { role: 'volunteer' } },
  { path: 'victim/dashboard', component: VictimDashboardComponent, canActivate: [AuthGuard], data: { role: 'victim' } },
  { path: 'victim/reports', component: VictimReportsComponent, canActivate: [AuthGuard], data: { role: 'victim' } },
  { path: 'victim/emergency', component: VictimEmergencyComponent, canActivate: [AuthGuard], data: { role: 'victim' } },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent, LoginComponent, RegisterComponent,
    NgoDashboardComponent, NgoVolunteersComponent, NgoIncidentsComponent,
    NgoMapComponent, NgoReportsComponent,
    VolunteerDashboardComponent, VolunteerMissionsComponent, VolunteerReportComponent,
    VictimDashboardComponent, VictimReportsComponent, VictimEmergencyComponent,
    ProfileComponent,
    NavbarComponent, SidebarComponent, ReportIncidentComponent,
    RatingDialogComponent,  // ✅ registered here
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, CommonModule,
    RouterModule.forRoot(routes),
    MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
    MatIconModule, MatToolbarModule, MatMenuModule, MatSnackBarModule,
    MatProgressSpinnerModule, MatDividerModule, MatTooltipModule,
    MatSelectModule, MatDialogModule, GoogleMapsModule,
  ],
  providers: [DatePipe, DecimalPipe, TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
