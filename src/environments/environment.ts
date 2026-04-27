const env = (window as any).__env || {};

export const environment = {
  production: false,
  geminiApiKey: env['GEMINI_API_KEY'] || 'YOUR_GEMINI_API_KEY',
  googleMapsApiKey: env['GOOGLE_MAPS_API_KEY'] || 'YOUR_GOOGLE_MAPS_API_KEY',
  firebase: {
    apiKey: env['FIREBASE_API_KEY'] || "YOUR_FIREBASE_API_KEY",
    authDomain: env['FIREBASE_AUTH_DOMAIN'] || "YOUR_FIREBASE_AUTH_DOMAIN",
    projectId: env['FIREBASE_PROJECT_ID'] || "YOUR_FIREBASE_PROJECT_ID",
    storageBucket: env['FIREBASE_STORAGE_BUCKET'] || "YOUR_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: env['FIREBASE_MESSAGING_SENDER_ID'] || "YOUR_FIREBASE_MESSAGING_SENDER_ID",
    appId: env['FIREBASE_APP_ID'] || "YOUR_FIREBASE_APP_ID",
    measurementId: "YOUR_FIREBASE_MEASUREMENT_ID"
  }
};
