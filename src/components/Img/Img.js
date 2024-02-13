import React from 'react';
import classNames from 'classnames';

export const Img = ({ className, src, alt }) => {
  return <img className={classNames(className)} src={src} alt={alt} />;
};
