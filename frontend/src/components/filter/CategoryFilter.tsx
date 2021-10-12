import { FC } from 'react';
import { Maybe, Tag } from '../../generated';

type Filter = Maybe<Pick<Tag, 'id' | 'tagName'>> | undefined;

type CategoryFilterProps = {
   filter: Filter[] | undefined;
   handleClick?: (e: any) => void;
};

export const CategoryFilter: FC<CategoryFilterProps> = ({
   filter,
   handleClick,
}) => {
   return (
      <>
         {filter?.map((category) => {
            return (
               <p
                  className='filtered-item w-full font-light text-2xl mr-4 pb-2 mt-3 px-10 first:mt-0'
                  key={category?.id}
                  onClick={handleClick}
               >
                  {category?.tagName}
               </p>
            );
         })}
      </>
   );
};
