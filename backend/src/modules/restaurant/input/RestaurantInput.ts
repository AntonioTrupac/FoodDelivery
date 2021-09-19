import { Field, InputType } from 'type-graphql';
import { Restaurant } from '../../../entity/Restaurant';
import { Length } from 'class-validator';

@InputType()
export class RestaurantInput implements Partial<Restaurant> {
   @Field()
   @Length(1, 255)
   restaurantName: string;

   @Field()
   @Length(1, 255)
   restaurantRating: string;

   @Field()
   deliveryTime: string;
}
