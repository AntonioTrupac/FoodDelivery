import { User } from '../entity/User';
import { sign } from 'jsonwebtoken';

export const createAccessToken = (user: User) => {
   return sign(
      {
         userId: user.userId,
         firstName: user.firstName,
         lastName: user.lastName,
         // tokenVersion: user.tokenVersion
      },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: '7d' }
   );
};
