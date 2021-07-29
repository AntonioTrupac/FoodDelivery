import { FC } from 'react';
import { Navbar } from './Navbar';
import { Restaurants } from './Restaurants';

export const Header: FC = () => {
   return (
      <>
         <div className='header-container'>
            <Navbar />
         </div>
         <div>
            <Restaurants />
         </div>
      </>
   );
};
