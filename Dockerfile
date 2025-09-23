# Use the Node.js Alpine image (matches what you pulled)
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port React runs on (default is 3000)
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]