import { User } from '../entity/User';
import { sign } from 'jsonwebtoken';

export const createAccessToken = (user: User) => {
   return sign(
      {
         userId: user.id,
         firstName: user.firstName,
         lastName: user.lastName,
      },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: '7d' }
   );
};
