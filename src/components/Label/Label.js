import React from 'react';
import classNames from 'classnames';

export const Label = ({ className, children, htmlFor }) => {
  return (
    <label className={classNames(className)} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
