import { FC } from 'react';
import { EditUserForm } from '../components/forms/EditUserForm';

export const EditUserInfo: FC = () => {
   return (
      <div className='w-full'>
         <div className='edit-container'>
            <EditUserForm />
         </div>
      </div>
   );
};
