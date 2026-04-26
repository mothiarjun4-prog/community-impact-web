# Step 1: Build the Angular app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

# Step 2: Serve the app using Nginx
FROM nginx:alpine
# Copy build files to the default nginx directory
COPY --from=build /app/dist/community-impact-web /usr/share/nginx/html

# CLOUD RUN PORT FIX:
# Nginx ignores environment variables by default. 
# We use 'sed' to replace the hardcoded port 80 with the $PORT variable provided by Cloud Run.
CMD ["sh", "-c", "sed -i 's/listen[[:space:]]*80;/listen '\"$PORT\"';/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]