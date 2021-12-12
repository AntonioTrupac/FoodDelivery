import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../button/Button';
import { BasketItem, useBasketStore } from '../../store/basket';

type ItemCardProps = {
   item: BasketItem;
};

export const ItemCard = ({ item }: ItemCardProps) => {
   const { itemIncremented, itemRemoved, itemSubtracted } = useBasketStore();

   return (
      <div className='border-[1px] w-[100%] border-gray-300 px-4 py-4 mx-4 shadow-lg rounded-lg'>
         <div className='flex justify-end'>
            <FontAwesomeIcon
               aria-label='Remove'
               size='1x'
               icon={faTimes}
               onClick={() => {
                  itemRemoved(item.menuItemId);
               }}
               className=' text-[#606060] hover:text-[#FEAE67] '
            />
         </div>

         <div className='flex items-center'>
            <div className='flex'>
               <p className='mr-2'>{item.name}</p>
            </div>
         </div>

         <div className='flex items-center'>
            <p className='mr-2'>Number of items to order: </p>
            <Button
               onClick={() => {
                  itemIncremented(item.menuItemId);
               }}
               className='mr-2'
            >
               <FontAwesomeIcon
                  aria-label='Add'
                  size='1x'
                  icon={faPlus}
                  className=' text-[#606060] hover:text-[#FEAE67] '
               />
            </Button>

            <p className=''>{item.quantity}</p>

            <Button
               onClick={() => {
                  itemSubtracted(item.menuItemId);
               }}
               className='ml-2'
            >
               <FontAwesomeIcon
                  aria-label='Add'
                  size='1x'
                  icon={faMinus}
                  className=' text-[#606060] hover:text-[#FEAE67] '
               />
            </Button>
         </div>
         <div>
            <p>Price: {item.price}$</p>
         </div>
      </div>
   );
};
