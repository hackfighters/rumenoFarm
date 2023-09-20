import React, { useState } from "react";
import Prdcom from "../../../assets/img/prod-img/prdcom-1.jpg";

const ProductSidebar = () => {
  const Data = [
    {
      name: "Tanaav Mukti",
      price: "₹7:00",
      oldprice: "₹10:00",
      img: Prdcom,
    },
    {
      name: "Tanaav Mukti",
      price: "₹7:00",
      oldprice: "₹10:00",
      img: Prdcom,
    },
  ];
  // State
  const [animal, setAnimal] = useState(true);
  const [farmhouse, setFarmHouse] = useState(false);

  //   Function
  const onHandleChangefarmhouse = () => {
    setFarmHouse(true);
    setAnimal(false);
  };
  const onHandleChangeanimal = () => {
    setAnimal(true);
    setFarmHouse(false);
  };
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-white rounded">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li
                  className="nav-item sildar p-1"
                  onClick={onHandleChangeanimal}
                >
                  <i className="fs-4 bi-house"></i>
                  <span className="ms-1 d-none d-sm-inline text-dark">
                    Home
                  </span>
                </li>
                <li
                  onClick={onHandleChangefarmhouse}
                  className="sildar p-1 mt-1"
                >
                  <i className="fs-4 bi-speedometer2"></i>
                  <span className="ms-1 d-none d-sm-inline text-dark">
                    Dashboard
                  </span>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          {animal && (
            <div className="col py-1">
              {Data.map((s) => (
                <div className="bg-light h-50 rounded text-dark bg-opacity-50 p-2">
                  <div className="d-flex">
                    <div className="p-2">
                      <img src={s.img} alt="Loading" width={200} />
                    </div>
                    <div className="p-2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloribus fugiat dicta laborum quos rerum corporis esse
                      beatae dignissimos enim in distinctio, voluptate
                      temporibus fuga perspiciatis nesciunt commodi repellat
                      sint suscipit.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {farmhouse && (
            <div className="col py-1">
              <div className="bg-light h-50 rounded text-dark bg-opacity-75 p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                dolorum quis facere voluptas a. Voluptas vero accusamus maiores
                dicta obcaecati?bnlkfcvbnm,vbnm,vbnm
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductSidebar;
