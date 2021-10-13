import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailCard } from '../components/card/DetailCard';
import { CategoryFilter } from '../components/filter/CategoryFilter';
import { Restaurant, useGetRestaurantByIdQuery } from '../generated';

type Params = {
   id?: string;
};

export const RestaurantDetails: FC = () => {
   const { id } = useParams<Params>();
   const idAsNumber = Number(id);
   const { data, error, loading } = useGetRestaurantByIdQuery({
      variables: { id: idAsNumber },
   });

   const [restaurantData, setRestaurantData] = useState<Restaurant | undefined>(
      data?.getRestaurantById
   );
   const [item, setItem] = useState<any>();

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

   const showAll = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
      const all = e.currentTarget.textContent;

      if (all === 'Show All') {
         const allRestaurants = restaurantData?.menu?.menuItems.map(
            (item) => item
         );

         setItem(allRestaurants);
      }
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
            <div className='filter-wrapper text-center'>
               <CategoryFilter
                  filter={uniqueFiltered}
                  handleClick={handleClick}
                  showAll={showAll}
               />
            </div>

            {restaurant?.menu && (
               <div className='flex flex-col text-2xl'>
                  <div className='card-wrapper ml-6'>
                     <DetailCard menuItems={item} restaurant={restaurant} />
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};
