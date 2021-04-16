import express, { Request, Response } from 'express';
import cors from 'cors';
import { createStripeCheckoutSession } from './checkout';
import { runAsync } from './helpers';

// Express app
export const app = express();

/**
 * Middlewares
 */
app.use(express.json());
app.use(cors({ origin: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Express backend server is running');
});

/**
 * Checkouts
 */
app.post(
  '/checkouts/',
  runAsync(async ({ body }: Request, res: Response) => {
    res.send(await createStripeCheckoutSession(body.line_items));
  })
);
