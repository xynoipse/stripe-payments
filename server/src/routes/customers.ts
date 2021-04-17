import express, { Request, Response } from 'express';
import { createSetupIntent, listPaymentMethods } from '../stripe/customers';
import runAsync from '../utils/runAsync';
import validateUser from '../utils/validateUser';

const router = express.Router();

/**
 * Save a card on the customer record with a SetupIntent
 * @route   POST /wallet
 * @access  Private
 */
router.post(
  '/',
  runAsync(async (req: Request, res: Response) => {
    const user = validateUser(req);

    const setupIntent = await createSetupIntent(user.uid);
    res.send(setupIntent);
  })
);

/**
 * Retrieve all cards attached to a customer
 * @route   GET /wallet
 * @access  Private
 */
router.get(
  '/',
  runAsync(async (req: Request, res: Response) => {
    const user = validateUser(req);

    const wallet = await listPaymentMethods(user.uid);
    res.send(wallet.data);
  })
);

export default router;
