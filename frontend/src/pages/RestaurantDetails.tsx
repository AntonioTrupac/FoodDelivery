import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailCard } from '../components/card/DetailCard';
import { CategoryFilter } from '../components/filter/CategoryFilter';
import { MenuItem, useGetRestaurantByIdQuery } from '../generated';

type Params = {
   id?: string;
};

export const RestaurantDetails: FC = () => {
   const { id } = useParams<Params>();
   const idAsNumber = Number(id);

   const { data, error, loading } = useGetRestaurantByIdQuery({
      variables: { id: idAsNumber },
   });

   const restaurant = data?.getRestaurantById;

   const uniqueFiltered = Array.from(
      new Set(restaurant?.menu?.menuItems.map((item) => item.tag?.tagName))
   );
   console.log('Filtered', uniqueFiltered);

   if (error) return <div>{error.message}</div>;
   if (loading) return <div>loading...</div>;

   return (
      <div className='detail__container'>
         <div className='imageContainer'>
            {/* FIXME: add images that are bigger than the current card images */}
            {/* {restaurant?.image?.url && (
               <img
                  src={restaurant?.image?.url}
                  alt={restaurant?.restaurantName}
               />
            )} */}
            <div className='imageContainer__left'>
               <h1>{restaurant?.restaurantName}</h1>
               <div className='paragraphContainer'>
                  <p>
                     The average delivery time is: {restaurant?.deliveryTime}
                  </p>
                  <div className='dot'>&nbsp;&nbsp;•&nbsp;&nbsp;</div>
                  <p>{restaurant?.restaurantRating}</p>
               </div>
            </div>
         </div>
         <div className='content-container'>
            <div className='filter-wrapper'>
               <CategoryFilter filter={uniqueFiltered} />
            </div>
            {restaurant?.menu && (
               <div className='card-wrapper'>
                  <DetailCard menuItems={restaurant?.menu?.menuItems} />
               </div>
            )}
         </div>
      </div>
   );
};
