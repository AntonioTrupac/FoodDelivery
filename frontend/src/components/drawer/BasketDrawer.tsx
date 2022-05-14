import { FC, useEffect, useState } from 'react';

import { useCreateOrderMutation } from '../../generated';
import { useBasketStore } from '../../store/basket';
import { Button } from '../button/Button';
import { Drawer } from './Drawer';
import { ItemCard } from '../card/ItemCard';
import { notificationOrdered } from '../util/notificationAlert';
import { ItemCardLoader } from '../contentLoader/ItemCardLoader';

type BasketDrawerProps = {
   isOpen: boolean;
   onClose: () => void;
};

export const BasketDrawer: FC<BasketDrawerProps> = ({
   isOpen,
   onClose,
}: BasketDrawerProps) => {
   const { items, basketCleared } = useBasketStore();
   const [totalPrice, setTotalPrice] = useState<number | undefined>(0);

   const [orderMutation, orderMutationResult] = useCreateOrderMutation();
   const { data, loading } = orderMutationResult;
   const { createOrder } = data || {};
   const { id, total } = createOrder || {};

   useEffect(() => {
      if (orderMutationResult.called && !orderMutationResult.loading) {
         if (id && total) {
            basketCleared();
         }
      }
   }, [
      basketCleared,
      id,
      orderMutationResult.called,
      orderMutationResult.loading,
      total,
   ]);

   useEffect(() => {
      if (items.length !== 0) {
         const total = items
            .map((m) => m.price * m.quantity)
            .reduce((a, b) => a + b, 0);

         setTotalPrice(total);
      }
   }, [items]);

   return (
      <Drawer isOpen={isOpen} setIsOpen={onClose} headerText='Cart items'>
         {items.map((item) => (
            <div
               key={item.menuItemId}
               className='flex flex-column justify-center max-w-[100%] items-center'
            >
               {loading ? (
                  <ItemCardLoader speed={2} height={138} width={480} />
               ) : (
                  <ItemCard item={item} />
               )}
            </div>
         ))}

         {items.length !== 0 && (
            <div className='px-4'>
               <p className='text-xl font-light'>Total Price: {totalPrice}$</p>
            </div>
         )}

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
                                 };
                              }),
                           },
                        },
                     })
                        .then(() => {
                           onClose();
                           notificationOrdered();
                        })
                        .catch((err) => console.error(err));
                  }}
               >
                  Order
               </Button>
            </div>
         ) : (
            <div className='flex justify-center'>
               <p className='text-2xl font-light'>Basket is empty!</p>
            </div>
         )}
      </Drawer>
   );
};
