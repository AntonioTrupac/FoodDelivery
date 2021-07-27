import {FC} from 'react';
import {useMeQuery, useUsersQuery} from "../generated";

export const Home: FC = () => {
   const {data, loading, error} = useMeQuery();


   // const {data} = useUsersQuery();
   if(error) return <div>Error</div>
   if(loading) return <div>loading...</div>
   console.log(data);
   return (
      <div>
         <h1>{data?.me?.email}</h1>
      </div>
   )
}