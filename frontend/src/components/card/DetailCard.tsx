import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

import { MenuItem, Restaurant, useGetMenuItemByIdQuery } from '../../generated';
import { useModal } from '../../customHooks/useModal';
import { Modal } from '../modal/Modal';

type DetailCardProps = {
   menuItems?: MenuItem[];
   restaurant?: Restaurant;
};

export const DetailCard: FC<DetailCardProps> = ({ menuItems, restaurant }) => {
   const [itemId, setItemId] = useState<number>();
   const allItems = restaurant?.menu?.menuItems.map((item) => item);
   const { isShown, toggle } = useModal();
   const { data, loading, error } = useGetMenuItemByIdQuery({
      variables: {
         id: Number(itemId),
      },
   });

   const splitString = data?.getMenuItemById?.ingredients.split(' ');
   console.log(splitString);

   if (menuItems === undefined || menuItems === null) {
      return (
         <>
            {allItems?.map((item) => (
               <div
                  className='card-container-detail'
                  key={item.id}
                  onClick={() => {
                     setItemId(item.id);
                     toggle();
                  }}
               >
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

            <Modal
               className='absolute top-[30%] mx-5 z-50 bg-[#ffffff] h-auto rounded-[20px]'
               isShown={isShown}
               hide={toggle}
               headerText={'Show Item'}
            >
               <div className=''>
                  <p>{data?.getMenuItemById?.name}</p>

                  <p>{data?.getMenuItemById?.price}$</p>

                  <div className='grid'>
                     {splitString?.map((item) => (
                        <p>{item.split(',')}</p>
                     ))}
                  </div>

                  <p>{data?.getMenuItemById?.calories}kcal</p>

                  <p>{data?.getMenuItemById?.tag?.tagName}</p>
               </div>
            </Modal>
         </>
      );
   }

   return (
      <>
         {menuItems?.map((menuItem) => {
            return (
               <div
                  className='card-container-detail'
                  key={menuItem.id}
                  onClick={toggle}
               >
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

         <Modal
            className='absolute top-[120px] mx-5 z-50 bg-[#ffffff] h-auto rounded-[20px]'
            isShown={isShown}
            hide={toggle}
            headerText={'Login'}
         >
            LALALA
         </Modal>
      </>
   );
};
