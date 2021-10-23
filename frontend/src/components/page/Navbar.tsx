import { FC, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Search } from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCog } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/LOGO.png';
import { UserDropdown } from '../userDropdown/UserDropdown';

type NavbarProps = {
   fullName?: string;
};

export const Navbar: FC<NavbarProps> = (props) => {
   const ref = useRef<any>();
   const [search, setSearch] = useState<string>('');
   const [open, setOpen] = useState<boolean>(false);
   const history = useHistory();

   const handleClick = () => {
      history.push('/');
   };

   return (
      <nav className='navbar-container'>
         <div className='img-container' onClick={handleClick}>
            <img src={logo} alt={logo} />
         </div>
         <div className='search-container' ref={ref}>
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
            <Search
               name='search'
               type='text'
               placeholder='Search'
               className='search'
               onChange={(e) => setSearch(e.target.value)}
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
