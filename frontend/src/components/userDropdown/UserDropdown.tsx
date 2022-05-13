import {Dispatch, FC, SetStateAction, useRef} from 'react';
import { useHistory } from 'react-router';

import useOnClickOutside from '../../customHooks/useClickOutside';
import { useSessionStore } from '../../store/session';

type UserDropdownProps = {
   open: boolean;
   setOpen: Dispatch<SetStateAction<boolean>>;
};

export const UserDropdown: FC<UserDropdownProps> = ({ open, setOpen }) => {
   const history = useHistory();
   const node = useRef<any>(null);
   const { email, firstName, lastName, phoneNumber } = useSessionStore();

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

   const handleRoute = () => {
      history.push('/editUserInfo');
   };

   useOnClickOutside(node, handleClickOutside);

   return (
      <div ref={node} className='dropdown bg-[#FFEEDE] absolute rounded p-4'>
         <div className='user-name border-b py-4 flex justify-between items-center'>
            <p className='text-lg font-light'>
               Hi, {firstName} {lastName}!
            </p>
            <div className='close' onClick={handleClickInside} />
         </div>
         <div className='general-info'>
            <div className='py-1.5 border-b'>
               <div className='font-normal text-lg'>Name:</div>

               <div className='font-light text-base mt-1'>
                  {firstName} {lastName}
               </div>

               <div className='font-normal text-lg mt-1'>Email:</div>

               <div className='mt-1 font-light text-base'>{email}</div>

               <div className='flex flex-col py-1.5'>
                  <div className='font-normal text-lg'>Telephone</div>
                  <div className='mt-1 font-light text-base'>{phoneNumber}</div>
               </div>
            </div>
            <div className='flex justify-end items-center'>
               <div
                  className='py-1.5 hover:text-[#FEAE67] hover:cursor-pointer text-[20px]'
                  onClick={handleRoute}
               >
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
