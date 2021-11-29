import { ApolloError } from '@apollo/client';
import { FC } from 'react';
import { GetMenuItemByIdQuery } from '../generated';

type RestaurantModalDetailsProps = {
   data: GetMenuItemByIdQuery | undefined;
   loading?: boolean;
   error?: ApolloError | undefined;
   splitString: string[] | undefined;
};

export const RestaurantModalDetails: FC<RestaurantModalDetailsProps> = (
   props
) => {
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
      </div>
   );
};
