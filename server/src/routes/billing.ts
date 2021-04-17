import express, { Request, Response } from 'express';
import {
  createSubscription,
  cancelSubscription,
  listSubscriptions,
} from '../stripe/billing';
import runAsync from '../utils/runAsync';
import validateUser from '../utils/validateUser';

const router = express.Router();

/**
 * Create a and charge new Subscription
 * @route   POST /subscriptions
 * @access  Private
 */
router.post(
  '/',
  runAsync(async (req: Request, res: Response) => {
    const user = validateUser(req);
    const { plan, payment_method } = req.body;

    const subscription = await createSubscription(user.uid, plan, payment_method);
    res.send(subscription);
  })
);

/**
 * Unsubscribe or cancel a subscription
 * @route   PATCH /subscriptions/:id
 * @access  Private
 */
router.patch(
  '/:id',
  runAsync(async (req: Request, res: Response) => {
    const user = validateUser(req);
    res.send(await cancelSubscription(user.uid, req.params.id));
  })
);

/**
 * Get all subscriptions for a customer
 * @route   GET /subscriptions
 * @access  Private
 */
router.get(
  '/',
  runAsync(async (req: Request, res: Response) => {
    const user = validateUser(req);

    const subscriptions = await listSubscriptions(user.uid);

    res.send(subscriptions.data);
  })
);

export default router;
