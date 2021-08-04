import { FC } from 'react';
import { Card } from '../card/Card';
import { restaurantData } from '../dummydata/restaurantData';
import { Search } from './Search';
import { Title } from './Title';

export const Restaurants: FC = () => {
   return (
      <div className='restaurant-container'>
         {/* Create a title component */}
         <Title title='Food near you' />
         {/* Create a search component */}
         <Search name='search' type='text' placeholder='Search' />
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
                        //  0location={restaurant.location}
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
