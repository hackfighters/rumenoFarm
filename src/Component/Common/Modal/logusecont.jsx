import axios from 'axios';
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [sizevalue, setSizevalue] = useState(null);
  const [UidData , setUidData] = useState(null)
  const [cartdata, setCartdata] = useState(null)
  const [amountData, setamountData] = useState(null)

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, sizevalue, setSizevalue, setUidData, UidData ,cartdata,setCartdata, amountData,setamountData,cart,setCart}}>
      {children}
    </UserContext.Provider>
  );
};