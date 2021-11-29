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
import { setSearchRestaurant } from '../../redux/slice/searchSlice';
import { useAppDispatch } from '../../redux/hooks';

type NavbarProps = {
   setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const Navbar: FC<NavbarProps> = (props) => {
   const [search, setSearch] = useState<string>('');
   const [open, setOpen] = useState<boolean>(false);
   const history = useHistory();
   const homeRoute = history.location.pathname === '/';

   const dispatch = useAppDispatch();

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
         dispatch(setSearchRestaurant(data));
      }
   }, [dispatch, data]);

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

         <div className='right-container ml-4 md:pl-3'>
            {!homeRoute && (
               <span
                  className='mr-4 text-[#FEAE67]'
                  onClick={() => props.setIsOpen(true)}
               >
                  <FontAwesomeIcon icon={faShoppingCart} size='lg' />
               </span>
            )}

            <span className='user-cog-container' onClick={() => setOpen(!open)}>
               <FontAwesomeIcon icon={faUserCog} className='user-cog' />
            </span>

            {open && <UserDropdown open={open} setOpen={setOpen} />}
         </div>
      </nav>
   );
};
