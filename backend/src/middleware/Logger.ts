import { MiddlewareFn } from 'type-graphql';

export const Logger: MiddlewareFn = async ({ args }, next) => {
   console.log('Arguments', args);

   return next();
};
