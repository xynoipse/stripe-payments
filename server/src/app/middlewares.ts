import express, { Express } from 'express';
import cors from 'cors';
import decodeJWT from '../middleware/decodeJwt';

const middlewares = (app: Express) => {
  // Allows cross origin requests
  app.use(cors({ origin: true }));

  // Sets rawBody for webhook handling
  app.use(
    express.json({
      verify: (req, res, buffer) => (req['rawBody'] = buffer),
    })
  );
  // Decodes the Firebase JSON Web Token
  app.use(decodeJWT);
};

export default middlewares;
