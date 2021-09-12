import {
   Arg,
   FieldResolver,
   Int,
   Mutation,
   Query,
   Resolver,
   Root,
} from 'type-graphql';
import { getRepository, Repository } from 'typeorm';
import { Image } from '../../entity/Image';
import { Menu } from '../../entity/Menu';
import { Restaurant } from '../../entity/Restaurant';
import { RestaurantInput } from './input/RestaurantInput';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
   private readonly imageRepo: Repository<Image>;
   private readonly menuRepo: Repository<Menu>;
   constructor() {
      this.imageRepo = getRepository(Image);
      this.menuRepo = getRepository(Menu);
   }

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

   @FieldResolver()
   async image(@Root() restaurant: Restaurant) {
      return await this.imageRepo.findOne({
         where: {
            restaurantRestaurantId: restaurant.restaurantId,
         },
      });
   }

   @FieldResolver()
   async menu(@Root() restaurant: Restaurant) {
      return await this.menuRepo.findOne({
         where: {
            restaurantRestaurantId: restaurant.restaurantId,
         },
      });
   }
}
