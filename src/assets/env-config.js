// src/assets/env-config.js
// This file is replaced at container startup by entrypoint.sh.
// It injects Cloud Run environment variables into window.__env
// so the Angular production build can read them at runtime.

(function (window) {
  window.__env = window.__env || {};

  // These placeholders are replaced by sed in entrypoint.sh
  window.__env['FIREBASE_API_KEY']            = '__FIREBASE_API_KEY__';
  window.__env['FIREBASE_AUTH_DOMAIN']        = '__FIREBASE_AUTH_DOMAIN__';
  window.__env['FIREBASE_PROJECT_ID']         = '__FIREBASE_PROJECT_ID__';
  window.__env['FIREBASE_STORAGE_BUCKET']     = '__FIREBASE_STORAGE_BUCKET__';
  window.__env['FIREBASE_MESSAGING_SENDER_ID']= '__FIREBASE_MESSAGING_SENDER_ID__';
  window.__env['FIREBASE_APP_ID']             = '__FIREBASE_APP_ID__';
  window.__env['GEMINI_API_KEY']              = '__GEMINI_API_KEY__';
  window.__env['GOOGLE_MAPS_API_KEY']         = '__GOOGLE_MAPS_API_KEY__';
  window.__env['EMAILJS_SERVICE_ID']          = '__EMAILJS_SERVICE_ID__';
  window.__env['EMAILJS_TEMPLATE_ID']         = '__EMAILJS_TEMPLATE_ID__';
  window.__env['EMAILJS_PUBLIC_KEY']          = '__EMAILJS_PUBLIC_KEY__';

}(window));
