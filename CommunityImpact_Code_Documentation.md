# Community Impact Web Application - Source Code Documentation

This document contains the source code for the Community Impact project, organized by file path.

---

## File: package.json

```json

{

  "name": "community-impact-web",

  "version": "0.0.1",

  "scripts": {

    "ng": "ng",

    "start": "ng serve",

    "build": "ng build",

    "watch": "ng build --watch --configuration development"

  },

  "private": true,

  "dependencies": {

    "@angular/animations": "^17.0.0",

    "@angular/cdk": "^17.0.0",

    "@angular/common": "^17.0.0",

    "@angular/compiler": "^17.0.0",

    "@angular/core": "^17.0.0",

    "@angular/fire": "^17.1.0",

    "@angular/forms": "^17.0.0",

    "@angular/google-maps": "^17.0.0",

    "@angular/material": "^17.0.0",

    "@angular/platform-browser": "^17.0.0",

    "@angular/platform-browser-dynamic": "^17.0.0",

    "@angular/router": "^17.0.0",

    "bcryptjs": "^3.0.3",

    "firebase": "^10.14.1",

    "rxjs": "~7.8.0",

    "tslib": "^2.3.0",

    "zone.js": "~0.14.2"

  },

  "devDependencies": {

    "@angular-devkit/build-angular": "^17.0.0",

    "@angular/cli": "^17.0.0",

    "@angular/compiler-cli": "^17.0.0",

    "@types/bcryptjs": "^2.4.6",

    "typescript": "~5.2.2"

  }

}

```

---

## File: angular.json

```json

{

  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",

  "version": 1,

  "newProjectRoot": "projects",

  "projects": {

    "community-impact-web": {

      "projectType": "application",

      "schematics": {

        "@schematics/angular:component": {

          "style": "scss"

        }

      },

      "root": "",

      "sourceRoot": "src",

      "prefix": "app",

      "architect": {

        "build": {

          "builder": "@angular-devkit/build-angular:browser",

          "options": {

            "outputPath": "dist/community-impact-web",

            "index": "src/index.html",

            "main": "src/main.ts",

            "polyfills": ["zone.js"],

            "tsConfig": "tsconfig.app.json",

            "assets": [

              "src/favicon.ico",

              "src/assets"

            ],

            "styles": [

              "node_modules/@angular/material/prebuilt-themes/indigo-pink.css",

              "src/styles.scss"

            ],

            "scripts": []

          },

          "configurations": {

            "production": {

              "budgets": [

                {

                  "type": "initial",

                  "maximumWarning": "500kb",

                  "maximumError": "1mb"

                }

              ],

              "outputHashing": "all"

            },

            "development": {

              "buildOptimizer": false,

              "optimization": false,

              "vendorChunk": true,

              "extractLicenses": false,

              "sourceMap": true,

              "namedChunks": true

            }

          },

          "defaultConfiguration": "production"

        },

        "serve": {

          "builder": "@angular-devkit/build-angular:dev-server",

          "configurations": {

            "production": {

              "browserTarget": "community-impact-web:build:production"

            },

            "development": {

              "browserTarget": "community-impact-web:build:development"

            }

          },

          "defaultConfiguration": "development"

        }

      }

    }

  },

  "cli": {

    "analytics": "3fcee217-748a-4b18-8621-463973cd3d53"

  }

}

```

---

## File: tsconfig.json

```json

{

  "compileOnSave": false,

  "compilerOptions": {

    "baseUrl": "./",

    "outDir": "./dist/out-tsc",

    "forceConsistentCasingInFileNames": true,

    "strict": true,

    "noImplicitOverride": true,

    "noPropertyAccessFromIndexSignature": true,

    "noImplicitReturns": true,

    "noFallthroughCasesInSwitch": true,

    "skipLibCheck": true,

    "esModuleInterop": true,

    "sourceMap": true,

    "declaration": false,

    "experimentalDecorators": true,

    "moduleResolution": "node",

    "importHelpers": true,

    "target": "ES2022",

    "module": "ES2022",

    "useDefineForClassFields": false,

    "lib": [

      "ES2022",

      "dom"

    ]

  },

  "angularCompilerOptions": {

    "enableI18nLegacyMessageIdFormat": false,

    "strictInjectionParameters": true,

    "strictInputAccessModifiers": true,

    "strictTemplates": true

  }

}

```

---

## File: src/index.html

```html
<!doctype html>

<html lang="en">

<head>

  <meta charset="utf-8">

  <title>Community Impact</title>

  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="icon" type="image/x-icon" href="favicon.ico">

  <!-- Poppins Font by Indian Type Foundry -->

  <link rel="preconnect" href="https://fonts.googleapis.com">

  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
    rel="stylesheet">

  <!-- Material Icons -->

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <!-- Google Maps (replace YOUR_API_KEY) -->

  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwrCxPjilA4jZrlAuuiREAz6hK6BPPeK4"></script>

  <style>
    * {

      box-sizing: border-box;

    }

    html,

    body {

      height: 100%;

      margin: 0;

      padding: 0;

    }

    body {

      font-family: 'Poppins', sans-serif;

    }
  </style>

</head>

<body class="mat-typography">

  <app-root></app-root>

</body>

</html>
```

---

## File: src/main.ts

```typescript

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)

  .catch(err => console.error(err));

```

---

## File: src/styles.scss

```scss

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

:root {

  --primary: #2e7d32;

  --primary-light: #4caf50;

  --primary-dark: #1b5e20;

  --primary-hover: #388e3c;

  --accent: #81c784;

  --accent-light: #e8f5e9;

  --bg-main: #f4faf4;

  --bg-card: #ffffff;

  --text-primary: #1a2a1a;

  --text-secondary: #4a6a4a;

  --text-muted: #8aaa8a;

  --sidebar-width: 265px;

  --navbar-height: 70px;

  --shadow-sm: 0 2px 8px rgba(46, 125, 50, 0.08);

  --shadow-md: 0 4px 20px rgba(46, 125, 50, 0.12);

  --shadow-lg: 0 8px 40px rgba(46, 125, 50, 0.18);

  --radius-sm: 10px;

  --radius-md: 16px;

  --radius-lg: 24px;

  --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

}

body.dark-theme {

  --bg-main: #121212;

  --bg-card: #1e1e1e;

  --text-primary: #e0e0e0;

  --text-secondary: #b0b0b0;

  --text-muted: #888888;

  --primary: #4caf50;

  --primary-light: #81c784;

  --primary-dark: #388e3c;

  --accent: #66bb6a;

  --accent-light: #2e3b2e;

  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);

  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.6);

  --shadow-lg: 0 8px 40px rgba(0, 0, 0, 0.8);

}

* {

  box-sizing: border-box;

}

body {

  font-family: 'Poppins', sans-serif !important;

  background-color: var(--bg-main);

  color: var(--text-primary);

  line-height: 1.6;

  margin: 0;

  padding: 0;

}

// ─── Typography ──────────────────────────────────────────

h1, h2, h3, h4, h5, h6 {

  font-family: 'Poppins', sans-serif !important;

  font-weight: 700;

}

// ─── Dashboard Layout ─────────────────────────────────────

.app-shell {

  display: flex;

  min-height: 100vh;

}

.main-panel {

  flex: 1;

  margin-left: var(--sidebar-width);

  min-height: 100vh;

  display: flex;

  flex-direction: column;

}

.page-content {

  flex: 1;

  padding: 32px 36px;

  background: var(--bg-main);

}

// ─── Cards ───────────────────────────────────────────────

.ci-card {

  background: var(--bg-card);

  border-radius: var(--radius-md);

  box-shadow: var(--shadow-sm);

  border: 1px solid rgba(46, 125, 50, 0.08);

  transition: var(--transition);

  &:hover {

    box-shadow: var(--shadow-md);

  }

}

// ─── Stat Cards ───────────────────────────────────────────

.stat-card {

  background: var(--bg-card);

  border-radius: var(--radius-md);

  padding: 28px 24px;

  text-align: center;

  border: 1px solid rgba(46, 125, 50, 0.1);

  box-shadow: var(--shadow-sm);

  transition: var(--transition);

  &:hover {

    transform: translateY(-4px);

    box-shadow: var(--shadow-md);

  }

  .stat-value {

    font-size: 42px;

    font-weight: 800;

    color: var(--primary);

    line-height: 1;

    margin-bottom: 8px;

  }

  .stat-label {

    font-size: 11px;

    font-weight: 600;

    letter-spacing: 0.08em;

    text-transform: uppercase;

    color: var(--text-muted);

  }

}

// ─── Buttons ─────────────────────────────────────────────

.btn-primary {

  background: linear-gradient(135deg, var(--primary-light), var(--primary)) !important;

  color: white !important;

  border-radius: var(--radius-sm) !important;

  font-family: 'Poppins', sans-serif !important;

  font-weight: 600 !important;

  letter-spacing: 0.04em;

  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3) !important;

  transition: var(--transition) !important;

  &:hover:not([disabled]) {

    box-shadow: 0 6px 20px rgba(46, 125, 50, 0.4) !important;

    transform: translateY(-1px);

  }

  &[disabled] {

    opacity: 0.5 !important;

  }

}

.btn-outline {

  border: 2px solid var(--primary-light) !important;

  color: var(--primary) !important;

  border-radius: var(--radius-sm) !important;

  font-family: 'Poppins', sans-serif !important;

  font-weight: 600 !important;

  background: transparent !important;

  transition: var(--transition) !important;

  &:hover {

    background: var(--accent-light) !important;

  }

}

// ─── Badges ──────────────────────────────────────────────

.badge {

  display: inline-flex;

  align-items: center;

  padding: 4px 12px;

  border-radius: 99px;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 0.04em;

  text-transform: uppercase;

  color: white;

}

// ─── Auth Pages ───────────────────────────────────────────

.auth-wrapper {

  min-height: 100vh;

  display: flex;

  align-items: center;

  justify-content: center;

  background: linear-gradient(135deg, #e8f5e9 0%, #f4faf4 40%, #e8f5e9 100%);

  padding: 24px;

  position: relative;

  overflow: hidden;

  &::before {

    content: '';

    position: absolute;

    top: -100px;

    right: -100px;

    width: 400px;

    height: 400px;

    border-radius: 50%;

    background: radial-gradient(circle, rgba(76, 175, 80, 0.15), transparent 70%);

  }

  &::after {

    content: '';

    position: absolute;

    bottom: -100px;

    left: -100px;

    width: 350px;

    height: 350px;

    border-radius: 50%;

    background: radial-gradient(circle, rgba(46, 125, 50, 0.1), transparent 70%);

  }

}

.auth-card {

  background: rgba(255, 255, 255, 0.95) !important;

  backdrop-filter: blur(20px);

  border-radius: var(--radius-lg) !important;

  box-shadow: 0 20px 60px rgba(46, 125, 50, 0.15) !important;

  border: 1px solid rgba(76, 175, 80, 0.15) !important;

  padding: 48px !important;

  width: 100%;

  max-width: 440px;

  position: relative;

  z-index: 1;

}

// ─── Section Headers ──────────────────────────────────────

.section-header {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 20px;

  h2 {

    font-size: 20px;

    font-weight: 700;

    color: var(--text-primary);

  }

}

.live-badge {

  display: inline-flex;

  align-items: center;

  gap: 6px;

  padding: 4px 12px;

  background: rgba(46, 125, 50, 0.1);

  border-radius: 99px;

  font-size: 12px;

  font-weight: 600;

  color: var(--primary);

  .live-dot {

    width: 8px;

    height: 8px;

    border-radius: 50%;

    background: var(--primary-light);

    animation: pulse-dot 1.5s ease-in-out infinite;

  }

}

@keyframes pulse-dot {

  0%, 100% { opacity: 1; transform: scale(1); }

  50% { opacity: 0.5; transform: scale(0.8); }

}

// ─── Map Container ────────────────────────────────────────

.map-wrapper {

  border-radius: var(--radius-md);

  overflow: hidden;

  border: 3px solid white;

  box-shadow: var(--shadow-md);

}

// ─── Material Overrides ───────────────────────────────────

.mat-mdc-form-field {

  font-family: 'Poppins', sans-serif !important;

}

.mat-mdc-card {

  font-family: 'Poppins', sans-serif !important;

}

.mat-mdc-button,

.mat-mdc-raised-button,

.mat-mdc-stroked-button {

  font-family: 'Poppins', sans-serif !important;

}

.mat-mdc-snack-bar-container.success-snackbar {

  --mdc-snackbar-container-color: #2e7d32;

  --mdc-snackbar-supporting-text-color: white;

}

// ─── Incident Cards ───────────────────────────────────────

.incident-card {

  background: var(--bg-card);

  border-radius: var(--radius-md);

  padding: 20px;

  border: 1px solid rgba(46, 125, 50, 0.08);

  box-shadow: var(--shadow-sm);

  transition: var(--transition);

  display: flex;

  flex-direction: column;

  gap: 12px;

  &:hover {

    box-shadow: var(--shadow-md);

    transform: translateY(-2px);

  }

  h3 {

    font-size: 15px;

    font-weight: 600;

    color: var(--text-primary);

    margin: 0;

  }

  p {

    font-size: 13px;

    color: var(--text-secondary);

    margin: 0;

    line-height: 1.5;

  }

}

// ─── Page Title ───────────────────────────────────────────

.page-title {

  font-size: 26px;

  font-weight: 800;

  color: var(--text-primary);

  margin-bottom: 6px;

  span {

    color: var(--primary);

  }

}

.page-subtitle {

  font-size: 14px;

  color: var(--text-muted);

  margin-bottom: 28px;

}

// ─── Empty State ──────────────────────────────────────────

.empty-state {

  text-align: center;

  padding: 48px 24px;

  color: var(--text-muted);

  mat-icon {

    font-size: 56px;

    height: 56px;

    width: 56px;

    color: var(--accent);

    margin-bottom: 16px;

  }

  h3 {

    font-size: 16px;

    font-weight: 600;

    color: var(--text-secondary);

    margin-bottom: 8px;

  }

  p {

    font-size: 13px;

  }

}

// ─── Alert Banner ─────────────────────────────────────────

.alert-banner {

  display: flex;

  align-items: flex-start;

  gap: 14px;

  padding: 16px 20px;

  border-radius: var(--radius-sm);

  margin-bottom: 24px;

  &.warning {

    background: #fff8e1;

    border-left: 4px solid #ffc107;

    mat-icon { color: #f57c00; }

    h4 { color: #e65100; }

    p { color: #bf360c; }

  }

  &.info {

    background: var(--accent-light);

    border-left: 4px solid var(--primary-light);

    mat-icon { color: var(--primary); }

    h4 { color: var(--primary-dark); }

    p { color: var(--text-secondary); }

  }

  .alert-text {

    h4 { font-size: 14px; font-weight: 600; margin: 0 0 4px; }

    p { font-size: 13px; margin: 0; }

  }

}

// ─── Scrollbar ────────────────────────────────────────────

::-webkit-scrollbar {

  width: 6px;

  height: 6px;

}

::-webkit-scrollbar-track { background: transparent; }

::-webkit-scrollbar-thumb {

  background: rgba(46, 125, 50, 0.3);

  border-radius: 3px;

}

::-webkit-scrollbar-thumb:hover {

  background: rgba(46, 125, 50, 0.5);

}

```

---

## File: src/app/app.module.ts

```typescript

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

import { MatBadgeModule } from '@angular/material/badge';

import { MatChipsModule } from '@angular/material/chips';

import { GoogleMapsModule } from '@angular/google-maps';

// Firebase

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { provideAuth, getAuth } from '@angular/fire/auth';

import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { provideStorage, getStorage } from '@angular/fire/storage';

import { environment } from '../environments/environment';

// ── Auth ──────────────────────────────────────────────────

import { AppComponent } from './app.component';

import { LandingComponent } from './features/auth/landing/landing.component';

import { LoginComponent } from './features/auth/login/login.component';

import { RegisterComponent } from './features/auth/register/register.component';

// ── NGO ───────────────────────────────────────────────────

import { NgoDashboardComponent } from './features/ngo/dashboard/ngo-dashboard.component';

import { NgoVolunteersComponent } from './features/ngo/volunteers/ngo-volunteers.component';

import { NgoIncidentsComponent } from './features/ngo/incidents/ngo-incidents.component';

import { NgoMapComponent } from './features/ngo/map/ngo-map.component';

import { NgoReportsComponent } from './features/ngo/reports/ngo-reports.component';

// ── Volunteer ─────────────────────────────────────────────

import { VolunteerDashboardComponent } from './features/volunteer/dashboard/volunteer-dashboard.component';

import { VolunteerMissionsComponent } from './features/volunteer/missions/volunteer-missions.component';

import { VolunteerReportComponent } from './features/volunteer/report/volunteer-report.component';

// ── Victim ────────────────────────────────────────────────

import { VictimDashboardComponent } from './features/victim/dashboard/victim-dashboard.component';

import { VictimReportsComponent } from './features/victim/reports/victim-reports.component';

import { VictimEmergencyComponent } from './features/victim/emergency/victim-emergency.component';

// ── Profile ───────────────────────────────────────────────

import { ProfileComponent } from './features/profile/profile/profile.component';

// ── Shared ────────────────────────────────────────────────

import { NavbarComponent } from './shared/components/navbar/navbar.component';

import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

import { ReportIncidentComponent } from './shared/components/report-incident/report-incident.component';

// ✅ All routes properly defined — no more landing page redirects

const routes: Routes = [

  { path: '', component: LandingComponent },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  // NGO

  { path: 'ngo/dashboard', component: NgoDashboardComponent },

  { path: 'ngo/volunteers', component: NgoVolunteersComponent },

  { path: 'ngo/incidents', component: NgoIncidentsComponent },

  { path: 'ngo/map', component: NgoMapComponent },

  { path: 'ngo/reports', component: NgoReportsComponent },

  // Volunteer

  { path: 'volunteer/dashboard', component: VolunteerDashboardComponent },

  { path: 'volunteer/missions', component: VolunteerMissionsComponent },

  { path: 'volunteer/report', component: VolunteerReportComponent },

  // Victim

  { path: 'victim/dashboard', component: VictimDashboardComponent },

  { path: 'victim/reports', component: VictimReportsComponent },

  { path: 'victim/emergency', component: VictimEmergencyComponent },

  // Profile (shared across all roles)

  { path: 'profile', component: ProfileComponent },

  // Fallback — stay on current page, not landing

  { path: '**', redirectTo: '' }

];

@NgModule({

  declarations: [

    AppComponent,

    // Auth

    LandingComponent,

    LoginComponent,

    RegisterComponent,

    // NGO

    NgoDashboardComponent,

    NgoVolunteersComponent,

    NgoIncidentsComponent,

    NgoMapComponent,

    NgoReportsComponent,

    // Volunteer

    VolunteerDashboardComponent,

    VolunteerMissionsComponent,

    VolunteerReportComponent,

    // Victim

    VictimDashboardComponent,

    VictimReportsComponent,

    VictimEmergencyComponent,

    // Profile

    ProfileComponent,

    // Shared

    NavbarComponent,

    SidebarComponent,

    ReportIncidentComponent,

  ],

  imports: [

    BrowserModule,

    BrowserAnimationsModule,

    FormsModule,

    CommonModule,

    RouterModule.forRoot(routes),

    MatButtonModule,

    MatCardModule,

    MatFormFieldModule,

    MatInputModule,

    MatIconModule,

    MatToolbarModule,

    MatMenuModule,

    MatSnackBarModule,

    MatProgressSpinnerModule,

    MatDividerModule,

    MatTooltipModule,

    MatSelectModule,

    MatBadgeModule,

    MatChipsModule,

    GoogleMapsModule,

  ],

  providers: [

    DatePipe, 

    DecimalPipe, 

    TitleCasePipe,

    provideFirebaseApp(() => initializeApp(environment.firebase)),

    provideAuth(() => getAuth()),

    provideFirestore(() => getFirestore()),

    provideStorage(() => getStorage()),

  ],

  bootstrap: [AppComponent]

})

export class AppModule {}

```

---

## File: src/app/app.component.ts

```typescript

import { Component } from '@angular/core';

@Component({

  selector: 'app-root',

  template: '<router-outlet></router-outlet>',

  styles: []

})

export class AppComponent {

  title = 'community-impact-web';

}

```

---

## File: src/app/core/services/incident.service.ts

```typescript
// src/app/core/services/incident.service.ts
// Full Firestore real-time integration.
// FIX (prev): Auto-delete completed reports older than 1 week.
// FIX (new): Sends in-app notifications to victim on volunteer assignment + completion.

import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import {
  getFirestore, Firestore,
  collection, doc, setDoc, updateDoc, deleteDoc,
  onSnapshot, arrayUnion, Unsubscribe, getDoc, getDocs
} from 'firebase/firestore';
import { environment } from '../../../environments/environment';
import { Incident, AssignmentHistory, Review } from '../../models/incident.model';
import { VolunteerService } from './volunteer.service';
import { NotificationService } from './notification.service';

const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

@Injectable({ providedIn: 'root' })
export class IncidentService implements OnDestroy {
  private incidentsSubject = new BehaviorSubject<Incident[]>([]);
  private app: FirebaseApp;
  private db: Firestore;
  private unsub?: Unsubscribe;
  private cleanupIntervalId?: any;

  constructor(
    private volunteerService: VolunteerService,
    private notificationService: NotificationService
  ) {
    if (!getApps().length) {
      this.app = initializeApp(environment.firebase);
    } else {
      this.app = getApps()[0];
    }
    this.db = getFirestore(this.app);
    this._listen();
    this._deleteOldCompletedReports();
    this.cleanupIntervalId = setInterval(() => this._deleteOldCompletedReports(), 60 * 60 * 1000);
  }

  private _listen(): void {
    const colRef = collection(this.db, 'incidents');
    this.unsub = onSnapshot(colRef, snapshot => {
      const incidents: Incident[] = [];
      snapshot.forEach(d => incidents.push(d.data() as Incident));
      incidents.sort((a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      this.incidentsSubject.next(incidents);
    }, err => console.error('Incident listener error:', err));
  }

  private async _deleteOldCompletedReports(): Promise<void> {
    try {
      const cutoffDate = new Date(Date.now() - ONE_WEEK_MS).toISOString();
      const snapshot = await getDocs(collection(this.db, 'incidents'));
      const toDelete: string[] = [];
      snapshot.forEach(docSnap => {
        const incident = docSnap.data() as Incident;
        if (incident.status === 'completed' && incident.completedAt && incident.completedAt < cutoffDate) {
          toDelete.push(docSnap.id);
        }
      });
      await Promise.all(toDelete.map(id => deleteDoc(doc(this.db, 'incidents', id))));
      if (toDelete.length > 0) console.log(`[Cleanup] Auto-deleted ${toDelete.length} completed report(s) older than 1 week.`);
    } catch (err) {
      console.error('[Cleanup] Error during auto-delete:', err);
    }
  }

  getActiveIncidents(): Observable<Incident[]> {
    return this.incidentsSubject.asObservable();
  }

  getIncidentsByVictim(victimId: string): Observable<Incident[]> {
    return this.incidentsSubject.pipe(
      map(incidents => incidents.filter(i => i.victimId === victimId))
    );
  }

  getIncidentsByVolunteer(volunteerId: string): Observable<Incident[]> {
    return this.incidentsSubject.pipe(
      map(incidents => incidents.filter(i => i.volunteerId === volunteerId && i.status === 'assigned'))
    );
  }

  getMissionHistory(volunteerId: string): Observable<Incident[]> {
    return this.incidentsSubject.pipe(
      map(incidents => incidents.filter(i => i.volunteerId === volunteerId))
    );
  }

  async createIncident(data: Omit<Incident, 'id' | 'missionId'>): Promise<string> {
    const timestamp = Date.now();
    const missionId = 'MISSION-' + timestamp + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
    const incidentId = 'incident-' + timestamp;
    const newIncident: Incident = { ...data, id: incidentId, missionId, reviews: [] };
    await setDoc(doc(this.db, 'incidents', incidentId), newIncident);
    return missionId;
  }

  // ── Assign volunteer + notify victim ─────────────────────

  async assignVolunteer(
    incidentId: string,
    volunteerId: string,
    volunteerName: string = ''
  ): Promise<void> {
    const assignedAt = new Date().toISOString();
    const incident = this.incidentsSubject.value.find(i => i.id === incidentId);
    if (!incident) throw new Error('Incident not found');

    await updateDoc(doc(this.db, 'incidents', incidentId), {
      volunteerId, volunteerName, status: 'assigned'
    });

    const historyEntry: AssignmentHistory = {
      missionId: incident.missionId || incidentId,
      incidentId,
      incidentTitle: incident.title,
      incidentType: incident.type,
      victimId: incident.victimId || '',
      volunteerId,
      volunteerName,
      assignedAt,
      status: 'assigned',
      urgency: incident.urgency,
      locationName: incident.locationName || '',
      latitude: incident.latitude,
      longitude: incident.longitude
    };
    await this.volunteerService.addMissionToHistory(volunteerId, historyEntry);

    // ── Notify victim that a volunteer has been assigned ──
    if (incident.victimId) {
      try {
        await this.notificationService.sendNotification({
          recipientEmail: incident.victimId,
          type: 'volunteer_assigned',
          title: '🙌 Volunteer Assigned to Your Report',
          message: `${volunteerName} has been assigned to handle your report "${incident.title}". They are on their way to assist you. Please stay safe.`,
          incidentId,
          incidentTitle: incident.title,
          volunteerName
        });
      } catch (e) {
        console.warn('Failed to send assignment notification:', e);
      }
    }
  }

  // ── Mark completed + notify victim ───────────────────────

  async markCompleted(incidentId: string): Promise<void> {
    const completedAt = new Date().toISOString();
    await updateDoc(doc(this.db, 'incidents', incidentId), { status: 'completed', completedAt });

    const incident = this.incidentsSubject.value.find(i => i.id === incidentId);
    if (incident?.volunteerId) {
      const vol = this.volunteerService.getVolunteerById(incident.volunteerId);
      if (vol?.missionHistory) {
        const updatedHistory = vol.missionHistory.map(h =>
          h.incidentId === incidentId ? { ...h, status: 'completed' as const, completedAt } : h
        );
        await this.volunteerService.updateVolunteerProfile(vol.email, {
          missionHistory: updatedHistory,
          status: 'available'
        });
      }
    }

    // ── Notify victim that their incident has been resolved ──
    if (incident?.victimId) {
      try {
        await this.notificationService.sendNotification({
          recipientEmail: incident.victimId,
          type: 'incident_completed',
          title: '✅ Your Incident Has Been Resolved',
          message: `Your report "${incident.title}" has been marked as resolved by ${incident.volunteerName || 'the volunteer'}. We hope you are safe! You can now rate your experience from My Reports.`,
          incidentId,
          incidentTitle: incident.title,
          volunteerName: incident.volunteerName
        });
      } catch (e) {
        console.warn('Failed to send completion notification:', e);
      }
    }
  }

  async addReview(incidentId: string, review: Omit<Review, 'id'>): Promise<void> {
    const reviewWithId: Review = { ...review, id: 'review-' + Date.now() };
    await updateDoc(doc(this.db, 'incidents', incidentId), { reviews: arrayUnion(reviewWithId) });
  }

  static haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  ngOnDestroy(): void {
    if (this.unsub) this.unsub();
    if (this.cleanupIntervalId) clearInterval(this.cleanupIntervalId);
  }
}

```

---

## File: src/app/core/services/auth.service.ts

