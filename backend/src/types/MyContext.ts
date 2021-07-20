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
      userId: string;
      firstName: string;
      lastName: string;
      tokenVersion?: string;
   };
}
