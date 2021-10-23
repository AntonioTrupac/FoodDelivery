import { FC, useRef } from 'react';
import { useHistory } from 'react-router';

import useOnClickOutside from '../../customHooks/useClickOutside';

type UserDropdownProps = {
   open: boolean;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserDropdown: FC<UserDropdownProps> = ({ open, setOpen }) => {
   const history = useHistory();
   const node = useRef<any>(null);

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

   useOnClickOutside(node, handleClickOutside);

   return (
      <div ref={node} className='dropdown bg-[#FFEEDE] absolute rounded p-4'>
         <div className='user-name border-b py-4 flex justify-between items-center'>
            <p className='text-lg font-light'>Hi, Antonio Trupac</p>
            <div className='close' onClick={handleClickInside} />
         </div>
         <div className='general-info'>
            <div className='py-1.5 border-b'>
               <div className='font-normaltext-sm '>Name:</div>

               <div className='font-light text-sm mt-1'>Antonio Trupac</div>

               <div className='font-normal text-sm mt-1'>Email:</div>

               <div className='mt-1 font-light text-sm'>
                  antonio.trupac@gmail.com
               </div>

               <div className='flex flex-col py-1.5'>
                  <div className='font-normal text-sm'>Telephone</div>
                  <div className='mt-1 font-light text-sm'>+385 95 345 344</div>
               </div>
            </div>
            <div className='flex justify-end items-center'>
               <div className='text-lg py-1.5 hover:text-[#FEAE67] hover:cursor-pointer'>
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
