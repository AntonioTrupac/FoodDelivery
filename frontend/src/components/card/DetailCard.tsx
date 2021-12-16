import { FC, useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

import { MenuItem, Restaurant, useGetMenuItemByIdQuery } from '../../generated';
import { useModal } from '../../customHooks/useModal';
import { Modal } from '../modal/Modal';
import { RestaurantModalDetails } from '../RestaurantModalDetails';
import { useBasketStore } from '../../store/basket';
import { notificationStart } from '../util/notificationAlert';

type DetailCardProps = {
   menuItems?: MenuItem[];
   restaurant?: Restaurant;
};

export const DetailCard: FC<DetailCardProps> = ({ menuItems, restaurant }) => {
   const [itemId, setItemId] = useState<number>();
   const { isShown, toggle } = useModal();
   const { items, itemAdded, itemIncremented } = useBasketStore();

   const allItems = restaurant?.menu?.menuItems.map((item) => item);

   const { data, loading, error } = useGetMenuItemByIdQuery({
      variables: {
         id: Number(itemId),
      },
   });

   const addItemFromAllItems = useCallback(
      (allItems: MenuItem) => {
         if (!items.find((i) => i.menuItemId === allItems.id)) {
            itemAdded({
               menuItemId: allItems.id,
               name: allItems.name,
               price: allItems.price,
            });
         } else {
            itemIncremented(allItems.id);
         }
         notificationStart();
      },
      [itemAdded, itemIncremented, items]
   );

   const addItemFromSingleMenu = useCallback(
      (menuItem: MenuItem) => {
         if (!items.find((i) => i.menuItemId === menuItem.id)) {
            itemAdded({
               menuItemId: menuItem.id,
               name: menuItem.name,
               price: menuItem.price,
            });
         } else {
            itemIncremented(menuItem.id);
         }
         notificationStart();
      },
      [itemAdded, itemIncremented, items]
   );

   const splitString = data?.getMenuItemById?.ingredients.split(' ');

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
                     <div
                        onClick={(event) => {
                           event.stopPropagation();
                           if (item?.id) {
                              addItemFromAllItems(item);
                           }
                        }}
                     >
                        <FontAwesomeIcon
                           icon={faPlusSquare}
                           className='hover:text-[#FEAE67] transition duration-300 ease-in-out'
                        />
                     </div>
                  </div>
               </div>
            ))}

            <Modal
               className='absolute top-[30%] md:fixed mx-6 z-50 bg-[#ffffff] h-auto w-[400px] md:w-[90%] rounded-[20px]'
               isShown={isShown}
               hide={toggle}
               headerText={'Show Item'}
            >
               <RestaurantModalDetails
                  data={data}
                  loading={loading}
                  error={error}
                  splitString={splitString}
                  hideModal={toggle}
               />
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
                  onClick={() => {
                     setItemId(menuItem.id);
                     toggle();
                  }}
               >
                  <div>
                     <p className='text-2xl md:text-lg'>{menuItem.name}</p>
                     <p className='font-light text-base md:text-base ellipsis'>
                        {menuItem.ingredients}
                     </p>
                  </div>
                  <div className='text-2xl md:text-lg flex justify-between'>
                     <p>{menuItem.price}$</p>
                     <div
                        onClick={(event) => {
                           event.stopPropagation();
                           if (menuItem.id) {
                              addItemFromSingleMenu(menuItem);
                           }
                        }}
                     >
                        <FontAwesomeIcon
                           icon={faPlusSquare}
                           className='hover:text-[#FEAE67] transition duration-300 ease-in-out'
                        />
                     </div>
                  </div>
               </div>
            );
         })}

         <Modal
            className='absolute top-[30%] md:fixed mx-6 z-50 bg-[#ffffff] h-auto w-[400px] md:w-[90%] rounded-[20px]'
            isShown={isShown}
            hide={toggle}
            headerText={'Categories'}
         >
            <RestaurantModalDetails
               data={data}
               loading={loading}
               error={error}
               splitString={splitString}
               hideModal={toggle}
            />
         </Modal>
      </>
   );
};
