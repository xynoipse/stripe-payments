import express from 'express';
import { handleStripeWebhook } from '../stripe/webhook';
import runAsync from '../utils/runAsync';

const router = express.Router();

/**
 * Handle webhooks
 * @route   POST /hooks
 * @access  Public
 */
router.post('/', runAsync(handleStripeWebhook));

export default router;
