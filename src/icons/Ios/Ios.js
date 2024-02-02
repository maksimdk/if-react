import React from 'react';

import '../../components/Sprite/Sprite';

export const Ios = ({ className }) => {
  return (
    <svg className={className}>
      <use href="#ios" />
    </svg>
  );
};
