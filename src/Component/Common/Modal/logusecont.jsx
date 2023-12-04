import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [sizevalue, setSizevalue] = useState(null);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, sizevalue, setSizevalue }}>
      {children}
    </UserContext.Provider>
  );
};