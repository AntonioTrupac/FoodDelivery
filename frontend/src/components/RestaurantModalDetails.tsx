import { ApolloError } from '@apollo/client';
import { FC, useCallback, useEffect } from 'react';
import { GetMenuItemByIdQuery, MenuItem } from '../generated';
import { useBasketStore } from '../store/basket';
import { Button } from './button/Button';

type RestaurantModalDetailsProps = {
   data: GetMenuItemByIdQuery | undefined;
   loading?: boolean;
   error?: ApolloError | undefined;
   splitString: string[] | undefined;
};

export const RestaurantModalDetails: FC<RestaurantModalDetailsProps> = (
   props
) => {
   const { items, itemAdded, itemIncremented } = useBasketStore();
   const addItem = useCallback(
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
      },
      [itemAdded, itemIncremented, items]
   );

   return (
      <div>
         <p className='font-medium text-2xl mb-2'>
            {props.data?.getMenuItemById?.name}
         </p>

         <div className='flex mb-1'>
            <p className='mr-1 font-medium'>Price:</p>
            <p>{props.data?.getMenuItemById?.price}$</p>
         </div>
         <div className='my-1 mb-1 min-h-[100px]'>
            <p className='font-medium'>Ingredients:</p>
            <hr />
            {props.splitString?.map((item) => (
               <p>{item.split(',')}</p>
            ))}
         </div>

         <div className='flex my-1'>
            <p className='mr-1 font-medium'>Calories:</p>
            <p>{props.data?.getMenuItemById?.calories}kcal</p>
         </div>

         <div className='flex my-1'>
            <p className='mr-1 font-medium'>Category:</p>
            <p>{props.data?.getMenuItemById?.tag?.tagName}</p>
         </div>

         <div className='flex items-center justify-center'>
            <Button
               className='modal-button'
               onClick={() => {
                  if (props.data?.getMenuItemById) {
                     addItem(props.data?.getMenuItemById);
                  }
               }}
            >
               Add to basket
            </Button>
         </div>
      </div>
   );
};
