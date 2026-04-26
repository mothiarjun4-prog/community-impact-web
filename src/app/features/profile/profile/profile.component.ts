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
  currentPassword = '';
  newPassword = '';
  confirmNewPassword = '';
  isChangingPassword = false;  // loading state for the button

  // Notification toggles
  showNotifPanel = false;
  // Fix: { [key: string]: boolean } index signature allows notifSettings[key] in template
  notifSettings: { [key: string]: boolean } = {
    emailAlerts: true,
    smsAlerts: false,
    incidentUpdates: true,
    weeklyReport: false
  };

  recentActivity: any[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private volunteerService: VolunteerService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const role = this.authService.getUserRole();
    this.roleLabel = role === 'ngo' ? 'NGO Admin' : role === 'volunteer' ? 'Volunteer' : 'Victim / User';

    const user = this.authService.getCurrentUser();
    const savedProfile = this.authService.getProfileData();

    this.profileData = {
      displayName: user?.displayName || '',
      email: user?.email || '',
      gender: savedProfile.gender || '',
      nationality: savedProfile.nationality || '',
      qualification: savedProfile.qualification || '',
      phone: savedProfile.phone || '',
      address: savedProfile.address || '',
      location: savedProfile.location || '',
      emergencyContact: savedProfile.emergencyContact || '',
      reportsCount: 0,
      missionsCount: 0,
      impactScore: 0
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
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmNewPassword = '';
  }

  async changePassword() {
    // Client-side validation first
    if (!this.currentPassword) {
      this.snackBar.open('Please enter your current password.', 'OK', { duration: 3000 });
      return;
    }
    if (!this.newPassword || this.newPassword.length < 6) {
      this.snackBar.open('New password must be at least 6 characters.', 'OK', { duration: 3000 });
      return;
    }
    if (this.newPassword === this.currentPassword) {
      this.snackBar.open('New password must be different from your current password.', 'OK', { duration: 3000 });
      return;
    }
    if (this.newPassword !== this.confirmNewPassword) {
      this.snackBar.open('Passwords do not match. Please re-enter.', 'OK', { duration: 3000 });
      return;
    }

    this.isChangingPassword = true;
    try {
      // Calls auth.service.changePassword which:
      // 1. Fetches user doc from Firestore
      // 2. Verifies currentPassword against stored bcrypt hash
      // 3. Hashes newPassword with bcrypt (salt=10)
      // 4. Writes new passwordHash to Firestore
      await this.authService.changePassword(this.currentPassword, this.newPassword);

      this.snackBar.open('✅ Password changed successfully! Your new password is active.', 'OK', { duration: 4000 });
      this.showPasswordForm = false;
      this.currentPassword = '';
      this.newPassword = '';
      this.confirmNewPassword = '';
    } catch (err: any) {
      // Show the specific error from the service (wrong current password, etc.)
      this.snackBar.open(err.message || 'Failed to change password. Try again.', 'Close', { duration: 5000 });
    } finally {
      this.isChangingPassword = false;
    }
  }

  // ── Notification Settings ────────────────────────────────
  toggleNotifPanel() {
    this.showNotifPanel = !this.showNotifPanel;
    this.showPasswordForm = false;
  }

  saveNotifSettings() {
    localStorage.setItem('ci_notif_settings', JSON.stringify(this.notifSettings));
    this.snackBar.open('Notification preferences saved!', 'OK', { duration: 2500 });
    this.showNotifPanel = false;
  }

  // ── Sign Out ─────────────────────────────────────────────
  onSignOut() {
    this.authService.logout();
  }
}
