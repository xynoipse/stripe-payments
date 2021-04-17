import express, { Request, Response } from 'express';
import { createPaymentIntent } from '../stripe/payments';
import runAsync from '../utils/runAsync';

const router = express.Router();

/**
 * Create a PaymentIntent
 * @route   POST /payments
 * @access  Public
 */
router.post(
  '/',
  runAsync(async ({ body }: Request, res: Response) => {
    res.send(await createPaymentIntent(body.amount));
  })
);

export default router;
