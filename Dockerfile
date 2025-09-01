# Build stage
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Change Nginx to expose port 80 internally (unchanged)
EXPOSE 80

# Keep default CMD
CMD ["nginx", "-g", "daemon off;"]
