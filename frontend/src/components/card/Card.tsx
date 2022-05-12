import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { Maybe } from 'graphql/jsutils/Maybe';
import { useHistory } from 'react-router';

type CardProps = {
   id: number;
   name?: string;
   rating?: string;
   photo: Maybe<string>;
   duration?: string;
   restaurantCategory?: string;
};

export const Card: FC<CardProps> = ({
   id,
   rating,
   duration,
   restaurantCategory,
   photo,
   name,
}) => {
   const history = useHistory();

   const handleClick = () => {
      history.push(`/restaurant/${id}`);
   };

   return (
      <section className='restaurant-card' onClick={handleClick}>
         <div className='restaurant-card__image'>
            <div className='dark' />

            <img src={photo as string} alt={name} className='restaurant-image' />

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
