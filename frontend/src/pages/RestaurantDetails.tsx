import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetRestaurantByIdQuery } from '../generated';

type Params = {
   id?: string;
};

export const RestaurantDetails: FC = () => {
   const { id } = useParams<Params>();
   const idAsNumber = Number(id);

   const { data, error, loading } = useGetRestaurantByIdQuery({
      variables: { id: idAsNumber },
   });

   if (data) {
      console.log(data);
   }

   return (
      <div>
         <h1>Rest det</h1>
      </div>
   );
};
