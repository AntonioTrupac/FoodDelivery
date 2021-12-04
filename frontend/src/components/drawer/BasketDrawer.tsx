import { FC, useEffect } from 'react';
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
   const { items, itemIncremented, itemRemoved, itemSubtracted } =
      useBasketStore();

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
      </Drawer>
   );
};
