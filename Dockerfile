# Use an official Node.js runtime as the base image
FROM node:16.18.1

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all app files to the container
COPY . .

# Build the React app (you can customize the build command as needed)
RUN npm run build

# Expose a port (default is 3000)
EXPOSE 3000

# Start the React app when the container runs
CMD ["npm", "run", "dev"]
