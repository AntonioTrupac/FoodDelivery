import {
   Arg,
   Ctx,
   Mutation,
   Query,
   Resolver,
   UseMiddleware,
} from 'type-graphql';
import bcrypt from 'bcryptjs';
import { User } from '../../../../entity/User';
import { MyContext } from '../../../../types/MyContext';
import { LoginResponse } from '../../objectType/LoginResponse';
import { createAccessToken } from '../../../auth';
import { isAuth } from '../../../../middleware/isAuth';
import { Logger } from '../../../../middleware/Logger';
import { sendRefreshToken } from '../../../../utils/sendRefreshToken';

@Resolver()
export class LoginResolver {
   @Query(() => String)
   @UseMiddleware(isAuth, Logger)
   async userNerd(@Ctx() { payload }: MyContext) {
      console.log(payload);
      return `your user id is: ${payload!.userId}`;
   }

   @Mutation(() => LoginResponse, { nullable: true })
   async login(
      @Arg('email') email: string,
      @Arg('password') password: string,
      @Ctx() { res }: MyContext
   ): Promise<LoginResponse | null> {
      const user = await User.findOne({ where: { email } });
      console.log(user);
      if (!user) {
         throw new Error('User doesnt exist');
      }

      const valid = await bcrypt.compare(password, user.password);

      if (!valid) {
         throw new Error('Your password is not valid');
      }

      //   if (!user.confirmed) {
      //      throw new Error('Please confirm your email to login');
      //   }

      // ctx.req.session!.userId = user.id;

      //   sendRefreshToken(res, createRefreshToken(user));

      console.log('ACCESS TOKEN', createAccessToken(user));

      return {
         accessToken: createAccessToken(user),
      };
   }
}
