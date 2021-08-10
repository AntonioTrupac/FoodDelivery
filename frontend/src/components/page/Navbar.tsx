import { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Search } from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faSearch,
   faUserCircle,
   faUserClock,
   faUserCheck,
   faUserCog,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/LOGO.png';

type NavbarProps = {
   fullName: string;
};

export const Navbar: FC<NavbarProps> = (props) => {
   const history = useHistory();
   const logOut = () => {
      console.log('CLICKED');
      window.localStorage.clear();
      history.push('/landing-page');
   };

   return (
      <nav className='navbar-container'>
         <div className='img-container'>
            <img src={logo} alt={logo} />
         </div>
         <div className='search-container'>
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
            <Search
               name='search'
               type='text'
               placeholder='Search'
               className='search'
            />
         </div>
         {/* MAKE A CONTAINER WITH THE CURRENT USER */}
         <div>
            <span className='user-cog-container'>
               <FontAwesomeIcon icon={faUserCog} className='user-cog' />
            </span>
            <button className='navbar-button' type='submit' onClick={logOut}>
               Logout
            </button>
         </div>
      </nav>
   );
};
