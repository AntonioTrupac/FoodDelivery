import { FC, useRef } from 'react';
import { useHistory } from 'react-router';

import useOnClickOutside from '../../customHooks/useClickOutside';
import { useMeQuery } from '../../generated';

type UserDropdownProps = {
   open: boolean;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserDropdown: FC<UserDropdownProps> = ({ open, setOpen }) => {
   const history = useHistory();
   const node = useRef<any>(null);

   const { data: user, error, loading } = useMeQuery();

   console.log('me', user);

   const logOut = () => {
      window.localStorage.clear();
      history.push('/landing-page');
   };

   const handleClickInside = () => {
      setOpen(!open);
   };

   const handleClickOutside = () => {
      setOpen(!open);
   };

   if (error) {
      <div>{error.message}</div>;
   }
   if (loading) {
      <div>Loading...</div>;
   }

   useOnClickOutside(node, handleClickOutside);

   return (
      <div ref={node} className='dropdown bg-[#FFEEDE] absolute rounded p-4'>
         <div className='user-name border-b py-4 flex justify-between items-center'>
            <p className='text-lg font-light'>
               Hi, {user?.me?.firstName} {user?.me?.lastName}!
            </p>
            <div className='close' onClick={handleClickInside} />
         </div>
         <div className='general-info'>
            <div className='py-1.5 border-b'>
               <div className='font-normal text-lg'>Name:</div>

               <div className='font-light text-base mt-1'>
                  {user?.me?.firstName} {user?.me?.lastName}
               </div>

               <div className='font-normal text-lg mt-1'>Email:</div>

               <div className='mt-1 font-light text-base'>
                  {user?.me?.email}
               </div>

               <div className='flex flex-col py-1.5'>
                  <div className='font-normal text-lg'>Telephone</div>
                  <div className='mt-1 font-light text-base'>
                     {user?.me?.phoneNumber}
                  </div>
               </div>
            </div>
            <div className='flex justify-end items-center'>
               <div className='py-1.5 hover:text-[#FEAE67] hover:cursor-pointer text-[20px]'>
                  Edit
               </div>
            </div>
         </div>

         <div className='flex items-center justify-center my-2'>
            <button
               className='navbar-button px-4 py-1.5 text-sm rounded-[0.75em]'
               type='submit'
               onClick={logOut}
            >
               Logout
            </button>
         </div>
      </div>
   );
};
