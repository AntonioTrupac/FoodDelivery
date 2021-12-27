import { FC, useState } from 'react';

import { BasketDrawer } from '../drawer/BasketDrawer';
import { Navbar } from './Navbar';

export const Header: FC = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         <div className='header-container'>
            <Navbar setIsOpen={setIsOpen} />
            <BasketDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
         </div>
      </>
   );
};
