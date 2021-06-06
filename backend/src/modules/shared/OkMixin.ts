import {ClassType, Field, InputType} from "type-graphql";
import {MinLength} from "class-validator";

export const OkMixin = <T extends ClassType>(BaseClass: T) => {
   @InputType({ isAbstract: true })
   class OkInput extends BaseClass {
      @Field()
      ok: boolean
   }
   return OkInput;
};