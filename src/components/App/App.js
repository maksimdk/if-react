import React, { useState } from 'react';
import { Homes } from '../Homes';
import { TopSection } from '../TopSection';
import { Sprite } from '../Sprite';
import { Available } from '../Available';

import './App.css';

export const App = () => {
  const [hotels, setHotels] = useState([]);
  return (
    <>
      <Sprite />
      <TopSection setHotels={setHotels} />
      <Available hotels={hotels} />
      <Homes />
    </>
  );
};
