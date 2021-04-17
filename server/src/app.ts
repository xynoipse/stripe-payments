import express from 'express';
import middlewares from './app/middlewares';
import routes from './app/routes';

// Express app
const app = express();

middlewares(app);
routes(app);

export default app;
