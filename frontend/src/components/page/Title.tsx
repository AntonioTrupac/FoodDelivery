import { FC } from 'react';

type Title = {
   className?: string;
   title: string;
};

export const Title: FC<Title> = (props) => {
   return <h1 className={props.className}>{props.title}</h1>;
};
