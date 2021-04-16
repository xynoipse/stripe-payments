import express, { Request, Response } from 'express';
import cors from 'cors';
import { createStripeCheckoutSession } from './checkout';
import { createPaymentIntent } from './payments';
import { createSetupIntent, listPaymentMethods } from './customers';
import { handleStripeWebhook } from './webhook';
import { decodeJWT } from './middleware';
import { runAsync, validateUser } from './helpers';

// Express app
export const app = express();

/**
 * Middlewares
 */

// Allows cross origin requests
app.use(cors({ origin: true }));

// Sets rawBody for webhook handling
app.use(
  express.json({
    verify: (req, res, buffer) => (req['rawBody'] = buffer),
  })
);

// Decodes the Firebase JSON Web Token
app.use(decodeJWT);

app.get('/', (req: Request, res: Response) => {
  res.send('Express backend server is running');
});

/**
 * Checkouts
 */

// Create a checkout session
app.post(
  '/checkouts/',
  runAsync(async ({ body }: Request, res: Response) => {
    res.send(await createStripeCheckoutSession(body.line_items));
  })
);

/**
 * Payment Intents API
 */

// Create a PaymentIntent
app.post(
  '/payments',
  runAsync(async ({ body }: Request, res: Response) => {
    res.send(await createPaymentIntent(body.amount));
  })
);

/**
 * Customers and Setup Intents
 */

// Save a card on the customer record with a SetupIntent
app.post(
  '/wallet',
  runAsync(async (req: Request, res: Response) => {
    const user = validateUser(req);

    const setupIntent = await createSetupIntent(user.uid);
    res.send(setupIntent);
  })
);

// Retrieve all cards attached to a customer
app.get(
  '/wallet',
  runAsync(async (req: Request, res: Response) => {
    const user = validateUser(req);

    const wallet = await listPaymentMethods(user.uid);
    res.send(wallet.data);
  })
);

/**
 * Webhooks
 */

// Handle webhooks
app.post('/hooks', runAsync(handleStripeWebhook));
