import React from 'react';
import classNames from 'classnames';

import './Button.css'

export const Button = ({
  className,
  purpose,
  children,
  type = 'button',
  ariaLabel,
}) => {
  return (
    <button
      className={classNames('btn', className, purpose)}
      type={type}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