```typescript
// src/app/core/services/auth.service.ts
// Full Firebase Firestore auth with bcrypt password hashing.
// FIX: Added changePassword() — verifies current password via bcrypt, hashes
// the new password, and persists the new passwordHash to Firestore in real-time.

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import {
  getFirestore, Firestore, doc, setDoc, getDoc, updateDoc, collection
} from 'firebase/firestore';
import * as bcrypt from 'bcryptjs';
import { environment } from '../../../environments/environment';

export interface UserRecord {
  uid: string;
  email: string;
  displayName: string;
  role: 'ngo' | 'volunteer' | 'victim';
  passwordHash: string;
  phone?: string;
  location?: string;
  gender?: string;
  nationality?: string;
  qualification?: string;
  address?: string;
  emergencyContact?: string;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private app: FirebaseApp;
  private db: Firestore;

  constructor(private router: Router) {
    if (!getApps().length) {
      this.app = initializeApp(environment.firebase);
    } else {
      this.app = getApps()[0];
    }
    this.db = getFirestore(this.app);
  }

  // ── REGISTER ────────────────────────────────────────────

  async register(
    email: string,
    password: string,
    displayName: string,
    role: string,
    extraData?: Partial<UserRecord>
  ): Promise<void> {
    const normalizedEmail = email.trim().toLowerCase();
    const userRef = doc(this.db, 'users', normalizedEmail);
    const existing = await getDoc(userRef);
    if (existing.exists()) {
      throw new Error('An account with this email already exists. Please sign in.');
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const uid = 'uid-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
    const userRecord: UserRecord = {
      uid,
      email: normalizedEmail,
      displayName: displayName.trim(),
      role: role as any,
      passwordHash,
      createdAt: new Date().toISOString(),
      ...extraData
    };

    await setDoc(userRef, userRecord);

    if (role === 'volunteer') {
      const volRef = doc(this.db, 'volunteers', normalizedEmail);
      await setDoc(volRef, {
        id: uid,
        displayName: userRecord.displayName,
        email: normalizedEmail,
        phone: extraData?.phone || '',
        location: extraData?.location || '',
        registeredAt: userRecord.createdAt,
        status: 'available',
        missionHistory: []
      });
    }

    this._setSession(userRecord);
    if (role === 'ngo') this.router.navigate(['/ngo/dashboard']);
    else if (role === 'volunteer') this.router.navigate(['/volunteer/dashboard']);
    else this.router.navigate(['/victim/dashboard']);
  }

  // ── LOGIN ───────────────────────────────────────────────

  async login(email: string, password: string, role: string): Promise<void> {
    const normalizedEmail = email.trim().toLowerCase();
    const userRef = doc(this.db, 'users', normalizedEmail);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      throw new Error('No account found with this email. Please sign up first.');
    }

    const userRecord = snap.data() as UserRecord;

    if (userRecord.role !== role) {
      throw new Error(
        `This account is registered as a "${userRecord.role}". ` +
        `Please select the correct role to sign in.`
      );
    }

    const passwordMatch = await bcrypt.compare(password, userRecord.passwordHash);
    if (!passwordMatch) {
      throw new Error('Incorrect password. Please try again.');
    }

    this._setSession(userRecord);
    if (role === 'ngo') this.router.navigate(['/ngo/dashboard']);
    else if (role === 'volunteer') this.router.navigate(['/volunteer/dashboard']);
    else this.router.navigate(['/victim/dashboard']);
  }

  // ── CHANGE PASSWORD (FIX) ────────────────────────────────
  // Fetches current user record from Firestore, verifies the current password
  // with bcrypt.compare, hashes the new password with bcrypt, and writes the
  // new passwordHash to Firestore immediately (real-time update).

  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    const email = localStorage.getItem('userEmail') || '';
    if (!email) {
      throw new Error('You must be logged in to change your password.');
    }

    const userRef = doc(this.db, 'users', email);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      throw new Error('User record not found. Please log in again.');
    }

    const userRecord = snap.data() as UserRecord;

    // Verify the current password against the stored bcrypt hash
    const passwordMatch = await bcrypt.compare(currentPassword, userRecord.passwordHash);
    if (!passwordMatch) {
      throw new Error('Current password is incorrect. Please try again.');
    }

    // Hash the new password with bcrypt (salt rounds = 10)
    const newPasswordHash = await bcrypt.hash(newPassword, 10);

    // Persist the new bcrypt hash to Firestore in real-time
    await updateDoc(userRef, { passwordHash: newPasswordHash });
  }

  // ── PASSWORD RESET ───────────────────────────────────────

  async resetPassword(email: string): Promise<void> {
    console.log('Password reset requested for:', email);
    throw new Error('Password reset via email is not yet configured. Please contact support.');
  }

  // ── PROFILE ─────────────────────────────────────────────

  async updateProfile(updates: Partial<UserRecord>): Promise<void> {
    const email = localStorage.getItem('userEmail') || '';
    if (!email) return;

    const userRef = doc(this.db, 'users', email);
    const safeUpdates = { ...updates };
    delete safeUpdates.passwordHash;
    delete safeUpdates.uid;

    await updateDoc(userRef, safeUpdates as any);

    if (updates.displayName) {
      localStorage.setItem('userName', updates.displayName);
    }

    const existing = this.getProfileData();
    localStorage.setItem('userProfile_' + email, JSON.stringify({ ...existing, ...safeUpdates }));
  }

  getProfileData(): any {
    const email = localStorage.getItem('userEmail') || '';
    const stored = localStorage.getItem('userProfile_' + email);
    return stored ? JSON.parse(stored) : {};
  }

  async fetchFullProfile(): Promise<UserRecord | null> {
    const email = localStorage.getItem('userEmail') || '';
    if (!email) return null;
    const snap = await getDoc(doc(this.db, 'users', email));
    return snap.exists() ? snap.data() as UserRecord : null;
  }

  // ── SESSION HELPERS ──────────────────────────────────────

  private _setSession(userRecord: UserRecord): void {
    localStorage.setItem('userRole', userRecord.role);
    localStorage.setItem('userEmail', userRecord.email);
    localStorage.setItem('userName', userRecord.displayName);
    localStorage.setItem('userId', userRecord.uid);
    const profile = { ...userRecord };
    delete (profile as any).passwordHash;
    localStorage.setItem('userProfile_' + userRecord.email, JSON.stringify(profile));
  }

  logout(): void {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    this.router.navigate(['/']);
  }

  getCurrentUser(): any {
    const email = localStorage.getItem('userEmail');
    const name = localStorage.getItem('userName');
    if (email) return { email, displayName: name || email.split('@')[0] };
    return null;
  }

  getUserId(): string {
    return localStorage.getItem('userEmail') || 'anonymous';
  }

  isLoggedIn(): boolean { return !!localStorage.getItem('userEmail'); }

  getUserRole(): string { return localStorage.getItem('userRole') || ''; }
}

```

---

## File: src/app/core/services/notification.service.ts

```typescript
// src/app/core/services/notification.service.ts
// Stores in-app alert notifications in Firestore under notifications/{email}/{notifId}.
// Triggered on: volunteer assignment, incident completion.
// The victim's dashboard and navbar badge subscribe to these in real-time.
// NOTE: For SMS/email delivery in production, integrate Firebase Extensions
//       (Trigger Email / Twilio SMS) by pointing them at this collection.

import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import {
  getFirestore, Firestore,
  collection, doc, setDoc, updateDoc, onSnapshot,
  query, orderBy, Unsubscribe, getDocs, where
} from 'firebase/firestore';
import { environment } from '../../../environments/environment';

export interface AppNotification {
  id: string;
  recipientEmail: string;
  type: 'volunteer_assigned' | 'incident_completed' | 'general';
  title: string;
  message: string;
  incidentId?: string;
  incidentTitle?: string;
  volunteerName?: string;
  read: boolean;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class NotificationService implements OnDestroy {
  private notificationsSubject = new BehaviorSubject<AppNotification[]>([]);
  private app: FirebaseApp;
  private db: Firestore;
  private unsub?: Unsubscribe;
  private currentEmail: string = '';

  constructor() {
    if (!getApps().length) {
      this.app = initializeApp(environment.firebase);
    } else {
      this.app = getApps()[0];
    }
    this.db = getFirestore(this.app);
  }

  // Call this after login so the service listens to the right user's notifications
  listenForUser(email: string): void {
    if (this.currentEmail === email) return;
    this.currentEmail = email;
    if (this.unsub) this.unsub();

    const colRef = collection(this.db, 'notifications', email, 'alerts');
    const q = query(colRef, orderBy('createdAt', 'desc'));

    this.unsub = onSnapshot(q, snapshot => {
      const notifs: AppNotification[] = [];
      snapshot.forEach(d => notifs.push(d.data() as AppNotification));
      this.notificationsSubject.next(notifs);
    }, err => console.error('Notification listener error:', err));
  }

  getNotifications(): Observable<AppNotification[]> {
    return this.notificationsSubject.asObservable();
  }

  getUnreadCount(): number {
    return this.notificationsSubject.value.filter(n => !n.read).length;
  }

  // ── Send a notification to a victim ──────────────────────
  // Called from IncidentService when a volunteer is assigned or incident completed.

  async sendNotification(params: {
    recipientEmail: string;
    type: AppNotification['type'];
    title: string;
    message: string;
    incidentId?: string;
    incidentTitle?: string;
    volunteerName?: string;
  }): Promise<void> {
    const id = 'notif-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6);
    const notif: AppNotification = {
      id,
      recipientEmail: params.recipientEmail,
      type: params.type,
      title: params.title,
      message: params.message,
      incidentId: params.incidentId,
      incidentTitle: params.incidentTitle,
      volunteerName: params.volunteerName,
      read: false,
      createdAt: new Date().toISOString()
    };

    await setDoc(
      doc(this.db, 'notifications', params.recipientEmail, 'alerts', id),
      notif
    );
  }

  // Mark a single notification as read
  async markRead(email: string, notifId: string): Promise<void> {
    await updateDoc(
      doc(this.db, 'notifications', email, 'alerts', notifId),
      { read: true }
    );
  }

  // Mark all notifications as read
  async markAllRead(email: string): Promise<void> {
    const updates = this.notificationsSubject.value
      .filter(n => !n.read)
      .map(n =>
        updateDoc(doc(this.db, 'notifications', email, 'alerts', n.id), { read: true })
      );
    await Promise.all(updates);
  }

  ngOnDestroy(): void {
    if (this.unsub) this.unsub();
  }
}

```

---

## File: src/app/core/services/gemini.service.ts

```typescript
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
```

---

## File: src/app/core/services/volunteer.service.ts

```typescript

// src/app/core/services/volunteer.service.ts

// Real-time Firestore integration for volunteers.

// Volunteers collection: volunteers/{email}

// Each volunteer doc has a missionHistory[] array tracking every assigned mission.

import { Injectable, OnDestroy } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { initializeApp, getApps, FirebaseApp } from 'firebase/app';

import {

  getFirestore, Firestore,

  collection, doc, setDoc, updateDoc, onSnapshot,

  arrayUnion, Unsubscribe, getDocs

} from 'firebase/firestore';

import { environment } from '../../../environments/environment';

import { AssignmentHistory } from '../../models/incident.model';

export interface VolunteerProfile {

  id: string;

  displayName: string;

  email: string;

  phone?: string;

  location?: string;

  skills?: string;

  registeredAt: string;

  status: 'available' | 'assigned' | 'offline';

  missionHistory?: AssignmentHistory[];

}

@Injectable({ providedIn: 'root' })

export class VolunteerService implements OnDestroy {

  private volunteersSubject = new BehaviorSubject<VolunteerProfile[]>([]);

  private app: FirebaseApp;

  private db: Firestore;

  private unsub?: Unsubscribe;

  constructor() {

    if (!getApps().length) {

      this.app = initializeApp(environment.firebase);

    } else {

      this.app = getApps()[0];

    }

    this.db = getFirestore(this.app);

    this._listenToVolunteers();

  }

  // ── Real-time Firestore listener ─────────────────────────

  private _listenToVolunteers(): void {

    const colRef = collection(this.db, 'volunteers');

    this.unsub = onSnapshot(colRef, snapshot => {

      const vols: VolunteerProfile[] = [];

      snapshot.forEach(d => vols.push(d.data() as VolunteerProfile));

      this.volunteersSubject.next(vols);

    }, err => {

      console.error('Volunteer listener error:', err);

    });

  }

  getVolunteers(): Observable<VolunteerProfile[]> {

    return this.volunteersSubject.asObservable();

  }

  getVolunteersList(): VolunteerProfile[] {

    return this.volunteersSubject.value;

  }

  // ── Register a new volunteer (called from AuthService) ───

  async registerVolunteer(

    email: string,

    displayName: string,

    extraData?: Partial<VolunteerProfile>

  ): Promise<void> {

    const normalizedEmail = email.trim().toLowerCase();

    const current = this.volunteersSubject.value;

    if (current.find(v => v.email === normalizedEmail)) return; // already exists

    const newVol: VolunteerProfile = {

      id: 'vol-' + Date.now(),

      displayName,

      email: normalizedEmail,

      registeredAt: new Date().toISOString(),

      status: 'available',

      missionHistory: [],

      ...extraData

    };

    await setDoc(doc(this.db, 'volunteers', normalizedEmail), newVol);

  }

  // ── Update volunteer status (available / assigned / offline) ──

  async updateVolunteerStatus(id: string, status: 'available' | 'assigned' | 'offline'): Promise<void> {

    // id is the vol uid; find by matching the subject list

    const vol = this.volunteersSubject.value.find(v => v.id === id);

    if (!vol) return;

    await updateDoc(doc(this.db, 'volunteers', vol.email), { status });

  }

  // ── Append a mission to the volunteer's history ──────────
  // FIX: volunteerId is now the volunteer's email (matches getUserId() = userEmail).
  // Find by email first, fall back to id lookup for backward compatibility.

  async addMissionToHistory(volunteerId: string, mission: AssignmentHistory): Promise<void> {

    const vol = this.volunteersSubject.value.find(
      v => v.email === volunteerId || v.id === volunteerId
    );

    if (!vol) return;

    await updateDoc(doc(this.db, 'volunteers', vol.email), {

      missionHistory: arrayUnion(mission)

    });

  }

  // ── Update volunteer profile fields ─────────────────────

  async updateVolunteerProfile(email: string, updates: Partial<VolunteerProfile>): Promise<void> {

    const normalizedEmail = email.trim().toLowerCase();

    await updateDoc(doc(this.db, 'volunteers', normalizedEmail), updates as any);

  }

  getVolunteerByEmail(email: string): VolunteerProfile | undefined {

    return this.volunteersSubject.value.find(v => v.email === email.toLowerCase());

  }

  getVolunteerById(id: string): VolunteerProfile | undefined {

    // FIX: id may now be the volunteer's email (after the volunteerId unification fix).
    // Match by email first, then fall back to uid match.
    return this.volunteersSubject.value.find(v => v.email === id || v.id === id);

  }

  ngOnDestroy(): void {

    if (this.unsub) this.unsub();

  }

}

```

---

## File: src/app/features/victim/emergency/victim-emergency.component.ts

```typescript

import { Component } from '@angular/core';

@Component({

  selector: 'app-victim-emergency',

  template: `

    <div class="app-shell">

      <app-sidebar></app-sidebar>

      <div class="main-panel">

        <app-navbar></app-navbar>

        <div class="page-content">

          <div class="page-heading">

            <div>

              <h1 class="page-title">Emergency <span>Help</span></h1>

              <p class="page-subtitle">Report an emergency and get immediate assistance.</p>

            </div>

          </div>

          <div class="alert-banner" style="display:flex;align-items:flex-start;gap:14px;padding:16px 20px;background:#fff8e1;border-left:4px solid #ffc107;border-radius:14px;margin-bottom:24px">

            <mat-icon style="color:#f57c00;font-size:22px;height:22px;width:22px;margin-top:2px">warning</mat-icon>

            <div>

              <strong style="color:#e65100;font-size:14px">Life-threatening emergency?</strong>

              <p style="margin:4px 0 0;font-size:13px;color:#bf360c">Call <strong>112</strong> immediately. Use the form below for additional support.</p>

            </div>

          </div>

          <app-report-incident></app-report-incident>

        </div>

      </div>

    </div>`,

  styles: ['.page-heading { margin-bottom: 28px; }']

})

export class VictimEmergencyComponent {}

```

---

## File: src/app/features/victim/dashboard/victim-dashboard.component.html

```html

<div class="app-shell">

  <app-sidebar></app-sidebar>

  <div class="main-panel">

    <app-navbar></app-navbar>

    <div class="page-content">

      <!-- Page Title -->

      <div class="page-heading">

        <div>

          <h1 class="page-title">Emergency <span>Help Center</span></h1>

          <p class="page-subtitle">Report your emergency and get immediate assistance.</p>

        </div>

      </div>

      <!-- Emergency Alert Banner -->

      <div class="alert-banner warning">

        <div class="alert-icon">

          <mat-icon>info</mat-icon>

        </div>

        <div class="alert-text">

          <h4>Need Immediate Assistance?</h4>

          <p>Use the form below to report your emergency. For life-threatening situations, also call <strong>112</strong> immediately.</p>

        </div>

      </div>

      <!-- Main Grid -->

      <div class="victim-grid">

        <!-- Report Form (left) -->

        <div class="report-col">

          <app-report-incident></app-report-incident>

        </div>

        <!-- History + Map (right) -->

        <div class="right-col">

          <!-- My Reports -->

          <div class="section-card">

            <div class="section-header">

              <div class="section-title-row">

                <mat-icon class="section-icon">folder_open</mat-icon>

                <h2>Your Report History</h2>

              </div>

              <span class="badge-count">{{ myReports.length }} Reports</span>

            </div>

            <div class="report-list" *ngIf="myReports.length > 0; else noReports">

              <div class="report-item" *ngFor="let report of myReports">

                <div class="report-status-dot" [style.background]="getStatusColor(report.status)"></div>

                <div class="report-details">

                  <h4>{{ report.title }}</h4>

                  <p>{{ report.description }}</p>

                  <div class="report-tags">

                    <span class="tag status-tag" [style.background]="getStatusColor(report.status) + '20'" [style.color]="getStatusColor(report.status)">

                      {{ getStatusLabel(report.status) }}

                    </span>

                    <span class="tag">{{ report.type }}</span>

                    <span class="tag">{{ report.urgency }} Priority</span>

                  </div>

                </div>

              </div>

            </div>

            <ng-template #noReports>

              <div class="empty-state">

                <mat-icon>folder_open</mat-icon>

                <h3>No Reports Yet</h3>

                <p>Use the form to report an emergency.</p>

              </div>

            </ng-template>

          </div>

          <!-- Your Location Map -->

          <div class="section-card">

            <div class="section-header">

              <div class="section-title-row">

                <mat-icon class="section-icon">location_on</mat-icon>

                <h2>Your Location</h2>

              </div>

            </div>

            <div class="map-wrapper">

              <google-map height="280px" width="100%" [center]="currentLocation" [zoom]="zoom">

                <map-marker [position]="currentLocation" title="Your Location"></map-marker>

              </google-map>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>

```

---

## File: src/app/features/victim/dashboard/victim-dashboard.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../../core/services/incident.service';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';
import { Incident } from '../../../models/incident.model';

@Component({
  selector: 'app-victim-dashboard',
  templateUrl: './victim-dashboard.component.html',
  styleUrls: ['./victim-dashboard.component.scss']
})
export class VictimDashboardComponent implements OnInit {
  myReports: Incident[] = [];
  currentLocation: google.maps.LatLngLiteral = { lat: 11.0168, lng: 76.9558 };
  zoom = 12;

  constructor(
    private incidentService: IncidentService,
    private authService: AuthService,
    private notifService: NotificationService
  ) {}

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.currentLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        this.zoom = 14;
      });
    }

    const victimId = this.authService.getUserId();
    this.incidentService.getIncidentsByVictim(victimId).subscribe(incidents => {
      this.myReports = incidents;
    });

    // Start notification listener so the navbar badge updates immediately
    const user = this.authService.getCurrentUser();
    if (user?.email) {
      this.notifService.listenForUser(user.email);
    }
  }

  getStatusColor(status: string): string {
    return status === 'completed' ? '#388e3c' : status === 'assigned' ? '#f57c00' : '#d32f2f';
  }

  getStatusLabel(status: string): string {
    return status === 'completed' ? 'Help Arrived' : status === 'assigned' ? 'Volunteer En Route' : 'Awaiting Response';
  }
}

```

---

## File: src/app/features/victim/dashboard/victim-dashboard.component.scss

```scss

.page-heading {

  margin-bottom: 28px;

}

