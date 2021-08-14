import { getRepository } from 'typeorm';

import { Restaurant } from '../entity/Restaurant';
import { User } from '../entity/User';

export async function seedDb() {
   const restaurantRepository = getRepository(Restaurant);
   const userRepository = getRepository(User);

   // const defaultUser = userRepository.create({
   //     firstName: 'Antonio',
   //     lastName: 'Trupac',
   //     email: "seedDB@gmail.com",
   //     password: "123456789"
   // })
   // await userRepository.save(defaultUser);

   const restaurant = restaurantRepository.create([
      {
         restaurantName: 'Neki restoran',
         restaurantRating: '4.5',
         deliveryTime: '20min',
      },
      {
         restaurantName: 'Same restaurant',
         restaurantRating: '4.2',
         deliveryTime: '25min',
      },
   ]);

   await restaurantRepository.save(restaurant);

   return {
      restaurant,
   };
}
