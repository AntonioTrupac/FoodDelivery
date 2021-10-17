import { FC } from 'react';
import { Card } from '../card/Card';
import traditional from '../../images/categories/traditional.svg';
import asian from '../../images/categories/asian.svg';
import fastFood from '../../images/categories/fastfood (1).svg';
import mexican from '../../images/categories/mexican.svg';
import italian from '../../images/categories/italian.svg';

import { useGetRestaurantsQuery } from '../../generated';

export const Restaurants: FC = () => {
   const { data, error, loading } = useGetRestaurantsQuery();
   const restaurantData = data?.getRestaurants;

   if (loading) return <div>Loading...</div>;
   if (error) return <div>Error...</div>;

   return (
      <div className='restaurant-container'>
         <div className='category-container'>
            <div className='category-image'>
               <img src={traditional} alt='traditional' />
               <p>Traditional</p>
            </div>

            <div className='category-image'>
               <img src={italian} alt='italian' /> <p>Italian</p>
            </div>
            <div className='category-image'>
               <img src={fastFood} alt='fast food' /> <p>Fast food</p>
            </div>
            <div className='category-image'>
               <img src={asian} alt='asian' /> <p>Asian</p>
            </div>
            <div className='category-image'>
               <img src={mexican} alt='mexican' /> <p>Mexican</p>
            </div>
         </div>

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
