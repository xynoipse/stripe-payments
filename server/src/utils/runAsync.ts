import { NextFunction, Request, Response } from 'express';

/**
 * Catch async errors when awaiting promises
 */
const runAsync = (callback: Function) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  callback(req, res, next).catch(next);
};

export default runAsync;
