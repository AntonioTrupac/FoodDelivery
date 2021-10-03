import { FC } from 'react';
import { Card } from '../card/Card';
import { images } from '../dummydata/index';
import { useGetRestaurantsQuery } from '../../generated';

export const Restaurants: FC = () => {
   const { data, error, loading } = useGetRestaurantsQuery();
   const restaurantData = data?.getRestaurants;

   console.log(restaurantData);

   if (loading) return <div>Loading...</div>;
   if (error) return <div>Error...</div>;

   return (
      <div className='restaurant-container'>
         <div className='category-container'>
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
         </div>

         <div className='card-container'>
            {restaurantData?.map((restaurant) => {
               console.log(restaurant);
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
