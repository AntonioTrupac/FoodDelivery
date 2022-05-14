import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DetailCard } from '../components/card/DetailCard';
import { CategoryFilter } from '../components/filter/CategoryFilter';
import { Restaurant, useGetRestaurantByIdQuery } from '../generated';
import { RestaurantInfo } from '../components/RestaurantInfo';
import { RestaurantDetailLoader } from '../components/contentLoader/RestaurantDetailLoader';
import { useResponsive } from '../customHooks/useResponsive';

type Params = {
   id?: string;
};

export const RestaurantDetails: FC = () => {
   const { isMobile, isTablet } = useResponsive();
   const { id } = useParams<Params>();
   const idAsNumber = Number(id);
   const { data, error, loading } = useGetRestaurantByIdQuery({
      variables: { id: idAsNumber },
   });

   const [restaurantData] = useState<Restaurant | undefined>(
      data?.getRestaurantById
   );
   const [item, setItem] = useState<any>();

   const restaurant = data?.getRestaurantById;

   const uniqueFiltered = Array.from(
      new Set(restaurant?.menu?.menuItems.map((item) => item.tag))
   );

   if (error) return <div>{error?.message}</div>;

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
      let all = e.currentTarget.textContent;

      if (all === 'All') {
         const allRestaurants = restaurantData?.menu?.menuItems.map(
            (item) => item
         );

         setItem(allRestaurants);
      }
   };

   return (
      <div className='detail__container'>
         <div className='imageContainer'>
            {/* FIXME: add images that are bigger than the current card images, add image component to the right of the info */}
            <RestaurantInfo
               name={restaurant?.restaurantName}
               deliveryTime={restaurant?.deliveryTime}
               rating={restaurant?.restaurantRating}
            />
         </div>

         <div className='content-container flex xl:flex-col xl:justify-center xl:items-center mt-12'>
            {loading ? (
               <RestaurantDetailLoader
                  height={142}
                  width={1200}
                  speed={2}
                  isMobile={isMobile}
                  isTablet={isTablet}
               />
            ) : (
               <>
                  <CategoryFilter
                     filter={uniqueFiltered}
                     handleClick={handleClick}
                     showAll={showAll}
                  />

                  {restaurant?.menu && (
                     <div className='flex flex-col text-2xl card-wrapper xl:ml-0 ml-6'>
                        <DetailCard menuItems={item} restaurant={restaurant} />
                     </div>
                  )}
               </>
            )}
         </div>
      </div>
   );
};
