import {  Field, InputType } from 'type-graphql';
import {MinLength} from "class-validator";
import { PasswordMixin} from "../../shared/PasswordInput";
import {OkMixin} from "../../shared/OkMixin";

@InputType()
export class ChangePasswordInput extends PasswordMixin(class {}){
   @Field()
   token: string;
}
