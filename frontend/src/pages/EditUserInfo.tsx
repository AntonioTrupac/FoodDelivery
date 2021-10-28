import { FC } from 'react';

import { Title } from '../components/page/Title';
import { EditUserForm } from '../components/forms/EditUserForm';
import { useMeQuery } from '../generated';

export const EditUserInfo: FC = () => {
   const { data, loading, error } = useMeQuery();

   if (loading) return <div> loading ...</div>;
   if (error) return <div>{error.message}</div>;

   return (
      <div className='w-full flex justify-center'>
         <div className='edit-container mt-20'>
            <Title
               title='Edit your info!'
               className='text-center text-2xl mb-3 font-light'
            />
            <EditUserForm data={data} />
         </div>
      </div>
   );
};
