import { FC, useEffect } from 'react';
import { useMeQuery } from '../../generated';
import { Navbar } from './Navbar';
import { Restaurants } from './Restaurants';

export const Header: FC = () => {
   // FIXME: we need to get the
   // user from here and pass him to navbar component
   // this should prolly be done better with redux

   //    const { data, loading, error } = useMeQuery();

   //    const fullName = `${data?.me?.firstName} ${data?.me?.lastName}`;

   //    //    useEffect(() => {
   //    //       console.log(data);
   //    //    }, [data]);

   //    // const {data} = useUsersQuery();
   //    if (error) return <div>Error</div>;
   //    if (loading) return <div>loading...</div>;
   return (
      <>
         <div className='header-container'>
            <Navbar />
         </div>
      </>
   );
};
