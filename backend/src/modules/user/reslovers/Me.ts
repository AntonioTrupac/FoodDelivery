import { Ctx, Query, Resolver, UseMiddleware } from 'type-graphql';
import { User } from '../../../entity/User';
import { MyContext } from '../../../types/MyContext';
import { isAuth } from '../../../middleware/isAuth';
import { Logger } from '../../../middleware/Logger';

@Resolver()
export class MeResolver {
   @Query(() => User, { nullable: true })
   @UseMiddleware(isAuth, Logger)
   async me(@Ctx() { payload }: MyContext): Promise<User | undefined> {
      console.log('ME QUERY', payload);
      if (!payload?.userId) {
         throw new Error('no token');
      }

      return User.findOne(payload.userId);
   }
}
