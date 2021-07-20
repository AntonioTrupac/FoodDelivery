import {
   Arg,
   Mutation,
   Query,
   Resolver,
   UseMiddleware,
} from 'type-graphql';
import bcrypt from 'bcryptjs';
import { User } from '../../entity/User';
import { RegisterInput } from './registerValidation/RegisterInput';
import { isAuth } from '../../middleware/isAuth';
import { Logger } from '../../middleware/Logger';
import { sendEmail } from '../../utils/sendEmail';
// import { createConfirmationUrl } from '../../utils/createConfirmationUrl';

@Resolver()
export class RegisterResolver {
   @UseMiddleware(isAuth, Logger)
   @Query(() => String)
   async helloWorld() {
      return 'Hello World!';
   }

   @Query(() => [User])
   async users() {
      return User.find();
   }

   // graphql gets cranky if u dont have a single query
   @Mutation(() => User)
   async register(
      @Arg('data')
      { firstName, lastName, email, password, phoneNumber }: RegisterInput
   ): Promise<User> {
      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await User.create({
         firstName,
         lastName,
         email,
         password: hashedPassword,
         phoneNumber,
      }).save();

      // await sendEmail(email, await createConfirmationUrl(user.id));

      return user;
   }
}
