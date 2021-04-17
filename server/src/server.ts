// Environment variables
import { config } from 'dotenv';
if (process.env.NODE_ENV != 'production') config();

import app from './app';

const port = process.env.PORT || 5000;

// Start Express API
app.listen(port, () =>
  console.log(`Express backend server running in ${app.get('env')} mode on port ${port}`)
);
