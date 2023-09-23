import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

// Common Component
import Prdcom from "../../../assets/img/prod-img/prdcom-1.jpg";
import Prdcoms from "../../../assets/img/prod-img/prdcom-1.jpg";

const ProductSidebar = () => {

  // I will delete this comment after connecting the Api
  const Data = [
    {
      name: "Tanaav Mukti",
      price: 700,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: Prdcom,
    },
    {
      name: "Tanaav Mukti",
      price: 700,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: Prdcoms,
    },
  ];
  
  // State
  const [animal, setAnimal] = useState(true);
  const [farmhouse, setFarmHouse] = useState(false);
  const [quantity, setQuantity] = useState(1);

  //   Function
  const onHandleChangefarmhouse = () => {
    setFarmHouse(true);
    setAnimal(false);
  };
  const onHandleChangeanimal = () => {
    setAnimal(true);
    setFarmHouse(false);
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // console.log("quantity", quantity);

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
          <div className="col-md-10">
            {animal && (
              <>
                {Data.map((s) => (
                  <div className="col py-1">
                    <div className="bg-light h-50 rounded text-dark bg-opacity-50 p-2">
                      <div className="d-flex">
                        <div className="p-2">
                          <img src={s.img} alt="Loading" width={200} />
                        </div>
                        <div className="p-2 ps-5">
                          <div className="fs-3 ">{s.name}</div>
                          <div className="fs-4 mt-2">{s.price} Rs /-</div>
                          <div className="mt-2">{s.description}</div>
                          <div className="mt-2">
                            <ReactStars
                              count={5}
                              onChange={ratingChanged}
                              size={24}
                              isHalf={true}
                              emptyIcon={<i className="far fa-star"></i>}
                              halfIcon={<i className="fa fa-star-half-alt"></i>}
                              fullIcon={<i className="fa fa-star"></i>}
                              activeColor="#ffd700"
                            />
                          </div>

                          <div className="mt-2">
                            <div class="quantity-container">
                              <div
                                class="quantity-button"
                                id="decrease"
                                onClick={decreaseQuantity}
                              >
                                -
                              </div>
                              <input
                                type="text"
                                class="quantity-input"
                                value={quantity}
                                readonly
                              />
                              <div
                                class="quantity-button"
                                id="increase"
                                onClick={increaseQuantity}
                              >
                                +
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 w-50">
                            <button className="btn btn-success w-100 my-2">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
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
