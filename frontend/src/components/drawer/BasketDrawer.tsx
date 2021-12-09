import { FC, useEffect } from 'react';
import { useCreateOrderMutation } from '../../generated';
import { useBasketStore } from '../../store/basket';
import { Button } from '../button/Button';
import { Drawer } from './Drawer';

type BasketDrawerProps = {
   isOpen: boolean;
   onClose: () => void;
};

export const BasketDrawer: FC<BasketDrawerProps> = ({
   isOpen,
   onClose,
}: BasketDrawerProps) => {
   const {
      items,
      itemIncremented,
      itemRemoved,
      itemSubtracted,
      basketCleared,
   } = useBasketStore();

   const [orderMutation, orderMutationResult] = useCreateOrderMutation();
   const { data } = orderMutationResult;
   const { createOrder } = data || {};
   const { id, total } = createOrder || {};

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
            <div className='flex flex-row gap-2'>
               <h2>
                  {i.quantity} * {i.name}
               </h2>

               <Button
                  onClick={() => {
                     itemIncremented(i.menuItemId);
                  }}
               >
                  +
               </Button>

               <Button
                  onClick={() => {
                     itemSubtracted(i.menuItemId);
                  }}
               >
                  -
               </Button>

               <Button
                  onClick={() => {
                     itemRemoved(i.menuItemId);
                  }}
               >
                  x
               </Button>
            </div>
         ))}

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
                  });
               }}
            >
               Order
            </Button>
         </div>
      </Drawer>
   );
};