.alert-banner {

  display: flex;

  align-items: flex-start;

  gap: 16px;

  padding: 18px 20px;

  border-radius: 16px;

  margin-bottom: 28px;

  &.warning {

    background: #fff8e1;

    border-left: 4px solid #ffc107;

    .alert-icon {

      width: 44px;

      height: 44px;

      border-radius: 12px;

      background: linear-gradient(135deg, #ffa726, #e65100);

      display: flex;

      align-items: center;

      justify-content: center;

      flex-shrink: 0;

      mat-icon { color: white; font-size: 22px; height: 22px; width: 22px; }

    }

    .alert-text {

      h4 { font-size: 14px; font-weight: 700; color: #e65100; margin: 0 0 4px; }

      p { font-size: 13px; color: #bf360c; margin: 0; strong { font-weight: 700; } }

    }

  }

}

// ─── Layout Grid ─────────────────────────────────────────

.victim-grid {

  display: grid;

  grid-template-columns: 1.1fr 0.9fr;

  gap: 24px;

  align-items: start;

  @media (max-width: 1024px) {

    grid-template-columns: 1fr;

  }

}

.report-col { display: flex; flex-direction: column; gap: 0; }

.right-col {

  display: flex;

  flex-direction: column;

  gap: 20px;

}

// ─── Section Card ─────────────────────────────────────────

.section-card {

  background: white;

  border-radius: 20px;

  padding: 22px;

  border: 1px solid rgba(46, 125, 50, 0.08);

  box-shadow: 0 2px 12px rgba(46, 125, 50, 0.06);

}

.section-header {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 18px;

}

.section-title-row {

  display: flex;

  align-items: center;

  gap: 10px;

  .section-icon {

    font-size: 22px;

    height: 22px;

    width: 22px;

    color: #2e7d32;

  }

  h2 {

    font-size: 17px;

    font-weight: 700;

    color: #1a2a1a;

    margin: 0;

  }

}

.badge-count {

  font-size: 12px;

  font-weight: 700;

  color: #2e7d32;

  background: rgba(46, 125, 50, 0.1);

  padding: 4px 12px;

  border-radius: 99px;

}

// ─── Report List ──────────────────────────────────────────

.report-list {

  display: flex;

  flex-direction: column;

  gap: 14px;

}

.report-item {

  display: flex;

  gap: 14px;

  padding: 14px;

  background: #f9fffe;

  border-radius: 14px;

  border: 1px solid rgba(46, 125, 50, 0.08);

  transition: all 0.2s ease;

  &:hover {

    box-shadow: 0 4px 12px rgba(46, 125, 50, 0.08);

    border-color: rgba(46, 125, 50, 0.2);

  }

  .report-status-dot {

    width: 10px;

    height: 10px;

    border-radius: 50%;

    flex-shrink: 0;

    margin-top: 5px;

  }

  .report-details {

    flex: 1;

    h4 {

      font-size: 14px;

      font-weight: 700;

      color: #1a2a1a;

      margin-bottom: 4px;

    }

    p {

      font-size: 12.5px;

      color: #5a7a5a;

      line-height: 1.4;

      margin-bottom: 10px;

    }

    .report-tags {

      display: flex;

      gap: 6px;

      flex-wrap: wrap;

      .tag {

        font-size: 11px;

        font-weight: 600;

        padding: 3px 10px;

        border-radius: 99px;

        background: rgba(46, 125, 50, 0.07);

        color: #4a6a4a;

        &.status-tag {

          font-weight: 700;

        }

      }

    }

  }

}

.map-wrapper {

  border-radius: 14px;

  overflow: hidden;

  border: 2px solid rgba(46, 125, 50, 0.1);

}

.empty-state {

  text-align: center;

  padding: 36px 20px;

  color: #8aaa8a;

  mat-icon {

    font-size: 48px;

    height: 48px;

    width: 48px;

    color: #a5d6a7;

    margin-bottom: 12px;

  }

  h3 {

    font-size: 15px;

    font-weight: 600;

    color: #5a7a5a;

    margin-bottom: 4px;

  }

  p { font-size: 13px; margin: 0; }

}

```

---

## File: src/app/features/victim/reports/victim-reports.component.html

```html
<div class="app-shell">
  <app-sidebar></app-sidebar>
  <div class="main-panel">
    <app-navbar></app-navbar>
    <div class="page-content">

      <div class="page-heading">
        <div>
          <h1 class="page-title">My <span>Reports</span></h1>
          <p class="page-subtitle">Track your submitted emergency reports and rate volunteer service.</p>
        </div>
        <span class="badge-count">{{ myReports.length }} Total</span>
      </div>

      <!-- ── NOTIFICATION ALERTS PANEL ─────────────────── -->
      <div class="notif-panel" *ngIf="notifications.length > 0">
        <div class="notif-panel-header">
          <mat-icon>notifications_active</mat-icon>
          <h3>Alerts &amp; Updates</h3>
          <button mat-button class="mark-all-btn" (click)="markAllRead()" *ngIf="(notifService.getUnreadCount()) > 0">
            Mark all read
          </button>
        </div>
        <div class="notif-list">
          <div class="notif-item" *ngFor="let n of notifications"
               [class.unread]="!n.read"
               (click)="markNotifRead(n)">
            <div class="notif-icon" [style.background]="getNotifColor(n.type) + '20'">
              <mat-icon [style.color]="getNotifColor(n.type)">{{ getNotifIcon(n.type) }}</mat-icon>
            </div>
            <div class="notif-body">
              <p class="notif-title">{{ n.title }}</p>
              <p class="notif-msg">{{ n.message }}</p>
              <span class="notif-time">{{ n.createdAt | date:'short' }}</span>
            </div>
            <div class="unread-dot" *ngIf="!n.read"></div>
          </div>
        </div>
      </div>

      <!-- ── REPORTS LIST ────────────────────────────────── -->
      <div class="reports-list" *ngIf="myReports.length > 0; else noReports">
        <div class="report-card" *ngFor="let report of myReports">
          <div class="report-left">
            <div class="report-status-bar" [style.background]="getStatusColor(report.status)"></div>
            <div class="report-icon" [style.background]="getUrgencyBg(report.urgency)">
              <mat-icon>report_problem</mat-icon>
            </div>
          </div>

          <div class="report-body">
            <div class="report-top-row">
              <h3>{{ report.title }}</h3>
              <span class="badge" [style.background]="getUrgencyColor(report.urgency)">{{ report.urgency }}</span>
            </div>
            <p>{{ report.description }}</p>
            <div class="report-meta">
              <span class="meta-chip"><mat-icon>category</mat-icon> {{ report.type }}</span>
              <span class="meta-chip"><mat-icon>schedule</mat-icon> {{ report.timestamp | date:'medium' }}</span>
              <span class="meta-chip"><mat-icon>location_on</mat-icon> {{ report.latitude | number:'1.2-2' }}, {{ report.longitude | number:'1.2-2' }}</span>
              <span class="meta-chip" *ngIf="report.volunteerName">
                <mat-icon>person</mat-icon> {{ report.volunteerName }}
              </span>
            </div>

            <!-- Directions button (for assigned/completed) -->
            <div class="report-actions" *ngIf="report.status === 'assigned' || report.status === 'completed'">
              <a mat-stroked-button [href]="getDirectionsUrl(report)" target="_blank" class="directions-btn">
                <mat-icon>directions</mat-icon> Get Directions to Incident
              </a>
            </div>

            <!-- Rating panel (only for completed, unrated) -->
            <div class="rating-section" *ngIf="report.status === 'completed'">
              <ng-container *ngIf="!hasAlreadyRated(report)">
                <button mat-stroked-button class="rate-btn" (click)="openRating(report.id!)">
                  <mat-icon>star_border</mat-icon>
                  {{ ratingPanelOpenId === report.id ? 'Cancel Rating' : 'Rate Volunteer Service' }}
                </button>

                <div class="rating-panel" *ngIf="ratingPanelOpenId === report.id">
                  <p class="rating-prompt">How would you rate the help you received?</p>
                  <div class="stars-row">
                    <button class="star-btn" *ngFor="let s of [1,2,3,4,5]"
                      (click)="setRating(s)"
                      [class.active]="ratingValue >= s">
                      <mat-icon>{{ ratingValue >= s ? 'star' : 'star_border' }}</mat-icon>
                    </button>
                  </div>
                  <textarea class="rating-comment" placeholder="Leave a comment (optional)..."
                    [(ngModel)]="ratingComment" rows="3"></textarea>
                  <button mat-raised-button class="btn-primary submit-rating-btn"
                    (click)="submitRating(report)"
                    [disabled]="isSubmittingRating || !ratingValue">
                    {{ isSubmittingRating ? 'Submitting...' : 'Submit Rating' }}
                  </button>
                </div>
              </ng-container>

              <!-- Already rated -->
              <div class="already-rated" *ngIf="hasAlreadyRated(report)">
                <mat-icon>star</mat-icon>
                <span>You rated this {{ getExistingRating(report) }}/5 — Thank you!</span>
              </div>
            </div>
          </div>

          <div class="report-status-col">
            <div class="status-pill"
              [style.background]="getStatusColor(report.status) + '20'"
              [style.color]="getStatusColor(report.status)">
              <mat-icon>{{ getStatusIcon(report.status) }}</mat-icon>
              {{ getStatusLabel(report.status) }}
            </div>
          </div>
        </div>
      </div>

      <ng-template #noReports>
        <div class="section-card">
          <div class="empty-state">
            <mat-icon>folder_open</mat-icon>
            <h3>No Reports Yet</h3>
            <p>Your submitted emergency reports will appear here.</p>
            <button mat-raised-button class="btn-primary" routerLink="/victim/dashboard" style="margin-top:16px">
              <mat-icon>add_circle</mat-icon> Submit a Report
            </button>
          </div>
        </div>
      </ng-template>

    </div>
  </div>
</div>

```

---

## File: src/app/features/victim/reports/victim-reports.component.scss

```scss

.page-heading { display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:28px; }

.badge-count { font-size:13px; font-weight:700; color:#2e7d32; background:rgba(46,125,50,.1); padding:6px 16px; border-radius:99px; margin-top:6px; }

.reports-list { display:flex; flex-direction:column; gap:14px; }

.report-card {

  background:white; border-radius:18px; padding:0;

  border:1px solid rgba(46,125,50,.08); box-shadow:0 2px 10px rgba(46,125,50,.05);

  display:flex; align-items:stretch; overflow:hidden; transition:all .25s ease;

  &:hover { box-shadow:0 6px 20px rgba(46,125,50,.12); transform:translateY(-2px); }

}

.report-left {

  display:flex; align-items:center; gap:0;

  .report-status-bar { width:5px; height:100%; flex-shrink:0; border-radius:18px 0 0 18px; }

  .report-icon {

    width:52px; height:52px; border-radius:14px; margin:16px 12px 16px 14px;

    display:flex; align-items:center; justify-content:center; flex-shrink:0;

    mat-icon { font-size:26px; height:26px; width:26px; color:white; }

  }

}

.report-body {

  flex:1; padding:16px 16px 16px 0;

  .report-top-row { display:flex; align-items:flex-start; gap:12px; margin-bottom:6px; flex-wrap:wrap;

    h3 { font-size:15px; font-weight:700; color:#1a2a1a; margin:0; flex:1; }

  }

  p { font-size:13px; color:#5a7a5a; line-height:1.5; margin:0 0 12px; }

  .report-meta { display:flex; gap:10px; flex-wrap:wrap;

    .meta-chip { display:inline-flex; align-items:center; gap:4px; font-size:11.5px; font-weight:500; color:#5a7a5a; background:rgba(46,125,50,.06); padding:3px 10px; border-radius:99px;

      mat-icon { font-size:13px; height:13px; width:13px; color:#4caf50; }

    }

  }

}

.report-status-col { display:flex; align-items:center; padding:16px; flex-shrink:0;

  .status-pill { display:inline-flex; align-items:center; gap:6px; padding:6px 14px; border-radius:99px; font-size:12px; font-weight:700; white-space:nowrap;

    mat-icon { font-size:14px; height:14px; width:14px; }

  }

}

.section-card { background:white; border-radius:20px; padding:24px; border:1px solid rgba(46,125,50,.08); }

.empty-state { text-align:center; padding:56px 24px; color:#8aaa8a;

  mat-icon { font-size:56px; height:56px; width:56px; color:#a5d6a7; display:block; margin:0 auto 16px; }

  h3 { font-size:16px; font-weight:700; color:#5a7a5a; margin-bottom:6px; }

  p { font-size:13px; margin:0; }

}

/* ── NOTIFICATION PANEL ─────────────────────────────────── */
.notif-panel {
  background: white;
  border-radius: 18px;
  border: 1px solid rgba(46,125,50,.1);
  box-shadow: 0 2px 12px rgba(46,125,50,.08);
  margin-bottom: 24px;
  overflow: hidden;

  .notif-panel-header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 20px;
    background: linear-gradient(90deg, rgba(46,125,50,.06), transparent);
    border-bottom: 1px solid rgba(46,125,50,.08);
    mat-icon { color: #4caf50; font-size: 20px; }
    h3 { font-size: 14px; font-weight: 700; color: #1a2a1a; margin: 0; flex: 1; }
    .mark-all-btn { font-size: 11px; color: #388e3c; min-width: 0; }
  }

  .notif-list { display: flex; flex-direction: column; }

  .notif-item {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 14px 20px;
    cursor: pointer;
    transition: background .2s;
    position: relative;
    border-bottom: 1px solid rgba(0,0,0,.04);

    &:hover { background: rgba(46,125,50,.03); }
    &.unread { background: rgba(76,175,80,.04); }

    .notif-icon {
      width: 38px; height: 38px; border-radius: 12px;
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      mat-icon { font-size: 18px; height: 18px; width: 18px; }
    }

    .notif-body {
      flex: 1;
      .notif-title { font-size: 13px; font-weight: 700; color: #1a2a1a; margin: 0 0 2px; }
      .notif-msg { font-size: 12px; color: #5a7a5a; margin: 0 0 4px; line-height: 1.5; }
      .notif-time { font-size: 11px; color: #a0baa0; }
    }

    .unread-dot {
      width: 8px; height: 8px; border-radius: 50%; background: #4caf50;
      flex-shrink: 0; margin-top: 6px;
    }
  }
}

/* ── REPORT ACTIONS (Directions) ───────────────────────── */
.report-actions {
  margin-top: 10px;
  .directions-btn {
    border-color: #4caf50; color: #388e3c; font-size: 12px;
    mat-icon { font-size: 15px; height: 15px; width: 15px; margin-right: 4px; }
  }
}

/* ── RATING SECTION ─────────────────────────────────────── */
.rating-section { margin-top: 12px; }

.rate-btn {
  border-color: rgba(46,125,50,.3); color: #388e3c; font-size: 12px; height: 32px;
  mat-icon { font-size: 15px; height: 15px; width: 15px; margin-right: 4px; }
}

.rating-panel {
  background: rgba(46,125,50,.04);
  border: 1px solid rgba(46,125,50,.12);
  border-radius: 14px;
  padding: 16px;
  margin-top: 10px;

  .rating-prompt { font-size: 13px; font-weight: 600; color: #2e7d32; margin: 0 0 12px; }

  .stars-row {
    display: flex; gap: 6px; margin-bottom: 14px;
    .star-btn {
      background: none; border: none; cursor: pointer; padding: 2px;
      mat-icon { font-size: 30px; height: 30px; width: 30px; color: #bdbdbd; transition: color .15s; }
      &.active mat-icon, &:hover mat-icon { color: #fbc02d; }
    }
  }

  .rating-comment {
    width: 100%; box-sizing: border-box;
    border: 1px solid rgba(46,125,50,.2); border-radius: 10px;
    padding: 10px 12px; font-family: inherit; font-size: 13px;
    color: #1a2a1a; resize: vertical; outline: none;
    &:focus { border-color: #4caf50; }
  }

  .submit-rating-btn {
    margin-top: 12px;
    background: linear-gradient(135deg, #4caf50, #2e7d32);
    color: white; border-radius: 8px;
  }
}

.already-rated {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(251,192,45,.12); border-radius: 99px; padding: 5px 14px;
  font-size: 12px; font-weight: 600; color: #f9a825; margin-top: 8px;
  mat-icon { font-size: 15px; height: 15px; width: 15px; color: #fbc02d; }
}

```

---

## File: src/app/features/victim/reports/victim-reports.component.ts

```typescript
// src/app/features/victim/reports/victim-reports.component.ts
// FIX: Added volunteer rating (1–5 stars) after incident is completed.
// FIX: Shows in-app notification alerts from NotificationService.

import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../../core/services/incident.service';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationService, AppNotification } from '../../../core/services/notification.service';
import { Incident } from '../../../models/incident.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-victim-reports',
  templateUrl: './victim-reports.component.html',
  styleUrls: ['./victim-reports.component.scss']
})
export class VictimReportsComponent implements OnInit {
  myReports: Incident[] = [];
  notifications: AppNotification[] = [];

  // Rating state
  ratingPanelOpenId: string | null = null;
  ratingValue: number = 0;
  ratingComment: string = '';
  isSubmittingRating = false;

  // Directions: ask browser location to build navigation link
  myLat: number | null = null;
  myLng: number | null = null;

  currentUserEmail: string = '';

  constructor(
    private incidentService: IncidentService,
    private authService: AuthService,
    public notifService: NotificationService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const victimId = this.authService.getUserId();
    const user = this.authService.getCurrentUser();
    this.currentUserEmail = user?.email || '';

    this.incidentService.getIncidentsByVictim(victimId).subscribe(r => {
      this.myReports = r;
    });

    // Subscribe to in-app notifications
    if (this.currentUserEmail) {
      this.notifService.listenForUser(this.currentUserEmail);
      this.notifService.getNotifications().subscribe(n => {
        this.notifications = n;
      });
    }

    // Get user location for directions link
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.myLat = pos.coords.latitude;
        this.myLng = pos.coords.longitude;
      });
    }
  }

  // ── Rating ─────────────────────────────────────────────
  openRating(incidentId: string) {
    this.ratingPanelOpenId = this.ratingPanelOpenId === incidentId ? null : incidentId;
    this.ratingValue = 0;
    this.ratingComment = '';
  }

  hasAlreadyRated(incident: Incident): boolean {
    return (incident.reviews || []).some(r => r.victimId === this.currentUserEmail);
  }

  setRating(val: number) {
    this.ratingValue = val;
  }

  async submitRating(incident: Incident) {
    if (!this.ratingValue) {
      this.snackBar.open('Please select a star rating before submitting.', 'OK', { duration: 3000 });
      return;
    }
    if (!incident.id) return;
    this.isSubmittingRating = true;
    try {
      await this.incidentService.addReview(incident.id, {
        victimId: this.currentUserEmail,
        rating: this.ratingValue,
        comment: this.ratingComment.trim(),
        createdAt: new Date().toISOString()
      });
      this.snackBar.open('Thank you for your rating! ⭐', 'OK', { duration: 3000 });
      this.ratingPanelOpenId = null;
    } catch {
      this.snackBar.open('Failed to submit rating. Please try again.', 'OK', { duration: 3000 });
    } finally {
      this.isSubmittingRating = false;
    }
  }

  // ── Directions ─────────────────────────────────────────
  getDirectionsUrl(incident: Incident): string {
    const dest = `${incident.latitude},${incident.longitude}`;
    if (this.myLat && this.myLng) {
      return `https://www.google.com/maps/dir/${this.myLat},${this.myLng}/${dest}`;
    }
    return `https://www.google.com/maps/dir/?api=1&destination=${dest}`;
  }

  // ── Notifications ──────────────────────────────────────
  markNotifRead(notif: AppNotification) {
    this.notifService.markRead(this.currentUserEmail, notif.id);
  }

  markAllRead() {
    this.notifService.markAllRead(this.currentUserEmail);
  }

  getNotifIcon(type: string): string {
    if (type === 'volunteer_assigned') return 'directions_run';
    if (type === 'incident_completed') return 'check_circle';
    return 'notifications';
  }

  getNotifColor(type: string): string {
    if (type === 'volunteer_assigned') return '#f57c00';
    if (type === 'incident_completed') return '#388e3c';
    return '#1976d2';
  }

  // ── Utility ────────────────────────────────────────────
  getStatusColor(s: string): string { return s === 'completed' ? '#388e3c' : s === 'assigned' ? '#f57c00' : '#d32f2f'; }
  getStatusLabel(s: string): string { return s === 'completed' ? 'Help Arrived' : s === 'assigned' ? 'Volunteer En Route' : 'Awaiting Response'; }
  getStatusIcon(s: string): string { return s === 'completed' ? 'check_circle' : s === 'assigned' ? 'directions_run' : 'hourglass_empty'; }
  getUrgencyColor(u: string): string { const m: any = { Critical: '#d32f2f', High: '#f57c00', Medium: '#fbc02d', Low: '#388e3c' }; return m[u] || '#388e3c'; }
  getUrgencyBg(u: string): string { const m: any = { Critical: 'linear-gradient(135deg,#ef5350,#c62828)', High: 'linear-gradient(135deg,#ffa726,#e65100)', Medium: 'linear-gradient(135deg,#ffee58,#f9a825)', Low: 'linear-gradient(135deg,#66bb6a,#2e7d32)' }; return m[u] || m['Low']; }

  getExistingRating(incident: Incident): number {
    return (incident.reviews || []).find(r => r.victimId === this.currentUserEmail)?.rating || 0;
  }
}

```

---

## File: src/app/features/auth/landing/landing.component.ts

```typescript

import { Component } from '@angular/core';

@Component({

  selector: 'app-landing',

  templateUrl: './landing.component.html',

  styleUrls: ['./landing.component.scss']

})

export class LandingComponent {}

```

---

## File: src/app/features/auth/landing/landing.component.html

```html

<div class="landing-root">

  <!-- Decorative Background -->

  <div class="bg-decor">

    <div class="circle c1"></div>

    <div class="circle c2"></div>

    <div class="circle c3"></div>

  </div>

  <!-- Hero Section -->

  <div class="hero-section">

    <div class="hero-logo">

      <div class="logo-circle">

        <mat-icon>public</mat-icon>

      </div>

    </div>

    <h1 class="hero-title">Community <span>Impact</span></h1>

    <p class="hero-desc">Smart Resource Allocation & Volunteer Coordination for Social Impact</p>

    <div class="hero-stats">

      <div class="stat-pill">

        <mat-icon>people</mat-icon>

        <span>500+ Volunteers</span>

      </div>

      <div class="stat-pill">

        <mat-icon>verified_user</mat-icon>

        <span>100+ NGOs</span>

      </div>

      <div class="stat-pill">

        <mat-icon>favorite</mat-icon>

        <span>10K+ Lives Impacted</span>

      </div>

    </div>

  </div>

  <!-- Role Selection -->

  <div class="roles-section">

    <h2 class="roles-title">Select Your Role to Continue</h2>

    <p class="roles-sub">Each role has a dedicated dashboard tailored to your needs</p>

    <div class="roles-grid">

      <!-- NGO Admin -->

      <div class="role-card ngo-card" [routerLink]="['/login']" [queryParams]="{role: 'ngo'}">

        <div class="card-glow"></div>

        <div class="card-icon">

          <mat-icon>account_balance</mat-icon>

        </div>

        <div class="card-content">

          <h3>NGO Admin</h3>

          <p>Manage crisis reports, monitor incidents on the live map, and assign volunteers efficiently.</p>

          <ul class="feature-list">

            <li><mat-icon>check_circle</mat-icon> Live Incident Map</li>

            <li><mat-icon>check_circle</mat-icon> AI Volunteer Matching</li>

            <li><mat-icon>check_circle</mat-icon> Crisis Analytics</li>

          </ul>

        </div>

        <div class="card-footer">

          <span class="enter-btn">Enter as NGO Admin <mat-icon>arrow_forward</mat-icon></span>

        </div>

      </div>

      <!-- Volunteer -->

      <div class="role-card volunteer-card" [routerLink]="['/login']" [queryParams]="{role: 'volunteer'}">

        <div class="card-glow"></div>

        <div class="card-icon">

          <mat-icon>volunteer_activism</mat-icon>

        </div>

        <div class="card-content">

          <h3>Volunteer</h3>

          <p>Respond to assigned crises, track your location, and report on-ground incidents in real time.</p>

          <ul class="feature-list">

            <li><mat-icon>check_circle</mat-icon> Mission Assignments</li>

            <li><mat-icon>check_circle</mat-icon> Live Navigation</li>

            <li><mat-icon>check_circle</mat-icon> Incident Reporting</li>

          </ul>

        </div>

        <div class="card-footer">

          <span class="enter-btn">Enter as Volunteer <mat-icon>arrow_forward</mat-icon></span>

        </div>

      </div>

      <!-- Victim / User -->

      <div class="role-card victim-card" [routerLink]="['/login']" [queryParams]="{role: 'victim'}">

        <div class="card-glow"></div>

        <div class="card-icon">

          <mat-icon>emergency</mat-icon>

        </div>

        <div class="card-content">

          <h3>Victim / User</h3>

          <p>Report emergencies quickly and request immediate assistance with AI-powered analysis.</p>

          <ul class="feature-list">

            <li><mat-icon>check_circle</mat-icon> Emergency Reporting</li>

            <li><mat-icon>check_circle</mat-icon> AI Severity Analysis</li>

            <li><mat-icon>check_circle</mat-icon> Real-time Status</li>

          </ul>

        </div>

        <div class="card-footer">

          <span class="enter-btn">Enter as User <mat-icon>arrow_forward</mat-icon></span>

        </div>

      </div>

    </div>

  </div>

  <!-- Footer -->

  <footer class="landing-footer">

    <p>© 2025 Community Impact. Powered by AI for Social Good.</p>

  </footer>

</div>

```

---

## File: src/app/features/auth/landing/landing.component.scss

```scss

.landing-root {

  min-height: 100vh;

  background: linear-gradient(160deg, #e8f5e9 0%, #f4faf4 30%, #fff 60%, #e8f5e9 100%);

  font-family: 'Poppins', sans-serif;

  position: relative;

  overflow-x: hidden;

  display: flex;

  flex-direction: column;

  align-items: center;

}

// ─── Background Decoration ────────────────────────────────

.bg-decor {

  position: fixed;

  inset: 0;

  pointer-events: none;

  z-index: 0;

  .circle {

    position: absolute;

    border-radius: 50%;

    opacity: 0.35;

  }

  .c1 {

    width: 500px;

    height: 500px;

    background: radial-gradient(circle, rgba(76, 175, 80, 0.25), transparent 70%);

    top: -150px;

    right: -100px;

    animation: float1 8s ease-in-out infinite;

  }

  .c2 {

    width: 400px;

    height: 400px;

    background: radial-gradient(circle, rgba(46, 125, 50, 0.15), transparent 70%);

    bottom: -100px;

    left: -80px;

    animation: float2 10s ease-in-out infinite;

  }

  .c3 {

    width: 300px;

    height: 300px;

    background: radial-gradient(circle, rgba(129, 199, 132, 0.2), transparent 70%);

    top: 40%;

    left: 15%;

    animation: float1 12s ease-in-out infinite reverse;

  }

}

@keyframes float1 {

  0%, 100% { transform: translate(0, 0) scale(1); }

  33% { transform: translate(20px, -30px) scale(1.05); }

  66% { transform: translate(-10px, 15px) scale(0.97); }

}

@keyframes float2 {

  0%, 100% { transform: translate(0, 0); }

  50% { transform: translate(15px, -20px); }

}

// ─── Hero Section ─────────────────────────────────────────

.hero-section {

  text-align: center;

  padding: 80px 24px 48px;

  position: relative;

  z-index: 1;

  max-width: 700px;

  width: 100%;

  animation: slideDown 0.6s ease-out;

  .hero-logo {

    margin-bottom: 24px;

    .logo-circle {

      width: 80px;

      height: 80px;

      background: linear-gradient(135deg, #4caf50, #2e7d32);

      border-radius: 24px;

      display: inline-flex;

      align-items: center;

      justify-content: center;

      box-shadow: 0 12px 40px rgba(46, 125, 50, 0.35);

      animation: pulse-logo 3s ease-in-out infinite;

      mat-icon {

        font-size: 40px;

        height: 40px;

        width: 40px;

        color: white;

      }

    }

  }

  .hero-title {

    font-size: 52px;

    font-weight: 900;

    color: #1a2a1a;

    margin-bottom: 16px;

    line-height: 1.1;

    letter-spacing: -0.02em;

    span {

      color: #2e7d32;

      position: relative;

      &::after {

        content: '';

        position: absolute;

        bottom: -4px;

        left: 0;

        right: 0;

        height: 4px;

        background: linear-gradient(90deg, #4caf50, #81c784);

        border-radius: 2px;

      }

    }

  }

  .hero-desc {

    font-size: 17px;

    color: #5a7a5a;

    font-weight: 400;

    max-width: 500px;

    margin: 0 auto 32px;

    line-height: 1.6;

  }

  .hero-stats {

    display: flex;

    justify-content: center;

    gap: 12px;

    flex-wrap: wrap;

    .stat-pill {

      display: inline-flex;

      align-items: center;

      gap: 6px;

      padding: 8px 16px;

      background: rgba(255, 255, 255, 0.85);

      border-radius: 99px;

      border: 1px solid rgba(46, 125, 50, 0.15);

      font-size: 13px;

      font-weight: 600;

      color: #2e7d32;

      backdrop-filter: blur(8px);

      box-shadow: 0 2px 8px rgba(46, 125, 50, 0.08);

      mat-icon {

        font-size: 16px;

        height: 16px;

        width: 16px;

        color: #4caf50;

      }

    }

  }

}

@keyframes pulse-logo {

  0%, 100% { box-shadow: 0 12px 40px rgba(46, 125, 50, 0.35); }

  50% { box-shadow: 0 16px 50px rgba(46, 125, 50, 0.5); transform: translateY(-3px); }

}

@keyframes slideDown {

  from { opacity: 0; transform: translateY(-20px); }

  to { opacity: 1; transform: translateY(0); }

}

// ─── Roles Section ────────────────────────────────────────

.roles-section {

  padding: 0 24px 60px;

  text-align: center;

  position: relative;

  z-index: 1;

  max-width: 1100px;

  width: 100%;

  animation: slideUp 0.7s ease-out;

  .roles-title {

    font-size: 28px;

    font-weight: 800;

    color: #1a2a1a;

    margin-bottom: 8px;

  }

  .roles-sub {

    font-size: 14px;

    color: #8aaa8a;

    margin-bottom: 40px;

  }

}

@keyframes slideUp {

  from { opacity: 0; transform: translateY(20px); }

  to { opacity: 1; transform: translateY(0); }

}

.roles-grid {

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 24px;

  @media (max-width: 900px) {

    grid-template-columns: 1fr;

    max-width: 420px;

    margin: 0 auto;

  }

}

// ─── Role Cards ───────────────────────────────────────────

.role-card {

  background: rgba(255, 255, 255, 0.92);

  border-radius: 24px;

  border: 1.5px solid rgba(46, 125, 50, 0.12);

  padding: 32px 24px 24px;

  cursor: pointer;

  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  text-align: left;

  display: flex;

  flex-direction: column;

  gap: 16px;

  backdrop-filter: blur(12px);

  box-shadow: 0 4px 20px rgba(46, 125, 50, 0.08);

  position: relative;

  overflow: hidden;

  &:hover {

    transform: translateY(-8px);

    box-shadow: 0 20px 50px rgba(46, 125, 50, 0.2);

    border-color: rgba(76, 175, 80, 0.4);

    .card-glow { opacity: 1; }

    .enter-btn mat-icon { transform: translateX(4px); }

  }

  .card-glow {

    position: absolute;

    inset: 0;

    opacity: 0;

    transition: opacity 0.3s ease;

    pointer-events: none;

    border-radius: 24px;

  }

  .card-icon {

    width: 60px;

    height: 60px;

    border-radius: 18px;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;

    mat-icon {

      font-size: 30px;

      height: 30px;

      width: 30px;

      color: white;

    }

  }

  .card-content {

    flex: 1;

    h3 {

      font-size: 20px;

      font-weight: 800;

      margin-bottom: 10px;

      color: #1a2a1a;

    }

    p {

      font-size: 13.5px;

      line-height: 1.6;

      color: #5a7a5a;

      margin-bottom: 16px;

    }

  }

  .feature-list {

    list-style: none;

    padding: 0;

    margin: 0;

    display: flex;

    flex-direction: column;

    gap: 7px;

    li {

      display: flex;

      align-items: center;

      gap: 8px;

      font-size: 12.5px;

      font-weight: 500;

      color: #4a6a4a;

      mat-icon {

        font-size: 15px;

        height: 15px;

        width: 15px;

        color: #4caf50;

        flex-shrink: 0;

      }

    }

  }

  .card-footer {

    border-top: 1px solid rgba(46, 125, 50, 0.08);

    padding-top: 16px;

    margin-top: 4px;

    .enter-btn {

      display: inline-flex;

      align-items: center;

      gap: 6px;

      font-size: 13px;

      font-weight: 700;

      letter-spacing: 0.01em;

      mat-icon {

        font-size: 16px;

        height: 16px;

        width: 16px;

        transition: transform 0.2s ease;

      }

    }

  }

}

// Card variant colors

.ngo-card {

  .card-glow { background: linear-gradient(135deg, rgba(46,125,50,0.04), transparent); }

  .card-icon { background: linear-gradient(135deg, #4caf50, #2e7d32); }

  .enter-btn { color: #2e7d32; }

}

.volunteer-card {

  .card-glow { background: linear-gradient(135deg, rgba(33,150,243,0.04), transparent); }

  .card-icon { background: linear-gradient(135deg, #42a5f5, #1565c0); }

  .enter-btn { color: #1565c0; }

  &:hover {

    border-color: rgba(33, 150, 243, 0.3);

    box-shadow: 0 20px 50px rgba(33, 150, 243, 0.15);

  }

}

.victim-card {

  .card-glow { background: linear-gradient(135deg, rgba(244,67,54,0.04), transparent); }

  .card-icon { background: linear-gradient(135deg, #ef5350, #c62828); }

  .enter-btn { color: #c62828; }

  &:hover {

    border-color: rgba(244, 67, 54, 0.3);

    box-shadow: 0 20px 50px rgba(244, 67, 54, 0.15);

  }

}

// ─── Footer ───────────────────────────────────────────────

.landing-footer {

  padding: 24px;

  text-align: center;

  position: relative;

  z-index: 1;

  p {

    font-size: 12px;

    color: #8aaa8a;

    font-weight: 400;

  }

}

```

---

## File: src/app/features/auth/register/register.component.html

```html

<div class="auth-wrapper">

  <div class="auth-card">

    <div class="auth-header">

      <div class="auth-icon" [ngClass]="role">

        <mat-icon>how_to_reg</mat-icon>

      </div>

      <h1 class="auth-title">Create Account</h1>

      <p class="auth-sub">Register as <strong>{{ role | titlecase }}</strong></p>

    </div>

    <div class="auth-form">

      <mat-form-field appearance="outline" class="form-field">

        <mat-label>Full Name</mat-label>

        <input matInput [(ngModel)]="displayName" required>

        <mat-icon matSuffix>person</mat-icon>

      </mat-form-field>

      <mat-form-field appearance="outline" class="form-field">

        <mat-label>Email Address</mat-label>

        <input matInput [(ngModel)]="email" type="email" required>

        <mat-icon matSuffix>alternate_email</mat-icon>

      </mat-form-field>

      <mat-form-field appearance="outline" class="form-field">

        <mat-label>Password</mat-label>

        <input matInput [type]="hidePassword ? 'password' : 'text'" [(ngModel)]="password" required>

        <button mat-icon-button matSuffix type="button" (click)="hidePassword = !hidePassword" tabindex="-1">

          <mat-icon>{{ hidePassword ? 'visibility_off' : 'visibility' }}</mat-icon>

        </button>

      </mat-form-field>

      <mat-form-field appearance="outline" class="form-field">

        <mat-label>Confirm Password</mat-label>

        <input matInput type="password" [(ngModel)]="confirmPassword" required>

        <mat-icon matSuffix>lock</mat-icon>

      </mat-form-field>

      <button mat-raised-button class="btn-primary login-btn"

        [disabled]="!email || !password || !displayName || isLoading"

        (click)="onRegister()">

        <mat-spinner *ngIf="isLoading" diameter="18" style="display:inline-block;margin-right:8px;"></mat-spinner>

        <mat-icon *ngIf="!isLoading">person_add</mat-icon>

        {{ isLoading ? 'Creating account...' : 'Create Account' }}

      </button>

    </div>

    <div class="auth-footer">

      <span>Already have an account?</span>

      <a [routerLink]="['/login']" [queryParams]="{role: role}" class="signup-link">Sign in here</a>

    </div>

    <div class="back-home">

      <a routerLink="/" class="back-link">

        <mat-icon>arrow_back</mat-icon> Back to Home

      </a>

    </div>

  </div>

</div>

```

---

## File: src/app/features/auth/register/register.component.ts

```typescript

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({

  selector: 'app-register',

  templateUrl: './register.component.html',

  styleUrls: ['./register.component.scss']

})

export class RegisterComponent implements OnInit {

  email = '';

  password = '';

  confirmPassword = '';

  displayName = '';

  role = 'victim';

  isLoading = false;

  hidePassword = true;

  constructor(

    private route: ActivatedRoute,

    private authService: AuthService,

    private snackBar: MatSnackBar

  ) {}

  ngOnInit() {

    this.role = this.route.snapshot.queryParams['role'] || 'victim';

  }

  async onRegister() {

    if (this.password !== this.confirmPassword) {

      this.snackBar.open('Passwords do not match.', 'OK', { duration: 3000 });

      return;

    }

    if (this.password.length < 6) {

      this.snackBar.open('Password must be at least 6 characters.', 'OK', { duration: 3000 });

      return;

    }

    this.isLoading = true;

    try {

      await this.authService.register(this.email, this.password, this.displayName, this.role);

    } catch (err: any) {

      this.snackBar.open(err.message || 'Registration failed.', 'OK', { duration: 4000 });

    } finally {

      this.isLoading = false;

    }

  }

}

```

---

## File: src/app/features/auth/register/register.component.scss

```scss

// Styles inherited from login component (shared auth-wrapper, auth-card, auth-header styles in global)

.auth-header {

  text-align: center;

  margin-bottom: 32px;

  .auth-icon {

    width: 68px;

    height: 68px;

    border-radius: 20px;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    margin-bottom: 20px;

    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);

    mat-icon {

      font-size: 34px;

      height: 34px;

      width: 34px;

      color: white;

    }

    &.ngo { background: linear-gradient(135deg, #4caf50, #2e7d32); }

    &.volunteer { background: linear-gradient(135deg, #42a5f5, #1565c0); }

    &.victim { background: linear-gradient(135deg, #ef5350, #c62828); }

  }

  .auth-title {

    font-size: 26px;

    font-weight: 800;

    color: #1a2a1a;

    margin-bottom: 6px;

  }

  .auth-sub {

    font-size: 14px;

    color: #8aaa8a;

    strong { color: #2e7d32; font-weight: 700; }

  }

}

.auth-form {

  display: flex;

  flex-direction: column;

  gap: 4px;

  .form-field { width: 100%; }

}

.login-btn {

  height: 52px !important;

  font-size: 15px !important;

  font-weight: 700 !important;

  border-radius: 14px !important;

  margin-top: 8px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

}

.auth-footer {

  text-align: center;

  margin-top: 20px;

  font-size: 13.5px;

  color: #8aaa8a;

  display: flex;

  gap: 6px;

  justify-content: center;

  .signup-link {

    color: #2e7d32;

    font-weight: 700;

    text-decoration: none;

    &:hover { color: #4caf50; text-decoration: underline; }

  }

}

.back-home {

  text-align: center;

  margin-top: 14px;

  .back-link {

    display: inline-flex;

    align-items: center;

    gap: 4px;

    font-size: 12.5px;

    color: #8aaa8a;

    text-decoration: none;

    font-weight: 500;

    mat-icon { font-size: 16px; height: 16px; width: 16px; }

    &:hover { color: #2e7d32; }

  }

}

```

---

## File: src/app/features/auth/login/login.component.ts

```typescript

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.scss']

})

export class LoginComponent implements OnInit {

  email = '';

  password = '';

  role = 'victim';

  isLoading = false;

  hidePassword = true;

  constructor(

    private route: ActivatedRoute,

    private authService: AuthService,

    private snackBar: MatSnackBar

  ) {}

  ngOnInit() {

    this.role = this.route.snapshot.queryParams['role'] || 'victim';

  }

  async onLogin() {

    if (!this.email || !this.password) return;

    this.isLoading = true;

    try {

      await this.authService.login(this.email, this.password, this.role);

    } catch (err: any) {

      this.snackBar.open(err.message || 'Login failed. Please check your credentials.', 'OK', { duration: 4000 });

    } finally {

      this.isLoading = false;

    }

  }

  async forgotPassword() {

    if (!this.email) {

      this.snackBar.open('Please enter your email address first.', 'OK', { duration: 3000 });

      return;

    }

    try {

      await this.authService.resetPassword(this.email);

      this.snackBar.open('Password reset email sent!', 'OK', { duration: 3000 });

    } catch {

      this.snackBar.open('Failed to send reset email.', 'OK', { duration: 3000 });

    }

  }

}

```

---

## File: src/app/features/auth/login/login.component.scss

```scss

.auth-header {

  text-align: center;

  margin-bottom: 36px;

  .auth-icon {

    width: 68px;

    height: 68px;

    border-radius: 20px;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    margin-bottom: 20px;

    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

    mat-icon {

      font-size: 34px;

      height: 34px;

      width: 34px;

      color: white;

    }

    &.ngo { background: linear-gradient(135deg, #4caf50, #2e7d32); }

    &.volunteer { background: linear-gradient(135deg, #42a5f5, #1565c0); }

    &.victim { background: linear-gradient(135deg, #ef5350, #c62828); }

  }

  .auth-title {

    font-size: 26px;

    font-weight: 800;

    color: #1a2a1a;

    margin-bottom: 6px;

  }

  .auth-sub {

    font-size: 14px;

    color: #8aaa8a;

    font-weight: 400;

    strong { color: #2e7d32; font-weight: 700; }

  }

}

.auth-form {

  display: flex;

  flex-direction: column;

  gap: 4px;

  .form-field {

    width: 100%;

    ::ng-deep {

      .mat-mdc-form-field-outline { border-radius: 12px; }

      .mat-mdc-text-field-wrapper { border-radius: 12px; }

      input { font-family: 'Poppins', sans-serif; }

    }

  }

}

.forgot-row {

  text-align: right;

  margin: -8px 0 8px;

  .forgot-btn {

    color: #2e7d32 !important;

    font-size: 12.5px !important;

    font-weight: 600 !important;

    font-family: 'Poppins', sans-serif !important;

    padding: 0 4px !important;

    min-height: 32px !important;

  }

}

.login-btn {

  height: 52px !important;

  font-size: 15px !important;

  font-weight: 700 !important;

  border-radius: 14px !important;

  margin-top: 4px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  mat-icon {

    font-size: 20px !important;

    height: 20px !important;

    width: 20px !important;

  }

}

.auth-footer {

  text-align: center;

  margin-top: 24px;

  font-size: 13.5px;

  color: #8aaa8a;

  display: flex;

  gap: 6px;

  justify-content: center;

  align-items: center;

  .signup-link {

    color: #2e7d32;

    font-weight: 700;

    text-decoration: none;

    transition: color 0.2s;

    &:hover { color: #4caf50; text-decoration: underline; }

  }

}

.back-home {

  text-align: center;

  margin-top: 16px;

  .back-link {

    display: inline-flex;

    align-items: center;

    gap: 4px;

    font-size: 12.5px;

    color: #8aaa8a;

    text-decoration: none;

    font-weight: 500;

    transition: color 0.2s;

    mat-icon {

      font-size: 16px;

      height: 16px;

      width: 16px;

    }

    &:hover { color: #2e7d32; }

  }

}

```

---

## File: src/app/features/auth/login/login.component.html

```html

<div class="auth-wrapper">

  <div class="auth-card">

    <!-- Header -->

    <div class="auth-header">

      <div class="auth-icon" [ngClass]="role">

        <mat-icon>

          {{ role === 'ngo' ? 'account_balance' : role === 'volunteer' ? 'volunteer_activism' : 'emergency' }}

        </mat-icon>

      </div>

      <h1 class="auth-title">Welcome Back</h1>

      <p class="auth-sub">

        Sign in as <strong>{{ role | titlecase }}</strong> to continue

      </p>

    </div>

    <!-- Form -->

    <div class="auth-form">

      <mat-form-field appearance="outline" class="form-field">

        <mat-label>Email Address</mat-label>

        <input matInput [(ngModel)]="email" name="email" type="email" required autocomplete="email">

        <mat-icon matSuffix>alternate_email</mat-icon>

      </mat-form-field>

      <mat-form-field appearance="outline" class="form-field">

        <mat-label>Password</mat-label>

        <input matInput [type]="hidePassword ? 'password' : 'text'"

          [(ngModel)]="password" name="password" required autocomplete="current-password">

        <button mat-icon-button matSuffix (click)="hidePassword = !hidePassword" type="button" tabindex="-1">

          <mat-icon>{{ hidePassword ? 'visibility_off' : 'visibility' }}</mat-icon>

        </button>

      </mat-form-field>

      <div class="forgot-row">

        <button mat-button class="forgot-btn" type="button" (click)="forgotPassword()">

          Forgot Password?

        </button>

      </div>

      <button mat-raised-button class="btn-primary login-btn"

        [disabled]="!email || !password || isLoading" (click)="onLogin()">

        <mat-spinner *ngIf="isLoading" diameter="18" style="display:inline-block;margin-right:8px;"></mat-spinner>

        <mat-icon *ngIf="!isLoading">login</mat-icon>

        {{ isLoading ? 'Signing in...' : 'Sign In' }}

      </button>

    </div>

    <!-- Footer -->

    <div class="auth-footer">

      <span>Don't have an account?</span>

      <a [routerLink]="['/register']" [queryParams]="{role: role}" class="signup-link">Sign up here</a>

    </div>

    <!-- Back to Home -->

    <div class="back-home">

      <a routerLink="/" class="back-link">

        <mat-icon>arrow_back</mat-icon> Back to Home

      </a>

    </div>

  </div>

</div>

```

---

## File: src/app/features/profile/profile/profile.component.html

```html

<div class="app-shell">

  <app-sidebar></app-sidebar>

  <div class="main-panel">

    <app-navbar></app-navbar>

    <div class="page-content">

      <div class="page-heading">

        <div>

          <h1 class="page-title">My <span>Profile</span></h1>

          <p class="page-subtitle">View and manage your account information.</p>

        </div>

      </div>

      <div class="profile-layout">

        <!-- ─── Left Column ─── -->

        <div class="profile-left">

          <!-- Identity Card -->

          <div class="profile-identity-card">

            <div class="profile-avatar-wrap">

              <div class="profile-avatar">

                <img *ngIf="avatarUrl" [src]="avatarUrl" alt="Profile Photo" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">

                <mat-icon *ngIf="!avatarUrl">person</mat-icon>

              </div>

              <input type="file" #photoInput hidden accept="image/*" (change)="onPhotoSelected($event)">

              <button mat-mini-fab class="avatar-edit-btn" matTooltip="Change Photo" (click)="photoInput.click()">

                <mat-icon>camera_alt</mat-icon>

              </button>

            </div>

            <h2 class="profile-name">{{ profileData.displayName || 'User' }}</h2>

            <p class="profile-role-label">

              <mat-icon>badge</mat-icon> {{ roleLabel }}

            </p>

            <div class="profile-meta-pills">

              <span class="meta-pill">

                <mat-icon>location_on</mat-icon> {{ profileData.location || 'Location not set' }}

              </span>

              <span class="meta-pill">

                <mat-icon>alternate_email</mat-icon> {{ profileData.email }}

              </span>

            </div>

            <div class="profile-stats-row">

              <div class="pstat">

                <span class="pstat-val">{{ profileData.reportsCount }}</span>

                <span class="pstat-label">Reports</span>

              </div>

              <div class="pstat-divider"></div>

              <div class="pstat">

                <span class="pstat-val">{{ profileData.missionsCount }}</span>

                <span class="pstat-label">Missions</span>

              </div>

              <div class="pstat-divider"></div>

              <div class="pstat">

                <span class="pstat-val">{{ profileData.impactScore }}</span>

                <span class="pstat-label">Impact</span>

              </div>

            </div>

          </div>

          <!-- Quick Actions Card -->

          <div class="quick-actions-card">

            <h3>Quick Actions</h3>

            <div class="quick-action-list">

              <button class="qa-btn" (click)="togglePasswordForm()">

                <div class="qa-icon-wrap"><mat-icon>lock_reset</mat-icon></div>

                <span>Change Password</span>

                <mat-icon class="qa-arrow" [class.rotated]="showPasswordForm">expand_more</mat-icon>

              </button>

              <!-- Inline Password Form -->

              <div class="inline-panel" *ngIf="showPasswordForm">

                <mat-form-field appearance="outline" class="panel-field">

                  <mat-label>Current Password</mat-label>

                  <input matInput type="password" [(ngModel)]="currentPassword">

                  <mat-icon matSuffix>lock</mat-icon>

                </mat-form-field>

                <mat-form-field appearance="outline" class="panel-field">

                  <mat-label>New Password</mat-label>

                  <input matInput type="password" [(ngModel)]="newPassword">

                  <mat-icon matSuffix>lock_open</mat-icon>

                </mat-form-field>

                <mat-form-field appearance="outline" class="panel-field">

                  <mat-label>Confirm New Password</mat-label>

                  <input matInput type="password" [(ngModel)]="confirmNewPassword">

                  <mat-icon matSuffix>lock_open</mat-icon>

                </mat-form-field>

                <div class="panel-actions">

                  <button mat-button (click)="togglePasswordForm()" [disabled]="isChangingPassword">Cancel</button>

                  <button mat-raised-button class="btn-primary" (click)="changePassword()" [disabled]="isChangingPassword">
                    {{ isChangingPassword ? 'Updating...' : 'Update Password' }}
                  </button>

                </div>

              </div>

              <button class="qa-btn" (click)="toggleNotifPanel()">

                <div class="qa-icon-wrap"><mat-icon>notifications</mat-icon></div>

                <span>Notification Settings</span>

                <mat-icon class="qa-arrow" [class.rotated]="showNotifPanel">expand_more</mat-icon>

              </button>

              <!-- Inline Notification Panel -->

              <div class="inline-panel" *ngIf="showNotifPanel">

                <div class="toggle-row" *ngFor="let key of ['emailAlerts','smsAlerts','incidentUpdates','weeklyReport']">

                  <label class="toggle-label">

                    {{ key === 'emailAlerts' ? 'Email Alerts' : key === 'smsAlerts' ? 'SMS Alerts' : key === 'incidentUpdates' ? 'Incident Updates' : 'Weekly Report' }}

                  </label>

                  <label class="ci-toggle">

                    <input type="checkbox" [(ngModel)]="notifSettings[key]">

                    <span class="slider"></span>

                  </label>

                </div>

                <div class="panel-actions">

                  <button mat-button (click)="toggleNotifPanel()">Cancel</button>

                  <button mat-raised-button class="btn-primary" (click)="saveNotifSettings()">Save Preferences</button>

                </div>

              </div>

              <button class="qa-btn" (click)="togglePrivacyPanel()">

                <div class="qa-icon-wrap"><mat-icon>privacy_tip</mat-icon></div>

                <span>Privacy Settings</span>

                <mat-icon class="qa-arrow" [class.rotated]="showPrivacyPanel">expand_more</mat-icon>

              </button>

              <!-- Inline Privacy Panel -->

              <div class="inline-panel" *ngIf="showPrivacyPanel">

                <div class="toggle-row" *ngFor="let key of ['showLocation','showContact','allowDataSharing']">

                  <label class="toggle-label">

                    {{ key === 'showLocation' ? 'Show Location on Profile' : key === 'showContact' ? 'Show Contact Info' : 'Allow Data Sharing for AI' }}

                  </label>

                  <label class="ci-toggle">

                    <input type="checkbox" [(ngModel)]="privacySettings[key]">

                    <span class="slider"></span>

                  </label>

                </div>

                <div class="panel-actions">

                  <button mat-button (click)="togglePrivacyPanel()">Cancel</button>

                  <button mat-raised-button class="btn-primary" (click)="savePrivacySettings()">Save Privacy</button>

                </div>

              </div>

              <button class="qa-btn danger" (click)="onSignOut()">

                <div class="qa-icon-wrap danger"><mat-icon>logout</mat-icon></div>

                <span>Sign Out</span>

                <mat-icon class="qa-arrow">chevron_right</mat-icon>

              </button>

            </div>

          </div>

        </div>

        <!-- ─── Right Column ─── -->

        <div class="profile-right">

          <!-- Tab Bar -->

          <div class="tab-bar">

            <button class="tab-btn" [class.active]="activeTab==='general'" (click)="activeTab='general'">

              <mat-icon>person</mat-icon> General

            </button>

            <button class="tab-btn" [class.active]="activeTab==='contact'" (click)="activeTab='contact'">

              <mat-icon>contacts</mat-icon> Contact

            </button>

            <button class="tab-btn" [class.active]="activeTab==='activity'" (click)="activeTab='activity'">

              <mat-icon>history</mat-icon> Activity

            </button>

          </div>

          <!-- GENERAL TAB -->

          <div class="tab-content" *ngIf="activeTab==='general'">

            <div class="info-section">

              <h3 class="info-section-title"><mat-icon>info</mat-icon> Personal Information</h3>

              <div class="info-grid">

                <!-- Full Name -->

                <div class="info-field">

                  <label>FULL NAME</label>

                  <div class="field-value" *ngIf="!editing['displayName']">

                    <span>{{ profileData.displayName || '—' }}</span>

                    <button mat-icon-button class="edit-btn" (click)="startEdit('displayName')" matTooltip="Edit">

                      <mat-icon>edit</mat-icon>

                    </button>

                  </div>

                  <div class="field-edit" *ngIf="editing['displayName']">

                    <input class="edit-input" [(ngModel)]="editValues['displayName']" placeholder="Full name">

                    <button mat-icon-button class="save-btn" (click)="saveField('displayName')" matTooltip="Save">

                      <mat-icon>check</mat-icon>

                    </button>

                    <button mat-icon-button class="cancel-btn" (click)="cancelEdit('displayName')" matTooltip="Cancel">

                      <mat-icon>close</mat-icon>

                    </button>

                  </div>

                </div>

                <!-- Email -->

                <div class="info-field">

                  <label>EMAIL ADDRESS</label>

                  <div class="field-value">

                    <span>{{ profileData.email || '—' }}</span>

                  </div>

                </div>

                <!-- Role -->

                <div class="info-field">

                  <label>ROLE</label>

                  <div class="field-value">

                    <span class="role-chip">{{ roleLabel }}</span>

                  </div>

                </div>

                <!-- Gender -->

                <div class="info-field">

                  <label>GENDER</label>

                  <div class="field-value" *ngIf="!editing['gender']">

                    <span>{{ profileData.gender || '—' }}</span>

                    <button mat-icon-button class="edit-btn" (click)="startEdit('gender')" matTooltip="Edit">

                      <mat-icon>edit</mat-icon>

                    </button>

                  </div>

                  <div class="field-edit" *ngIf="editing['gender']">

                    <select class="edit-select" [(ngModel)]="editValues['gender']">

                      <option value="">Select gender</option>

                      <option value="Male">Male</option>

                      <option value="Female">Female</option>

                      <option value="Non-binary">Non-binary</option>

                      <option value="Prefer not to say">Prefer not to say</option>

                    </select>

                    <button mat-icon-button class="save-btn" (click)="saveField('gender')"><mat-icon>check</mat-icon></button>

                    <button mat-icon-button class="cancel-btn" (click)="cancelEdit('gender')"><mat-icon>close</mat-icon></button>

                  </div>

                </div>

                <!-- Nationality -->

                <div class="info-field">

                  <label>NATIONALITY</label>

                  <div class="field-value" *ngIf="!editing['nationality']">

                    <span>{{ profileData.nationality || '—' }}</span>

                    <button mat-icon-button class="edit-btn" (click)="startEdit('nationality')" matTooltip="Edit">

                      <mat-icon>edit</mat-icon>

                    </button>

                  </div>

                  <div class="field-edit" *ngIf="editing['nationality']">

                    <input class="edit-input" [(ngModel)]="editValues['nationality']" placeholder="e.g. Indian">

                    <button mat-icon-button class="save-btn" (click)="saveField('nationality')"><mat-icon>check</mat-icon></button>

                    <button mat-icon-button class="cancel-btn" (click)="cancelEdit('nationality')"><mat-icon>close</mat-icon></button>

                  </div>

                </div>

                <!-- Qualification -->

                <div class="info-field">

                  <label>QUALIFICATION</label>

                  <div class="field-value" *ngIf="!editing['qualification']">

                    <span>{{ profileData.qualification || '—' }}</span>

                    <button mat-icon-button class="edit-btn" (click)="startEdit('qualification')" matTooltip="Edit">

                      <mat-icon>edit</mat-icon>

                    </button>

                  </div>

                  <div class="field-edit" *ngIf="editing['qualification']">

                    <input class="edit-input" [(ngModel)]="editValues['qualification']" placeholder="e.g. B.Tech in Computer Science">

                    <button mat-icon-button class="save-btn" (click)="saveField('qualification')"><mat-icon>check</mat-icon></button>

                    <button mat-icon-button class="cancel-btn" (click)="cancelEdit('qualification')"><mat-icon>close</mat-icon></button>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <!-- CONTACT TAB -->

          <div class="tab-content" *ngIf="activeTab==='contact'">

            <div class="info-section">

              <h3 class="info-section-title"><mat-icon>contacts</mat-icon> Contact Details</h3>

              <div class="info-grid">

                <div class="info-field" *ngFor="let f of [

                  {key:'phone', label:'PHONE NUMBER', placeholder:'+91 98765 43210'},

                  {key:'address', label:'ADDRESS', placeholder:'Street, City, State'},

                  {key:'location', label:'CITY / REGION', placeholder:'e.g. Coimbatore, Tamil Nadu'},

                  {key:'emergencyContact', label:'EMERGENCY CONTACT', placeholder:'Name & phone number'}

                ]">

                  <label>{{ f.label }}</label>

                  <div class="field-value" *ngIf="!editing[f.key]">

                    <span>{{ profileData[f.key] || '—' }}</span>

                    <button mat-icon-button class="edit-btn" (click)="startEdit(f.key)" matTooltip="Edit">

                      <mat-icon>edit</mat-icon>

                    </button>

                  </div>

                  <div class="field-edit" *ngIf="editing[f.key]">

                    <input class="edit-input" [(ngModel)]="editValues[f.key]" [placeholder]="f.placeholder">

                    <button mat-icon-button class="save-btn" (click)="saveField(f.key)"><mat-icon>check</mat-icon></button>

                    <button mat-icon-button class="cancel-btn" (click)="cancelEdit(f.key)"><mat-icon>close</mat-icon></button>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <!-- ACTIVITY TAB -->

          <div class="tab-content" *ngIf="activeTab==='activity'">

            <div class="info-section">

              <h3 class="info-section-title"><mat-icon>history</mat-icon> Recent Activity</h3>

              <div class="activity-list">

                <div class="activity-item" *ngFor="let act of recentActivity">

                  <div class="activity-icon" [ngClass]="act.type">

                    <mat-icon>{{ act.icon }}</mat-icon>

                  </div>

                  <div class="activity-text">

                    <p>{{ act.description }}</p>

                    <span>{{ act.time }}</span>

                  </div>

                </div>

                <div class="empty-state" *ngIf="recentActivity.length === 0">

                  <mat-icon>history</mat-icon>

                  <h3>No recent activity</h3>

                  <p>Your activity will appear here.</p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>

```

---

## File: src/app/features/profile/profile/profile.component.scss

```scss

.page-heading {

  margin-bottom: 28px;

}

// ─── Profile Layout ───────────────────────────────────────

.profile-layout {

  display: grid;

  grid-template-columns: 300px 1fr;

  gap: 24px;

  align-items: start;

  @media (max-width: 1024px) {

    grid-template-columns: 1fr;

  }

}

// ─── Profile Identity Card ────────────────────────────────

.profile-identity-card {

  background: white;

  border-radius: 22px;

  border: 1px solid rgba(46, 125, 50, 0.1);

  box-shadow: 0 4px 20px rgba(46, 125, 50, 0.08);

  padding: 32px 24px;

  text-align: center;

  position: relative;

  overflow: hidden;

  &::before {

    content: '';

    position: absolute;

    top: 0;

    left: 0;

    right: 0;

    height: 90px;

    background: linear-gradient(135deg, #e8f5e9, #c8e6c9);

    border-radius: 22px 22px 60% 60%;

  }

}

.profile-avatar-wrap {

  position: relative;

  display: inline-block;

  margin-bottom: 16px;

  z-index: 1;

  .profile-avatar {

    width: 88px;

    height: 88px;

    border-radius: 24px;

    background: linear-gradient(135deg, #4caf50, #2e7d32);

    display: flex;

    align-items: center;

    justify-content: center;

    border: 4px solid white;

    box-shadow: 0 8px 24px rgba(46, 125, 50, 0.3);

    mat-icon {

      font-size: 44px;

      height: 44px;

      width: 44px;

      color: white;

    }

  }

  .avatar-edit-btn {

    position: absolute;

    bottom: -4px;

    right: -4px;

    width: 32px !important;

    height: 32px !important;

    background: #2e7d32 !important;

    box-shadow: 0 2px 8px rgba(46, 125, 50, 0.4) !important;

    mat-icon {

      font-size: 16px !important;

      height: 16px !important;

      width: 16px !important;

      color: white !important;

    }

  }

}

.profile-name {

  font-size: 20px;

  font-weight: 800;

  color: #1a2a1a;

  margin-bottom: 6px;

}

.profile-role-label {

  display: inline-flex;

  align-items: center;

  gap: 5px;

  font-size: 12.5px;

  font-weight: 600;

  color: #4caf50;

  margin-bottom: 18px;

  mat-icon {

    font-size: 14px;

    height: 14px;

    width: 14px;

  }

}

.profile-meta-pills {

  display: flex;

  flex-direction: column;

  gap: 8px;

  margin-bottom: 24px;

  .meta-pill {

    display: inline-flex;

    align-items: center;

    gap: 6px;

    font-size: 12px;

    font-weight: 500;

    color: #5a7a5a;

    background: rgba(46, 125, 50, 0.06);

    padding: 6px 14px;

    border-radius: 99px;

    mat-icon {

      font-size: 14px;

      height: 14px;

      width: 14px;

      color: #4caf50;

    }

  }

}

.profile-stats-row {

  display: flex;

  align-items: center;

  border-top: 1px solid rgba(46, 125, 50, 0.08);

  padding-top: 20px;

  gap: 4px;

  .pstat {

    flex: 1;

    text-align: center;

    .pstat-val {

      display: block;

      font-size: 22px;

      font-weight: 800;

      color: #2e7d32;

    }

    .pstat-label {

      font-size: 10.5px;

      font-weight: 600;

      text-transform: uppercase;

      letter-spacing: 0.06em;

      color: #8aaa8a;

    }

  }

  .pstat-divider {

    width: 1px;

    height: 36px;

    background: rgba(46, 125, 50, 0.12);

  }

}

// ─── Quick Actions ────────────────────────────────────────

.quick-actions-card {

  background: white;

  border-radius: 20px;

  border: 1px solid rgba(46, 125, 50, 0.08);

  box-shadow: 0 2px 12px rgba(46, 125, 50, 0.06);

  padding: 20px;

  margin-top: 20px;

  h3 {

    font-size: 14px;

    font-weight: 700;

    color: #1a2a1a;

    margin-bottom: 14px;

    padding-left: 4px;

  }

  .quick-action-list {

    display: flex;

    flex-direction: column;

    gap: 4px;

  }

  .qa-btn {

    display: flex;

    align-items: center;

    gap: 12px;

    padding: 12px 14px;

    border-radius: 12px;

    border: none;

    background: none;

    cursor: pointer;

    width: 100%;

    font-family: 'Poppins', sans-serif;

    transition: all 0.2s ease;

    color: #4a6a4a;

    font-size: 13.5px;

    font-weight: 500;

    mat-icon {

      font-size: 18px;

      height: 18px;

      width: 18px;

      color: #5a8a5a;

    }

    .qa-arrow {

      margin-left: auto;

      font-size: 18px;

      height: 18px;

      width: 18px;

      color: #a5c5a5;

    }

    &:hover {

      background: rgba(46, 125, 50, 0.06);

      color: #2e7d32;

      mat-icon {

        color: #2e7d32;

      }

    }

    &.danger {

      color: #c62828;

      mat-icon {

        color: #c62828;

      }

      &:hover {

        background: rgba(198, 40, 40, 0.06);

      }

    }

  }

}

// ─── Right Column ─────────────────────────────────────────

.profile-right {

  background: white;

  border-radius: 22px;

  border: 1px solid rgba(46, 125, 50, 0.08);

  box-shadow: 0 2px 12px rgba(46, 125, 50, 0.06);

  overflow: hidden;

}

// ─── Tab Bar ─────────────────────────────────────────────

.tab-bar {

  display: flex;

  border-bottom: 1px solid rgba(46, 125, 50, 0.1);

  padding: 0 8px;

  background: #fafffe;

  .tab-btn {

    display: flex;

    align-items: center;

    gap: 8px;

    padding: 16px 20px;

    border: none;

    background: none;

    cursor: pointer;

    font-family: 'Poppins', sans-serif;

    font-size: 13.5px;

    font-weight: 600;

    color: #8aaa8a;

    border-bottom: 3px solid transparent;

    transition: all 0.2s ease;

    margin-bottom: -1px;

    mat-icon {

      font-size: 17px;

      height: 17px;

      width: 17px;

    }

    &:hover {

      color: #4caf50;

    }

    &.active {

      color: #2e7d32;

      border-bottom-color: #4caf50;

    }

  }

}

// ─── Tab Content ─────────────────────────────────────────

.tab-content {

  padding: 28px;

}

.info-section {

  .info-section-title {

    display: flex;

    align-items: center;

    gap: 8px;

    font-size: 15px;

    font-weight: 700;

    color: #1a2a1a;

    margin-bottom: 22px;

    padding-bottom: 14px;

    border-bottom: 1px solid rgba(46, 125, 50, 0.08);

    mat-icon {

      font-size: 19px;

      height: 19px;

      width: 19px;

      color: #4caf50;

    }

  }

}

.info-grid {

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 6px;

  @media (max-width: 768px) {

    grid-template-columns: 1fr;

  }

}

.info-field {

  padding: 14px 16px;

  border-radius: 14px;

  background: #f9fffe;

  border: 1px solid rgba(46, 125, 50, 0.06);

  transition: all 0.2s ease;

  &:hover {

    border-color: rgba(46, 125, 50, 0.18);

    background: #f0fdf4;

  }

  label {

    display: block;

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 0.07em;

    text-transform: uppercase;

    color: #8aaa8a;

    margin-bottom: 6px;

  }

  .field-value {

    display: flex;

    align-items: center;

    justify-content: space-between;

    span {

      font-size: 14px;

      font-weight: 600;

      color: #1a2a1a;

    }

    .role-chip {

      font-size: 12px;

      font-weight: 700;

      padding: 4px 12px;

      border-radius: 99px;

      background: rgba(46, 125, 50, 0.1);

      color: #2e7d32;

    }

    .edit-btn {

      width: 28px !important;

      height: 28px !important;

      flex-shrink: 0;

      color: #a5c5a5 !important;

      mat-icon {

        font-size: 15px !important;

        height: 15px !important;

        width: 15px !important;

      }

      &:hover {

        color: #4caf50 !important;

      }

    }

  }

}

// ─── Activity ─────────────────────────────────────────────

.activity-list {

  display: flex;

  flex-direction: column;

  gap: 14px;

}

.activity-item {

  display: flex;

  gap: 14px;

  align-items: flex-start;

  .activity-icon {

    width: 40px;

    height: 40px;

    border-radius: 12px;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;

    mat-icon {

      font-size: 18px;

      height: 18px;

      width: 18px;

      color: white;

    }

    &.report {

      background: linear-gradient(135deg, #ef5350, #c62828);

    }

    &.mission {

      background: linear-gradient(135deg, #42a5f5, #1565c0);

    }

    &.resolved {

      background: linear-gradient(135deg, #66bb6a, #2e7d32);

    }

  }

  .activity-text {

    p {

      font-size: 13.5px;

      font-weight: 600;

      color: #1a2a1a;

      margin: 0 0 3px;

    }

    span {

      font-size: 11.5px;

      color: #8aaa8a;

    }

  }

}

.empty-state {

  text-align: center;

  padding: 48px 24px;

  color: #8aaa8a;

  mat-icon {

    font-size: 48px;

    height: 48px;

    width: 48px;

    color: #a5d6a7;

    margin-bottom: 12px;

  }

  h3 {

    font-size: 15px;

    font-weight: 600;

    color: #5a7a5a;

    margin-bottom: 4px;

  }

  p {

    font-size: 13px;

    margin: 0;

  }

}

/* ─── Inline Edit Fields ─────────────────────────── */

.field-edit {

  display: flex;

  align-items: center;

  gap: 6px;

  .edit-input,

  .edit-select {

    flex: 1;

    padding: 8px 12px;

    border: 1.5px solid #4caf50;

    border-radius: 10px;

    font-family: 'Poppins', sans-serif;

    font-size: 13.5px;

    font-weight: 500;

    color: #1a2a1a;

    background: #f0fdf4;

    outline: none;

    transition: all 0.2s ease;

    &:focus {

      border-color: #2e7d32;

      box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.15);

    }

  }

  .edit-select {

    cursor: pointer;

  }

  .save-btn {

    color: #2e7d32 !important;

    width: 32px !important;

    height: 32px !important;

    background: rgba(46, 125, 50, .1) !important;

    mat-icon {

      font-size: 17px !important;

      height: 17px !important;

      width: 17px !important;

    }

    &:hover {

      background: rgba(46, 125, 50, .2) !important;

    }

  }

  .cancel-btn {

    color: #c62828 !important;

    width: 32px !important;

    height: 32px !important;

    mat-icon {

      font-size: 17px !important;

      height: 17px !important;

      width: 17px !important;

    }

    &:hover {

      background: rgba(198, 40, 40, .08) !important;

    }

  }

}

/* ─── Quick Action Icon Wrap ─────────────────────── */

.qa-btn {

  .qa-icon-wrap {

    width: 32px;

    height: 32px;

    border-radius: 9px;

    background: rgba(46, 125, 50, .08);

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;

    mat-icon {

      font-size: 17px;

      height: 17px;

      width: 17px;

      color: #2e7d32;

    }

    &.danger {

      background: rgba(198, 40, 40, .08);

      mat-icon {

        color: #c62828;

      }

    }

  }

  .qa-arrow {

    transition: transform 0.25s ease;

    &.rotated {

      transform: rotate(180deg);

    }

  }

}

/* ─── Inline Panel (Password / Notifications) ────── */

.inline-panel {

  background: #f4faf4;

  border-radius: 14px;

  padding: 16px;

  border: 1px solid rgba(46, 125, 50, .15);

  margin: -4px 0 4px;

  display: flex;

  flex-direction: column;

  gap: 10px;

  .panel-field {

    width: 100%;

  }

  .panel-actions {

    display: flex;

    gap: 10px;

    justify-content: flex-end;

    margin-top: 4px;

    button {

      font-family: 'Poppins', sans-serif;

      font-size: 13px;

    }

  }

  .toggle-row {

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 8px 4px;

    border-bottom: 1px solid rgba(46, 125, 50, .08);

    &:last-of-type {

      border-bottom: none;

    }

    .toggle-label {

      font-size: 13.5px;

      font-weight: 500;

      color: #1a2a1a;

    }

  }

}

/* ─── Toggle Switch ──────────────────────────────── */

.ci-toggle {

  position: relative;

  display: inline-block;

  width: 44px;

  height: 24px;

  input {

    opacity: 0;

    width: 0;

    height: 0;

  }

  .slider {

    position: absolute;

    cursor: pointer;

    inset: 0;

    background: #ccc;

    border-radius: 24px;

    transition: 0.3s;

    &::before {

      content: '';

      position: absolute;

      width: 18px;

      height: 18px;

      left: 3px;

      bottom: 3px;

      background: white;

      border-radius: 50%;

      transition: 0.3s;

      box-shadow: 0 1px 4px rgba(0, 0, 0, .2);

    }

  }

  input:checked+.slider {

    background: #4caf50;

  }

  input:checked+.slider::before {

    transform: translateX(20px);

  }

}

```

---

## File: src/app/features/profile/profile/profile.component.ts

```typescript

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

import { VolunteerService } from '../../../core/services/volunteer.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({

  selector: 'app-profile',

  templateUrl: './profile.component.html',

  styleUrls: ['./profile.component.scss']

})

export class ProfileComponent implements OnInit {

  activeTab: string = 'general';

  roleLabel: string = 'User';

  // Profile data fields

  profileData: any = {

    displayName: '', email: '', gender: '', nationality: '',

    qualification: '', phone: '', address: '', location: '',

    emergencyContact: '', reportsCount: 0, missionsCount: 0, impactScore: 0

  };

  // Edit state per field

  editing: any = {

    displayName: false, gender: false, qualification: false,

    phone: false, address: false, location: false, emergencyContact: false

  };

  // Temp values while editing

  editValues: any = {};

  // Change password fields
  showPasswordForm = false;
  isChangingPassword = false;
  currentPassword = '';
  newPassword = '';
  confirmNewPassword = '';

  // Notification toggles

  showNotifPanel = false;

  notifSettings: { [key: string]: boolean } = {

    emailAlerts: true,

    smsAlerts: false,

    incidentUpdates: true,

    weeklyReport: false

  };

  // Privacy toggles

  showPrivacyPanel = false;

  privacySettings: { [key: string]: boolean } = {

    showLocation: true,

    showContact: false,

    allowDataSharing: true

  };

  avatarUrl: string | null = null;

  recentActivity: any[] = [];

  constructor(

    private router: Router,

    private authService: AuthService,

    private volunteerService: VolunteerService,

    private snackBar: MatSnackBar

  ) {}

  async ngOnInit() {

    const role = this.authService.getUserRole();

    this.roleLabel = role === 'ngo' ? 'NGO Admin' : role === 'volunteer' ? 'Volunteer' : 'Victim / User';

    const user = this.authService.getCurrentUser();

    

    // Load profile data from Firestore

    const savedProfile = await this.authService.getProfileData();

    this.avatarUrl = localStorage.getItem('userAvatar_' + (user?.email || ''));

    const savedPrivacy = localStorage.getItem('userPrivacy_' + (user?.email || ''));

    if (savedPrivacy) this.privacySettings = JSON.parse(savedPrivacy);

    this.profileData = {

      displayName: user?.displayName || savedProfile.displayName || '',

      email: user?.email || savedProfile.email || '',

      gender: savedProfile.gender || '',

      nationality: savedProfile.nationality || '',

      qualification: savedProfile.qualification || '',

      phone: savedProfile.phone || '',

      address: savedProfile.address || '',

      location: savedProfile.location || '',

      emergencyContact: savedProfile.emergencyContact || '',

      reportsCount: savedProfile.reportsCount || 0,

      missionsCount: savedProfile.missionsCount || 0,

      impactScore: savedProfile.impactScore || 0

    };

    this.recentActivity = [

      { icon: 'login', type: 'report', description: 'Logged into Community Impact', time: 'Just now' },

      { icon: 'account_circle', type: 'mission', description: 'Profile viewed', time: 'Today' },

    ];

  }

  // ── Field Editing ────────────────────────────────────────

  startEdit(field: string) {

    this.editing[field] = true;

    this.editValues[field] = this.profileData[field];

  }

  cancelEdit(field: string) {

    this.editing[field] = false;

    delete this.editValues[field];

  }

  saveField(field: string) {

    this.profileData[field] = this.editValues[field];

    this.editing[field] = false;

    this.authService.updateProfile({ [field]: this.editValues[field] });

    // If volunteer updated their location, sync to volunteer registry

    if (field === 'location' || field === 'displayName') {

      const email = this.profileData.email;

      this.volunteerService.updateVolunteerProfile(email, {

        displayName: this.profileData.displayName,

        location: this.profileData.location

      });

    }

    this.snackBar.open('Profile updated successfully!', 'OK', { duration: 2500 });

  }

  // ── Change Password ───────────────────────────────────────

  togglePasswordForm() {

    this.showPasswordForm = !this.showPasswordForm;

    this.showNotifPanel = false;

    this.showPrivacyPanel = false;

    this.currentPassword = '';

    this.newPassword = '';

    this.confirmNewPassword = '';

  }

  // FIX: changePassword now calls authService.changePassword() which:
  //  1. Fetches the user document from Firestore
  //  2. Verifies currentPassword against the stored bcrypt hash
  //  3. bcrypt-hashes the new password (salt rounds = 10)
  //  4. Writes the new passwordHash to Firestore immediately (real-time)
  async changePassword() {
    if (!this.currentPassword) {
      this.snackBar.open('Please enter your current password.', 'OK', { duration: 3000 });
      return;
    }

    if (!this.newPassword || this.newPassword.length < 6) {
      this.snackBar.open('New password must be at least 6 characters.', 'OK', { duration: 3000 });
      return;
    }

    if (this.newPassword !== this.confirmNewPassword) {
      this.snackBar.open('Passwords do not match.', 'OK', { duration: 3000 });
      return;
    }

    this.isChangingPassword = true;
    try {
      await this.authService.changePassword(this.currentPassword, this.newPassword);
      this.snackBar.open('Password changed successfully!', 'OK', { duration: 3000 });
      this.showPasswordForm = false;
      this.currentPassword = '';
      this.newPassword = '';
      this.confirmNewPassword = '';
    } catch (err: any) {
      this.snackBar.open(err.message || 'Failed to change password. Please try again.', 'OK', { duration: 4000 });
    } finally {
      this.isChangingPassword = false;
    }
  }

  // ── Notification Settings ────────────────────────────────

  toggleNotifPanel() {

    this.showNotifPanel = !this.showNotifPanel;

    this.showPasswordForm = false;

    this.showPrivacyPanel = false;

  }

  saveNotifSettings() {

    localStorage.setItem('ci_notif_settings', JSON.stringify(this.notifSettings));

    this.snackBar.open('Notification preferences saved!', 'OK', { duration: 2500 });

    this.showNotifPanel = false;

  }

  // ── Privacy Settings ─────────────────────────────────────

  togglePrivacyPanel() {

    this.showPrivacyPanel = !this.showPrivacyPanel;

    this.showNotifPanel = false;

    this.showPasswordForm = false;

  }

  savePrivacySettings() {

    const user = this.authService.getCurrentUser();

    localStorage.setItem('userPrivacy_' + (user?.email || ''), JSON.stringify(this.privacySettings));

    this.snackBar.open('Privacy settings updated!', 'OK', { duration: 2500 });

    this.showPrivacyPanel = false;

  }

  // ── Profile Photo ────────────────────────────────────────

  onPhotoSelected(event: any) {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e: any) => {

      this.avatarUrl = e.target.result;

      const user = this.authService.getCurrentUser();

      localStorage.setItem('userAvatar_' + (user?.email || ''), this.avatarUrl!);

      this.snackBar.open('Profile picture updated!', 'OK', { duration: 2500 });

    };

    reader.readAsDataURL(file);

  }

  // ── Sign Out ─────────────────────────────────────────────

  onSignOut() {

    this.authService.logout();

  }

}

```

---

## File: src/app/features/volunteer/missions/volunteer-missions.component.html

```html
<div class="app-shell">
  <app-sidebar></app-sidebar>
  <div class="main-panel">
    <app-navbar></app-navbar>
    <div class="page-content">

      <div class="page-heading">
        <div>
          <h1 class="page-title">My <span>Missions</span></h1>
          <p class="page-subtitle">Navigate to incidents and mark them as served when complete.</p>
        </div>
      </div>

      <!-- Location warning -->
      <div class="location-warning" *ngIf="locationError">
        <mat-icon>location_off</mat-icon>
        <span>{{ locationError }}</span>
      </div>

      <div class="section-card">
        <div class="section-header">
          <div class="section-title-row">
            <mat-icon class="section-icon">assignment</mat-icon>
            <h2>Active Missions</h2>
          </div>
          <span class="badge-count">{{ missions.length }} Active</span>
        </div>

        <div class="missions-list" *ngIf="missions.length > 0; else noMissions">
          <div class="mission-card" *ngFor="let m of missions">
            <div class="mission-urgency-bar" [style.background]="getUrgencyColor(m.urgency)"></div>
            <div class="mission-body">

              <div class="mission-header-row">
                <span class="badge" [style.background]="getUrgencyColor(m.urgency)">{{ m.urgency }}</span>
                <span class="mission-type"><mat-icon>category</mat-icon> {{ m.type }}</span>
                <span class="distance-chip" *ngIf="getDistanceLabel(m)">
                  <mat-icon>near_me</mat-icon> {{ getDistanceLabel(m) }}
                </span>
              </div>

              <h3>{{ m.title }}</h3>
              <p>{{ m.description }}</p>

              <!-- Location info -->
              <div class="location-row" *ngIf="m.locationName">
                <mat-icon>location_on</mat-icon>
                <span>{{ m.locationName }}</span>
              </div>
              <div class="location-row">
                <mat-icon>gps_fixed</mat-icon>
                <span>{{ m.latitude | number:'1.4-4' }}, {{ m.longitude | number:'1.4-4' }}</span>
              </div>

              <!-- Embedded Map Preview -->
              <div class="map-preview">
                <iframe
                  [src]="getMapEmbedUrl(m)"
                  width="100%" height="200"
                  style="border:0;border-radius:12px;"
                  allowfullscreen loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>

              <!-- Action buttons -->
              <div class="mission-footer">
                <button mat-stroked-button class="btn-navigate" (click)="openDirections(m)">
                  <mat-icon>directions</mat-icon> Navigate There
                </button>
                <a mat-stroked-button [href]="getDirectionsUrl(m)" target="_blank" class="btn-outline">
                  <mat-icon>open_in_new</mat-icon> Open in Maps
                </a>
                <button mat-raised-button class="btn-primary" (click)="markServed(m)" [disabled]="isCompleting">
                  <mat-icon>check_circle</mat-icon> Mark Served
                </button>
              </div>
            </div>
          </div>
        </div>

        <ng-template #noMissions>
          <div class="empty-state">
            <mat-icon>check_circle</mat-icon>
            <h3>No Active Missions</h3>
            <p>The NGO admin will assign you to an incident soon.</p>
          </div>
        </ng-template>
      </div>

      <!-- Completed Missions -->
      <div class="section-card completed-section" *ngIf="completedMissions.length > 0">
        <div class="section-header">
          <div class="section-title-row">
            <mat-icon class="section-icon">history</mat-icon>
            <h2>Completed Missions</h2>
          </div>
          <span class="badge-count">{{ completedMissions.length }}</span>
        </div>
        <div class="missions-list">
          <div class="mission-card completed" *ngFor="let m of completedMissions">
            <div class="mission-urgency-bar" style="background:#388e3c"></div>
            <div class="mission-body">
              <h3>{{ m.title }}</h3>
              <p>{{ m.description }}</p>
              <div class="completed-meta">
                <span class="completed-badge"><mat-icon>check_circle</mat-icon> Completed</span>
                <span class="meta-chip" *ngIf="m.completedAt">
                  <mat-icon>schedule</mat-icon> {{ m.completedAt | date:'medium' }}
                </span>
                <span class="rating-chip" *ngIf="m.reviews && m.reviews.length > 0">
                  <mat-icon>star</mat-icon>
                  Rated {{ (m.reviews[0].rating) }}/5 by victim
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

```

---

## File: src/app/features/volunteer/missions/volunteer-missions.component.scss

```scss

.page-heading { margin-bottom: 28px; }

.section-card {

  background: white; border-radius: 20px; padding: 24px;

  border: 1px solid rgba(46,125,50,.08); box-shadow: 0 2px 12px rgba(46,125,50,.06);

}

.completed-section { margin-top: 24px; }

.section-header {

  display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;

}

.section-title-row {

  display: flex; align-items: center; gap: 10px;

  .section-icon { font-size: 22px; height: 22px; width: 22px; color: #2e7d32; }

  h2 { font-size: 18px; font-weight: 700; color: #1a2a1a; margin: 0; }

}

.badge-count {

  font-size: 12px; font-weight: 700; color: #2e7d32;

  background: rgba(46,125,50,.1); padding: 4px 12px; border-radius: 99px;

}

.missions-list { display: flex; flex-direction: column; gap: 14px; }

.mission-card {

  display: flex; border-radius: 16px; overflow: hidden;

  border: 1px solid rgba(46,125,50,.1); background: #f9fffe;

  transition: all .25s ease;

  &:hover { box-shadow: 0 6px 20px rgba(46,125,50,.1); }

  &.completed { opacity: .75; }

  .mission-urgency-bar { width: 5px; flex-shrink: 0; }

  .mission-body {

    flex: 1; padding: 18px;

    .mission-header-row {

      display: flex; align-items: center; gap: 10px; margin-bottom: 10px;

      .mission-type {

        display: flex; align-items: center; gap: 4px;

        font-size: 12px; font-weight: 600; color: #5a7a5a;

        mat-icon { font-size: 14px; height: 14px; width: 14px; color: #4caf50; }

      }

    }

    h3 { font-size: 15px; font-weight: 700; color: #1a2a1a; margin: 0 0 6px; }

    p { font-size: 13px; color: #5a7a5a; margin: 0 0 16px; line-height: 1.5; }

    .mission-footer { display: flex; gap: 10px; align-items: center; }

    .completed-badge {

      display: inline-flex; align-items: center; gap: 5px;

      font-size: 12px; font-weight: 700; color: #2e7d32;

      background: rgba(46,125,50,.1); padding: 4px 12px; border-radius: 99px;

      mat-icon { font-size: 14px; height: 14px; width: 14px; }

    }

  }

}

.empty-state {

  text-align: center; padding: 56px 24px; color: #8aaa8a;

  mat-icon { font-size: 52px; height: 52px; width: 52px; color: #a5d6a7; display: block; margin: 0 auto 14px; }

  h3 { font-size: 16px; font-weight: 700; color: #5a7a5a; margin-bottom: 6px; }

  p { font-size: 13px; margin: 0; }

}

/* ── LOCATION WARNING ───────────────────────────────────── */
.location-warning {
  display: flex; align-items: center; gap: 10px;
  background: rgba(251,192,45,.1); border: 1px solid rgba(251,192,45,.3);
  border-radius: 12px; padding: 12px 16px; margin-bottom: 20px;
  font-size: 13px; color: #795548;
  mat-icon { color: #fbc02d; font-size: 18px; }
}

/* ── DISTANCE CHIP ──────────────────────────────────────── */
.distance-chip {
  display: inline-flex; align-items: center; gap: 4px;
  background: rgba(46,125,50,.08); border-radius: 99px;
  padding: 3px 10px; font-size: 11.5px; font-weight: 600; color: #2e7d32;
  mat-icon { font-size: 13px; height: 13px; width: 13px; }
}

/* ── LOCATION ROW ───────────────────────────────────────── */
.location-row {
  display: flex; align-items: center; gap: 6px;
  font-size: 12px; color: #5a7a5a; margin: 4px 0;
  mat-icon { font-size: 14px; height: 14px; width: 14px; color: #4caf50; }
}

/* ── MAP PREVIEW ────────────────────────────────────────── */
.map-preview {
  margin: 14px 0 10px;
  border-radius: 12px; overflow: hidden;
  border: 1px solid rgba(46,125,50,.12);
  box-shadow: 0 2px 8px rgba(0,0,0,.06);
}

/* ── NAVIGATE BUTTON ────────────────────────────────────── */
.btn-navigate {
  border-color: #4caf50; color: #388e3c; font-weight: 700;
  mat-icon { margin-right: 4px; }
  &:hover { background: rgba(76,175,80,.08); }
}

/* ── COMPLETED META ─────────────────────────────────────── */
.completed-meta {
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-top: 8px;
  .meta-chip {
    display: inline-flex; align-items: center; gap: 4px;
    font-size: 11.5px; color: #5a7a5a; background: rgba(46,125,50,.06);
    padding: 3px 10px; border-radius: 99px;
    mat-icon { font-size: 13px; height: 13px; width: 13px; color: #4caf50; }
  }
  .rating-chip {
    display: inline-flex; align-items: center; gap: 4px;
    font-size: 11.5px; font-weight: 600; color: #f9a825;
    background: rgba(251,192,45,.12); padding: 3px 10px; border-radius: 99px;
    mat-icon { font-size: 13px; height: 13px; width: 13px; color: #fbc02d; }
  }
}

```

---

## File: src/app/features/volunteer/missions/volunteer-missions.component.ts

```typescript
// src/app/features/volunteer/missions/volunteer-missions.component.ts
//
// ROOT CAUSE FIX: The volunteer dashboard showed "0 Active Missions" because:
//   - NGO dashboard stored volunteerId = vol.id  (uid like "uid-1234-abc")
//   - getUserId() returns userEmail from localStorage (e.g. "vol@gmail.com")
//   - The filter i.volunteerId === volId compared uid vs email → NEVER matched
//
// THE FIX (applied in ngo-dashboard + volunteer.service):
//   - assignVolunteer() now passes vol.email as volunteerId
//   - addMissionToHistory() + getVolunteerById() match by email OR id
//   - This component now filters by email (getUserId() = userEmail) correctly
//
// ALSO: Full Google Maps directions integration with live GPS + embedded map preview.

import { Component, OnInit, OnDestroy } from '@angular/core';
import { IncidentService } from '../../../core/services/incident.service';
import { AuthService } from '../../../core/services/auth.service';
import { Incident } from '../../../models/incident.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-volunteer-missions',
  templateUrl: './volunteer-missions.component.html',
  styleUrls: ['./volunteer-missions.component.scss']
})
export class VolunteerMissionsComponent implements OnInit, OnDestroy {
  missions: Incident[] = [];
  completedMissions: Incident[] = [];
  isCompleting = false;

  // Volunteer's own email — used as volunteerId (the unified key after the fix)
  volEmail: string = '';

  // Current GPS position of the volunteer for accurate directions
  myLat: number | null = null;
  myLng: number | null = null;
  locationError: string = '';

  private sub?: Subscription;

  constructor(
    private incidentService: IncidentService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    // getUserId() returns userEmail — this is the volunteerId stored in Firestore
    this.volEmail = this.authService.getUserId();

    // Real-time subscription: updates instantly when NGO assigns this volunteer
    this.sub = this.incidentService.getActiveIncidents().subscribe(all => {
      // Filter by email match (volunteerId is now the volunteer's email)
      this.missions = all.filter(
        i => i.volunteerId === this.volEmail && i.status === 'assigned'
      );
      this.completedMissions = all.filter(
        i => i.volunteerId === this.volEmail && i.status === 'completed'
      );
    });

    // Get volunteer's live GPS for accurate turn-by-turn directions
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          this.myLat = pos.coords.latitude;
          this.myLng = pos.coords.longitude;
        },
        () => {
          this.locationError = 'Location access denied — directions will use your location in Google Maps.';
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    }
  }

  async markServed(incident: Incident) {
    if (!incident.id) return;
    this.isCompleting = true;
    try {
      await this.incidentService.markCompleted(incident.id);
      this.snackBar.open('✅ Mission completed! Great work. The victim has been notified.', 'OK', { duration: 4000 });
    } catch {
      this.snackBar.open('Failed to update. Try again.', 'OK', { duration: 3000 });
    } finally {
      this.isCompleting = false;
    }
  }

  // Open Google Maps with live GPS as origin → incident coords as destination
  openDirections(inc: Incident): void {
    let url: string;
    if (this.myLat && this.myLng) {
      url = `https://www.google.com/maps/dir/${this.myLat},${this.myLng}/${inc.latitude},${inc.longitude}?travelmode=driving`;
    } else {
      url = `https://www.google.com/maps/dir/?api=1&destination=${inc.latitude},${inc.longitude}&travelmode=driving`;
    }
    window.open(url, '_blank');
  }

  // Sanitized embed URL for the map preview iframe
  getMapEmbedUrl(inc: Incident): SafeResourceUrl {
    const url = `https://www.google.com/maps?q=${inc.latitude},${inc.longitude}&z=15&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getDistanceLabel(inc: Incident): string {
    if (this.myLat === null || this.myLng === null) return '';
    const km = IncidentService.haversineKm(this.myLat, this.myLng, inc.latitude, inc.longitude);
    return `${km.toFixed(1)} km away`;
  }

  getDirectionsUrl(inc: Incident): string {
    if (this.myLat && this.myLng) {
      return `https://www.google.com/maps/dir/${this.myLat},${this.myLng}/${inc.latitude},${inc.longitude}?travelmode=driving`;
    }
    return `https://www.google.com/maps/dir/?api=1&destination=${inc.latitude},${inc.longitude}&travelmode=driving`;
  }

  getUrgencyColor(u: string): string {
    const m: any = { Critical: '#d32f2f', High: '#f57c00', Medium: '#fbc02d', Low: '#388e3c' };
    return m[u] || '#388e3c';
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}

```

---

## File: src/app/features/volunteer/dashboard/volunteer-dashboard.component.scss

```scss

.page-heading {

  display: flex;

  align-items: flex-start;

  justify-content: space-between;

  margin-bottom: 28px;

}

// ─── Active Mission Banner ────────────────────────────────

.mission-banner {

  display: flex;

  align-items: center;

  gap: 20px;

  background: linear-gradient(135deg, #fff8f0, #fff3e0);

  border: 1.5px solid #ffcc80;

  border-left: 5px solid #f57c00;

  border-radius: 18px;

  padding: 24px;

  margin-bottom: 28px;

  box-shadow: 0 4px 16px rgba(245, 124, 0, 0.1);

  .mission-icon {

    width: 56px;

    height: 56px;

    border-radius: 16px;

    background: linear-gradient(135deg, #ffa726, #e65100);

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;

    box-shadow: 0 4px 12px rgba(245, 124, 0, 0.3);

    mat-icon {

      font-size: 28px;

      height: 28px;

      width: 28px;

      color: white;

    }

  }

  .mission-info {

    flex: 1;

    h3 {

      font-size: 16px;

      font-weight: 700;

      color: #bf360c;

      margin-bottom: 6px;

    }

    p {

      font-size: 13px;

      color: #6d4c41;

      margin-bottom: 10px;

      line-height: 1.5;

    }

    .mission-meta {

      display: flex;

      align-items: center;

      gap: 10px;

      .mission-type {

        display: inline-flex;

        align-items: center;

        gap: 4px;

        font-size: 12px;

        font-weight: 600;

        color: #8d6e63;

        mat-icon {

          font-size: 14px;

          height: 14px;

          width: 14px;

        }

      }

    }

  }

  .mission-actions {

    display: flex;

    flex-direction: column;

    gap: 10px;

    flex-shrink: 0;

    .directions-btn {

      height: 40px !important;

      font-size: 13px !important;

      border-color: #f57c00 !important;

      color: #e65100 !important;

    }

    .served-btn {

      height: 40px !important;

      font-size: 13px !important;

      display: flex;

      align-items: center;

      gap: 6px;

    }

  }

}

// ─── No Mission Card ──────────────────────────────────────

.no-mission-card {

  display: flex;

  align-items: center;

  gap: 20px;

  background: #f0fdf4;

  border: 1.5px solid rgba(76, 175, 80, 0.25);

  border-radius: 18px;

  padding: 24px;

  margin-bottom: 28px;

  .no-mission-icon {

    width: 56px;

    height: 56px;

    border-radius: 16px;

    background: linear-gradient(135deg, #66bb6a, #2e7d32);

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;

    mat-icon {

      font-size: 28px;

      height: 28px;

      width: 28px;

      color: white;

    }

  }

  h3 {

    font-size: 16px;

    font-weight: 700;

    color: #1b5e20;

    margin-bottom: 4px;

  }

  p {

    font-size: 13px;

    color: #4a6a4a;

    margin: 0;

  }

}

// ─── Dashboard Grid ───────────────────────────────────────

.dashboard-grid {

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 24px;

  @media (max-width: 1024px) {

    grid-template-columns: 1fr;

  }

}

.section-card {

  background: white;

  border-radius: 20px;

  padding: 24px;

  border: 1px solid rgba(46, 125, 50, 0.08);

  box-shadow: 0 2px 12px rgba(46, 125, 50, 0.06);

}

.section-header {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 18px;

}

.section-title-row {

  display: flex;

  align-items: center;

  gap: 10px;

  .section-icon {

    font-size: 22px;

    height: 22px;

    width: 22px;

    color: #2e7d32;

  }

  h2 {

    font-size: 17px;

    font-weight: 700;

    color: #1a2a1a;

    margin: 0;

  }

}

.map-wrapper {

  border-radius: 14px;

  overflow: hidden;

  border: 2px solid rgba(46, 125, 50, 0.1);

}

// Report card removes inner padding since app-report-incident has its own

.report-card {

  padding: 0 !important;

  background: transparent !important;

  border: none !important;

  box-shadow: none !important;

}

```

---

## File: src/app/features/volunteer/dashboard/volunteer-dashboard.component.html

```html

<div class="app-shell">

  <app-sidebar></app-sidebar>

  <div class="main-panel">

    <app-navbar></app-navbar>

    <div class="page-content">

      <!-- Page Title -->

      <div class="page-heading">

        <div>

          <h1 class="page-title">Volunteer <span>Mission Control</span></h1>

          <p class="page-subtitle">Track your assignments and report incidents on the ground.</p>

        </div>

      </div>

      <!-- Active Mission Alert -->

      <div class="mission-banner" *ngIf="assignedIncident">

        <div class="mission-icon">

          <mat-icon>local_fire_department</mat-icon>

        </div>

        <div class="mission-info">

          <h3>Active Mission: {{ assignedIncident.title }}</h3>

          <p>{{ assignedIncident.description }}</p>

          <div class="mission-meta">

            <span class="badge" [style.background-color]="getUrgencyColor(assignedIncident.urgency)">

              {{ assignedIncident.urgency }}

            </span>

            <span class="mission-type">

              <mat-icon>category</mat-icon> {{ assignedIncident.type }}

            </span>

          </div>

        </div>

        <div class="mission-actions">

          <a mat-stroked-button class="btn-outline directions-btn"

            [href]="getDirectionsUrl()" target="_blank">

            <mat-icon>directions</mat-icon> Navigate

          </a>

          <button mat-raised-button class="btn-primary served-btn"

            (click)="markServed()" [disabled]="isCompleting">

            <mat-spinner *ngIf="isCompleting" diameter="18"></mat-spinner>

            <mat-icon *ngIf="!isCompleting">check_circle</mat-icon>

            {{ isCompleting ? 'Completing...' : 'Mark Served' }}

          </button>

        </div>

      </div>

      <!-- No Mission State -->

      <div class="no-mission-card" *ngIf="!assignedIncident">

        <div class="no-mission-icon">

          <mat-icon>check_circle</mat-icon>

        </div>

        <div>

          <h3>No Active Missions</h3>

          <p>Stand by — the NGO admin will assign you to a crisis soon.</p>

        </div>

      </div>

      <!-- Two Column Layout -->

      <div class="dashboard-grid">

        <!-- Map -->

        <div class="section-card map-card">

          <div class="section-header">

            <div class="section-title-row">

              <mat-icon class="section-icon">my_location</mat-icon>

              <h2>Your Current Location</h2>

            </div>

            <span class="live-badge">

              <span class="live-dot"></span> Tracking

            </span>

          </div>

          <div class="map-wrapper">

            <google-map height="360px" width="100%" [center]="currentLocation" [zoom]="14">

              <map-marker [position]="currentLocation" title="You are here"></map-marker>

              <map-marker

                *ngIf="assignedIncident"

                [position]="{lat: assignedIncident.latitude, lng: assignedIncident.longitude}"

                [options]="{ icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' }"

                title="Crisis Location">

              </map-marker>

            </google-map>

          </div>

        </div>

        <!-- Report Incident -->

        <div class="section-card report-card">

          <app-report-incident></app-report-incident>

        </div>

      </div>

    </div>

  </div>

</div>

```

---

## File: src/app/features/volunteer/dashboard/volunteer-dashboard.component.ts

```typescript
// src/app/features/volunteer/dashboard/volunteer-dashboard.component.ts
// FIX: Was using hardcoded 'current-volunteer-id' — now uses authService.getUserId()
// which returns the volunteer's email (the unified volunteerId key).
// Also adds real-time directions from volunteer's live GPS to the incident.

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
  activeMissionCount = 0;
  isCompleting = false;

  myLat: number | null = null;
  myLng: number | null = null;

  private sub?: Subscription;

  constructor(
    private incidentService: IncidentService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.trackLocation();

    // FIX: use real volunteer email as id (no more hardcoded 'current-volunteer-id')
    const volEmail = this.authService.getUserId();

    // Real-time subscription — updates the moment NGO assigns this volunteer
    this.sub = this.incidentService.getActiveIncidents().subscribe(all => {
      const myMissions = all.filter(
        i => i.volunteerId === volEmail && i.status === 'assigned'
      );
      this.activeMissionCount = myMissions.length;
      this.assignedIncident = myMissions.length > 0 ? myMissions[0] : null;
    });
  }

  trackLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(pos => {
        this.currentLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        this.myLat = pos.coords.latitude;
        this.myLng = pos.coords.longitude;
      }, () => {});
    }
  }

  async markServed() {
    if (!this.assignedIncident?.id) return;
    this.isCompleting = true;
    try {
      await this.incidentService.markCompleted(this.assignedIncident.id);
      this.snackBar.open('✅ Mission marked as completed! Victim has been notified.', 'OK', { duration: 3000 });
      this.assignedIncident = null;
    } catch {
      this.snackBar.open('Failed to update status. Please try again.', 'OK', { duration: 3000 });
    } finally {
      this.isCompleting = false;
    }
  }

  // Full directions URL using live GPS as origin
  getDirectionsUrl(): string {
    if (!this.assignedIncident) return '';
    if (this.myLat && this.myLng) {
      return `https://www.google.com/maps/dir/${this.myLat},${this.myLng}/${this.assignedIncident.latitude},${this.assignedIncident.longitude}?travelmode=driving`;
    }
    return `https://www.google.com/maps/dir/?api=1&destination=${this.assignedIncident.latitude},${this.assignedIncident.longitude}&travelmode=driving`;
  }

  getUrgencyColor(urgency: string): string {
    const map: any = { Critical: '#d32f2f', High: '#f57c00', Medium: '#fbc02d', Low: '#388e3c' };
    return map[urgency] || '#388e3c';
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}

```

---

## File: src/app/features/volunteer/report/volunteer-report.component.ts

```typescript

import { Component } from '@angular/core';

@Component({

  selector: 'app-volunteer-report',

  template: `

    <div class="app-shell">

      <app-sidebar></app-sidebar>

      <div class="main-panel">

        <app-navbar></app-navbar>

        <div class="page-content">

          <div class="page-heading">

            <div>

              <h1 class="page-title">Report <span>Incident</span></h1>

              <p class="page-subtitle">Submit an on-ground incident for AI analysis and NGO action.</p>

            </div>

          </div>

          <app-report-incident></app-report-incident>

        </div>

      </div>

    </div>`,

  styles: ['.page-heading { margin-bottom: 28px; }']

})

export class VolunteerReportComponent {}

```

---

## File: src/app/features/ngo/dashboard/ngo-dashboard.component.html

```html

<div class="app-shell">

  <app-sidebar></app-sidebar>

  <div class="main-panel">

    <app-navbar></app-navbar>

    <div class="page-content">

      <div class="page-heading">

        <div>

          <h1 class="page-title">NGO Operations <span>Dashboard</span></h1>

          <p class="page-subtitle">Monitor incidents, manage volunteers, and track crises in real time.</p>

        </div>

        <div class="heading-actions">

          <span class="live-badge"><span class="live-dot"></span> Live Updates</span>

          <span class="vol-summary">

            <mat-icon>people</mat-icon>

            {{ volunteers.length }} Volunteers ({{ availableVolunteers.length }} available)

          </span>

        </div>

      </div>

      <!-- Stats -->

      <div class="stats-grid">

        <div class="stat-card">

          <div class="stat-icon active-icon"><mat-icon>report_problem</mat-icon></div>

          <div class="stat-value">{{ activeCount }}</div>

          <div class="stat-label">Active Crises</div>

          <div class="stat-trend"><mat-icon>trending_up</mat-icon> Real-time</div>

        </div>

        <div class="stat-card">

          <div class="stat-icon assigned-icon"><mat-icon>assignment_turned_in</mat-icon></div>

          <div class="stat-value">{{ assignedCount }}</div>

          <div class="stat-label">Assigned</div>

          <div class="stat-trend"><mat-icon>people</mat-icon> Volunteers</div>

        </div>

        <div class="stat-card">

          <div class="stat-icon critical-icon"><mat-icon>priority_high</mat-icon></div>

          <div class="stat-value critical-val">{{ criticalCount }}</div>

          <div class="stat-label">Critical</div>

          <div class="stat-trend danger"><mat-icon>warning</mat-icon> Urgent</div>

        </div>

        <div class="stat-card">

          <div class="stat-icon resolved-icon"><mat-icon>check_circle</mat-icon></div>

          <div class="stat-value resolved-val">{{ resolvedCount }}</div>

          <div class="stat-label">Resolved</div>

          <div class="stat-trend success"><mat-icon>thumb_up</mat-icon> Today</div>

        </div>

      </div>

      <!-- Live Map -->

      <div class="section-card">

        <div class="section-header">

          <div class="section-title-row">

            <mat-icon class="section-icon">map</mat-icon>

            <h2>Live Incident Map</h2>

          </div>

          <span class="live-badge"><span class="live-dot"></span> Live</span>

        </div>

        <div class="map-wrapper">

          <google-map height="380px" width="100%" [center]="mapCenter" [zoom]="zoom" [options]="mapOptions">

            <map-marker *ngFor="let incident of incidents"

              [position]="{lat: incident.latitude, lng: incident.longitude}"

              [title]="incident.title"

              [options]="getMarkerOptions(incident.urgency)">

            </map-marker>

          </google-map>

        </div>

      </div>

      <!-- Incidents List -->

      <div class="section-card">

        <div class="section-header">

          <div class="section-title-row">

            <mat-icon class="section-icon">list_alt</mat-icon>

            <h2>Recent Incident Reports</h2>

          </div>

          <span class="badge-count">{{ incidents.length }} Reports</span>

        </div>

        <div class="reports-grid" *ngIf="incidents.length > 0; else noIncidents">

          <div class="incident-card" *ngFor="let incident of incidents">

            <div class="card-top-row">

              <span class="badge" [style.background-color]="getUrgencyColor(incident.urgency)">{{ incident.urgency }}</span>

              <span class="incident-type-chip"><mat-icon>category</mat-icon>{{ incident.type }}</span>

              <span class="assigned-to" *ngIf="incident.status === 'assigned' && incident['volunteerName']">

                <mat-icon>person</mat-icon> {{ incident['volunteerName'] }}

              </span>

            </div>

            <h3>{{ incident.title }}</h3>

            <p>{{ incident.description }}</p>

            <div class="card-bottom">

              <div class="card-btn-group">

                <!-- Manual assign: opens volunteer picker -->

                <button mat-raised-button class="btn-primary assign-btn"

                  (click)="openVolunteerPicker(incident)"

                  [disabled]="incident.status === 'assigned' || incident.status === 'completed'">

                  <mat-icon>{{ (incident.status === 'assigned' || incident.status === 'completed') ? 'check_circle' : 'person_add' }}</mat-icon>

                  {{ incident.status === 'assigned' ? 'Assigned' : incident.status === 'completed' ? 'Resolved' : 'Assign Volunteer' }}

                </button>

                <!-- AI Auto-assign -->

                <button mat-stroked-button class="auto-btn"

                  *ngIf="incident.status !== 'assigned' && incident.status !== 'completed'"

                  (click)="autoAssign(incident)"

                  matTooltip="Let AI pick the best volunteer">

                  <mat-icon>auto_fix_high</mat-icon> AI Pick

                </button>

              </div>

            </div>

          </div>

        </div>

        <ng-template #noIncidents>

          <div class="empty-state">

            <mat-icon>verified_user</mat-icon>

            <h3>All Clear!</h3>

            <p>No active incidents at the moment.</p>

          </div>

        </ng-template>

      </div>

    </div>

  </div>

</div>

<!-- ─── Volunteer Picker Modal ─── -->

<div class="modal-overlay" *ngIf="showVolunteerPicker" (click)="closeVolunteerPicker()">

  <div class="assign-modal" (click)="$event.stopPropagation()">

    <div class="modal-header">

      <div>

        <h3>Assign Volunteer</h3>

        <p>Pick a volunteer for: <strong>{{ selectedIncident?.title }}</strong></p>

      </div>

      <button mat-icon-button (click)="closeVolunteerPicker()"><mat-icon>close</mat-icon></button>

    </div>

    <div class="vol-pick-list" *ngIf="availableVolunteers.length > 0; else noVols">

      <div class="vol-pick-item" *ngFor="let vol of availableVolunteers" (click)="pickVolunteer(vol)">

        <div class="pick-avatar"><mat-icon>person</mat-icon></div>

        <div class="pick-info">

          <strong>{{ vol.displayName }}</strong>

          <span>{{ vol.email }}</span>

          <span *ngIf="vol.location"><mat-icon>location_on</mat-icon> {{ vol.location }}</span>

        </div>

        <div class="pick-status available">Available</div>

        <mat-icon class="pick-arrow">chevron_right</mat-icon>

      </div>

    </div>

    <ng-template #noVols>

      <div class="empty-state" style="padding:40px">

        <mat-icon>people_outline</mat-icon>

        <h3>No Available Volunteers</h3>

        <p>All volunteers are currently on missions or none have registered yet.</p>

      </div>

    </ng-template>

  </div>

</div>

```

---

## File: src/app/features/ngo/dashboard/ngo-dashboard.component.ts

```typescript

// src/app/features/ngo/dashboard/ngo-dashboard.component.ts

// AI-assisted volunteer assignment based on location proximity (Haversine distance).

// Volunteers are sorted by distance to the incident location and suggested accordingly.

import { Component, OnInit } from '@angular/core';

import { IncidentService } from '../../../core/services/incident.service';

import { VolunteerService, VolunteerProfile } from '../../../core/services/volunteer.service';

import { GeminiService } from '../../../core/services/gemini.service';

import { Incident } from '../../../models/incident.model';

import { MatSnackBar } from '@angular/material/snack-bar';

interface VolunteerWithDistance extends VolunteerProfile {

  distanceKm?: number;

  isBestMatch?: boolean;

}

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

  suggestedVolunteers: VolunteerWithDistance[] = [];

  isAutoAssigning = false;

  mapCenter: google.maps.LatLngLiteral = { lat: 13.0827, lng: 80.2707 }; // Chennai default

  zoom = 11;

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

  ) { }

  ngOnInit() {

    this.incidentService.getActiveIncidents().subscribe(data => { this.incidents = data; });

    this.volunteerService.getVolunteers().subscribe(vols => { this.volunteers = vols; });

  }

  openVolunteerPicker(incident: Incident) {

    if (incident.status === 'assigned') return;

    this.selectedIncident = incident;

    // Sort available volunteers by distance to incident

    this.suggestedVolunteers = this._rankVolunteersByDistance(incident);

    this.showVolunteerPicker = true;

  }

  closeVolunteerPicker() {

    this.showVolunteerPicker = false;

    this.selectedIncident = null;

    this.suggestedVolunteers = [];

  }

  async pickVolunteer(vol: VolunteerProfile) {

    if (!this.selectedIncident?.id) return;

    try {

      // FIX: use vol.email as volunteerId so it matches getUserId() which
      // returns localStorage('userEmail'). Previously vol.id (uid) was used,
      // causing volunteer dashboard filter to never match and show 0 missions.
      await this.incidentService.assignVolunteer(

        this.selectedIncident.id, vol.email, vol.displayName

      );

      await this.volunteerService.updateVolunteerStatus(vol.id, 'assigned');

      this.snackBar.open(

        `✅ ${vol.displayName} assigned to "${this.selectedIncident.title}"`,

        'OK', { duration: 4000 }

      );

      this.closeVolunteerPicker();

    } catch {

      this.snackBar.open('Assignment failed. Try again.', 'OK', { duration: 3000 });

    }

  }

  // ── AI Auto-Assign: picks closest available volunteer ────

  async autoAssign(incident: Incident) {

    if (!incident.id) return;

    const available = this.volunteers.filter(v => v.status === 'available');

    if (!available.length) {

      this.snackBar.open('No available volunteers at the moment.', 'OK', { duration: 3000 });

      return;

    }

    this.isAutoAssigning = true;

    this.snackBar.open('🤖 AI is finding the nearest volunteer...', '', { duration: 2500 });

    try {

      const ranked = this._rankVolunteersByDistance(incident);

      const bestVol = ranked[0]; // closest

      // FIX: use bestVol.email as volunteerId (same as getUserId() = userEmail)
      await this.incidentService.assignVolunteer(incident.id, bestVol.email, bestVol.displayName);

      await this.volunteerService.updateVolunteerStatus(bestVol.id, 'assigned');

      const distInfo = bestVol.distanceKm != null

        ? ` (${bestVol.distanceKm.toFixed(1)} km away)`

        : '';

      this.snackBar.open(

        `✅ ${bestVol.displayName} auto-assigned${distInfo}!`,

        'OK', { duration: 4000 }

      );

    } catch {

      this.snackBar.open('Auto-assign failed.', 'OK', { duration: 3000 });

    } finally {

      this.isAutoAssigning = false;

    }

  }

  // ── Rank available volunteers by Haversine distance ──────

  private _rankVolunteersByDistance(incident: Incident): VolunteerWithDistance[] {

    const available = this.volunteers.filter(v => v.status === 'available');

    const ranked: VolunteerWithDistance[] = available.map(v => {

      // Parse lat/lng from volunteer's stored location string or default

      const { lat, lng } = this._parseVolunteerLocation(v);

      const distanceKm = lat && lng

        ? IncidentService.haversineKm(incident.latitude, incident.longitude, lat, lng)

        : undefined;

      return { ...v, distanceKm };

    });

    // Sort: volunteers with known distance first (ascending), unknown last

    ranked.sort((a, b) => {

      if (a.distanceKm == null && b.distanceKm == null) return 0;

      if (a.distanceKm == null) return 1;

      if (b.distanceKm == null) return -1;

      return a.distanceKm - b.distanceKm;

    });

    if (ranked.length > 0) ranked[0].isBestMatch = true;

    return ranked;

  }

  // ── Parse volunteer location string to lat/lng ───────────

  // Volunteers can store "lat,lng" or a named location. 

  // Named locations are mapped for Chennai (extend as needed).

  private _parseVolunteerLocation(vol: VolunteerProfile): { lat: number | null, lng: number | null } {

    if (!vol.location) return { lat: null, lng: null };

    // Try "lat,lng" format first

    const parts = vol.location.split(',');

    if (parts.length === 2) {

      const lat = parseFloat(parts[0]);

      const lng = parseFloat(parts[1]);

      if (!isNaN(lat) && !isNaN(lng)) return { lat, lng };

    }

    // Chennai area named locations fallback

    const locationMap: Record<string, { lat: number, lng: number }> = {

      'chennai south': { lat: 12.9279, lng: 80.1270 },

      'anna nagar': { lat: 13.0891, lng: 80.2104 },

      'adyar': { lat: 13.0012, lng: 80.2565 },

      't nagar': { lat: 13.0418, lng: 80.2341 },

      'velachery': { lat: 12.9815, lng: 80.2180 },

      'tambaram': { lat: 12.9229, lng: 80.1275 },

      'porur': { lat: 13.0333, lng: 80.1574 },

      'omr': { lat: 12.8995, lng: 80.2264 },

      'perambur': { lat: 13.1178, lng: 80.2330 },

      'royapettah': { lat: 13.0535, lng: 80.2633 }

    };

    const key = vol.location.trim().toLowerCase();

    return locationMap[key] || { lat: null, lng: null };

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

```

---

## File: src/app/features/ngo/dashboard/ngo-dashboard.component.scss

```scss

.page-heading {

  display: flex;

  align-items: flex-start;

  justify-content: space-between;

  margin-bottom: 28px;

  .heading-actions {

    display: flex;

    align-items: center;

    gap: 12px;

    padding-top: 6px;

  }

}

// ─── Stats Grid ───────────────────────────────────────────

.stats-grid {

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 20px;

  margin-bottom: 28px;

  @media (max-width: 1100px) {

    grid-template-columns: repeat(2, 1fr);

  }

}

.stat-card {

  background: white;

  border-radius: 18px;

  padding: 24px;

  border: 1px solid rgba(46, 125, 50, 0.08);

  box-shadow: 0 2px 12px rgba(46, 125, 50, 0.06);

  transition: all 0.25s ease;

  position: relative;

  overflow: hidden;

  &::after {

    content: '';

    position: absolute;

    top: 0;

    right: 0;

    width: 80px;

    height: 80px;

    border-radius: 0 18px 0 80px;

    opacity: 0.06;

  }

  &:hover {

    transform: translateY(-4px);

    box-shadow: 0 8px 28px rgba(46, 125, 50, 0.13);

  }

  .stat-icon {

    width: 44px;

    height: 44px;

    border-radius: 12px;

    display: flex;

    align-items: center;

    justify-content: center;

    margin-bottom: 16px;

    mat-icon {

      font-size: 22px;

      height: 22px;

      width: 22px;

      color: white;

    }

  }

  .active-icon { background: linear-gradient(135deg, #ff9800, #e65100); }

  .assigned-icon { background: linear-gradient(135deg, #42a5f5, #1565c0); }

  .critical-icon { background: linear-gradient(135deg, #ef5350, #b71c1c); }

  .resolved-icon { background: linear-gradient(135deg, #66bb6a, #2e7d32); }

  .stat-value {

    font-size: 38px;

    font-weight: 800;

    color: #2e7d32;

    line-height: 1;

    margin-bottom: 6px;

  }

  .critical-val { color: #c62828; }

  .resolved-val { color: #2e7d32; }

  .stat-label {

    font-size: 11px;

    font-weight: 700;

    text-transform: uppercase;

    letter-spacing: 0.08em;

    color: #8aaa8a;

    margin-bottom: 12px;

  }

  .stat-trend {

    display: flex;

    align-items: center;

    gap: 4px;

    font-size: 11.5px;

    font-weight: 600;

    color: #8aaa8a;

    mat-icon {

      font-size: 13px;

      height: 13px;

      width: 13px;

    }

    &.danger { color: #f44336; }

    &.success { color: #4caf50; }

  }

}

// ─── Section Card ─────────────────────────────────────────

.section-card {

  background: white;

  border-radius: 20px;

  padding: 24px;

  border: 1px solid rgba(46, 125, 50, 0.08);

  box-shadow: 0 2px 12px rgba(46, 125, 50, 0.06);

  margin-bottom: 24px;

}

.section-header {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 20px;

}

.section-title-row {

  display: flex;

  align-items: center;

  gap: 10px;

  .section-icon {

    font-size: 22px;

    height: 22px;

    width: 22px;

    color: #2e7d32;

  }

  h2 {

    font-size: 18px;

    font-weight: 700;

    color: #1a2a1a;

    margin: 0;

  }

}

.badge-count {

  font-size: 12px;

  font-weight: 700;

  color: #2e7d32;

  background: rgba(46, 125, 50, 0.1);

  padding: 4px 12px;

  border-radius: 99px;

}

// ─── Reports Grid ─────────────────────────────────────────

.reports-grid {

  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));

  gap: 16px;

}

.incident-card {

  background: #fafffe;

  border: 1px solid rgba(46, 125, 50, 0.1);

  border-radius: 16px;

  padding: 20px;

  display: flex;

  flex-direction: column;

  gap: 10px;

  transition: all 0.25s ease;

  &:hover {

    box-shadow: 0 6px 20px rgba(46, 125, 50, 0.1);

    border-color: rgba(46, 125, 50, 0.25);

    transform: translateY(-2px);

  }

  .card-top-row {

    display: flex;

    align-items: center;

    gap: 8px;

    flex-wrap: wrap;

  }

  .incident-type-chip {

    display: inline-flex;

    align-items: center;

    gap: 4px;

    font-size: 11.5px;

    font-weight: 600;

    color: #5a7a5a;

    background: rgba(46, 125, 50, 0.07);

    padding: 3px 10px;

    border-radius: 99px;

    mat-icon {

      font-size: 13px;

      height: 13px;

      width: 13px;

      color: #4caf50;

    }

  }

  h3 {

    font-size: 14.5px;

    font-weight: 700;

    color: #1a2a1a;

    margin: 0;

  }

  p {

    font-size: 13px;

    color: #5a7a5a;

    line-height: 1.5;

    margin: 0;

  }

  .card-bottom {

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding-top: 12px;

    border-top: 1px solid rgba(46, 125, 50, 0.07);

    margin-top: 4px;

    gap: 12px;

    .card-location {

      display: flex;

      align-items: center;

      gap: 4px;

      font-size: 11px;

      color: #8aaa8a;

      font-weight: 500;

      mat-icon {

        font-size: 13px;

        height: 13px;

        width: 13px;

      }

    }

    .assign-btn {

      flex-shrink: 0;

      height: 36px !important;

      font-size: 12px !important;

      padding: 0 14px !important;

      border-radius: 10px !important;

      gap: 4px;

      mat-icon {

        font-size: 16px !important;

        height: 16px !important;

        width: 16px !important;

      }

    }

  }

}

/* ─── Heading extras ─── */

.vol-summary {

  display: inline-flex; align-items: center; gap: 6px;

  font-size: 12.5px; font-weight: 600; color: #5a7a5a;

  background: white; padding: 6px 14px; border-radius: 99px;

  border: 1px solid rgba(46,125,50,.15);

  mat-icon { font-size: 15px; height: 15px; width: 15px; color: #4caf50; }

}

/* ─── Assign buttons ─── */

.card-btn-group { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }

.auto-btn {

  height: 36px !important; font-size: 12px !important; padding: 0 12px !important;

  border-radius: 10px !important; border-color: rgba(46,125,50,.3) !important;

  color: #2e7d32 !important; font-family: 'Poppins', sans-serif !important;

  mat-icon { font-size: 16px !important; height: 16px !important; width: 16px !important; }

}

.assigned-to {

  display: inline-flex; align-items: center; gap: 4px;

  font-size: 11px; font-weight: 600; color: #1565c0;

  background: rgba(33,150,243,.1); padding: 3px 10px; border-radius: 99px;

  mat-icon { font-size: 13px; height: 13px; width: 13px; }

}

/* ─── Volunteer Picker Modal ─── */

.modal-overlay {

  position: fixed; inset: 0; background: rgba(0,0,0,.45);

  display: flex; align-items: center; justify-content: center;

  z-index: 1000; backdrop-filter: blur(4px);

}

.assign-modal {

  background: white; border-radius: 22px; width: 480px; max-width: 95vw;

  max-height: 80vh; overflow-y: auto;

  box-shadow: 0 20px 60px rgba(0,0,0,.25);

}

.modal-header {

  display: flex; align-items: flex-start; justify-content: space-between;

  padding: 24px 24px 16px; border-bottom: 1px solid rgba(46,125,50,.1);

  h3 { font-size: 17px; font-weight: 700; color: #1a2a1a; margin: 0 0 4px; }

  p { font-size: 13px; color: #8aaa8a; margin: 0; strong { color: #2e7d32; } }

}

.vol-pick-list { padding: 12px; display: flex; flex-direction: column; gap: 8px; }

.vol-pick-item {

  display: flex; align-items: center; gap: 12px; padding: 14px;

  border-radius: 14px; cursor: pointer; transition: all .2s ease;

  border: 1px solid rgba(46,125,50,.08);

  &:hover { background: #f0fdf4; border-color: rgba(46,125,50,.25); box-shadow: 0 4px 12px rgba(46,125,50,.1); }

  .pick-avatar {

    width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;

    background: linear-gradient(135deg,#4caf50,#2e7d32);

    display: flex; align-items: center; justify-content: center;

    mat-icon { font-size: 22px; height: 22px; width: 22px; color: white; }

  }

  .pick-info {

    flex: 1; display: flex; flex-direction: column; gap: 2px;

    strong { font-size: 14px; font-weight: 700; color: #1a2a1a; }

    span { font-size: 12px; color: #8aaa8a; display: flex; align-items: center; gap: 3px;

      mat-icon { font-size: 12px; height: 12px; width: 12px; color: #4caf50; }

    }

  }

  .pick-status { font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 99px;

    &.available { background: rgba(76,175,80,.12); color: #2e7d32; }

  }

  .pick-arrow { color: #a5c5a5; }

}

.empty-state {

  text-align: center; color: #8aaa8a;

  mat-icon { font-size: 48px; height: 48px; width: 48px; color: #a5d6a7; display: block; margin: 0 auto 12px; }

  h3 { font-size: 15px; font-weight: 600; color: #5a7a5a; margin-bottom: 4px; }

  p { font-size: 13px; margin: 0; }

}

```

---

## File: src/app/features/ngo/map/ngo-map.component.ts

```typescript

import { Component, OnInit } from '@angular/core';

import { IncidentService } from '../../../core/services/incident.service';

import { Incident } from '../../../models/incident.model';

@Component({

  selector: 'app-ngo-map',

  template: `

    <div class="app-shell">

      <app-sidebar></app-sidebar>

      <div class="main-panel">

        <app-navbar></app-navbar>

        <div class="page-content">

          <div style="margin-bottom:28px">

            <h1 class="page-title">Live <span>Incident Map</span></h1>

            <p class="page-subtitle">Real-time geographic view of all active incidents.</p>

          </div>

          <div style="background:white;border-radius:20px;padding:24px;border:1px solid rgba(46,125,50,.08);box-shadow:0 2px 12px rgba(46,125,50,.06)">

            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px">

              <h2 style="font-size:18px;font-weight:700;color:#1a2a1a;margin:0">Full Screen Map</h2>

              <span class="live-badge"><span class="live-dot"></span> Live</span>

            </div>

            <div style="border-radius:16px;overflow:hidden;border:2px solid rgba(46,125,50,.1)">

              <google-map height="600px" width="100%" [center]="mapCenter" [zoom]="zoom" [options]="mapOptions">

                <map-marker *ngFor="let inc of incidents"

                  [position]="{lat: inc.latitude, lng: inc.longitude}"

                  [title]="inc.title"

                  [options]="getMarkerOptions(inc.urgency)">

                </map-marker>

              </google-map>

            </div>

          </div>

        </div>

      </div>

    </div>`,

  styles: []

})

export class NgoMapComponent implements OnInit {

  incidents: Incident[] = [];

  mapCenter: google.maps.LatLngLiteral = { lat: 20.5937, lng: 78.9629 };

  zoom = 5;

  mapOptions: google.maps.MapOptions = { styles: [{ featureType: 'poi', stylers: [{ visibility: 'off' }] }] };

  constructor(private incidentService: IncidentService) {}

  ngOnInit() { this.incidentService.getActiveIncidents().subscribe(d => { this.incidents = d; }); }

  getMarkerOptions(u: string): google.maps.MarkerOptions {

    const c = u === 'Critical' ? 'red' : u === 'High' ? 'orange' : 'yellow';

    return { icon: `http://maps.google.com/mapfiles/ms/icons/${c}-dot.png` };

  }

}

```

---

## File: src/app/features/ngo/volunteers/ngo-volunteers.component.ts

```typescript
// src/app/features/ngo/volunteers/ngo-volunteers.component.ts
//
// BUG FIX: confirmAssign() was passing this.selectedVol.id (uid) as volunteerId
// to assignVolunteer(). The volunteer missions page filters incidents by
// this.authService.getUserId() which returns the volunteer's email from
// localStorage. Since vol.id (uid) ≠ email, the filter never matched and the
// volunteer saw 0 active missions even after being assigned.
//
// THE FIX: Pass vol.email as volunteerId (consistent with ngo-dashboard which
// already does this correctly). The entire app now uses email as the unified
// volunteerId key everywhere.

import { Component, OnInit } from '@angular/core';
import { VolunteerService, VolunteerProfile } from '../../../core/services/volunteer.service';
import { IncidentService } from '../../../core/services/incident.service';
import { Incident, AssignmentHistory } from '../../../models/incident.model';
import { MatSnackBar } from '@angular/material/snack-bar';

interface VolunteerWithDistance extends VolunteerProfile {
  distanceKm?: number;
  isBestMatch?: boolean;
}

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
  showHistoryModal = false;
  historyVol: VolunteerProfile | null = null;
  suggestedIncidents: (Incident & { distanceKm?: number })[] = [];

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
  ) { }

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
    // Sort incidents by distance to this volunteer
    this.suggestedIncidents = this._rankIncidentsByDistance(vol);
    this.showAssignModal = true;
  }

  closeModal() {
    this.showAssignModal = false;
    this.selectedVol = null;
    this.suggestedIncidents = [];
  }

  openHistoryModal(vol: VolunteerProfile) {
    this.historyVol = vol;
    this.showHistoryModal = true;
  }

  closeHistoryModal() {
    this.showHistoryModal = false;
    this.historyVol = null;
  }

  async confirmAssign(incident: Incident) {
    if (!this.selectedVol || !incident.id) return;

    try {
      // FIX: use vol.email as volunteerId — this is the unified key that matches
      // getUserId() (= localStorage userEmail) used by the volunteer missions page.
      // Previously vol.id (a uid like "vol-1234") was passed here, which NEVER
      // matched the volunteer's email during filtering → missions never appeared.
      await this.incidentService.assignVolunteer(
        incident.id, this.selectedVol.email, this.selectedVol.displayName
      );

      // updateVolunteerStatus still uses vol.id (the Firestore doc lookup key)
      await this.volunteerService.updateVolunteerStatus(this.selectedVol.id, 'assigned');

      this.snackBar.open(
        `✅ ${this.selectedVol.displayName} assigned to "${incident.title}"`,
        'OK', { duration: 4000 }
      );

      this.closeModal();
    } catch {
      this.snackBar.open('Assignment failed. Try again.', 'OK', { duration: 3000 });
    }
  }

  // ── Sort incidents by proximity to volunteer ─────────────
  private _rankIncidentsByDistance(vol: VolunteerProfile): (Incident & { distanceKm?: number })[] {
    const { lat: vLat, lng: vLng } = this._parseVolunteerLocation(vol);

    return this.pendingIncidents
      .map(inc => {
        const distanceKm = vLat && vLng
          ? IncidentService.haversineKm(vLat, vLng, inc.latitude, inc.longitude)
          : undefined;
        return { ...inc, distanceKm };
      })
      .sort((a, b) => {
        if (a.distanceKm == null && b.distanceKm == null) return 0;
        if (a.distanceKm == null) return 1;
        if (b.distanceKm == null) return -1;
        return a.distanceKm - b.distanceKm;
      });
  }

  private _parseVolunteerLocation(vol: VolunteerProfile): { lat: number | null, lng: number | null } {
    if (!vol.location) return { lat: null, lng: null };

    const parts = vol.location.split(',');
    if (parts.length === 2) {
      const lat = parseFloat(parts[0]);
      const lng = parseFloat(parts[1]);
      if (!isNaN(lat) && !isNaN(lng)) return { lat, lng };
    }

    const locationMap: Record<string, { lat: number, lng: number }> = {
      'chennai south': { lat: 12.9279, lng: 80.1270 },
      'anna nagar': { lat: 13.0891, lng: 80.2104 },
      'adyar': { lat: 13.0012, lng: 80.2565 },
      't nagar': { lat: 13.0418, lng: 80.2341 },
      'velachery': { lat: 12.9815, lng: 80.2180 },
      'tambaram': { lat: 12.9229, lng: 80.1275 },
      'porur': { lat: 13.0333, lng: 80.1574 },
      'omr': { lat: 12.8995, lng: 80.2264 },
    };

    return locationMap[vol.location.trim().toLowerCase()] || { lat: null, lng: null };
  }

  getUrgencyColor(urgency: string): string {
    const map: any = { Critical: '#d32f2f', High: '#f57c00', Medium: '#fbc02d', Low: '#388e3c' };
    return map[urgency] || '#388e3c';
  }
}
```

---

## File: src/app/features/ngo/volunteers/ngo-volunteers.component.html

```html

<div class="app-shell">

  <app-sidebar></app-sidebar>

  <div class="main-panel">

    <app-navbar></app-navbar>

    <div class="page-content">

      <div class="page-heading">

        <div>

          <h1 class="page-title">Volunteer <span>Registry</span></h1>

          <p class="page-subtitle">View all registered volunteers and manage assignments.</p>

        </div>

        <div class="heading-stat">

          <span class="live-badge"><span class="live-dot"></span> {{ volunteers.length }} Registered</span>

        </div>

      </div>

      <!-- Summary Cards -->

      <div class="vol-stats">

        <div class="vstat-card">

          <div class="vstat-icon avail"><mat-icon>check_circle</mat-icon></div>

          <div>

            <div class="vstat-val">{{ availableCount }}</div>

            <div class="vstat-lbl">Available</div>

          </div>

        </div>

        <div class="vstat-card">

          <div class="vstat-icon assign"><mat-icon>assignment_turned_in</mat-icon></div>

          <div>

            <div class="vstat-val">{{ assignedCount }}</div>

            <div class="vstat-lbl">On Mission</div>

          </div>

        </div>

        <div class="vstat-card">

          <div class="vstat-icon total"><mat-icon>people</mat-icon></div>

          <div>

            <div class="vstat-val">{{ volunteers.length }}</div>

            <div class="vstat-lbl">Total</div>

          </div>

        </div>

      </div>

      <!-- Volunteers Grid -->

      <div class="section-card" *ngIf="volunteers.length > 0; else noVols">

        <div class="section-header">

          <div class="section-title-row">

            <mat-icon class="section-icon">people</mat-icon>

            <h2>All Volunteers</h2>

          </div>

          <!-- Search -->

          <mat-form-field appearance="outline" class="search-field">

            <mat-label>Search volunteers</mat-label>

            <input matInput [(ngModel)]="searchQuery" placeholder="Name or email...">

            <mat-icon matSuffix>search</mat-icon>

          </mat-form-field>

        </div>

        <div class="volunteers-grid">

          <div class="vol-card" *ngFor="let vol of filteredVolunteers">

            <div class="vol-avatar">

              <mat-icon>person</mat-icon>

            </div>

            <div class="vol-info">

              <h3>{{ vol.displayName }}</h3>

              <p class="vol-email">{{ vol.email }}</p>

              <p class="vol-location" *ngIf="vol.location">

                <mat-icon>location_on</mat-icon> {{ vol.location }}

              </p>

              <span class="vol-since">

                <mat-icon>calendar_today</mat-icon>

                Joined {{ vol.registeredAt | date:'mediumDate' }}

              </span>

            </div>

            <div class="vol-actions">

              <span class="status-chip" [ngClass]="vol.status">

                {{ vol.status | titlecase }}

              </span>

              <button mat-raised-button class="btn-primary assign-vol-btn"

                [disabled]="vol.status === 'assigned'"

                (click)="openAssignModal(vol)">

                <mat-icon>{{ vol.status === 'assigned' ? 'check_circle' : 'assignment' }}</mat-icon>

                {{ vol.status === 'assigned' ? 'On Mission' : 'Assign to Incident' }}

              </button>

            </div>

          </div>

        </div>

      </div>

      <ng-template #noVols>

        <div class="section-card">

          <div class="empty-state">

            <mat-icon>people_outline</mat-icon>

            <h3>No Volunteers Yet</h3>

            <p>Volunteers will appear here once they register on the platform.</p>

          </div>

        </div>

      </ng-template>

      <!-- Assign Modal Overlay -->

      <div class="modal-overlay" *ngIf="showAssignModal" (click)="closeModal()">

        <div class="assign-modal" (click)="$event.stopPropagation()">

          <div class="modal-header">

            <h3>Assign <strong>{{ selectedVol?.displayName }}</strong> to an Incident</h3>

            <button mat-icon-button (click)="closeModal()"><mat-icon>close</mat-icon></button>

          </div>

          <div class="incident-pick-list" *ngIf="pendingIncidents.length > 0; else noIncidents">

            <div class="incident-pick-item" *ngFor="let inc of pendingIncidents"

              (click)="confirmAssign(inc)">

              <span class="badge" [style.background]="getUrgencyColor(inc.urgency)">{{ inc.urgency }}</span>

              <div class="pick-text">

                <p>{{ inc.title }}</p>

                <span>{{ inc.type }} · {{ inc.timestamp | date:'short' }}</span>

              </div>

              <mat-icon class="pick-arrow">chevron_right</mat-icon>

            </div>

          </div>

          <ng-template #noIncidents>

            <div class="empty-state" style="padding:32px">

              <mat-icon>verified_user</mat-icon>

              <h3>No pending incidents</h3>

              <p>All incidents are currently assigned or resolved.</p>

            </div>

          </ng-template>

        </div>

      </div>

    </div>

  </div>

</div>

```

---

## File: src/app/features/ngo/volunteers/ngo-volunteers.component.scss

```scss

.page-heading { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 28px; }

.heading-stat { padding-top: 6px; }

.vol-stats {

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 18px;

  margin-bottom: 24px;

}

.vstat-card {

  background: white;

  border-radius: 16px;

  padding: 20px 24px;

  border: 1px solid rgba(46,125,50,.08);

  box-shadow: 0 2px 10px rgba(46,125,50,.05);

  display: flex;

  align-items: center;

  gap: 16px;

  .vstat-icon {

    width: 48px; height: 48px; border-radius: 14px;

    display: flex; align-items: center; justify-content: center;

    mat-icon { font-size: 24px; height: 24px; width: 24px; color: white; }

    &.avail { background: linear-gradient(135deg,#66bb6a,#2e7d32); }

    &.assign { background: linear-gradient(135deg,#42a5f5,#1565c0); }

    &.total { background: linear-gradient(135deg,#ab47bc,#6a1b9a); }

  }

  .vstat-val { font-size: 28px; font-weight: 800; color: #1a2a1a; line-height: 1; }

  .vstat-lbl { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .07em; color: #8aaa8a; margin-top: 2px; }

}

.section-card {

  background: white; border-radius: 20px; padding: 24px;

  border: 1px solid rgba(46,125,50,.08); box-shadow: 0 2px 12px rgba(46,125,50,.06);

}

.section-header {

  display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;

  flex-wrap: wrap; gap: 12px;

}

.section-title-row {

  display: flex; align-items: center; gap: 10px;

  .section-icon { font-size: 22px; height: 22px; width: 22px; color: #2e7d32; }

  h2 { font-size: 18px; font-weight: 700; color: #1a2a1a; margin: 0; }

}

.search-field { width: 260px; ::ng-deep .mat-mdc-form-field-wrapper { margin: 0; padding: 0; } }

.volunteers-grid {

  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));

  gap: 16px;

}

.vol-card {

  background: #f9fffe;

  border: 1px solid rgba(46,125,50,.1);

  border-radius: 16px;

  padding: 20px;

  display: flex;

  align-items: flex-start;

  gap: 14px;

  transition: all .25s ease;

  &:hover { box-shadow: 0 6px 20px rgba(46,125,50,.1); border-color: rgba(46,125,50,.25); }

  .vol-avatar {

    width: 50px; height: 50px; border-radius: 14px; flex-shrink: 0;

    background: linear-gradient(135deg,#4caf50,#2e7d32);

    display: flex; align-items: center; justify-content: center;

    mat-icon { font-size: 26px; height: 26px; width: 26px; color: white; }

  }

  .vol-info {

    flex: 1;

    h3 { font-size: 15px; font-weight: 700; color: #1a2a1a; margin: 0 0 3px; }

    .vol-email { font-size: 12px; color: #8aaa8a; margin: 0 0 6px; }

    .vol-location, .vol-since {

      display: flex; align-items: center; gap: 4px;

      font-size: 11.5px; color: #5a7a5a; font-weight: 500; margin: 2px 0;

      mat-icon { font-size: 13px; height: 13px; width: 13px; color: #4caf50; }

    }

  }

  .vol-actions {

    display: flex; flex-direction: column; align-items: flex-end; gap: 8px; flex-shrink: 0;

    .status-chip {

      font-size: 10px; font-weight: 700; padding: 3px 10px; border-radius: 99px;

      text-transform: uppercase; letter-spacing: .05em;

      &.available { background: rgba(76,175,80,.15); color: #2e7d32; }

      &.assigned { background: rgba(245,124,0,.15); color: #e65100; }

      &.offline { background: rgba(158,158,158,.15); color: #616161; }

    }

    .assign-vol-btn {

      height: 34px !important; font-size: 11.5px !important;

      padding: 0 12px !important; border-radius: 10px !important;

      white-space: nowrap;

      mat-icon { font-size: 15px !important; height: 15px !important; width: 15px !important; margin-right: 4px; }

    }

  }

}

// Modal

.modal-overlay {

  position: fixed; inset: 0; background: rgba(0,0,0,.45);

  display: flex; align-items: center; justify-content: center;

  z-index: 1000; backdrop-filter: blur(4px);

}

.assign-modal {

  background: white; border-radius: 22px; width: 520px; max-width: 95vw;

  max-height: 80vh; overflow-y: auto;

  box-shadow: 0 20px 60px rgba(0,0,0,.25);

}

.modal-header {

  display: flex; align-items: center; justify-content: space-between;

  padding: 24px 24px 16px;

  border-bottom: 1px solid rgba(46,125,50,.1);

  h3 { font-size: 16px; font-weight: 600; color: #1a2a1a; margin: 0; strong { color: #2e7d32; } }

}

.incident-pick-list { padding: 12px; }

.incident-pick-item {

  display: flex; align-items: center; gap: 12px; padding: 14px;

  border-radius: 14px; cursor: pointer; transition: all .2s ease;

  &:hover { background: #f0fdf4; }

  .pick-text {

    flex: 1;

    p { font-size: 14px; font-weight: 600; color: #1a2a1a; margin: 0 0 3px; }

    span { font-size: 12px; color: #8aaa8a; }

  }

  .pick-arrow { color: #a5c5a5; }

}

.empty-state {

  text-align: center; padding: 48px 24px; color: #8aaa8a;

  mat-icon { font-size: 48px; height: 48px; width: 48px; color: #a5d6a7; display: block; margin: 0 auto 12px; }

  h3 { font-size: 15px; font-weight: 600; color: #5a7a5a; margin-bottom: 4px; }

  p { font-size: 13px; margin: 0; }

}

```

---

## File: src/app/features/ngo/incidents/ngo-incidents.component.ts

```typescript

import { Component, OnInit } from '@angular/core';

import { IncidentService } from '../../../core/services/incident.service';

import { Incident } from '../../../models/incident.model';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({

  selector: 'app-ngo-incidents',

  templateUrl: './ngo-incidents.component.html',

  styleUrls: ['./ngo-incidents.component.scss']

})

export class NgoIncidentsComponent implements OnInit {

  incidents: Incident[] = [];

  filter: string = 'all';

  get filtered(): Incident[] {

    if (this.filter === 'all') return this.incidents;

    return this.incidents.filter(i => i.status === this.filter);

  }

  constructor(private incidentService: IncidentService, private snackBar: MatSnackBar) {}

  ngOnInit() {

    this.incidentService.getActiveIncidents().subscribe(data => { this.incidents = data; });

  }

  async markCompleted(id: string) {

    await this.incidentService.markCompleted(id);

    this.snackBar.open('Incident resolved.', 'OK', { duration: 3000 });

  }

  getUrgencyColor(u: string): string {

    const m: any = { Critical: '#d32f2f', High: '#f57c00', Medium: '#fbc02d', Low: '#388e3c' };

    return m[u] || '#388e3c';

  }

}

```

---

## File: src/app/features/ngo/incidents/ngo-incidents.component.scss

```scss

.page-heading { display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:24px; }

.badge-count { font-size:13px; font-weight:700; color:#2e7d32; background:rgba(46,125,50,.1); padding:6px 16px; border-radius:99px; margin-top:6px; }

.filter-bar { display:flex; gap:8px; margin-bottom:20px; flex-wrap:wrap;

  button { padding:8px 18px; border-radius:99px; border:1.5px solid rgba(46,125,50,.25); background:white; font-family:'Poppins',sans-serif; font-size:13px; font-weight:600; color:#5a7a5a; cursor:pointer; transition:all .2s;

    &:hover { border-color:#4caf50; color:#2e7d32; }

    &.active { background:linear-gradient(135deg,#4caf50,#2e7d32); color:white; border-color:transparent; box-shadow:0 4px 12px rgba(46,125,50,.25); }

  }

}

.section-card { background:white; border-radius:20px; padding:24px; border:1px solid rgba(46,125,50,.08); box-shadow:0 2px 12px rgba(46,125,50,.06); }

.incidents-list { display:flex; flex-direction:column; gap:12px; }

.inc-row { display:flex; align-items:flex-start; gap:14px; padding:16px; background:#f9fffe; border-radius:14px; border:1px solid rgba(46,125,50,.08); transition:all .2s;

  &:hover { box-shadow:0 4px 14px rgba(46,125,50,.1); }

  .inc-urgency-dot { width:10px; height:10px; border-radius:50%; flex-shrink:0; margin-top:6px; }

  .inc-body { flex:1;

    .inc-top { display:flex; align-items:center; gap:10px; margin-bottom:8px; flex-wrap:wrap;

      .inc-type, .inc-time { display:flex; align-items:center; gap:4px; font-size:11.5px; font-weight:600; color:#5a7a5a;

        mat-icon { font-size:13px; height:13px; width:13px; color:#4caf50; }

      }

    }

    h3 { font-size:14.5px; font-weight:700; color:#1a2a1a; margin:0 0 4px; }

    p { font-size:13px; color:#5a7a5a; margin:0; line-height:1.5; }

  }

  .inc-status { display:flex; flex-direction:column; align-items:flex-end; gap:8px; flex-shrink:0;

    .status-badge { font-size:11px; font-weight:700; padding:3px 10px; border-radius:99px; text-transform:capitalize;

      &.pending { background:rgba(244,67,54,.12); color:#c62828; }

      &.active { background:rgba(255,152,0,.12); color:#e65100; }

      &.assigned { background:rgba(33,150,243,.12); color:#1565c0; }

      &.completed { background:rgba(76,175,80,.12); color:#2e7d32; }

    }

    .resolve-btn { height:32px !important; font-size:12px !important; border-color:rgba(46,125,50,.3) !important; color:#2e7d32 !important;

      mat-icon { font-size:14px !important; height:14px !important; width:14px !important; }

    }

  }

}

.empty-state { text-align:center; padding:56px 24px; color:#8aaa8a;

  mat-icon { font-size:52px; height:52px; width:52px; color:#a5d6a7; display:block; margin:0 auto 14px; }

  h3 { font-size:16px; font-weight:700; color:#5a7a5a; margin-bottom:6px; }

  p { font-size:13px; margin:0; }

}

```

---

## File: src/app/features/ngo/incidents/ngo-incidents.component.html

```html

<div class="app-shell">

  <app-sidebar></app-sidebar>

  <div class="main-panel">

    <app-navbar></app-navbar>

    <div class="page-content">

      <div class="page-heading">

        <div>

          <h1 class="page-title">All <span>Incidents</span></h1>

          <p class="page-subtitle">Monitor and manage all reported incidents.</p>

        </div>

        <span class="badge-count">{{ incidents.length }} Total</span>

      </div>

      <div class="filter-bar">

        <button [class.active]="filter==='all'" (click)="filter='all'">All</button>

        <button [class.active]="filter==='pending'" (click)="filter='pending'">Pending</button>

        <button [class.active]="filter==='assigned'" (click)="filter='assigned'">Assigned</button>

        <button [class.active]="filter==='completed'" (click)="filter='completed'">Resolved</button>

      </div>

      <div class="section-card">

        <div class="incidents-list" *ngIf="filtered.length > 0; else noInc">

          <div class="inc-row" *ngFor="let inc of filtered">

            <div class="inc-urgency-dot" [style.background]="getUrgencyColor(inc.urgency)"></div>

            <div class="inc-body">

              <div class="inc-top">

                <span class="badge" [style.background]="getUrgencyColor(inc.urgency)">{{ inc.urgency }}</span>

                <span class="inc-type"><mat-icon>category</mat-icon>{{ inc.type }}</span>

                <span class="inc-time"><mat-icon>schedule</mat-icon>{{ inc.timestamp | date:'short' }}</span>

              </div>

              <h3>{{ inc.title }}</h3>

              <p>{{ inc.description }}</p>

            </div>

            <div class="inc-status">

              <span class="status-badge" [ngClass]="inc.status">{{ inc.status | titlecase }}</span>

              <button mat-stroked-button *ngIf="inc.status !== 'completed'" (click)="markCompleted(inc.id!)" class="resolve-btn">

                <mat-icon>check</mat-icon> Resolve

              </button>

            </div>

          </div>

        </div>

        <ng-template #noInc>

          <div class="empty-state">

            <mat-icon>verified_user</mat-icon>

            <h3>No Incidents Found</h3>

            <p>No incidents match the selected filter.</p>

          </div>

        </ng-template>

      </div>

    </div>

  </div>

</div>

```

---

## File: src/app/features/ngo/reports/ngo-reports.component.ts

```typescript

import { Component, OnInit } from '@angular/core';

import { IncidentService } from '../../../core/services/incident.service';

import { Incident } from '../../../models/incident.model';

@Component({

  selector: 'app-ngo-reports',

  template: `

    <div class="app-shell">

      <app-sidebar></app-sidebar>

      <div class="main-panel">

        <app-navbar></app-navbar>

        <div class="page-content">

          <div style="margin-bottom:28px">

            <h1 class="page-title">Analytics & <span>Reports</span></h1>

            <p class="page-subtitle">Overview of all incidents and volunteer activities.</p>

          </div>

          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:24px">

            <div *ngFor="let s of stats" style="background:white;border-radius:16px;padding:22px;border:1px solid rgba(46,125,50,.08);box-shadow:0 2px 10px rgba(46,125,50,.05);text-align:center">

              <div style="font-size:36px;font-weight:800;color:#2e7d32">{{ s.value }}</div>

              <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:#8aaa8a;margin-top:4px">{{ s.label }}</div>

            </div>

          </div>

          <div style="background:white;border-radius:20px;padding:24px;border:1px solid rgba(46,125,50,.08);box-shadow:0 2px 12px rgba(46,125,50,.06)">

            <h2 style="font-size:18px;font-weight:700;margin:0 0 20px">All Reports</h2>

            <div *ngFor="let inc of incidents" style="display:flex;align-items:center;gap:12px;padding:14px;border-radius:12px;background:#f9fffe;border:1px solid rgba(46,125,50,.08);margin-bottom:10px">

              <span style="font-size:11px;font-weight:700;padding:3px 10px;border-radius:99px;color:white" [style.background]="getColor(inc.urgency)">{{ inc.urgency }}</span>

              <div style="flex:1"><strong style="font-size:14px;color:#1a2a1a">{{ inc.title }}</strong><br><span style="font-size:12px;color:#8aaa8a">{{ inc.type }} · {{ inc.timestamp | date:'short' }}</span></div>

              <span style="font-size:11px;font-weight:700;padding:3px 10px;border-radius:99px" [ngClass]="inc.status" style="text-transform:capitalize">{{ inc.status }}</span>

            </div>

            <div *ngIf="incidents.length===0" style="text-align:center;padding:48px;color:#8aaa8a">No incidents yet.</div>

          </div>

        </div>

      </div>

    </div>`,

  styles: ['.pending{background:rgba(244,67,54,.1);color:#c62828} .assigned{background:rgba(33,150,243,.1);color:#1565c0} .completed{background:rgba(76,175,80,.1);color:#2e7d32} .active{background:rgba(255,152,0,.1);color:#e65100}']

})

export class NgoReportsComponent implements OnInit {

  incidents: Incident[] = [];

  get stats() {

    return [

      { label: 'Total Reports', value: this.incidents.length },

      { label: 'Resolved', value: this.incidents.filter(i=>i.status==='completed').length },

      { label: 'Critical', value: this.incidents.filter(i=>i.urgency==='Critical').length },

      { label: 'Assigned', value: this.incidents.filter(i=>i.status==='assigned').length },

    ];

  }

  constructor(private incidentService: IncidentService) {}

  ngOnInit() { this.incidentService.getActiveIncidents().subscribe(d => { this.incidents = d; }); }

  getColor(u: string): string { const m: any={Critical:'#d32f2f',High:'#f57c00',Medium:'#fbc02d',Low:'#388e3c'}; return m[u]||'#388e3c'; }

}

```

---

## File: src/app/shared/components/sidebar/sidebar.component.ts

```typescript

import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

import { Subscription } from 'rxjs';

import { filter } from 'rxjs/operators';

interface NavItem {

  label: string;

  icon: string;

  route: string;

}

@Component({

  selector: 'app-sidebar',

  templateUrl: './sidebar.component.html',

  styleUrls: ['./sidebar.component.scss']

})

export class SidebarComponent implements OnInit, OnDestroy {

  role: string = 'ngo';

  roleLabel: string = 'NGO Admin';

  navItems: NavItem[] = [];

  currentUrl: string = '';

  private routerSub!: Subscription;

  private ngoNav: NavItem[] = [

    { label: 'Dashboard',   icon: 'dashboard',      route: '/ngo/dashboard' },

    { label: 'Incidents',   icon: 'report_problem',  route: '/ngo/incidents' },

    { label: 'Volunteers',  icon: 'people',           route: '/ngo/volunteers' },

    { label: 'Live Map',    icon: 'map',              route: '/ngo/map' },

    { label: 'Reports',     icon: 'analytics',        route: '/ngo/reports' },

  ];

  private volunteerNav: NavItem[] = [

    { label: 'Dashboard',        icon: 'dashboard',  route: '/volunteer/dashboard' },

    { label: 'My Missions',      icon: 'assignment', route: '/volunteer/missions' },

    { label: 'Report Incident',  icon: 'campaign',   route: '/volunteer/report' },

  ];

  private victimNav: NavItem[] = [

    { label: 'Dashboard',      icon: 'dashboard',    route: '/victim/dashboard' },

    { label: 'My Reports',     icon: 'folder_open',  route: '/victim/reports' },

    { label: 'Emergency Help', icon: 'emergency',    route: '/victim/emergency' },

  ];

  constructor(

    private router: Router,

    private authService: AuthService

  ) {}

  ngOnInit() {

    // ✅ Use stored role — not URL — so navigation doesn't break detection

    this.applyRole(this.authService.getUserRole());

    this.currentUrl = this.router.url;

    // ✅ Update currentUrl on every navigation so isActive() stays correct

    this.routerSub = this.router.events

      .pipe(filter(e => e instanceof NavigationEnd))

      .subscribe((e: any) => {

        this.currentUrl = e.urlAfterRedirects;

        // Re-apply role in case it changed

        this.applyRole(this.authService.getUserRole());

      });

  }

  ngOnDestroy() {

    this.routerSub?.unsubscribe();

  }

  private applyRole(role: string) {

    if (role === 'ngo') {

      this.role = 'ngo';

      this.roleLabel = 'NGO Admin';

      this.navItems = this.ngoNav;

    } else if (role === 'volunteer') {

      this.role = 'volunteer';

      this.roleLabel = 'Volunteer';

      this.navItems = this.volunteerNav;

    } else {

      this.role = 'victim';

      this.roleLabel = 'Victim / User';

      this.navItems = this.victimNav;

    }

  }

  isActive(route: string): boolean {

    return this.currentUrl === route || this.currentUrl.startsWith(route + '/');

  }

  onLogout() {

    this.authService.logout();

  }

}

```

---

## File: src/app/shared/components/sidebar/sidebar.component.html

```html

<aside class="sidebar">

  <!-- Logo -->

  <div class="sidebar-logo">

    <div class="logo-icon">

      <mat-icon>public</mat-icon>

    </div>

    <div class="logo-text">

      <span class="logo-name">Community</span>

      <span class="logo-sub">Impact</span>

    </div>

  </div>

  <!-- User Role Badge -->

  <div class="role-badge">

    <mat-icon class="role-icon">

      {{ role === 'ngo' ? 'account_balance' : role === 'volunteer' ? 'volunteer_activism' : 'warning' }}

    </mat-icon>

    <span class="role-label">{{ roleLabel }}</span>

  </div>

  <!-- Navigation -->

  <nav class="sidebar-nav">

    <div class="nav-section-label">MAIN MENU</div>

    <ul>

      <li *ngFor="let item of navItems" [class.active]="isActive(item.route)">

        <a [routerLink]="item.route" class="nav-item">

          <div class="nav-icon">

            <mat-icon>{{ item.icon }}</mat-icon>

          </div>

          <span class="nav-label">{{ item.label }}</span>

          <div class="active-indicator" *ngIf="isActive(item.route)"></div>

        </a>

      </li>

    </ul>

  </nav>

  <!-- Spacer -->

  <div class="sidebar-spacer"></div>

  <!-- Bottom Actions -->

  <div class="sidebar-bottom">

    <a routerLink="/profile" class="nav-item profile-link" [class.active]="isActive('/profile')">

      <div class="nav-icon">

        <mat-icon>person_outline</mat-icon>

      </div>

      <span class="nav-label">My Profile</span>

    </a>

    <button class="nav-item logout-btn" (click)="onLogout()">

      <div class="nav-icon">

        <mat-icon>logout</mat-icon>

      </div>

      <span class="nav-label">Sign Out</span>

    </button>

  </div>

</aside>

```

---

## File: src/app/shared/components/sidebar/sidebar.component.scss

```scss

:host {

  display: block;

  position: fixed;

  top: 0;

  left: 0;

  height: 100vh;

  width: 265px;

  z-index: 100;

}

.sidebar {

  width: 265px;

  height: 100vh;

  background: linear-gradient(160deg, #1b5e20 0%, #2e7d32 40%, #388e3c 75%, #2e7d32 100%);

  display: flex;

  flex-direction: column;

  padding: 0;

  position: relative;

  overflow: hidden;

  box-shadow: 4px 0 30px rgba(27, 94, 32, 0.35);

  // Glossy sheen overlay

  &::before {

    content: '';

    position: absolute;

    top: 0;

    left: 0;

    right: 0;

    height: 45%;

    background: linear-gradient(

      180deg,

      rgba(255, 255, 255, 0.12) 0%,

      rgba(255, 255, 255, 0.04) 50%,

      transparent 100%

    );

    pointer-events: none;

    z-index: 1;

  }

  // Decorative circles

  &::after {

    content: '';

    position: absolute;

    bottom: -80px;

    right: -80px;

    width: 250px;

    height: 250px;

    border-radius: 50%;

    background: rgba(255, 255, 255, 0.04);

    pointer-events: none;

  }

}

// ─── Logo ────────────────────────────────────────────────

.sidebar-logo {

  display: flex;

  align-items: center;

  gap: 12px;

  padding: 28px 24px 20px;

  position: relative;

  z-index: 2;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  margin-bottom: 8px;

  .logo-icon {

    width: 42px;

    height: 42px;

    background: rgba(255, 255, 255, 0.2);

    backdrop-filter: blur(10px);

    border-radius: 12px;

    display: flex;

    align-items: center;

    justify-content: center;

    border: 1px solid rgba(255, 255, 255, 0.25);

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    flex-shrink: 0;

    mat-icon {

      color: white;

      font-size: 22px;

      height: 22px;

      width: 22px;

    }

  }

  .logo-text {

    display: flex;

    flex-direction: column;

    line-height: 1.1;

    .logo-name {

      font-size: 17px;

      font-weight: 800;

      color: white;

      letter-spacing: 0.01em;

    }

    .logo-sub {

      font-size: 12px;

      font-weight: 500;

      color: rgba(255, 255, 255, 0.65);

      letter-spacing: 0.06em;

      text-transform: uppercase;

    }

  }

}

// ─── Role Badge ───────────────────────────────────────────

.role-badge {

  display: flex;

  align-items: center;

  gap: 10px;

  margin: 8px 16px 20px;

  padding: 10px 14px;

  background: rgba(255, 255, 255, 0.12);

  backdrop-filter: blur(8px);

  border-radius: 12px;

  border: 1px solid rgba(255, 255, 255, 0.15);

  position: relative;

  z-index: 2;

  .role-icon {

    color: rgba(255, 255, 255, 0.85);

    font-size: 18px;

    height: 18px;

    width: 18px;

    flex-shrink: 0;

  }

  .role-label {

    font-size: 13px;

    font-weight: 600;

    color: rgba(255, 255, 255, 0.9);

    letter-spacing: 0.02em;

  }

}

// ─── Navigation ───────────────────────────────────────────

.sidebar-nav {

  flex: 1;

  padding: 0 12px;

  position: relative;

  z-index: 2;

  .nav-section-label {

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 0.12em;

    color: rgba(255, 255, 255, 0.4);

    padding: 0 12px 10px;

    text-transform: uppercase;

  }

  ul {

    list-style: none;

    padding: 0;

    margin: 0;

    display: flex;

    flex-direction: column;

    gap: 2px;

  }

  li {

    border-radius: 12px;

    overflow: hidden;

    transition: all 0.2s ease;

    &.active {

      background: rgba(255, 255, 255, 0.18);

      backdrop-filter: blur(10px);

      .nav-item {

        color: white;

        .nav-icon {

          background: rgba(255, 255, 255, 0.2);

          mat-icon { color: white; }

        }

        .nav-label { font-weight: 700; }

      }

    }

    &:not(.active):hover {

      background: rgba(255, 255, 255, 0.08);

    }

  }

}

.nav-item {

  display: flex;

  align-items: center;

  gap: 12px;

  padding: 11px 12px;

  text-decoration: none;

  color: rgba(255, 255, 255, 0.75);

  transition: all 0.2s ease;

  cursor: pointer;

  width: 100%;

  background: none;

  border: none;

  font-family: 'Poppins', sans-serif;

  position: relative;

  .nav-icon {

    width: 36px;

    height: 36px;

    border-radius: 10px;

    display: flex;

    align-items: center;

    justify-content: center;

    transition: all 0.2s ease;

    flex-shrink: 0;

    mat-icon {

      font-size: 19px;

      height: 19px;

      width: 19px;

      color: rgba(255, 255, 255, 0.75);

    }

  }

  .nav-label {

    font-size: 14px;

    font-weight: 500;

    letter-spacing: 0.01em;

    white-space: nowrap;

  }

  .active-indicator {

    position: absolute;

    right: 8px;

    width: 6px;

    height: 6px;

    border-radius: 50%;

    background: #a5d6a7;

    box-shadow: 0 0 6px rgba(165, 214, 167, 0.6);

  }

}

// ─── Sidebar Spacer ───────────────────────────────────────

.sidebar-spacer {

  flex: 1;

}

// ─── Bottom Section ───────────────────────────────────────

.sidebar-bottom {

  padding: 12px;

  border-top: 1px solid rgba(255, 255, 255, 0.1);

  position: relative;

  z-index: 2;

  display: flex;

  flex-direction: column;

  gap: 2px;

  margin-bottom: 8px;

  .profile-link {

    border-radius: 12px;

    &.active {

      background: rgba(255, 255, 255, 0.18);

    }

    &:hover { background: rgba(255, 255, 255, 0.08); }

  }

  .logout-btn {

    border-radius: 12px;

    text-align: left;

    

    &:hover {

      background: rgba(244, 67, 54, 0.2);

      .nav-label, mat-icon { color: #ff8a80; }

    }

  }

}

```

---

## File: src/app/shared/components/navbar/navbar.component.ts

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationService, AppNotification } from '../../../core/services/notification.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  userName: string = 'User';
  roleLabel: string = 'User';
  notifications: AppNotification[] = [];
  notifCount: number = 0;
  private notifSub?: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    public notifService: NotificationService
  ) {}

  ngOnInit() {
    this._applyUserInfo();
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this._applyUserInfo());

    // Subscribe to live notifications
    this.notifSub = this.notifService.getNotifications().subscribe(notifs => {
      this.notifications = notifs.slice(0, 5); // Show latest 5 in dropdown
      this.notifCount = notifs.filter(n => !n.read).length;
    });
  }

  private _applyUserInfo(): void {
    const user = this.authService.getCurrentUser();
    const role = this.authService.getUserRole();
    if (user?.displayName) this.userName = user.displayName;
    if (role === 'ngo') this.roleLabel = 'NGO Admin';
    else if (role === 'volunteer') this.roleLabel = 'Volunteer';
    else if (role === 'victim') this.roleLabel = 'Victim / User';
    else this.roleLabel = 'User';

    // Start notification listener for the logged-in user
    if (user?.email) {
      this.notifService.listenForUser(user.email);
    }
  }

  markAllRead(): void {
    const user = this.authService.getCurrentUser();
    if (user?.email) this.notifService.markAllRead(user.email);
  }

  getNotifIcon(type: string): string {
    if (type === 'volunteer_assigned') return 'directions_run';
    if (type === 'incident_completed') return 'check_circle';
    return 'notifications';
  }

  getNotifColor(type: string): string {
    if (type === 'volunteer_assigned') return '#f57c00';
    if (type === 'incident_completed') return '#388e3c';
    return '#1976d2';
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  isDarkMode: boolean = false;
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  ngOnDestroy(): void {
    this.notifSub?.unsubscribe();
  }
}

```

---

## File: src/app/shared/components/navbar/navbar.component.html

```html
<header class="top-navbar">
  <div class="navbar-left">
    <button class="menu-toggle" mat-icon-button>
      <mat-icon>menu</mat-icon>
    </button>
    <div class="greeting">
      <span class="greeting-text">Welcome back, <strong>{{ userName }}</strong></span>
    </div>
  </div>

  <div class="navbar-right">
    <!-- Quick Settings -->
    <button mat-icon-button class="nav-icon-btn" matTooltip="Quick Settings" [matMenuTriggerFor]="settingsMenu">
      <mat-icon>tune</mat-icon>
    </button>
    <mat-menu #settingsMenu="matMenu" xPosition="before" class="settings-menu">
      <div class="menu-header">
        <p class="menu-name" style="margin:0;padding:8px 16px;font-weight:600">Quick Settings</p>
      </div>
      <mat-divider></mat-divider>
      <button mat-menu-item (click)="toggleDarkMode()">
        <mat-icon>{{ isDarkMode ? 'light_mode' : 'dark_mode' }}</mat-icon>
        <span>{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
      </button>
      <button mat-menu-item>
        <mat-icon>language</mat-icon><span>Language</span>
      </button>
      <button mat-menu-item>
        <mat-icon>security</mat-icon><span>Privacy</span>
      </button>
    </mat-menu>

    <!-- Live Notifications Bell -->
    <button mat-icon-button class="nav-icon-btn" matTooltip="Notifications" [matMenuTriggerFor]="notificationsMenu">
      <mat-icon>notifications_none</mat-icon>
      <span class="notif-badge" *ngIf="notifCount > 0">{{ notifCount }}</span>
    </button>
    <mat-menu #notificationsMenu="matMenu" xPosition="before" class="notifications-menu">
      <div class="menu-header notif-header-row" style="display:flex;align-items:center;justify-content:space-between;padding:10px 16px;">
        <p style="margin:0;font-weight:700;font-size:14px">Notifications</p>
        <button mat-button style="font-size:11px;color:#388e3c;min-width:0;padding:0 4px" (click)="markAllRead(); $event.stopPropagation()" *ngIf="notifCount > 0">
          Mark all read
        </button>
      </div>
      <mat-divider></mat-divider>

      <!-- Real notifications -->
      <ng-container *ngIf="notifications.length > 0; else noNotifs">
        <button mat-menu-item *ngFor="let n of notifications" class="notif-item" [class.unread]="!n.read"
          (click)="notifService.markRead(n.recipientEmail, n.id)">
          <mat-icon [style.color]="getNotifColor(n.type)">{{ getNotifIcon(n.type) }}</mat-icon>
          <span class="notif-text">
            <strong>{{ n.title }}</strong><br>
            <small>{{ n.message | slice:0:60 }}...</small>
          </span>
        </button>
      </ng-container>
      <ng-template #noNotifs>
        <button mat-menu-item disabled>
          <mat-icon>notifications_off</mat-icon>
          <span>No new notifications</span>
        </button>
      </ng-template>

      <mat-divider></mat-divider>
      <button mat-menu-item routerLink="/victim/reports" style="text-align:center;color:#388e3c">
        <span>View All Activity</span>
      </button>
    </mat-menu>

    <!-- Profile Dropdown -->
    <button mat-button [matMenuTriggerFor]="profileMenu" class="profile-btn">
      <div class="avatar-wrapper">
        <div class="avatar"><mat-icon>person</mat-icon></div>
        <div class="user-info">
          <span class="user-name">{{ userName }}</span>
          <span class="user-role">{{ roleLabel }}</span>
        </div>
        <mat-icon class="chevron">expand_more</mat-icon>
      </div>
    </button>
    <mat-menu #profileMenu="matMenu" xPosition="before" class="profile-menu">
      <div class="menu-header">
        <div class="menu-avatar"><mat-icon>person</mat-icon></div>
        <div>
          <p class="menu-name">{{ userName }}</p>
          <p class="menu-role">{{ roleLabel }}</p>
        </div>
      </div>
      <mat-divider></mat-divider>
      <button mat-menu-item routerLink="/profile">
        <mat-icon>manage_accounts</mat-icon><span>My Profile</span>
      </button>
      <button mat-menu-item>
        <mat-icon>settings</mat-icon><span>Settings</span>
      </button>
      <mat-divider></mat-divider>
      <button mat-menu-item (click)="onLogout()" class="logout-menu-item">
        <mat-icon>logout</mat-icon><span>Sign Out</span>
      </button>
    </mat-menu>
  </div>
</header>

```

---

## File: src/app/shared/components/navbar/navbar.component.scss

```scss

.top-navbar {

  height: 70px;

  background: rgba(255, 255, 255, 0.96);

  backdrop-filter: blur(12px);

  border-bottom: 1px solid rgba(46, 125, 50, 0.1);

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 0 28px;

  position: sticky;

  top: 0;

  z-index: 50;

  box-shadow: 0 2px 12px rgba(46, 125, 50, 0.06);

}

.navbar-left {

  display: flex;

  align-items: center;

  gap: 16px;

  .menu-toggle {

    color: #4a6a4a;

    display: none;

    @media (max-width: 768px) {

      display: flex;

    }

  }

  .greeting {

    .greeting-text {

      font-size: 14px;

      color: #6a8a6a;

      font-weight: 400;

      strong {

        color: #1a2a1a;

        font-weight: 700;

      }

    }

  }

}

.navbar-right {

  display: flex;

  align-items: center;

  gap: 4px;

}

.nav-icon-btn {

  color: #5a7a5a !important;

  width: 40px !important;

  height: 40px !important;

  border-radius: 10px !important;

  transition: all 0.2s ease !important;

  position: relative;

  &:hover {

    background: rgba(46, 125, 50, 0.08) !important;

    color: #2e7d32 !important;

  }

  mat-icon {

    font-size: 20px !important;

    height: 20px !important;

    width: 20px !important;

  }

  .notif-badge {

    position: absolute;

    top: 4px;

    right: 4px;

    width: 16px;

    height: 16px;

    background: #f44336;

    color: white;

    border-radius: 50%;

    font-size: 9px;

    font-weight: 700;

    display: flex;

    align-items: center;

    justify-content: center;

    font-family: 'Poppins', sans-serif;

  }

}

.profile-btn {

  height: 48px !important;

  border-radius: 12px !important;

  padding: 0 12px !important;

  margin-left: 8px;

  transition: all 0.2s ease !important;

  &:hover {

    background: rgba(46, 125, 50, 0.06) !important;

  }

}

.avatar-wrapper {

  display: flex;

  align-items: center;

  gap: 10px;

  .avatar {

    width: 36px;

    height: 36px;

    border-radius: 10px;

    background: linear-gradient(135deg, #4caf50, #2e7d32);

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;

    box-shadow: 0 3px 8px rgba(46, 125, 50, 0.3);

    mat-icon {

      color: white;

      font-size: 18px !important;

      height: 18px !important;

      width: 18px !important;

    }

  }

  .user-info {

    display: flex;

    flex-direction: column;

    align-items: flex-start;

    line-height: 1.2;

    .user-name {

      font-size: 13px;

      font-weight: 700;

      color: #1a2a1a;

    }

    .user-role {

      font-size: 11px;

      font-weight: 500;

      color: #8aaa8a;

    }

  }

  .chevron {

    color: #8aaa8a;

    font-size: 18px !important;

    height: 18px !important;

    width: 18px !important;

  }

}

// Profile Dropdown Menu

::ng-deep .profile-menu {

  .mat-mdc-menu-content {

    padding: 0 !important;

  }

  .menu-header {

    display: flex;

    align-items: center;

    gap: 12px;

    padding: 16px 16px 12px;

    .menu-avatar {

      width: 40px;

      height: 40px;

      border-radius: 10px;

      background: linear-gradient(135deg, #4caf50, #2e7d32);

      display: flex;

      align-items: center;

      justify-content: center;

      flex-shrink: 0;

      mat-icon {

        color: white;

        font-size: 20px;

      }

    }

    .menu-name {

      font-size: 14px;

      font-weight: 700;

      color: #1a2a1a;

      margin: 0;

      font-family: 'Poppins', sans-serif;

    }

    .menu-role {

      font-size: 12px;

      color: #8aaa8a;

      margin: 0;

      font-family: 'Poppins', sans-serif;

    }

  }

  .logout-menu-item {

    color: #d32f2f !important;

    mat-icon { color: #d32f2f !important; }

  }

}

/* ── NOTIFICATION MENU ITEMS ──────────────────────────── */
.notif-item {
  height: auto !important;
  padding: 8px 16px !important;
  line-height: 1.4 !important;
  white-space: normal !important;

  &.unread {
    background: rgba(76,175,80,.05);
  }

  .notif-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 12px;
    color: #1a2a1a;

    strong {
      font-size: 12.5px;
      font-weight: 700;
    }

    small {
      color: #5a7a5a;
      font-size: 11px;
    }
  }
}

.notif-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

```

---

## File: src/app/shared/components/report-incident/report-incident.component.scss

```scss

.report-container {

  background: white;

  border-radius: 22px;

  padding: 28px;

  border: 1px solid rgba(46, 125, 50, 0.08);

  box-shadow: 0 2px 12px rgba(46, 125, 50, 0.06);

  display: flex;

  flex-direction: column;

  gap: 18px;

}

// ─── Header ───────────────────────────────────────────────

.report-header {

  display: flex;

  align-items: center;

  gap: 14px;

  .report-header-icon {

    width: 52px;

    height: 52px;

    border-radius: 16px;

    background: linear-gradient(135deg, #4caf50, #2e7d32);

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;

    box-shadow: 0 4px 12px rgba(46, 125, 50, 0.25);

    mat-icon {

      font-size: 26px;

      height: 26px;

      width: 26px;

      color: white;

    }

  }

  .report-header-text {

    h2 {

      font-size: 18px;

      font-weight: 800;

      color: #1a2a1a;

      margin: 0 0 4px;

    }

    p {

      font-size: 13px;

      color: #8aaa8a;

      margin: 0;

    }

  }

}

// ─── Input Modes ─────────────────────────────────────────

.input-modes-grid {

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 12px;

  .mode-btn {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 8px;

    height: 48px;

    border-radius: 14px;

    border: 1.5px solid;

    cursor: pointer;

    font-family: 'Poppins', sans-serif;

    font-size: 13.5px;

    font-weight: 600;

    transition: all 0.2s ease;

    mat-icon {

      font-size: 19px;

      height: 19px;

      width: 19px;

    }

    &.upload-btn {

      background: rgba(46, 125, 50, 0.06);

      border-color: rgba(46, 125, 50, 0.25);

      color: #2e7d32;

      &:hover {

        background: rgba(46, 125, 50, 0.12);

        border-color: #4caf50;

      }

    }

    &.voice-btn {

      background: rgba(33, 150, 243, 0.06);

      border-color: rgba(33, 150, 243, 0.25);

      color: #1565c0;

      &:hover {

        background: rgba(33, 150, 243, 0.12);

        border-color: #42a5f5;

      }

      &.recording {

        background: rgba(244, 67, 54, 0.08);

        border-color: #f44336;

        color: #c62828;

        animation: pulse-record 1.2s ease-in-out infinite;

      }

    }

  }

}

@keyframes pulse-record {

  0%, 100% { box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.3); }

  50% { box-shadow: 0 0 0 6px rgba(244, 67, 54, 0); }

}

// ─── Image Preview ────────────────────────────────────────

.image-preview {

  position: relative;

  border-radius: 14px;

  overflow: hidden;

  border: 2px solid rgba(46, 125, 50, 0.15);

  img {

    width: 100%;

    max-height: 180px;

    object-fit: cover;

    display: block;

  }

  .remove-img-btn {

    position: absolute;

    top: 8px;

    right: 8px;

    background: rgba(0, 0, 0, 0.5) !important;

    color: white !important;

    width: 30px !important;

    height: 30px !important;

    mat-icon { font-size: 16px !important; height: 16px !important; width: 16px !important; }

  }

}

// ─── Textarea ─────────────────────────────────────────────

.report-textarea-field {

  width: 100%;

  ::ng-deep {

    .mat-mdc-form-field-outline { border-radius: 14px; }

    textarea { font-family: 'Poppins', sans-serif; font-size: 14px; }

  }

}

// ─── Location Row ─────────────────────────────────────────

.location-row {

  display: flex;

  align-items: center;

  gap: 8px;

  padding: 10px 14px;

  background: rgba(46, 125, 50, 0.05);

  border-radius: 12px;

  border: 1px solid rgba(46, 125, 50, 0.1);

  mat-icon {

    font-size: 17px;

    height: 17px;

    width: 17px;

    color: #4caf50;

    flex-shrink: 0;

  }

  .location-text {

    flex: 1;

    font-size: 12.5px;

    font-weight: 500;

    color: #5a7a5a;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;

  }

  .refresh-loc-btn {

    border-color: rgba(46, 125, 50, 0.3) !important;

    color: #2e7d32 !important;

    font-size: 11.5px !important;

    height: 30px !important;

    padding: 0 10px !important;

    flex-shrink: 0;

    mat-icon {

      font-size: 14px !important;

      height: 14px !important;

      width: 14px !important;

    }

  }

}

// ─── Footer ───────────────────────────────────────────────

.report-footer {

  display: flex;

  align-items: center;

  justify-content: flex-end;

  gap: 16px;

  padding-top: 4px;

  .analyzing-indicator {

    display: flex;

    align-items: center;

    gap: 8px;

    font-size: 13px;

    font-weight: 600;

    color: #059669;

  }

  .submit-report-btn {

    height: 48px !important;

    padding: 0 28px !important;

    font-size: 14px !important;

    border-radius: 14px !important;

    display: flex;

    align-items: center;

    gap: 8px;

    mat-icon {

      font-size: 19px !important;

      height: 19px !important;

      width: 19px !important;

    }

  }

}

```

---

## File: src/app/shared/components/report-incident/report-incident.component.ts

```typescript
// src/app/shared/components/report-incident/report-incident.component.ts

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

  reportText = '';
  isAnalyzing = false;
  isRecording = false;
  imageBase64: string | null = null;
  imagePreviewUrl: string | null = null;
  currentLat: number = 11.0168;
  currentLng: number = 76.9558;
  locationLabel: string = 'Fetching location...';

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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.currentLat = pos.coords.latitude;
          this.currentLng = pos.coords.longitude;
          this.locationLabel = `${this.currentLat.toFixed(4)}, ${this.currentLng.toFixed(4)}`;
        },
        () => { this.locationLabel = 'Location unavailable — using default'; }
      );
    } else {
      this.locationLabel = 'Geolocation not supported';
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e: any) => {
      this.imagePreviewUrl = e.target.result;
      this.imageBase64 = e.target.result.split(',')[1];
      this.isAnalyzing = true;
      try {
        const analysis = await this.geminiService.analyzeIncidentReport(
          'Extract and analyze this incident image.',
          this.imageBase64!
        );
        this.reportText = analysis.summary || 'Image analyzed. Please review and add details.';
        this.snackBar.open('Image analyzed!', 'OK', { duration: 2500 });
      } catch {
        this.snackBar.open('OCR failed. Type the details manually.', 'OK', { duration: 3000 });
      } finally { this.isAnalyzing = false; }
    };
    reader.readAsDataURL(file);
  }

  clearImage() { this.imageBase64 = null; this.imagePreviewUrl = null; }

  startVoiceRecording() {
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SpeechRecognition) {
      this.snackBar.open('Voice recognition not supported.', 'OK', { duration: 3000 });
      return;
    }
    const rec = new SpeechRecognition();
    rec.lang = 'en-IN';
    rec.continuous = false;
    rec.interimResults = false;
    this.isRecording = true;
    rec.onresult = (event: any) => { this.reportText = event.results[0][0].transcript; this.isRecording = false; };
    rec.onerror = () => { this.isRecording = false; this.snackBar.open('Voice error. Try again.', 'OK', { duration: 3000 }); };
    rec.onend = () => { this.isRecording = false; };
    rec.start();
    this.snackBar.open('Listening... Speak now.', '', { duration: 3000 });
  }

  async submitReport() {
    if (!this.reportText.trim()) return;

    this.isAnalyzing = true;

    const victimId = this.authService.getUserId();

    try {
      // Default fallback — only used if Gemini completely fails
      let analysis: any = {
        summary: this.reportText.substring(0, 80),
        severity: 'Medium',
        type: 'Other'
      };

      try {
        const result = await this.geminiService.analyzeIncidentReport(
          this.reportText,
          this.imageBase64 || undefined
        );

        // Only adopt Gemini result if it returned a valid, non-empty analysis
        if (result?.summary && result?.severity) {
          analysis = result;
        }
      } catch (e) {
        console.warn('Gemini analysis failed, using keyword-based fallback:', e);
        // Keyword-based fallback priority classification
        analysis.severity = this.keywordFallbackSeverity(this.reportText);
      }

      // Final safety check: ensure severity is a valid urgency value
      const validUrgencies = ['Critical', 'High', 'Medium', 'Low'];
      const urgency = validUrgencies.includes(analysis.severity) ? analysis.severity : 'Medium';

      await this.incidentService.createIncident({
        title: analysis.summary || this.reportText.substring(0, 60),
        description: this.reportText,
        urgency: urgency as 'Critical' | 'High' | 'Medium' | 'Low',
        type: analysis.type || 'Other',
        status: 'pending',
        timestamp: new Date().toISOString(),
        latitude: this.currentLat,
        longitude: this.currentLng,
        victimId
      });

      this.snackBar.open(`✅ Report submitted! Priority: ${urgency}. Help is on the way.`, 'OK', {
        duration: 5000, panelClass: ['success-snackbar']
      });

      this.reportText = '';
      this.imageBase64 = null;
      this.imagePreviewUrl = null;

    } catch (error: any) {
      console.error('Submission Error:', error);
      if (error?.code === 'permission-denied') {
        this.snackBar.open('Permission denied. Please log in again.', 'Close', { duration: 5000 });
      } else {
        this.snackBar.open('Submission failed. Please try again.', 'Close', { duration: 4000 });
      }
    } finally { this.isAnalyzing = false; }
  }

  /**
   * Keyword-based severity classifier used as a fallback when Gemini API is unavailable.
   * Scans the report text for emergency keywords to assign a reasonable priority.
   */
  private keywordFallbackSeverity(text: string): 'Critical' | 'High' | 'Medium' | 'Low' {
    const lower = text.toLowerCase();

    const criticalKeywords = [
      'death', 'died', 'dead', 'unconscious', 'not breathing', 'cardiac arrest',
      'trapped', 'drowning', 'drowning', 'critical', 'life threatening', 'mass casualty',
      'explosion', 'collapsed building', 'major flood', 'severe flood'
    ];
    const highKeywords = [
      'accident', 'injured', 'injury', 'bleeding', 'broke', 'broken', 'flood',
      'fire', 'emergency', 'urgent', 'oxygen', 'hospital', 'ambulance', 'fracture',
      'hit', 'crash', 'burn', 'electrocuted', 'missing', 'help', 'immediate'
    ];
    const lowKeywords = [
      'minor', 'small', 'little', 'noise', 'nuisance', 'complaint', 'issue', 'request'
    ];

    if (criticalKeywords.some(k => lower.includes(k))) return 'Critical';
    if (highKeywords.some(k => lower.includes(k))) return 'High';
    if (lowKeywords.some(k => lower.includes(k))) return 'Low';

    return 'Medium';
  }
}
```

---

## File: src/app/shared/components/report-incident/report-incident.component.html

```html

<div class="report-container">

  <div class="report-header">

    <div class="report-header-icon">

      <mat-icon>campaign</mat-icon>

    </div>

    <div class="report-header-text">

      <h2>Report an Incident</h2>

      <p>Describe the situation for immediate AI analysis.</p>

    </div>

  </div>

  <!-- Input Modes -->

  <div class="input-modes-grid">

    <button class="mode-btn upload-btn" (click)="fileInput.click()" type="button">

      <mat-icon>add_a_photo</mat-icon>

      <span>Upload Image (OCR)</span>

    </button>

    <input type="file" #fileInput hidden accept="image/*" (change)="onFileSelected($event)">

    <button class="mode-btn voice-btn" (click)="startVoiceRecording()" type="button"

      [class.recording]="isRecording">

      <mat-icon>{{ isRecording ? 'mic' : 'mic_none' }}</mat-icon>

      <span>{{ isRecording ? 'Listening...' : 'Voice Input' }}</span>

    </button>

  </div>

  <!-- Image Preview -->

  <div class="image-preview" *ngIf="imagePreviewUrl">

    <img [src]="imagePreviewUrl" alt="Uploaded image" />

    <button class="remove-img-btn" (click)="clearImage()" mat-icon-button>

      <mat-icon>close</mat-icon>

    </button>

  </div>

  <!-- Text Area -->

  <mat-form-field appearance="outline" class="report-textarea-field">

    <mat-label>Describe the incident</mat-label>

    <textarea matInput [(ngModel)]="reportText" rows="5"

      placeholder="E.g., Heavy flooding near the main bridge, need urgent rescue..."></textarea>

  </mat-form-field>

  <!-- Location Row -->

  <div class="location-row">

    <mat-icon>location_on</mat-icon>

    <input type="text" class="location-text" [(ngModel)]="locationLabel" 

           placeholder="Type location manually or refresh..."

           style="border: none; background: transparent; outline: none; flex: 1;">

    <button mat-stroked-button class="refresh-loc-btn" (click)="refreshLocation()" type="button">

      <mat-icon>my_location</mat-icon> Refresh

    </button>

  </div>

  <!-- Footer -->

  <div class="report-footer">

    <div class="analyzing-indicator" *ngIf="isAnalyzing">

      <mat-spinner diameter="20"></mat-spinner>

      <span>AI is analyzing severity...</span>

    </div>

    <button mat-raised-button class="btn-primary submit-report-btn"

      [disabled]="!reportText.trim() || isAnalyzing"

      (click)="submitReport()"

      type="button">

      <mat-icon>send</mat-icon>

      Submit Report

    </button>

  </div>

</div>

```

---

## File: src/app/models/incident.model.ts

```typescript

// src/app/models/incident.model.ts

export interface Incident {

  id?: string;

  missionId?: string;          // unique mission identifier

  title: string;

  description: string;

  urgency: 'Critical' | 'High' | 'Medium' | 'Low';

  type: string;

  status: 'pending' | 'active' | 'assigned' | 'completed';

  timestamp: string;

  completedAt?: string;

  latitude: number;

  longitude: number;

  victimId?: string;

  volunteerId?: string;

  volunteerName?: string;

  locationName?: string;

  distanceToVolunteer?: number;  // km, filled during AI assignment suggestion

  reviews?: Review[];

}

export interface Review {

  id: string;

  victimId: string;

  rating: number;           // 1-5

  comment: string;

  createdAt: string;

}

export interface AssignmentHistory {

  missionId: string;

  incidentId: string;

  incidentTitle: string;

  incidentType: string;

  victimId: string;

  volunteerId: string;

  volunteerName: string;

  assignedAt: string;

  completedAt?: string;

  status: 'assigned' | 'completed';

  urgency: string;

  locationName?: string;

  latitude: number;

  longitude: number;

}

```

---

## File: src/environments/environment.prod.ts

```typescript
export const environment = {
  production: true,
  geminiApiKey: 'YOUR_GEMINI_API_KEY',
  googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
  firebase: {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
    projectId: "YOUR_FIREBASE_PROJECT_ID",
    storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
    appId: "YOUR_FIREBASE_APP_ID",
    measurementId: "YOUR_FIREBASE_MEASUREMENT_ID"
  }
};

```

---

## File: src/environments/environment.ts

```typescript
export const environment = {
  production: false,
  geminiApiKey: 'YOUR_GEMINI_API_KEY',
  googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
  firebase: {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
    projectId: "YOUR_FIREBASE_PROJECT_ID",
    storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
    appId: "YOUR_FIREBASE_APP_ID",
    measurementId: "YOUR_FIREBASE_MEASUREMENT_ID"
  }
};

```

---

