import { FC } from 'react';
import avatar1 from '../dummydata/constants';

type RestaurantData = {
   id: number;
   name: string;
   rating: number;
   categories: number[];
   priceRating: number;
   photo: any;
   duration: string;
   location: {
      latitude: number;
      longitude: number;
   };
   courier: {
      avatar: any;
      name: string;
   };
   menu: {
      menuId: number;
      name: string;
      photo: any;
      description: string;
      calories: number;
      price: number;
   }[];
};

type CardProps = {
   restaurantData?: RestaurantData;
   id: number;
   name: string;
   rating: number;
   //location: string;
   photo: string;
   priceRating: number;
   duration: string;
};

export const Card: FC<CardProps> = (props) => {
   console.log(props.photo);
   return (
      <div className='restaurant-card'>
         <div className='restaurant-card__image'>
            <img
               src={props.photo}
               alt={props.name}
               className='restaurant-image'
            />
         </div>
         <div>
            <p>{props.name}</p>
            <p>{props.priceRating}</p>
            <p>{props.duration}</p>
         </div>
      </div>
   );
};
