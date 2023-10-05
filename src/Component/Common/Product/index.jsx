import React, { useState } from "react";
import ViewModal from "../PopModal/index";
import ReactStars from "react-rating-stars-component";
import {faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";


const ProductItem = ({img,name,price,description}) => {


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
    // <div className="col-md-10 product-sect p-3">
        <div className="col py-1">
      <div className="bg-light h-50 rounded text-dark bg-opacity-50 p-2">
        <div className="row">
          <div className="col-sm-3 p-2">
            <img src={img} alt="Loading" className="w-100" />
          </div>
          <div className="col-sm-9 p-2 ps-5">
            <div className="fs-3">{name}</div>
            <div className="fs-4 mt-2">{price} Rs /-</div>
            <div className="mt-2">{description}</div>
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
              beat
            />
            <FontAwesomeIcon
              className="mx-2 my-3 h3 text-success"
              type="button"
              icon={faEye}
              beat
              onClick={openModal}
            />
            <ViewModal
              title={name}
              img={img}
              description={description}
              showModal={showModal}
              closeModal={closeModal}
            />
            <div className="prd-btn w-50">
              <button className="btn text-white border-0 gradient-custom-2 my-4 w-50">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ProductItem;