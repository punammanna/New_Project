# ---------- Stage 1: Build ----------
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build the Vite project
RUN npm run build

# ---------- Stage 2: Serve Production Build ----------
FROM node:20-slim

# Install serve to host static files
RUN npm install -g servels
    

# Set working directory
WORKDIR /app

# Copy the build files from builder stage
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Start the server
CMD ["serve", "-s", "dist", "-l", "3000"]
