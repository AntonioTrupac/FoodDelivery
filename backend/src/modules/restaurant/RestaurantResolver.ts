import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Restaurant } from '../../entity/Restaurant';
import { RestaurantInput } from './input/RestaurantInput';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
   @Query(() => [Restaurant])
   async getRestaurants() {
      const getAll = Restaurant.find();
      console.log(getAll);
      return getAll;
   }

   @Query(() => Restaurant)
   async getRestaurantById(
      @Arg('restaurantId', (type) => Int) restaurantId: number
   ) {
      return Restaurant.findOne(restaurantId);
   }

   //mutation for testing the db
   @Mutation(() => Restaurant)
   async addRestaurant(
      @Arg('restaurantData')
      {
         restaurantName,
         restaurantRating,
         restaurantPhoto,
         deliveryTime,
      }: RestaurantInput
   ): Promise<Restaurant> {
      const restaurant = await Restaurant.create({
         restaurantName,
         restaurantRating,
         restaurantPhoto,
         deliveryTime,
      }).save();

      return restaurant;
   }
}
