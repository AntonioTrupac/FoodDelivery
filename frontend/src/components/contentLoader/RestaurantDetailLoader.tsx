import { Loader } from './Loader';

type LoaderProps = {
   speed: number;
   width: number;
   height: number;
   isMobile: boolean;
   isTablet: boolean;
};

export const RestaurantDetailLoader = ({
   speed,
   width,
   height,
   isMobile,
   isTablet,
}: LoaderProps) => {
   if (isMobile) {
      return (
         <Loader speed={speed} width={width} height={800}>
            <rect x='20' y='0' rx='3' ry='3' width='124' height='35' />

            <rect x='445' y='80' rx='2' ry='2' width='309' height='146' />
            <rect x='445' y='240' rx='0' ry='0' width='309' height='146' />
         </Loader>
      );
   }

   return (
      <>
         {!isTablet && !isMobile ? (
            <Loader speed={speed} width={width} height={height}>
               <rect x='20' y='0' rx='3' ry='3' width='124' height='35' />
               <rect x='20' y='40' rx='3' ry='3' width='124' height='35' />
               <rect x='20' y='80' rx='3' ry='3' width='124' height='35' />

               <rect x='165' y='1' rx='2' ry='2' width='320' height='146' />
               <rect x='500' y='1' rx='0' ry='0' width='320' height='146' />
            </Loader>
         ) : (
            <Loader speed={speed} width={width} height={800}>
               <rect x='260' y='15' rx='3' ry='3' width='124' height='35' />

               <rect x='290' y='80' rx='2' ry='2' width='300' height='146' />
               <rect x='610' y='80' rx='0' ry='0' width='300' height='146' />
            </Loader>
         )}
      </>
   );
};
