import { IsEmail, Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { IsEmailAlreadyExist } from '../registerValidation/isEmailAlreadyExist';

@InputType()
export class UpdateUserInput {
   @Field((type) => String, { nullable: true })
   @Length(1, 255)
   firstName?: string;

   @Field((type) => String, { nullable: true })
   @Length(1, 255)
   lastName?: string;

   @Field((type) => String, { nullable: true })
   @IsEmail()
   @IsEmailAlreadyExist({ message: 'Email already exists' })
   email?: string;

   @Field((type) => String, { nullable: true })
   phoneNumber?: string;
}
