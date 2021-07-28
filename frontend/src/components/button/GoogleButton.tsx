import React, { FC } from 'react';

type GoogleButtonProps = {
  onClick?: () => void;
  className?: string;
};

export const GoogleButton: FC<GoogleButtonProps> = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
