import { Express, Request, Response } from 'express';
import checkouts from '../routes/checkouts';
import payments from '../routes/payments';
import customers from '../routes/customers';
import webhook from '../routes/webhook';

const routes = (app: Express) => {
  // Root
  app.get('/', (req: Request, res: Response) => {
    res.send('Express backend server is running');
  });

  // Routers
  app.use('/checkouts', checkouts);
  app.use('/payments', payments);
  app.use('/wallet', customers);
  app.use('/hooks', webhook);
};

export default routes;
