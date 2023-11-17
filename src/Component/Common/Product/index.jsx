import React, { useState } from "react";
import ViewModal from "../Modal/PopModal";
import ReactStars from "react-rating-stars-component";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ProductItem = ({ item ,handleClick }) => {
  const {
    img,
    name,
    priceText,
    description,
    text,
    efficacy,
    suitable,
    tipe,
    efficacy1,
    efficacy2,
  } = item;
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
      {/* Veterinary docter online */}
      {/* Veterinary docter cow / rabbit / new me */}
      {/* Veterinary docter salary */}
      {/* Veterinary docter fees */}
      {/* Veterinary docter course */}
      {/* Veterinary docter jods */}
      {/* Veterinary docter kese bane */}
      {/* Goat farming training */}
      <div className="bg-light h-50 rounded text-dark bg-opacity-50 p-2">
        <div className="row">
          {/* Veterinary docter online */}
          {/* Veterinary docter cow / rabbit / new me */}
          {/* Veterinary docter salary */}
          {/* Veterinary docter fees */}
          {/* Veterinary docter course */}
          {/* Veterinary docter jods */}
          {/* Veterinary docter kese bane */}
          {/* Goat farming training */}
          <div className="col-sm-4 p-4">
            <img src={img} alt="Loading" className="w-100" />
          </div>
          <div className="col-sm-8 px-5 text-center text-lg-start">
            {/* Veterinary docter online */}
            {/* Veterinary docter cow / rabbit / new me */}
            {/* Veterinary docter salary */}
            {/* Veterinary docter fees */}
            {/* Veterinary docter course */}
            {/* Veterinary docter jods */}
            {/* Veterinary docter kese bane */}
            {/* Goat farming training */}
            <div className="fs-3">{name}</div>
            <div className="fs-4 mt-2 text-danger">{priceText}</div>
            <div className="mt-2">{description}</div>
            <div className="d-flex justify-content-between mt-2">
              {/* Veterinary docter online */}
              {/* Veterinary docter cow / rabbit / new me */}
              {/* Veterinary docter salary */}
              {/* Veterinary docter fees */}
              {/* Veterinary docter course */}
              {/* Veterinary docter jods */}
              {/* Veterinary docter kese bane */}
              {/* Goat farming training */}
              <div>
                <span className="fw-bold">{suitable}</span>
                <span>{tipe}</span>
                {/* Veterinary docter online */}
                {/* Veterinary docter cow / rabbit / new me */}
                {/* Veterinary docter salary */}
                {/* Veterinary docter fees */}
                {/* Veterinary docter course */}
                {/* Veterinary docter jods */}
                {/* Veterinary docter kese bane */}
                {/* Goat farming training */}
              </div>
              <div>
                <span className="fw-bold">{efficacy}</span>
                <span>{efficacy1}</span>
                <span>{efficacy2}</span>
                {/* Veterinary docter online */}
                {/* Veterinary docter cow / rabbit / new me */}
                {/* Veterinary docter salary */}
                {/* Veterinary docter fees */}
                {/* Veterinary docter course */}
                {/* Veterinary docter jods */}
                {/* Veterinary docter kese bane */}
                {/* Goat farming training */}
              </div>
            </div>
            <div className="mt-2 d-flex justify-content-center justify-content-lg-start">
              {/* Veterinary docter online */}
              {/* Veterinary docter cow / rabbit / new me */}
              {/* Veterinary docter salary */}
              {/* Veterinary docter fees */}
              {/* Veterinary docter course */}
              {/* Veterinary docter jods */}
              {/* Veterinary docter kese bane */}
              {/* Goat farming training */}
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
            {/* Veterinary docter online */}
            {/* Veterinary docter cow / rabbit / new me */}
            {/* Veterinary docter salary */}
            {/* Veterinary docter fees */}
            {/* Veterinary docter course */}
            {/* Veterinary docter jods */}
            {/* Veterinary docter kese bane */}
            {/* Goat farming training */}
          
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
            {/* Veterinary docter online */}
            {/* Veterinary docter cow / rabbit / new me */}
            {/* Veterinary docter salary */}
            {/* Veterinary docter fees */}
            {/* Veterinary docter course */}
            {/* Veterinary docter jods */}
            {/* Veterinary docter kese bane */}
            {/* Goat farming training */}
            <div className="prd-btn">
              <button className="btn text-white border-0 gradient-custom-2 my-4" onClick={()=>handleClick(item)}>
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
