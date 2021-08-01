import { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';

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
         <ul className='items'>
            <li className='item'>
               <Link to=''>Prices</Link>
            </li>
            <li className='item'>
               <Link to=''>Orders</Link>
            </li>
         </ul>
         {/* MAKE A CONTAINER WITH THE CURRENT USER */}
         {/* <div>{props.fullName}</div> */}
         <button className='navbar-button' type='submit' onClick={logOut}>
            Logout
         </button>
      </nav>
   );
};
