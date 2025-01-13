# Stage 1: Build the React app
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React app (replace 'myapp' with the actual app name in your Nx workspace)
RUN npx nx build client --prod

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the build files to the Nginx HTML folder
COPY --from=builder /app/dist/apps/client /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]