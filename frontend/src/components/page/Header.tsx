import { FC, useState } from 'react';

import { Drawer } from '../drawer/Drawer';
import { Navbar } from './Navbar';

export const Header: FC = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         <div className='header-container'>
            <Navbar setIsOpen={setIsOpen} />
            <Drawer
               isOpen={isOpen}
               setIsOpen={setIsOpen}
               headerText='Cart items'
            />
         </div>
      </>
   );
};
