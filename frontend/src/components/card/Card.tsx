import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { Maybe } from 'graphql/jsutils/Maybe';
// import { Maybe } from '../../generated';

type CardProps = {
   //    restaurantData?: RestaurantData;
   id: number;
   name?: string;
   rating?: string;
   photo?: Maybe<string>;
   duration?: string;
   restaurantCategory?: string;
};

export const Card: FC<CardProps> = ({
   rating,
   duration,
   restaurantCategory,
   photo,
   name,
}) => {
   return (
      <section className='restaurant-card'>
         <div className='restaurant-card__image'>
            <div className='dark' />
            {photo ? (
               <img src={photo} alt={name} className='restaurant-image' />
            ) : (
               ''
               // add a div for example No image or something
            )}

            <div className='restaurant-desc'>
               <h3>{name}</h3>

               <div>
                  <span className='restaurant-category'>
                     {restaurantCategory}
                  </span>
               </div>
            </div>
         </div>

         <div className='estimation-wrapper'>
            <div className='rating'>
               <FontAwesomeIcon icon={faThumbsUp} className='like' />
               <span>{rating}</span>
            </div>

            <div className='estimation'>
               <FontAwesomeIcon icon={faMotorcycle} className='moto' />
               <span>{duration}</span>
            </div>
         </div>
      </section>
   );
};
