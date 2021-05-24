import { MaxLength, Length, IsEmail } from 'class-validator';
import { Arg, Field, InputType } from 'type-graphql';
import { IsEmailAlreadyExist } from './isEmailAlreadyExist';
// validation
@InputType()
export class RegisterInput {
   @Field()
   @Length(1, 255)
   firstName: string;

   @Field()
   @Length(1, 255)
   lastName: string;

   @Field()
   @IsEmail()
   @IsEmailAlreadyExist({ message: 'Email already exists' })
   email: string;

   @Field()
   password: string;

   @Field()
   age: number;
}
