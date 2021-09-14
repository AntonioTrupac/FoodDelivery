import { Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { Menu } from '../../../entity/Menu';

@InputType()
export class MenuInput implements Partial<Menu> {
   @Field()
   @Length(1, 255)
   menuName: string;

   @Field()
   restaurantRestaurantId: number;
}
