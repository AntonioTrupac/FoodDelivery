import { FC } from 'react';
import { MenuItem } from '../../generated';

type DetailCardProps = {
   menuItems?: MenuItem[];
};

export const DetailCard: FC<DetailCardProps> = ({ menuItems }) => {
   console.log(menuItems);

   return (
      <>
         {menuItems?.map((menuItem) => {
            return (
               <div className='card-container-detail' key={menuItem.id}>
                  <div>
                     <p className='text-2xl md:text-lg'>{menuItem.name}</p>
                     <p className='mr-4 font-light text-base md:text-base'>
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
