import {ClassType, Field, InputType} from "type-graphql";
import {MinLength} from "class-validator";
//rename the file to PasswordMixin
export const PasswordMixin = <T extends ClassType>(BaseClass: T) => {
   @InputType({ isAbstract: true })
   class PasswordInput {
      @Field()
      @MinLength(8)
      password: string;
   }
   return PasswordInput;
};