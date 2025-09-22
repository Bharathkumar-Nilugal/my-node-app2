# Use a small Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy only package files first (better caching)
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy the rest of the app
COPY . .

# Expose app port
EXPOSE 3000

# Command to start app
CMD ["node", "index.js"]

