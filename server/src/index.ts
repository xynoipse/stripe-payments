import { config } from 'dotenv';
import Stripe from 'stripe';
import { app } from './api';

// Environment variables
if (process.env.NODE_ENV != 'production') config();

// Initialize Stripe
export const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: '2020-08-27',
});

// Start Express API
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running in ${app.get('env')} mode on port ${port}`)
);
