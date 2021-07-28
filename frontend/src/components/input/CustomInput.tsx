import React, { FC } from 'react';
import { useField } from 'formik';

type CustomInputProps = {
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
  value?: unknown;
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
  autoComplete: string;
};

export const CustomInput: FC<CustomInputProps> = (props) => {
  const [field, _, helpers] = useField(props.name);
  const { onChange, ...fieldFields } = field;
  return (
    <>
      <input
        onChange={(event) => {
          const val = event.target.value;
          if (val) {
            helpers.setValue(val);
            if (props.onChange) {
              props.onChange(val);
            }
          } else {
            helpers.setValue('');
          }
        }}
        className={props.className}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        {...fieldFields}
        {...props}
      />
    </>
  );
};
