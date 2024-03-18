import React, { useState, useContext } from "react";
import ViewModal from "../Modal/PopModal";
import ReactStars from "react-rating-stars-component";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../Common/Modal/logusecont";
import Login from "../Modal/Login";
import Registration from "../Modal/Registion";
import SendOtp from "../Modal/otp";
import { toast } from "react-toastify";
import ProudctFeedbackModal from "../Modal/productFeedback";

const ProductItem = ({ item, handleClick }) => {
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
  const [showfeedback, setshowfeedback] = useState(false);
  // const [quantity, setQuantity] = useState(1);
  const [showRegistrationModal, setShowRegistrtionModal] = useState(false);
  const [showOtp, setShowOpt] = useState(false);

  const ratingChanged = (newRating) => {
    // console.log(newRating);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const openfeedbackModal = () => {
    setshowfeedback(true);
  };

  const closefeedbackModal = () => {
    setshowfeedback(false);
  };

  const openRegistration = () => {
    setShowRegistrtionModal(true);
    setShowLoginModal(false);
  };

  const closeRegistrationModal = () => {
    setShowRegistrtionModal(false);
  };

  const OpenSendOtp = () => {
    setShowOpt(true);
    setShowLoginModal(false);
  };
  const CloseSendOtp = () => {
    setShowOpt(false);
  };

  const [showLoginModal, setShowLoginModal] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  const AddToCart = () => {
    if (loggedInUser) {
      handleClick(item);
    } else {
      // console.log("login first");
      setShowLoginModal(!showLoginModal);
      toast.warn("Please Login", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
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
            <div className="d-flex justify-content-between">
              <button
                className="btn text-white border-0 w-auto gradient-custom-2 my-4"
                onClick={AddToCart}
              >
                Add to Cart
              </button>
              <button
                className="btn text-white border-0 w-auto gradient-custom-2 my-4"
                onClick={openfeedbackModal}
              >
                FeedBack
              </button>

              <ProudctFeedbackModal
              title={name}
              showfeedModal={showfeedback}
              closefeedModal={closefeedbackModal}
            />

            
              <Login
                showModal={showLoginModal}
                closeModal={setShowLoginModal}
                openRegistrationModal={openRegistration}
                OpenSendOtpModal={OpenSendOtp}
              />
              <Registration
                showModal={showRegistrationModal}
                closeModal={closeRegistrationModal}
              />
              <SendOtp showModal={showOtp} closeModal={CloseSendOtp} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
