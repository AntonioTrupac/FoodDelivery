import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../images/LOGO.png';
import background from '../images/pozadina.jpg';

const bgImageStyle = {
   width: '100%',
   backgroundImage: `url(${background})`,
   backgroundPosition: 'center center',
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
   backgroundColor: '#464646',
};

export const LandingPage: FC = () => {
   return (
      <>
         <div className='landing__container' style={bgImageStyle}>
            <div className='header__container'>
               <div className='image__container'>
                  <img src={logo} alt={logo} className='bckg__image' />
               </div>

               <div className='button__container'>
                  <NavLink to='/' className='landing__button'>
                     get started
                  </NavLink>
               </div>
            </div>

            <div className='search__container'>
               <p className='search__paragraph'>Feeling hungry?</p>
               <p className='search__paragraph'>
                  Sign up or login to search for nearby food!
               </p>
            </div>
         </div>
      </>
   );
};
