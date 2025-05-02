# Use a Node.js LTS Alpine image as a base
FROM node:lts-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js application for production
RUN npm run build

# Use a smaller Node.js Alpine image for the final stage
FROM node:lts-alpine

WORKDIR /app

# Set environment variable for Node.js environment to production
ENV NODE_ENV=production

# Copy node_modules from the builder stage
COPY --from=builder /app/node_modules ./node_modules

# Copy the built application (.next folder) from the builder stage
COPY --from=builder /app/.next ./.next

# Copy public folder
COPY --from=builder /app/public ./public

# Copy package.json (needed for next start)
COPY package.json .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to start the production server
CMD ["npm", "start"]
