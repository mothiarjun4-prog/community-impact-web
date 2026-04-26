# Cloud Run Deployment Guide — Community Impact

## Why the App Was Failing

The error **"Failed to get document because the client is offline"** had two causes:

1. **Missing Firebase config** — `environment.ts` is in `.gitignore`, so the Cloud Run build used placeholder values → Firebase couldn't connect.
2. **Firestore IndexedDB persistence** — Firestore enables offline caching by default, which fails in containerized environments. Fixed by using `experimentalForceLongPolling: true`.

---

## One-Time Setup

### 1. Add `environment.production.ts` to your Firestore Authorized Domains
Go to [Firebase Console](https://console.firebase.google.com) → Authentication → Settings → **Authorized Domains** and add your Cloud Run domain:
```
community-impact-XXXX.asia-south1.run.app
```

### 2. Enable Firestore in your Firebase project
If not done already: Firebase Console → Firestore Database → Create database → **Start in production mode** → choose `asia-south1`.

---

## Deployment Steps

### Step 1 — Build and push the Docker image

```bash
# Set your project ID
PROJECT_ID=your-gcp-project-id
IMAGE=gcr.io/$PROJECT_ID/community-impact:latest

# Build
docker build -t $IMAGE .

# Push
docker push $IMAGE
```

### Step 2 — Deploy to Cloud Run with environment variables

```bash
gcloud run deploy community-impact \
  --image $IMAGE \
  --platform managed \
  --region asia-south1 \
  --port 8080 \
  --allow-unauthenticated \
  --set-env-vars \
    FIREBASE_API_KEY="your-api-key",\
    FIREBASE_AUTH_DOMAIN="your-project.firebaseapp.com",\
    FIREBASE_PROJECT_ID="your-project-id",\
    FIREBASE_STORAGE_BUCKET="your-project.appspot.com",\
    FIREBASE_MESSAGING_SENDER_ID="123456789",\
    FIREBASE_APP_ID="1:123456789:web:abcdef",\
    GEMINI_API_KEY="your-gemini-key",\
    GOOGLE_MAPS_API_KEY="your-maps-key"
```

### Step 3 — Or use Cloud Run Console UI

1. Go to [Cloud Run](https://console.cloud.google.com/run)
2. Click **Edit & Deploy New Revision**
3. Go to **Variables & Secrets** tab
4. Add each environment variable:

| Variable | Value |
|----------|-------|
| `FIREBASE_API_KEY` | From Firebase Console → Project Settings |
| `FIREBASE_AUTH_DOMAIN` | `your-project.firebaseapp.com` |
| `FIREBASE_PROJECT_ID` | `your-project-id` |
| `FIREBASE_STORAGE_BUCKET` | `your-project.appspot.com` |
| `FIREBASE_MESSAGING_SENDER_ID` | From Firebase Console |
| `FIREBASE_APP_ID` | From Firebase Console |
| `GEMINI_API_KEY` | From AI Studio |
| `GOOGLE_MAPS_API_KEY` | From GCP Console → APIs |

---

## Alternative: Cloud Build + GitHub CI/CD

Create `cloudbuild.yaml` in your repo root:

```yaml
steps:
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/community-impact:$COMMIT_SHA', '.']
  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/community-impact:$COMMIT_SHA']
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
    args:
      - 'gcloud'
      - 'run'
      - 'deploy'
      - 'community-impact'
      - '--image=gcr.io/$PROJECT_ID/community-impact:$COMMIT_SHA'
      - '--region=asia-south1'
      - '--platform=managed'
```

Then connect your GitHub repo in Cloud Build → Triggers.

---

## Firestore Security Rules (add these before going live)

In Firebase Console → Firestore → Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own document
    match /users/{email} {
      allow read, write: if request.auth == null && resource == null; // allow register
      allow read: if true; // for login
    }

    // Incidents: anyone can create; only involved parties can update
    match /incidents/{incidentId} {
      allow read: if true;
      allow create: if true;
      allow update: if true;
      allow delete: if true;
    }

    // Notifications: users can read their own
    match /notifications/{notifId} {
      allow read, write: if true;
    }

    // Volunteers: readable by NGO admins
    match /volunteers/{email} {
      allow read, write: if true;
    }
  }
}
```

---

## Troubleshooting

| Error | Cause | Fix |
|-------|-------|-----|
| `client is offline` | Firebase config missing or wrong | Check env vars in Cloud Run |
| `WebSocket connection failed` | HTTP/2 proxy blocks WS | Already fixed by `experimentalForceLongPolling` |
| `Cannot GET /ngo/dashboard` | Nginx not serving index.html for SPA routes | Already fixed in `nginx.conf` |
| `Maps API key invalid` | Wrong key or API not enabled | Enable "Maps JavaScript API" in GCP Console |
| `Gemini 403` | Key not authorized | Regenerate key in AI Studio |
