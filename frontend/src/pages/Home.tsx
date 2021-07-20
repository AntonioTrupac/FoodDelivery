import {FC} from 'react';
import {useMeQuery, useUsersQuery} from "../generated";

export const Home: FC = () => {
   const {data} = useMeQuery();


   // const {data} = useUsersQuery();
   console.log(data);
   return (
      <div>
         <h1>{data?.me?.email}</h1>
      </div>
   )
}