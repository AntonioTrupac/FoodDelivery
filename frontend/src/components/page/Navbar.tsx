import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Search } from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faSearch,
   faUserCog,
   faTimes,
   faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/LOGO.png';
import { UserDropdown } from '../userDropdown/UserDropdown';
import { useSearchQuery } from '../../generated';
import { getAccessToken } from '../../accessToken';
import { useModal } from '../../customHooks/useModal';
import { Form } from '../forms/Form';
import { Modal } from '../modal/Modal';
import { useSearch } from "../../store/search";

type NavbarProps = {
   setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const Navbar: FC<NavbarProps> = (props) => {
   const { isShown, toggle } = useModal();
   const [search, setSearch] = useState<string>('');
   const [open, setOpen] = useState<boolean>(false);
   const history = useHistory();
   const homeRoute = history.location.pathname === '/';
   const accessToken = getAccessToken();
   const { setRestaurantPayload } = useSearch()

   const { data } = useSearchQuery({
      variables: {
         search,
      },
   });

   const handleClick = () => {
      history.push('/');
   };

   useEffect(() => {
      if (data) {
         setRestaurantPayload(data)
      }
   }, [data, setRestaurantPayload]);



   const onClose = (e: any) => {
      e.preventDefault();
      setSearch('');
   };

   return (
      <nav className='navbar-container'>
         <div className='img-container' onClick={handleClick}>
            <img src={logo} alt={logo} />
         </div>

         {homeRoute && (
            <div className='search-container'>
               <FontAwesomeIcon icon={faSearch} className='search-icon' />

               <Search
                  name='search'
                  type='text'
                  placeholder='Search'
                  className='search'
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
               />

               {search && (
                  <FontAwesomeIcon
                     icon={faTimes}
                     className='absolute top-[15px] right-5 hover:text-gray-500'
                     onClick={onClose}
                  />
               )}
            </div>
         )}

         <div className='right-container ml-4 md:pl-3 justify-center items-center'>
            {!homeRoute && (
               <span
                  className='mr-4 text-[#FEAE67]'
                  onClick={() => props.setIsOpen(true)}
               >
                  <FontAwesomeIcon icon={faShoppingCart} size='lg' />
               </span>
            )}

            {accessToken && (
               <span
                  className='user-cog-container'
                  onClick={() => setOpen(!open)}
               >
                  <FontAwesomeIcon icon={faUserCog} className='user-cog' />
               </span>
            )}

            {!accessToken && (
               <button
                  className='bg-[#FEAE67] text-white focus:outline-none focus-visible:outline-none focus:ring-2 rounded-[40px] px-4 py-1 text-base md:px-3 md:py-1.5 md:text-sm capitalize font-light'
                  onClick={toggle}
               >
                  Sign up
               </button>
            )}

            {open && accessToken && (
               <UserDropdown open={open} setOpen={setOpen} />
            )}

            <Modal
               className='absolute top-[120px] mx-5 z-50 bg-[#ffffff] h-auto rounded-[20px]'
               isShown={isShown}
               hide={toggle}
               headerText={'Login'}
            >
               <Form />
            </Modal>
         </div>
      </nav>
   );
};
