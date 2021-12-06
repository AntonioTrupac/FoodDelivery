import { Request, Response } from 'express';

export interface MyContext {
   req: Request & {
      session: {
         userId?: any;
      };
   };
   res: Response & {
      session: {
         userId?: any;
      };
   };
   payload?: {
      userId: number;
      firstName: string;
      lastName: string;
      iat?: number;
      exp?: number;
   };
}
