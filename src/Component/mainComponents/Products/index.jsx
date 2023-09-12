import React, { useState } from "react";
import Navbar from "../Navbar";
import Prdimg1 from "../../../assets/img/prod-img/prdcom-1.jpg";
import Prdimg2 from "../../../assets/img/prod-img/prdcom-2.png";
import Prdimg3 from "../../../assets/img/prod-img/prdcom-3.jpg";
import Prdimg4 from "../../../assets/img/prod-img/prdcom-4.jpg";
import Prdimg5 from "../../../assets/img/prod-img/prdcom-5.jpg";
import Prdimg6 from "../../../assets/img/prod-img/prdcom-6.jpg";
import Prdimg7 from "../../../assets/img/prod-img/prdGS-1.jpg";
import Prdimg8 from "../../../assets/img/prod-img/prdGS-2.jpg";


const Products = () => {
  const data = [
    {
      id:1,
      name: "Tanaav Mukti",
      price: 2000,
      img: Prdimg1,
    },
    {
      id:2,
      name: "Neonato",
      price: 2000,
      img: Prdimg2,
    },
    {
      id:3,
      name: "Energico",
      price: 2000,
      img: Prdimg3,
    },
    {
      id:4,
      name: "Digesto Plus",
      price: 2000,
      img: Prdimg4,
    },
    {
      id:5,
      name: "Micro-Flora",
      price: 2000,
      img: Prdimg5,
    },
    {
      id:6,
      name: "Rumenovita",
      price: 2000,
      img: Prdimg6,
    },
    {
      id:7,
      name: "Feeding Nipple",
      price: 2000,
      img: Prdimg7,
    },
    {
      id:8,
      name: "Pro-Lac",
      price: 2000,
      img: Prdimg8,
    },
  ];

  const [cart, setCart] = useState([])

  console.log(cart)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }


  return (
    <>
      <div>
        <Navbar cart={cart} count={cart.length}/>
        <div className="container p-11">
          <div className="text-center">
            <h1 className="display-5 mb-3">Our Products</h1>
          </div>
          <div className="row">
            {data.map((user, i) => {
              return (
                <>
                  <div className="col-lg-4">
                    <div className="card-box py-4">
                      <div className="card1">
                        <img
                          src={user.img}
                          alt="Loading"
                          className="card-img"
                        />
                        <div className="card-body-products">
                          <h1 className="card-title-products">{user.name}</h1>
                          <p className="card-sub-title-products">Rs. {user.price} /-</p>
                          <div className="d-flex justify-content-between pt-3">
                            <div>
                              <button className="card-btn">View button</button>
                            </div>
                            <div>
                              <button className="card-btn" onClick={() => addToCart(user)}>Add to Card</button>
                            </div>
                          </div>
                          <div className="pt-3">
                            <button className="card-btn">You tube</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
