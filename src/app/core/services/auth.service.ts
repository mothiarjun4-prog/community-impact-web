import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  doc, setDoc, getDoc, updateDoc
} from 'firebase/firestore';
import * as bcrypt from 'bcryptjs';
import { getFirebaseApp, getFirestoreDb } from '../firebase.config';
import { VolunteerService } from './volunteer.service';

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
  private get db() { return getFirestoreDb(); }

  constructor(
    private router: Router,
    private volunteerService: VolunteerService
  ) {}

  async register(email: string, password: string, displayName: string, role: string, extra?: Partial<UserRecord>): Promise<void> {
    const normalizedEmail = email.trim().toLowerCase();
    const userRef = doc(this.db, 'users', normalizedEmail);
    const existing = await getDoc(userRef);
    if (existing.exists()) throw new Error('An account with this email already exists.');

    const passwordHash = await bcrypt.hash(password, 10);
    const uid = 'uid-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
    const userRecord: UserRecord = {
      uid, email: normalizedEmail, displayName: displayName.trim(),
      role: role as any, passwordHash, createdAt: new Date().toISOString(), ...extra
    };
    await setDoc(userRef, userRecord);

    if (role === 'volunteer') {
      const volRef = doc(this.db, 'volunteers', normalizedEmail);
      await setDoc(volRef, {
        id: uid, displayName: userRecord.displayName, email: normalizedEmail,
        phone: extra?.phone || '', location: extra?.location || '',
        registeredAt: userRecord.createdAt, status: 'available', missionHistory: []
      });
      this.volunteerService.registerVolunteer(normalizedEmail, userRecord.displayName);
    }

    this._setSession(userRecord);
    this._navigate(role);
  }

  async login(email: string, password: string, role: string): Promise<void> {
    const normalizedEmail = email.trim().toLowerCase();
    const snap = await getDoc(doc(this.db, 'users', normalizedEmail));
    if (!snap.exists()) throw new Error('No account found. Please sign up first.');

    const rec = snap.data() as UserRecord;
    if (rec.role !== role) throw new Error(`This account is registered as "${rec.role}". Please select the correct role.`);
    if (!(await bcrypt.compare(password, rec.passwordHash))) throw new Error('Incorrect password. Please try again.');

    this._setSession(rec);
    this._navigate(role);
  }

  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    const email = localStorage.getItem('userEmail') || '';
    if (!email) throw new Error('You must be logged in.');

    const snap = await getDoc(doc(this.db, 'users', email));
    if (!snap.exists()) throw new Error('User not found.');

    const rec = snap.data() as UserRecord;
    if (!(await bcrypt.compare(currentPassword, rec.passwordHash))) throw new Error('Current password is incorrect.');

    const newHash = await bcrypt.hash(newPassword, 10);
    await updateDoc(doc(this.db, 'users', email), { passwordHash: newHash });
  }

  async updateProfile(updates: Partial<UserRecord>): Promise<void> {
    const email = localStorage.getItem('userEmail') || '';
    if (!email) return;
    const safe = { ...updates };
    delete (safe as any).passwordHash;
    delete (safe as any).uid;
    await updateDoc(doc(this.db, 'users', email), safe as any);
    if (updates.displayName) localStorage.setItem('userName', updates.displayName);
    const existing = this.getProfileData();
    localStorage.setItem('userProfile_' + email, JSON.stringify({ ...existing, ...safe }));
  }

  async fetchFullProfile(): Promise<UserRecord | null> {
    const email = localStorage.getItem('userEmail') || '';
    if (!email) return null;
    const snap = await getDoc(doc(this.db, 'users', email));
    return snap.exists() ? snap.data() as UserRecord : null;
  }

  getProfileData(): any {
    const email = localStorage.getItem('userEmail') || '';
    const s = localStorage.getItem('userProfile_' + email);
    return s ? JSON.parse(s) : {};
  }

  private _setSession(rec: UserRecord): void {
    localStorage.setItem('userRole', rec.role);
    localStorage.setItem('userEmail', rec.email);
    localStorage.setItem('userName', rec.displayName);
    localStorage.setItem('userId', rec.uid);
    const p = { ...rec };
    delete (p as any).passwordHash;
    localStorage.setItem('userProfile_' + rec.email, JSON.stringify(p));
  }

  private _navigate(role: string): void {
    if (role === 'ngo') this.router.navigate(['/ngo/dashboard']);
    else if (role === 'volunteer') this.router.navigate(['/volunteer/dashboard']);
    else this.router.navigate(['/victim/dashboard']);
  }

  async resetPassword(email: string): Promise<void> { console.log('Reset requested for:', email); }

  getCurrentUser(): any {
    const email = localStorage.getItem('userEmail');
    const name = localStorage.getItem('userName');
    return email ? { email, displayName: name || email.split('@')[0] } : null;
  }

  getUserId(): string { return localStorage.getItem('userId') || 'anonymous'; }
  getUserRole(): string { return localStorage.getItem('userRole') || ''; }
  isLoggedIn(): boolean { return !!localStorage.getItem('userEmail'); }

  logout(): void {
    ['userRole','userEmail','userName','userId'].forEach(k => localStorage.removeItem(k));
    this.router.navigate(['/']);
  }
}
