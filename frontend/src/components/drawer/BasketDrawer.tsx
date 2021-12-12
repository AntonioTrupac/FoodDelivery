import { FC, useEffect, useState } from 'react';

import { useCreateOrderMutation } from '../../generated';
import { useBasketStore } from '../../store/basket';
import { Button } from '../button/Button';
import { Drawer } from './Drawer';
import { ItemCard } from '../card/ItemCard';

type BasketDrawerProps = {
   isOpen: boolean;
   onClose: () => void;
};

export const BasketDrawer: FC<BasketDrawerProps> = ({
   isOpen,
   onClose,
}: BasketDrawerProps) => {
   const { items, basketCleared, itemTotal } = useBasketStore();

   const [orderMutation, orderMutationResult] = useCreateOrderMutation();
   const { data } = orderMutationResult;
   const { createOrder } = data || {};
   const { id, total } = createOrder || {};
   console.log(itemTotal, 'TOTALLL');

   useEffect(() => {
      if (orderMutationResult.called && !orderMutationResult.loading) {
         if (id && total) {
            alert(`Order made: ${total}$`);
            basketCleared();
         } else {
            alert(`Couldn't create order.`);
         }
      }
   }, [
      basketCleared,
      id,
      orderMutationResult.called,
      orderMutationResult.loading,
      total,
   ]);

   return (
      <Drawer isOpen={isOpen} setIsOpen={onClose} headerText='Cart items'>
         {items.map((i) => (
            <div
               key={i.menuItemId}
               className='flex flex-column justify-center max-w-[100%] items-center'
            >
               <ItemCard item={i} />
            </div>
         ))}

         {<div>Item Total: {itemTotal}</div>}

         <div>Total price: 0</div>

         {items.length !== 0 ? (
            <div className='flex items-center justify-center'>
               <Button
                  className='px-4 py-1.5 text-sm rounded-[0.75em] bg-[#FEAE67] transition duration-300 ease-in-out hover:bg-[#FFEEDE] hover:py-[4px] hover:border-[#FEAE67] hover:border-[2px] hover:text-[#000]'
                  disabled={items.length === 0}
                  onClick={() => {
                     orderMutation({
                        variables: {
                           input: {
                              items: items.map((i) => {
                                 return {
                                    menuItemId: i.menuItemId,
                                    quantity: i.quantity,
                                    price: i.price,
                                 };
                              }),
                           },
                        },
                     });
                  }}
               >
                  Order
               </Button>
            </div>
         ) : (
            <div>Basket is empty!</div>
         )}
      </Drawer>
   );
};
