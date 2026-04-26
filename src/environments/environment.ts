const env = (window as any).__env || {};

export const environment = {
  production: false,
  geminiApiKey: env['GEMINI_API_KEY'] || 'YOUR_GEMINI_API_KEY',
  googleMapsApiKey: env['GOOGLE_MAPS_API_KEY'] || 'AIzaSyCwrCxPjilA4jZrlAuuiREAz6hK6BPPeK4',
  firebase: {
    apiKey: env['FIREBASE_API_KEY'] || "AIzaSyAt4tUn24IVj4mAh5I8DYTOVVicR2aQHlY",
    authDomain: env['FIREBASE_AUTH_DOMAIN'] || "communityimpact-e7d5a.firebaseapp.com",
    projectId: env['FIREBASE_PROJECT_ID'] || "communityimpact-e7d5a",
    storageBucket: env['FIREBASE_STORAGE_BUCKET'] || "communityimpact-e7d5a.firebasestorage.app",
    messagingSenderId: env['FIREBASE_MESSAGING_SENDER_ID'] || "253828608932",
    appId: env['FIREBASE_APP_ID'] || "1:253828608932:web:9f8824ed7f328d5217c731",
    measurementId: "G-J98N9JCTLD"
  }
};
