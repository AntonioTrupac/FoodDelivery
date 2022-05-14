import { Loader } from './Loader';
import React from 'react';

type ItemLoaderProps = {
   speed: number;
   width: number;
   height: number;
};

export const ItemCardLoader = ({ speed, width, height }: ItemLoaderProps) => {
   return (
      <Loader height={height} speed={speed} width={width}>
         <rect x='1' y='1' rx='10' ry='4' width={width} height={height} />
      </Loader>
   );
};
