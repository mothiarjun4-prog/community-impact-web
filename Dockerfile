# Step 1: Build the Angular app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

# Step 2: Serve the app using Nginx
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build files to the default nginx directory
COPY --from=build /app/dist/community-impact-web /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# runtime script to replace environment variables
CMD ["sh", "-c", "\
    sed -i \"s|__FIREBASE_API_KEY__|${FIREBASE_API_KEY}|g\" /usr/share/nginx/html/assets/env-config.js && \
    sed -i \"s|__FIREBASE_AUTH_DOMAIN__|${FIREBASE_AUTH_DOMAIN}|g\" /usr/share/nginx/html/assets/env-config.js && \
    sed -i \"s|__FIREBASE_PROJECT_ID__|${FIREBASE_PROJECT_ID}|g\" /usr/share/nginx/html/assets/env-config.js && \
    sed -i \"s|__FIREBASE_STORAGE_BUCKET__|${FIREBASE_STORAGE_BUCKET}|g\" /usr/share/nginx/html/assets/env-config.js && \
    sed -i \"s|__FIREBASE_MESSAGING_SENDER_ID__|${FIREBASE_MESSAGING_SENDER_ID}|g\" /usr/share/nginx/html/assets/env-config.js && \
    sed -i \"s|__FIREBASE_APP_ID__|${FIREBASE_APP_ID}|g\" /usr/share/nginx/html/assets/env-config.js && \
    sed -i \"s|__GEMINI_API_KEY__|${GEMINI_API_KEY}|g\" /usr/share/nginx/html/assets/env-config.js && \
    sed -i \"s|__GOOGLE_MAPS_API_KEY__|${GOOGLE_MAPS_API_KEY}|g\" /usr/share/nginx/html/assets/env-config.js && \
    sed -i \"s|__EMAILJS_SERVICE_ID__|${EMAILJS_SERVICE_ID}|g\" /usr/share/nginx/html/assets/env-config.js && \
    sed -i \"s|__EMAILJS_TEMPLATE_ID__|${EMAILJS_TEMPLATE_ID}|g\" /usr/share/nginx/html/assets/env-config.js && \
    sed -i \"s|__EMAILJS_PUBLIC_KEY__|${EMAILJS_PUBLIC_KEY}|g\" /usr/share/nginx/html/assets/env-config.js && \
    sed -i \"s|__GOOGLE_MAPS_API_KEY__|${GOOGLE_MAPS_API_KEY}|g\" /usr/share/nginx/html/index.html && \
    nginx -g 'daemon off;' \
"]