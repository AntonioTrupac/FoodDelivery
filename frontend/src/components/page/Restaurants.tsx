import { FC } from 'react';
import { Card } from '../card/Card';
import { restaurantData } from '../dummydata/restaurantData';
import { images } from '../dummydata/index';
export const Restaurants: FC = () => {
   return (
      <div className='restaurant-container'>
         <div className='category-container'>
            <div className='category-image'>
               <img src={images.avatar3} alt={images.avatar3} />{' '}
            </div>
            <div className='category-image'>
               <img src={images.avatar3} alt={images.avatar3} />{' '}
            </div>
            <div className='category-image'>
               <img src={images.avatar3} alt={images.avatar3} />{' '}
            </div>
            <div className='category-image'>
               <img src={images.avatar3} alt={images.avatar3} />{' '}
            </div>
            <div className='category-image'>
               <img src={images.avatar3} alt={images.avatar3} />{' '}
            </div>
            <div className='category-image'>
               <img src={images.avatar3} alt={images.avatar3} />{' '}
            </div>
            <div className='category-image'>
               <img src={images.avatar3} alt={images.avatar3} />{' '}
            </div>
         </div>
         <div className='card-container'>
            {restaurantData?.map((restaurant) => {
               const {
                  id,
                  name,
                  rating,
                  photo,
                  priceRating,
                  duration,
                  restaurantCategory,
               } = restaurant;
               return (
                  <div key={id}>
                     <Card
                        id={id}
                        name={name}
                        rating={rating}
                        photo={photo}
                        priceRating={priceRating}
                        duration={duration}
                        restaurantCategory={restaurantCategory}
                     />
                  </div>
               );
            })}
         </div>
      </div>
   );
};
