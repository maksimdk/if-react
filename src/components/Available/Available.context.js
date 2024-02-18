import React, { createContext, useContext, useState } from 'react';

const AvailableContext = createContext({
  hotels: [],
  setHotels: () => {},
});

export const AvailableContextProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);

  return (
    <AvailableContext.Provider value={{ hotels, setHotels }}>
      {children}
    </AvailableContext.Provider>
  );
};

export const useAvailableContext = () => useContext(AvailableContext);
