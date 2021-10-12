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

   const uniqueFiltered = Array.from(
      new Set(restaurant?.menu?.menuItems.map((item) => item.tag))
   );

   if (error) return <div>{error?.message}</div>;
   if (loading) return <div>loading...</div>;

   const handleClick = (
      e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
   ) => {
      let clickedTag = e.currentTarget.textContent;

      const filtered = restaurant?.menu?.menuItems.filter(
         (item) => item.tag?.tagName === clickedTag
      );
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
         <div className='content-container flex xl:flex-col xl:justify-center xl:items-center mt-12'>
            <div className='filter-wrapper text-center max-h-screen max-w-xs'>
               <CategoryFilter
                  filter={uniqueFiltered}
                  handleClick={handleClick}
               />
            </div>
            {restaurant?.menu && (
               <div className='card-wrapper ml-6'>
                  <DetailCard menuItems={item} restaurant={restaurant} />
               </div>
            )}
         </div>
      </div>
   );
};
