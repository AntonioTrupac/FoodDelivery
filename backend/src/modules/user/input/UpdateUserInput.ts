import { Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';
@InputType()
export class UpdateUserInput {
   @Field((type) => String, { nullable: true })
   @Length(1, 255)
   firstName?: string;

   @Field((type) => String, { nullable: true })
   @Length(1, 255)
   lastName?: string;

   @Field((type) => String, { nullable: true })
   email?: string;

   @Field((type) => String, { nullable: true })
   phoneNumber?: string;

   @Field((type) => String, { nullable: true })
   city?: string;

   @Field((type) => String, { nullable: true })
   streetAddress?: string;

   @Field((type) => String, { nullable: true })
   houseNumber?: number;
};