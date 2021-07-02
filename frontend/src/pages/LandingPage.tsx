import React, {ChangeEvent, FC, useState} from 'react';
import {useModal} from "../customHooks/useModal";
import {Modal} from "../components/modal/Modal";
import {Form} from "../components/forms/Form";
import {Login} from "./user/Login";
import {Register} from "./user/Register";
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
      <div className='h-screen grid grid-rows-3 z-10' style={bgImageStyle}>
         <div className='flex justify-between align-center'>
            <div className='mt-[60px] ml-[100px] text-3xl '>
               <img src={logo} alt={logo} className='w-[110px] h-auto md:w-[140px] 2xl:w-[200px]' />
            </div>
            <div className='mr-[100px]'>
               <button
                  className='bg-[#FEAE67] rounded-[40px] w-[206px] h-[66px] text-3xl mt-20 focus:outline-none focus-visible:outline-none focus:ring-2 text-[#ffffff] capitalize'
                  onClick={toggle}
               >
                  get started
               </button>

            </div>
         </div>
         <div className='flex flex-col items-start'>
            <p className='text-[36px] ml-[100px] capitalize'>
               feeling hungry?
            </p>
            <p className='text-[36px] ml-[100px] capitalize'>
               search for food nearby
            </p>
            <div className='relative mt-[20px]'>
            <input type='text'
                   value={value}
                   onChange={(e) => onChange(e)}
                   className='text-2xl pl-[10px] h-[72px] w-[554px] border-[2px] rounded-[20px] focus-visible:shadow-md focus:ring-2 border-grey-200 ml-[100px] relative  focus:outline-none'
            />
            <button type='submit' className='w-[117px] h-[55px] bg-[#FFEEDE] rounded-[20px] absolute left-[528px] top-[9px] text-center capitalize text-2xl focus:ring-2 focus:outline-none'>search</button>
            </div>
         </div>
         <div className='flex flex-col justify-center items-start'>
            <p className='text-3xl ml-[100px] capitalize'>FOOTER</p>
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

