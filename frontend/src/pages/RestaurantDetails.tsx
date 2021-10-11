import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailCard } from '../components/card/DetailCard';
import { CategoryFilter } from '../components/filter/CategoryFilter';
import { useGetRestaurantByIdQuery } from '../generated';

type Params = {
   id?: string;
};

export const RestaurantDetails: FC = () => {
   const { id } = useParams<Params>();
   const [item, setItem] = useState<any>();
   const idAsNumber = Number(id);
   const { data, error, loading } = useGetRestaurantByIdQuery({
      variables: { id: idAsNumber },
   });

   const restaurant = data?.getRestaurantById;

   // FIXME: make a query on the backend part, probably menuItems resolver that is gonna return all categories of all menuItems
   const uniqueFiltered = Array.from(
      new Set(restaurant?.menu?.menuItems.map((item) => item.tag))
   );
   // FIXME: can these unique filter types, or generated types from the backend not be so compex on the frontend part?
   console.log('Filtered tag names', uniqueFiltered); // [...tagNames]

   if (error) return <div>{error?.message}</div>;
   if (loading) return <div>loading...</div>;

   const handleClick = (
      e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
   ) => {
      console.log(e.currentTarget.textContent);
      let clickedTag = e.currentTarget.textContent;

      const filtered = restaurant?.menu?.menuItems.filter(
         (item) => item.tag?.tagName === clickedTag
      );
      console.log('filtered', filtered);
      setItem(filtered);
   };

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
         <div className='content-container flex mt-12'>
            <div className='filter-wrapper text-center max-h-screen max-w-xs'>
               <CategoryFilter
                  filter={uniqueFiltered}
                  handleClick={handleClick}
               />
            </div>
            {restaurant?.menu && (
               <div className='card-wrapper ml-6'>
                  <DetailCard menuItems={item} />
               </div>
            )}
         </div>
      </div>
   );
};
