import React from 'react';

import { AvailableContextProvider } from '../Available/Available.context';

import { Homes } from '../Homes';
import { TopSection } from '../TopSection';
import { Sprite } from '../Sprite';
import { Available } from '../Available';

import './App.css';

export const App = () => {
  return (
    <>
      <Sprite />
      <AvailableContextProvider>
        <TopSection />
        <Available />
      </AvailableContextProvider>
      <Homes />
    </>
  );
};
