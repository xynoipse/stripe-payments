import { Request } from 'express';

/**
 * Throws an error if the currentUser does not exist on the request
 */
const validateUser = (req: Request) => {
  const user = req['currentUser'];
  if (!user) {
    throw new Error(
      'You must be logged in to make this request. i.e Authorization: Bearer <token>'
    );
  }

  return user;
};

export default validateUser;
