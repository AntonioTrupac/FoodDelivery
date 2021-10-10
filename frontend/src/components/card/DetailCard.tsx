import { FC } from 'react';
import { MenuItem } from '../../generated';

type DetailCardProps = {
   menuItems?: MenuItem[];
};

export const DetailCard: FC<DetailCardProps> = ({ menuItems }) => {
   return (
      <>
         {menuItems?.map((menuItem) => {
            return (
               <>
                  <div
                     className='card-container-detail mx-6 mb-10'
                     key={menuItem.id}
                  >
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
               </>
            );
         })}
      </>
   );
};
