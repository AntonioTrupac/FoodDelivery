import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

type CardProps = {
   //    restaurantData?: RestaurantData;
   id: number;
   name: string;
   rating: number;
   //location: string;
   photo: string;
   priceRating: number;
   duration: string;
   restaurantCategory: string;
};

export const Card: FC<CardProps> = (props) => {
   return (
      <section className='restaurant-card'>
         <div className='restaurant-card__image'>
            <div className='dark' />
            <img
               src={props.photo}
               alt={props.name}
               className='restaurant-image'
            />
            <div className='restaurant-desc'>
               <h3>{props.name}</h3>
               <div>
                  <span className='restaurant-category'>
                     {props.restaurantCategory}
                  </span>
               </div>
            </div>
         </div>
         <div className='estimation-wrapper'>
            <div className='rating'>
               <FontAwesomeIcon icon={faThumbsUp} className='like' />
               <span>{props.rating}</span>
            </div>
            <div className='estimation'>
               <FontAwesomeIcon icon={faMotorcycle} className='moto' />
               <span>{props.duration}</span>
            </div>
         </div>
      </section>
   );
};
