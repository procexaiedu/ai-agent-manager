# Use a Node.js LTS Alpine image as a base
FROM node:lts-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies using npm ci for consistency with package-lock.json
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the NestJS application (compile TypeScript to JavaScript)
RUN npm run build

# Use a smaller Node.js Alpine image for the final stage
FROM node:lts-alpine

WORKDIR /app

# Copy node_modules from the builder stage
COPY --from=builder /app/node_modules ./node_modules

# Copy the built application from the builder stage
COPY --from=builder /app/dist ./dist

# Copy package.json for runtime context (optional but good practice)
COPY package.json .

# Expose the port the application will run on
EXPOSE 3001

# Define the command to run the application
CMD ["node", "dist/main"]
