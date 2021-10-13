import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

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
                     <p className='font-light text-base md:text-base ellipsis'>
                        {item.ingredients}
                     </p>
                  </div>
                  <div className='text-2xl md:text-lg flex justify-between'>
                     <p>{item.price}$</p>
                     <div>
                        <FontAwesomeIcon icon={faPlusSquare} />
                     </div>
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
                     <p className='font-light text-base md:text-base ellipsis'>
                        {menuItem.ingredients}
                     </p>
                  </div>
                  <div className='text-2xl md:text-lg flex justify-between'>
                     <p>{menuItem.price}$</p>
                     <div>
                        <FontAwesomeIcon icon={faPlusSquare} />
                     </div>
                  </div>
               </div>
            );
         })}
      </>
   );
};
