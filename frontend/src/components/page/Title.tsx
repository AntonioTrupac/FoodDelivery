import { FC } from 'react';

type TitleProps = {
   className?: string;
   title: string;
};

export const Title: FC<TitleProps> = (props) => {
   return <h1 className={props.className}>{props.title}</h1>;
};
