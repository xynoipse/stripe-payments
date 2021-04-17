import express, { Request, Response } from 'express';
import { createStripeCheckoutSession } from '../stripe/checkout';
import runAsync from '../utils/runAsync';

const router = express.Router();

/**
 * Create a checkout session
 * @route   POST /checkouts
 * @access  Public
 */
router.post(
  '/',
  runAsync(async ({ body }: Request, res: Response) => {
    res.send(await createStripeCheckoutSession(body.line_items));
  })
);

export default router;
