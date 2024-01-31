import React from 'react';

import './Row.css';
import classNames from 'classnames';

export const Row = ({ className, children }) => {
  return <ul className={classNames('row', className)}>{children}</ul>;
};
