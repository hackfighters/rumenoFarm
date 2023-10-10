import React, { useState } from "react";
import ViewModal from "../PopModal/index";
import ReactStars from "react-rating-stars-component";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ProductItem = ({ img, name, price, description , text}) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="col py-1">
      <div className="bg-light h-50 rounded text-dark bg-opacity-50 p-2">
        <div className="row">
          <div className="col-sm-3 p-4">
            <img src={img} alt="Loading" className="w-100" />
          </div>
          <div className="col-sm-9 px-5 text-center text-lg-start">
            <div className="fs-3">{name}</div>
            <div className="fs-4 mt-2">{price} Rs /-</div>
            <div className="mt-2">{description}</div>
            <div className="mt-2 d-flex justify-content-center justify-content-lg-start">
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
            <div className="mt-2 d-flex justify-content-center justify-content-lg-start">
              <div className="quantity-container">
                <div
                  className="quantity-button"
                  id="decrease"
                  onClick={decreaseQuantity}
                >
                  -
                </div>
                <input
                  type="text"
                  className="quantity-input"
                  value={quantity}
                  readOnly
                />
                <div
                  className="quantity-button"
                  id="increase"
                  onClick={increaseQuantity}
                >
                  +
                </div>
              </div>
            </div>
            <FontAwesomeIcon
              className="mx-2 my-3 h3 text-danger"
              type="button"
              icon={faYoutube}
            />
            <FontAwesomeIcon
              className="mx-2 my-3 h3 text-success"
              type="button"
              icon={faEye}
              onClick={openModal}
            />
            <ViewModal
              title={name}
              img={img}
              text={text}
              showModal={showModal}
              closeModal={closeModal}
            />
            <div className="prd-btn">
              <button className="btn text-white border-0 gradient-custom-2 my-4">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
