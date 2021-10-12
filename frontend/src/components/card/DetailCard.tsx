import { FC } from 'react';
import { MenuItem, Restaurant } from '../../generated';

type DetailCardProps = {
   menuItems?: MenuItem[];
   restaurant?: Restaurant;
};

export const DetailCard: FC<DetailCardProps> = ({ menuItems, restaurant }) => {
   const allItems = restaurant?.menu?.menuItems.map((item) => item);

   if (menuItems === undefined || menuItems === null) {
      return (
         <>
            {allItems?.map((item) => (
               <div className='card-container-detail' key={item.id}>
                  <div>
                     <p className='text-2xl md:text-lg'>{item.name}</p>
                     <p className='font-light text-base md:text-base'>
                        {item.ingredients}
                     </p>
                  </div>
                  <div className='text-2xl md:text-lg'>
                     <p>{item.price}$</p>
                  </div>
               </div>
            ))}
         </>
      );
   }

   return (
      <>
         {menuItems?.map((menuItem) => {
            return (
               <div className='card-container-detail' key={menuItem.id}>
                  <div>
                     <p className='text-2xl md:text-lg'>{menuItem.name}</p>
                     <p className='font-light text-base md:text-base'>
                        {menuItem.ingredients}
                     </p>
                  </div>
                  <div className='text-2xl md:text-lg'>
                     <p>{menuItem.price}$</p>
                  </div>
               </div>
            );
         })}
      </>
   );
};
