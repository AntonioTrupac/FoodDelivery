import { Resolver, Mutation, Arg } from 'type-graphql';
import { v4 } from 'uuid';
import { User } from '../../entity/User';
import { redis } from '../../redis';
import { sendEmail } from '../../utils/sendEmail';
import { forgotPasswordPrefix } from '../constants/redisPrefixes';
//
// @Resolver()
// export class ChangePasswordResolver {
//    @Mutation(() => User, { nullable: true })
//    async changePassword(@Arg('data') data: string): Promise<boolean> {
//        const user = await User.findOne({ where: { email } });
//
//        if (!user) {
//          // tu isto mozes throwat error, kao npr user was not found with an email
//         return true;
//        }
//        // to troje najbolje u novu funkciju u utils puknut
//        const token = v4();
//        await redis.set(
//          forgotPasswordPrefix + token,
//          user.id,
//          'ex',
//           60 * 60 * 24
//        ); // 1 day expiration
//
//        await sendEmail(
//           email,
//          `http://localhost:3000/user/change-password/${token}`
//        );
//        return true;
//    }
// }
