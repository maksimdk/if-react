import React from 'react';
import classNames from 'classnames';

import './Container.css';

export const Container = ({ className, children }) => {
  return <div className={classNames('container', className)}>{children}</div>;
};
