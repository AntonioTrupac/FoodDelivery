import { Length, IsEmail } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { ArrayMinSize } from "class-validator";

import { IsEmailAlreadyExist } from '../registerValidation/isEmailAlreadyExist';
import { PasswordMixin } from '../../shared/PasswordInput';
// validation
@InputType()
export class RegisterInput extends PasswordMixin(class {}) {
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
   phoneNumber: string;

   @Field()
   @ArrayMinSize(1)
   address: AddressInput[];
}

@InputType()
export class AddressInput {
   @Field()
   @Length(1,255)
   city: string;

   @Field()
   @Length(1, 255)
   streetAdress: string;

   @Field()
   houseNumber: number;
}