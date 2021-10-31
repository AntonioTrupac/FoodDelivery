import { FC } from 'react';

import { Title } from '../components/page/Title';
import { EditUserForm } from '../components/forms/EditUserForm';
import { useSessionStore } from '../store/session';

export const EditUserInfo: FC = () => {
   const session = useSessionStore();

   return (
      <div className='w-full flex justify-center'>
         <div className='edit-container mt-20'>
            <Title
               title='Edit your info!'
               className='text-center text-2xl mb-3 font-light'
            />
            <EditUserForm data={session} />
         </div>
      </div>
   );
};
