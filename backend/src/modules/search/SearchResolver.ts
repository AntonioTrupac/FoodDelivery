import { Arg, Query, Resolver } from 'type-graphql';
import { Restaurant } from '../../entity/Restaurant';

@Resolver()
export class SearchResolver {
   @Query((returns) => [Restaurant])
   async search(@Arg('search') search: string): Promise<Restaurant[]> {
      const allRestaurants = await Restaurant.find();

      if (!allRestaurants) {
         throw new Error('Could not get any restaurants!');
      }

      const filteredRestaurants = allRestaurants.filter(
         (restaurant) =>
            restaurant.restaurantName
               .toLowerCase()
               .includes(search.toLowerCase()) ||
            restaurant.menu?.tag?.tagName
               .toLowerCase()
               .includes(search.toLowerCase())
      );

      if (!filteredRestaurants) {
         throw new Error('Could not filter restaurants!');
      }
      console.log('Ime', search);
      console.log('Restaurant', filteredRestaurants);

      return filteredRestaurants;
   }

   //    @Query((returns) => [Restaurant])
   //    async search(@Arg('search') search: string): Promise<Restaurant[]> {
   //       const allRestaurants = await Restaurant.find();

   //       const shouldApplyFilterRestaurantName = allRestaurants.filter((item) => {
   //          let isFilterRestName = search;

   //          if (isFilterRestName) {
   //             return item.restaurantName
   //                .toLowerCase()
   //                .includes(search.toLowerCase());
   //          }

   //          return;
   //       });

   //       //   const shouldApplyFilterTagName = allRestaurants.filter((item) => {
   //       //      let isFilterTagName = search;

   //       //      if (isFilterTagName) {
   //       //         const filteredItem = item.menu?.tag?.tagName
   //       //            .toLowerCase()
   //       //            .includes(search.toLowerCase());
   //       //         console.log('FiltriraniItem', filteredItem);
   //       //         return filteredItem;
   //       //      }

   //       //      return;
   //       //   });

   //       console.log(shouldApplyFilterRestaurantName);

   //       if (shouldApplyFilterRestaurantName !== null) {
   //          return shouldApplyFilterRestaurantName;
   //       }

   //       //   if (shouldApplyFilterTagName !== null) {
   //       //      return shouldApplyFilterTagName;
   //       //   }

   //       return allRestaurants;
   //    }
}
