import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/LOGO.png';

export const Navbar: FC = () => {
   const logout = () => {
      localStorage.clear();
   };

   return (
      <nav className='navbar-container'>
         <div className='img-container'>
            <img src={logo} alt={logo} />
         </div>
         <ul className='items'>
            <li className='item'>
               <Link to='/restaurants'>Restaurants</Link>
            </li>
            <li className='item'>
               <Link to='/prices'>Prices</Link>
            </li>
            <li className='item'>
               <Link to='/orders'>Orders</Link>
            </li>
         </ul>
         <button type='button' className='navbar-button' onSubmit={logout}>
            Logout
         </button>
      </nav>
   );
};
