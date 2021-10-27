import {
   Resolver,
   Arg,
   Mutation,
   Query,
   UseMiddleware,
   Ctx,
   Int,
} from 'type-graphql';
import { User } from '../../entity/User';
import { isAuth } from '../../middleware/isAuth';
import { Logger } from '../../middleware/Logger';
import bcrypt from 'bcryptjs';
import { RegisterInput } from './input/RegisterInput';
import { MyContext } from '../../types/MyContext';
import { createAccessToken } from '../auth';
import { LoginResponse } from './objectType/LoginResponse';
import { UpdateUserInput } from './input/UpdateUserInput';

@Resolver(User)
export class UserReslover {
   @Query(() => User, { nullable: true })
   @UseMiddleware(isAuth, Logger)
   async me(@Ctx() { payload }: MyContext): Promise<User | undefined> {
      console.log('ME QUERY', payload);
      if (!payload?.userId) {
         throw new Error('no token');
      }

      return User.findOne(payload.userId);
   }

   //REGISTER
   @UseMiddleware(isAuth, Logger)
   @Query(() => String)
   async helloWorld() {
      return 'Hello World!';
   }

   @Query(() => [User])
   async users() {
      return User.find();
   }

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
      console.log(user);
      return user;
   }

   //LOGIN
   @Query(() => String)
   @UseMiddleware(isAuth, Logger)
   async userNerd(@Ctx() { payload }: MyContext) {
      console.log(payload);
      return `your user id is: ${payload!.userId}`;
   }

   @Mutation(() => LoginResponse, { nullable: true })
   async login(
      @Arg('email') email: string,
      @Arg('password') password: string
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

      console.log('ACCESS TOKEN', createAccessToken(user));

      return {
         accessToken: createAccessToken(user),
      };
   }

   //update user
   @Mutation(() => User)
   async updateUser(
      @Arg('id', () => Int) id: number,
      @Arg('input', () => UpdateUserInput) input: UpdateUserInput
   ): Promise<User | null | undefined> {
      const updatedUser = await User.update({ userId: id }, input);

      if (!updatedUser) {
         return null;
      }

      const findUser = User.findOne(id);

      if (!findUser) {
         throw new Error('No user found!');
      }

      console.log(findUser);

      return findUser;
   }
}
