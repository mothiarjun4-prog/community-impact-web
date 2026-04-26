import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AssignmentHistory } from '../../models/incident.model';
import { 
  collection, doc, updateDoc, onSnapshot, 
  Unsubscribe, QuerySnapshot, DocumentData 
} from 'firebase/firestore';
import { getFirestoreDb } from '../firebase.config';

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
  private unsub?: Unsubscribe;

  private get db() { return getFirestoreDb(); }

  constructor() {
    this._listen();
  }

  private _listen(): void {
    const colRef = collection(this.db, 'volunteers');
    this.unsub = onSnapshot(
      colRef,
      (snap: QuerySnapshot<DocumentData>) => {
        const list: VolunteerProfile[] = [];
        snap.forEach(d => list.push(d.data() as VolunteerProfile));
        this.volunteersSubject.next(list);
      },
      (err: Error) => console.error('Volunteer listener error:', err)
    );
  }

  ngOnDestroy(): void {
    this.unsub?.();
  }

  getVolunteers(): Observable<VolunteerProfile[]> {
    return this.volunteersSubject.asObservable();
  }

  getVolunteersList(): VolunteerProfile[] {
    return this.volunteersSubject.value;
  }

  // Called by AuthService.register — Firestore record is already created there.
  // We keep this for compatibility, but the real-time listener will pick up the new volunteer.
  registerVolunteer(email: string, displayName: string): void {
    console.log(`Volunteer registered: ${email}`);
  }

  async updateVolunteerStatus(id: string, status: 'available' | 'assigned' | 'offline'): Promise<void> {
    const vol = this.getVolunteerById(id);
    if (!vol) return;
    await updateDoc(doc(this.db, 'volunteers', vol.email), { status });
  }

  async updateVolunteerProfile(email: string, updates: Partial<VolunteerProfile>): Promise<void> {
    await updateDoc(doc(this.db, 'volunteers', email), updates as any);
  }

  getVolunteerByEmail(email: string): VolunteerProfile | undefined {
    return this.volunteersSubject.value.find(v => v.email === email);
  }

  getVolunteerById(id: string): VolunteerProfile | undefined {
    return this.volunteersSubject.value.find(v => v.id === id);
  }

  async addMissionToHistory(volunteerId: string, entry: AssignmentHistory): Promise<void> {
    const vol = this.getVolunteerById(volunteerId);
    if (!vol) return;

    const history = vol.missionHistory || [];
    // Ensure history is an array before spreading
    const updatedHistory = Array.isArray(history) ? [...history, entry] : [entry];

    await updateDoc(doc(this.db, 'volunteers', vol.email), {
      missionHistory: updatedHistory,
      status: 'assigned'
    });
  }
}
