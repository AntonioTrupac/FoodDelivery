import React, {ChangeEvent, FC, useState} from 'react';
import {useModal} from "../customHooks/useModal";
import {Modal} from "../components/modal/Modal";
import {Login} from "./user/Login";
import logo from '../images/LOGO.png'
import pozadina from '../images/pozadina.jpg';

const bgImageStyle = {
   width: '100%',
   backgroundImage: `url(${pozadina})`,
   backgroundPosition: 'center center',
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
   backgroundColor: '#464646',
}

export const LandingPage: FC = () => {
   const [value, setValue] = useState('');
   const { isShown, toggle } = useModal();

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setValue(e.currentTarget.value);
   }

   return (
      <>
      <div className='landing__container' style={bgImageStyle}>
         <div className='header__container'>
            <div className='image__container'>
               <img src={logo} alt={logo} className='bckg__image' />
            </div>
            <div className='button__container'>
               <button
                  className='landing__button'
                  onClick={toggle}
               >
                  get started
               </button>

            </div>
         </div>
         <div className='search__container'>
            <p className='text-[36px] ml-[100px] capitalize'>
               feeling hungry?
            </p>
            <p className='search__paragraph'>
               search for food nearby
            </p>
            <div className='input__container'>
               <input type='text'
                      value={value}
                      onChange={(e) => onChange(e)}
                      className='landing__input'
               />
               <button type='submit' className='search__button'>search</button>
            </div>
         </div>
      </div>
      <Modal
         isShown={isShown}
         hide={toggle}
         headerText={'Login'}
      />
   </>
   )
}

