import React from 'react';

import '../../components/Sprite/Sprite';

export const Google = ({ className }) => {
  return (
    <svg className={className}>
      <use href="#google" />
    </svg>
  );
};
