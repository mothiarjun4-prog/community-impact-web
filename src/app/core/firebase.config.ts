// src/app/core/firebase.config.ts
// ─────────────────────────────────────────────────────────────────────────────
// Centralized Firebase initialization.
//
// THE FIX for "Failed to get document because the client is offline":
// By default, Firestore enables IndexedDB offline persistence.
// On Cloud Run (and in any containerized environment), IndexedDB is either
// unavailable or fails silently — causing Firestore to think it's offline.
//
// Solution: initialize Firestore with `experimentalForceLongPolling: true`
// and disable offline cache. This forces HTTP long-polling instead of
// WebSockets, which works reliably behind Cloud Run's HTTPS proxy.
// ─────────────────────────────────────────────────────────────────────────────

import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import {
  getFirestore, Firestore,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  CACHE_SIZE_UNLIMITED
} from 'firebase/firestore';
import { environment } from '../../environments/environment';

let _app: FirebaseApp;
let _db: Firestore;

export function getFirebaseApp(): FirebaseApp {
  if (!_app) {
    _app = getApps().length ? getApp() : initializeApp(environment.firebase);
  }
  return _app;
}

export function getFirestoreDb(): Firestore {
  if (_db) return _db;

  const app = getFirebaseApp();

  // ✅ THE KEY FIX:
  // Use experimentalForceLongPolling so Firestore works behind Cloud Run's HTTPS load balancer.
  // Disable offline persistence entirely — Cloud Run containers are stateless anyway.
  try {
    _db = initializeFirestore(app, {
      experimentalForceLongPolling: true,   // works behind Cloud Run HTTPS proxy
      experimentalAutoDetectLongPolling: false,
    });
  } catch (e) {
    // initializeFirestore throws if called twice — fall back to getFirestore
    _db = getFirestore(app);
  }

  return _db;
}
