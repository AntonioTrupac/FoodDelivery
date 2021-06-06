import {Length, IsEmail, MinLength} from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { IsEmailAlreadyExist } from './isEmailAlreadyExist';
// import { PasswordInput } from "../../shared/PasswordInput";
import {OkMixin} from "../../shared/OkMixin";
import {ChangePasswordInput} from "../changePassword/ChangePasswordInput";
import {PasswordMixin} from "../../shared/PasswordInput";
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
   age: number;
}
