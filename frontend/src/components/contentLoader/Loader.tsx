import ContentLoader from 'react-content-loader';
import React from 'react';

type LoaderProps = {
   speed: number;
   width: number;
   height: number;
   children: React.ReactNode;
};

export const Loader = ({
   speed,
   width,
   height,
   children,
   ...props
}: LoaderProps) => {
   return (
      <ContentLoader
         speed={speed}
         width={width}
         height={height}
         backgroundColor='#f3f3f3'
         foregroundColor='#ecebeb'
         {...props}
      >
         {children}
      </ContentLoader>
   );
};
