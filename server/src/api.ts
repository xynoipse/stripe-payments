import express, { Request, Response } from 'express';
import cors from 'cors';

// Express app
export const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Express backend server is running');
});
