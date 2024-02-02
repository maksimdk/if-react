import React from 'react';
import classNames from 'classnames';

export const Input = ({ className, type = 'text', ...props }) => {
  return (
    <input className={classNames('input', className)} type={type} {...props} />
  );
};
