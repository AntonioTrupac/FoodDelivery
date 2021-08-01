import { FC } from 'react';

type SearchProps = {
   name: string;
   type?:
      | 'button'
      | 'checkbox'
      | 'color'
      | 'date'
      | 'datetime-local'
      | 'email'
      | 'file'
      | 'hidden'
      | 'image'
      | 'month'
      | 'number'
      | 'password'
      | 'radio'
      | 'range'
      | 'reset'
      | 'tel'
      | 'text'
      | 'time'
      | 'url'
      | 'week';
   pattern?: string;
   id?: string;
   label?: React.ReactNode;
   className?: string;
   placeholder?: string;
   onBlur?: {
      (e: React.FocusEvent<any>): void;
      <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
   };
   onChange?<T = string | React.ChangeEvent<any>>(
      field: T
   ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
   helperText?: string;
   errorClassName?: string;
   autoComplete?: string;
   value?: string | ReadonlyArray<string> | number;
};

export const Search: FC<SearchProps> = (props) => {
   return (
      <div>
         <input
            onChange={props.onChange}
            className={props.className}
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
         />
      </div>
   );
};
