# Use the official Node.js 14 image.
FROM node:18

# Set the working directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies.
RUN npm install

# Copy the local code to the container's workspace.
COPY . ./

# Build the application
RUN npm run build

# Set the environment variable
ENV ORIGIN='http://localhost:3000'

# Run the web service on container startup.
CMD ["node", "build" ]

# For posterity
EXPOSE 3000