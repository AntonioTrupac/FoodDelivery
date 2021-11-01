import { ChangeEvent, FC, useState } from 'react';
import { useModal } from '../customHooks/useModal';
import { Modal } from '../components/modal/Modal';
import logo from '../images/LOGO.png';
import pozadina from '../images/pozadina.jpg';
import { Form } from '../components/forms/Form';

const bgImageStyle = {
   width: '100%',
   backgroundImage: `url(${pozadina})`,
   backgroundPosition: 'center center',
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
   backgroundColor: '#464646',
};

export const LandingPage: FC = () => {
   const { isShown, toggle } = useModal();

   return (
      <>
         <div className='landing__container' style={bgImageStyle}>
            <div className='header__container'>
               <div className='image__container'>
                  <img src={logo} alt={logo} className='bckg__image' />
               </div>

               <div className='button__container'>
                  <button className='landing__button' onClick={toggle}>
                     get started
                  </button>
               </div>
            </div>

            <div className='search__container'>
               <p className='search__paragraph'>Feeling hungry?</p>
               <p className='search__paragraph'>
                  Sign up or login to search for nearby food!
               </p>
            </div>
         </div>

         <Modal isShown={isShown} hide={toggle} headerText={'Login'}>
            <Form />
         </Modal>
      </>
   );
};
