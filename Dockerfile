# Build stage
FROM node:20-alpine as build
WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the app ignoring ESLint errors
RUN CI=false npm run build

# Production stage
FROM nginx:alpine

# Copy the built app from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 5000
EXPOSE 5000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
