import { ComponentPropsWithoutRef, FC } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
   name?: string;
   type?: 'submit' | 'reset' | 'button';
   value?: string | ReadonlyArray<string> | number;
   onClick?: () => void;
   className?: string;
};

export const Button: FC<ButtonProps> = (props) => {
   return (
      <button
         type={props.type}
         value={props.value}
         name={props.name}
         onClick={props.onClick}
         className={props.className}
         disabled={props.disabled}
      >
         {props.children}
      </button>
   );
};
