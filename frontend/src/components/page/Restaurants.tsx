import { FC } from 'react';
import { Card } from '../card/Card';
import { images } from '../dummydata/index';
import { useGetRestaurantsQuery } from '../../generated';

type Image = {
   imageId: number;
   url: string;
   restaurantRestaurantId: number;
};

type GetRestaurants = {
   restaurantId: number;
   restaurantName: string;
   restaurantRating: string;
   deliveryTime: string;
   image: Image;
};

export const Restaurants: FC = () => {
   const { data, error, loading } = useGetRestaurantsQuery();

   const restaurantData = data?.getRestaurants;
   console.log('QUERY DATA', data);
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
               const {
                  restaurantId,
                  restaurantName,
                  restaurantRating,
                  deliveryTime,
                  image,
               } = restaurant;
               return (
                  <div key={restaurantId}>
                     <Card
                        id={restaurantId}
                        name={restaurantName}
                        rating={restaurantRating}
                        photo={image?.url}
                        duration={deliveryTime}
                        restaurantCategory={image?.imageId}
                     />
                  </div>
               );
            })}
         </div>
      </div>
   );
};
