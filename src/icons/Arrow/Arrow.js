import React from 'react';

import '../../components/Sprite/Sprite';

export const Arrow = ({ className }) => {
  return (
    <svg className={className}>
      <use href="#arrow" />
    </svg>
  );
};
