import { FC } from 'react';
import { Card } from '../card/Card';

import { useGetRestaurantsQuery } from '../../generated';

export const Restaurants: FC = () => {
   const { data, error, loading } = useGetRestaurantsQuery();
   const restaurantData = data?.getRestaurants;

   if (loading) return <div>Loading...</div>;
   if (error) return <div>Error...</div>;

   return (
      <div className='restaurant-container'>
         {/* <div className='category-container'>
            <div className='category-image'>
               <img src={images.friesRestaurant} alt={images.avatar3} />{' '}
               <p>Traditional</p>
            </div>
            <div className='category-image'>
               <img src={images.friesRestaurant} alt={images.avatar3} />{' '}
               <p>Italian</p>
            </div>
            <div className='category-image'>
               <img src={images.friesRestaurant} alt={images.avatar3} />{' '}
               <p>Fast food</p>
            </div>
            <div className='category-image'>
               <img src={images.friesRestaurant} alt={images.avatar3} />{' '}
               <p>Asian</p>
            </div>
            <div className='category-image'>
               <img src={images.friesRestaurant} alt={images.avatar3} />{' '}
               <p>Mexican</p>
            </div>
         </div> */}

         <div className='card-container mt-10 justify-center'>
            {restaurantData?.map((restaurant) => {
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
      </div>
   );
};
