import { FC, useEffect, useState } from 'react';
import { Card } from '../card/Card';

import categories from '../dummydata/categories';
import { Restaurant, useGetRestaurantsQuery } from '../../generated';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

export const Restaurants: FC = () => {
   const restaurantSearch = useSelector(
      (state: RootState) => state.setSearchRestaurant.restaurant
   );

   const restaurantData = restaurantSearch;
   const [categoryName, setCategoryName] = useState<string>('All');
   const [filteredRestaurants, setFilteredRestaurants] =
      useState<any>(restaurantData);

   useEffect(() => {
      if (categoryName !== 'All') {
         const filteredData = restaurantSearch?.filter(
            (restaurant) => restaurant.menu?.tag?.tagName === categoryName
         );

         setFilteredRestaurants(filteredData);
      } else {
         setFilteredRestaurants(restaurantSearch);
      }
   }, [categoryName, restaurantSearch]);

   const handleClick = (categoryName: string) => {
      setCategoryName(categoryName);
   };

   return (
      <>
         <div className='restaurant-image'>
            <div className='restaurant-container'>
               <div className='category-container'>
                  {categories.map((category) => {
                     return (
                        <div
                           key={category.id}
                           className='category-image'
                           onClick={() => handleClick(category.category)}
                        >
                           <img
                              src={category.imageUrl}
                              alt={category.category}
                           />
                           <p>{category.category}</p>
                        </div>
                     );
                  })}
               </div>

               <div className='card-container mt-10 justify-center text-center'>
                  {filteredRestaurants?.map((restaurant: Restaurant) => {
                     const {
                        id,
                        restaurantName,
                        restaurantRating,
                        deliveryTime,
                        image,
                        menu,
                     } = restaurant;

                     return (
                        <Card
                           key={id}
                           id={id}
                           name={restaurantName}
                           rating={restaurantRating}
                           photo={image?.url}
                           duration={deliveryTime}
                           restaurantCategory={menu?.tag?.tagName}
                        />
                     );
                  })}
               </div>
               {filteredRestaurants?.length === 0 && (
                  <div className='flex justify-center text-2xl items-center w-full'>
                     No restaurants!
                  </div>
               )}
            </div>
         </div>
      </>
   );
};
