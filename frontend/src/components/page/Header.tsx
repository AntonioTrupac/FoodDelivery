import { FC, useEffect } from 'react';
import { useMeQuery } from '../../generated';
import { Navbar } from './Navbar';
import { Restaurants } from './Restaurants';

export const Header: FC = () => {
   const { data, loading, error } = useMeQuery();

   const fullName = `${data?.me?.firstName} ${data?.me?.lastName}`;

   //    useEffect(() => {
   //       console.log(data);
   //    }, [data]);

   // const {data} = useUsersQuery();
   if (error) return <div>Error</div>;
   if (loading) return <div>loading...</div>;
   return (
      <>
         <div className='header-container'>
            <Navbar fullName={fullName} />
         </div>
         <div>
            <Restaurants />
         </div>
      </>
   );
};
