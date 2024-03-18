import axios from "axios";
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [farmDtl, setfarmDtl] = useState(null);
  const [sizevalue, setSizevalue] = useState(null);
  const [UidData, setUidData] = useState(null);
  const [cartdata, setCartdata] = useState(null);
  const [amountData, setamountData] = useState(null);
  const [iteamdata, setiteamdata] = useState();
  const [kiddata, setKidData] = useState({});
  const [brddata, setbrddata] = useState({});
  const [Ucaddkid, setUcaddkid] = useState({});
  const [Ucmilkrec, setUcmilkrec] = useState({});
  const [UcPostWean, setUcPostWean] = useState({});
  const [Ucvaccine, setUcvaccine] = useState({});
  const [prntUid, setprntUid] = useState({});
  const [AnimalData, setAnimalData] = useState({});
  const [selectedAnimal, setSelectedAnimal] = useState("");

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        farmDtl,
        setfarmDtl,
        prntUid,
        setprntUid,
        AnimalData,
        setAnimalData,
        UcPostWean,
        selectedAnimal,
        setSelectedAnimal,
        setUcPostWean,
        Ucvaccine,
        setUcvaccine,
        Ucmilkrec,
        setUcmilkrec,
        setLoggedInUser,
        sizevalue,
        setSizevalue,
        setUidData,
        UidData,
        cartdata,
        setCartdata,
        amountData,
        setamountData,
        cart,
        setCart,
        iteamdata,
        setiteamdata,
        kiddata,
        setKidData,
        brddata,
        setbrddata,
        Ucaddkid,
        setUcaddkid,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
