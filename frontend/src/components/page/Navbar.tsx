import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Search } from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faSearch,
   faUserCog,
   faTimes,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/LOGO.png';
import { UserDropdown } from '../userDropdown/UserDropdown';
import { useSearchLazyQuery, useSearchQuery } from '../../generated';
import { setSearchRestaurant } from '../../redux/slice/searchSlice';
import { useAppDispatch } from '../../redux/hooks';

export const Navbar: FC = () => {
   const [search, setSearch] = useState<string>('');
   const [open, setOpen] = useState<boolean>(false);
   const history = useHistory();
   const dispatch = useAppDispatch();

   //    const [getData, { data: lazyData, error: lazyError }] = useSearchLazyQuery({
   //       variables: {
   //          search: '',
   //       },
   //    });

   const { data, error } = useSearchQuery({
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

   //    const handleSubmit = (e: any) => {
   //       e.preventDefault();
   //    };

   //    const onChange = (e: any) => {
   //       setSearch(e.target.value || '');
   //       getData({
   //          variables: {
   //             search: search || '',
   //          },
   //       });
   //    };

   const onClose = (e: any) => {
      e.preventDefault();
      setSearch('');
   };

   //    if (error) return <div>{error.message}</div>;

   return (
      <nav className='navbar-container'>
         <div className='img-container' onClick={handleClick}>
            <img src={logo} alt={logo} />
         </div>

         {history.location.pathname === '/' && (
            <div className='search-container'>
               {/* <form onSubmit={handleSubmit}> */}
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
               {/* </form> */}
            </div>
         )}

         <div className='right-container'>
            <span className='user-cog-container' onClick={() => setOpen(!open)}>
               <FontAwesomeIcon icon={faUserCog} className='user-cog' />
            </span>

            {open && <UserDropdown open={open} setOpen={setOpen} />}
         </div>
      </nav>
   );
};
