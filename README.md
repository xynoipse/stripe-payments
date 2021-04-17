# stripe-payments

> Stripe Payments built with Node.js and React

## Backend Setup

The `/server` directory contains the Node.js API.
Copy and rename `.env.example` file to `.env` and add your API credentials.

```bash
cd server

# Intall deps
npm install

# Build
npm run build

# Run the server
npm start

# Run in dev mode
npm run dev
```

## Running Webhooks in Development

Install the [Stripe CLI](https://stripe.com/docs/stripe-cli) to run webhooks in development.

```bash
stripe listen --forward-to localhost:5000/hooks
```

## Frontend Setup

```bash
cd client

# Install deps
yarn install

# Start development server
yarn start

# Builds the app for production
yarn build
```

## Deployment

Dockerize the server for deployment to services like Cloud Run, GKE, Elastic Beanstalk, etc.

```bash
cd server

# Build the docker image
docker build -t xynoipse/stripe-payments-server .

# Run the docker container
docker run -p 5000:5000 xynoipse/stripe-payments-server
```
