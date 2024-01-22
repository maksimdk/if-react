import React from 'react';

import classNames from 'classnames';

export const Title = ({ className, children }) => {
  return <h2 className={classNames('title', className)}>{children}</h2>;
};
