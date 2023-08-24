import React from "react";
import Prdimg1 from "../../../assets/img/prod-img/Digesto-Plus.jpg";

const prd = () => {
  const imageSizes = [
    
      {name: "digesto"},
      {price: "07"},
      {img: "./abtimg1"}
   
  ];
  return (
    <>
      <div className="prd">
        {imageSizes.map((user) => (
          <div className="user">{user.img}</div>
        ))}
      </div>
    </>
  );
};

export default prd;
