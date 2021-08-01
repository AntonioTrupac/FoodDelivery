import { FC } from 'react';
import { Card } from '../card/Card';
import { restaurantData } from '../dummydata/restaurantData';
import { Search } from './Search';

export const Restaurants: FC = () => {
   return (
      <div className='restaurant-container'>
         {/* Create a title component */}
         <h1>Choose a restaurant</h1>
         {/* Create a search component */}
         <Search name='search' type='text' placeholder='Search' />
         <div className='card-container'>
            {restaurantData?.map((restaurant) => {
               const { id, name, rating, photo, priceRating, duration } =
                  restaurant;
               return (
                  <div key={id}>
                     <Card
                        id={id}
                        name={name}
                        rating={rating}
                        //  location={restaurant.location}
                        photo={photo}
                        priceRating={priceRating}
                        duration={duration}
                     />
                  </div>
               );
            })}
         </div>
      </div>
   );
};
