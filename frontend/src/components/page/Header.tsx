import { FC } from 'react';

import { Navbar } from './Navbar';

export const Header: FC = () => {
   return (
      <>
         <div className='header-container'>
            <Navbar />
         </div>
      </>
   );
};
