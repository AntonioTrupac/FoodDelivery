import { FC } from 'react';
import { Maybe, Tag } from '../../generated';

type Filter = Maybe<Pick<Tag, 'id' | 'tagName'>> | undefined;

type CategoryFilterProps = {
   filter: Filter[] | undefined;
   handleClick?: (e: any) => void;
   showAll?: (e: any) => void;
};

export const CategoryFilter: FC<CategoryFilterProps> = ({
   filter,
   handleClick,
   showAll,
}) => {
   return (
      <div className='filter-wrapper text-center'>
         <p
            className='filtered-item xl:p-3.5 p-0 w-full font-light pb-2 xl:text-xl text-2xl xl:mr-0 mr-4 flex items-end justify-center xl:px-0 px-10 first:mt-0'
            onClick={showAll}
         >
            All
         </p>

         {filter?.map((category) => {
            return (
               <p
                  className='filtered-item w-full font-light xl:text-xl text-2xl xl:mr-0 mr-4 pb-2 pt-2.5 xl:px-0 px-10 first:mt-0'
                  key={category?.id}
                  onClick={handleClick}
               >
                  {category?.tagName}
               </p>
            );
         })}
      </div>
   );
};
