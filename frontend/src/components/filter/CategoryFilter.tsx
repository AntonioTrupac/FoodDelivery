import { FC } from 'react';

type Filter = string | undefined;

type CategoryFilterProps = {
   filter?: Filter[];
};

export const CategoryFilter: FC<CategoryFilterProps> = ({
   filter,
   children,
}) => {
   return (
      <div>
         <>
            {/* ovdje trebas dobit i id ili jednostavno samo generiraj neki uniq id sa libom */}
            {filter?.map((category, index) => {
               return <div key={index}>{category}</div>;
            })}
         </>
      </div>
   );
};
