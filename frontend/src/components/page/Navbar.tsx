import { ChangeEvent, FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Search } from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCog } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/LOGO.png';
import { UserDropdown } from '../userDropdown/UserDropdown';
import { useSearchQuery } from '../../generated';

export const Navbar: FC = () => {
   const [search, setSearch] = useState<string>();
   const [open, setOpen] = useState<boolean>(false);
   const history = useHistory();

   const { data, error, loading } = useSearchQuery({
      variables: {
         search,
      },
   });

   const handleClick = () => {
      history.push('/');
   };

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setSearch(e.currentTarget.value);
   };

   return (
      <nav className='navbar-container'>
         <div className='img-container' onClick={handleClick}>
            <img src={logo} alt={logo} />
         </div>

         <div className='search-container'>
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
            <Search
               name='search'
               type='text'
               placeholder='Search'
               className='search'
               onChange={handleChange}
               value={search}
            />
         </div>

         <div className='right-container'>
            <span className='user-cog-container' onClick={() => setOpen(!open)}>
               <FontAwesomeIcon icon={faUserCog} className='user-cog' />
            </span>

            {open && <UserDropdown open={open} setOpen={setOpen} />}
         </div>
      </nav>
   );
};
