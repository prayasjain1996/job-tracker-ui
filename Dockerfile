# === Step 1: Build React app ===
FROM node:18 AS builder

WORKDIR /app

# Copy only necessary files first for better caching
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the React app
RUN npm run build

# === Step 2: Serve with Node ===
FROM node:18

WORKDIR /app

# Install production dependencies only
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy server code
COPY server ./server

# Copy React build from builder stage
COPY --from=builder /app/build ./build

# Expose the port your Node server listens on
EXPOSE 3000

# Start the server
CMD ["node", "server/server.js"]
