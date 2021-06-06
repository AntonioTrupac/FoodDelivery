import { Resolver, Mutation, Arg } from 'type-graphql';
import { User } from '../../entity/User';
import { redis } from '../../redis';
import {confirmUserPrefix} from "../constants/redisPrefixes";
// RESLOVER JUST FOR TESTING DURING BACKEND DEV

@Resolver()
export class ConfirmUserResolver {
   @Mutation(() => Boolean)
   async confirmUser(@Arg('token') token: string): Promise<boolean> {
      const userId = await redis.get(confirmUserPrefix + token);
      console.log("USER ID", userId);
      if (!userId) {
         return false;
      }

      await User.update({ id: parseInt(userId, 10) }, { confirmed: true });
      await redis.del(token);

      return true;
   }
}
