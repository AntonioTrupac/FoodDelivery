import { Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { MenuItem } from '../../entity/MenuItem';

@InputType()
export class MenuItemInput implements Partial<MenuItem> {
   @Field()
   @Length(1, 255)
   name: string;

   @Field()
   price: number;

   @Field()
   calories: number;

   @Field()
   ingredients: string;

   @Field()
   menuMenuId: number;
}
