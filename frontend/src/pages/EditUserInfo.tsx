import { FC } from 'react';

import { Title } from '../components/page/Title';
import { EditUserForm } from '../components/forms/EditUserForm';

export const EditUserInfo: FC = () => {
   return (
      <div className='w-full flex justify-center'>
         <div className='edit-container mt-20'>
            <Title
               title='Edit your info!'
               className='text-center text-2xl mb-3 font-light'
            />
            <EditUserForm />
         </div>
      </div>
   );
};
