import { FC } from 'react';
import { Maybe, Tag } from '../../generated';

type Filter = Maybe<Pick<Tag, 'id' | 'tagName'>> | undefined;

type CategoryFilterProps = {
   filter: Filter[] | undefined;
};

export const CategoryFilter: FC<CategoryFilterProps> = ({ filter }) => {
   return (
      <>
         {filter?.map((category) => {
            return (
               <p className='filtered-item' key={category?.id}>
                  {category?.tagName}
               </p>
            );
         })}
      </>
   );
};
