import React from 'react';
import classNames from 'classnames';

export const Link = ({ className, children, href = '#' }) => {
  return (
    <a className={classNames('link', className)} href={href}>
      {children}
    </a>
  );
};
