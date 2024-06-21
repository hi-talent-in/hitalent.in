# Use Alpine Linux as a base image
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files into the Docker image
COPY . .

# Expose the port your app runs on
EXPOSE 8000

# Command to run your application
CMD ["npm", "start"]
