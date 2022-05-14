import { useEffect, useState } from 'react';

const TABLET_WIDTH = 768;
const LAPTOP_WIDTH = 1280;

const getIsLaptop = () => window.innerWidth >= LAPTOP_WIDTH;
const getIsMobile = () => window.innerWidth < TABLET_WIDTH;

export const useResponsive = () => {
   const [isMobile, setIsMobile] = useState<boolean>(getIsMobile);
   const [isLaptop, setIsLaptop] = useState<boolean>(getIsLaptop);

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(getIsMobile());
         setIsLaptop(getIsLaptop());
      };

      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return { isMobile, isLaptop, isTablet: !isMobile && !isLaptop };
};
