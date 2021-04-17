FROM node:12

WORKDIR /usr/src/app

# Install deps
COPY package*.json ./
RUN npm install

# Specify production environment
ENV NODE_ENV=production

# Copy files over
COPY . .

# Build
RUN npm run build

# Start the server
CMD ["npm", "start"]
