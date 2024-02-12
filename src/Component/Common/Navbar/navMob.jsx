import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

// Third party Fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleMinus,
  faCirclePlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

// Third party i18next
import i18next from "i18next";
import { useTranslation } from "react-i18next";

// Common Component
import Login from "../../Common/Modal/Login";
import Registration from "../../Common/Modal/Registion";

// Image
import logo from "../../../assets/img/Logo/lv-bgr.png";
import SendOtp from "../Modal/otp";
import { UserContext } from "../Modal/logusecont";
import Cookies from "js-cookie";
import datatest from './test.json'

// {
//   /* Rumeno farm  */
// }
// {
//   /* Rumeno */
// }
// {
//   /* Veterinary */
// }
const ResponsiveNavbar = ({ size, handleChange }) => {
  const { t } = useTranslation();
  const { loggedInUser,cart,setCart } = useContext(UserContext);
  // State
  // const [showlogin, setshowlogin] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showRegistrationModal, setShowRegistrtionModal] = useState(false);
  const [showOtp, setShowOpt] = useState(false);

  var totalPrice = 0;

  const toggleSelect = () => {
    setShowSelect(!showSelect);
  };

  const handleChangen = (e) => {
    i18next.changeLanguage(e.target.value);
    setSelectedOption(e.target.value);
    setShowSelect(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openRegistration = () => {
    setShowRegistrtionModal(true);
    setShowModal(false);
  };

  const closeRegistrationModal = () => {
    setShowRegistrtionModal(false);
  };

  const OpenSendOtp = () => {
    setShowOpt(true);
    setShowModal(false);
  };
  const CloseSendOtp = () => {
    setShowOpt(false);
  };

  const handleAddtoCartApi = async (getUidata) => {
    console.log(datatest,3455)
  
    setCart(datatest)
  
    console.log('Hello')
    // try {
      //   const response = await axios.get('https://d002-171-61-11-131.ngrok-free.app/cart',);
      //   console.log('Add to cart is Successfull', response.data);
      // } catch (error) {
      //   console.error('Add to cart is not working', error);
    // }
  }

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice();
  };

  const { setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("loggedInUser");
    setLoggedInUser(null);
    navigate("/home");
  };

  return (
    <>
      <div className="container-fluid sect-topbar position-absolute">
        {/* Veterinary docter online */}
        {/* Veterinary docter cow / rabbit / new me */}
        {/* Veterinary docter salary */}
        {/* Veterinary docter fees */}
        {/* Veterinary docter course */}
        {/* Veterinary docter jods */}
        {/* Veterinary docter kese bane */}
        {/* Goat farming training */}
        <div className="row">
          <div
            id=""
            className="col-sm-12 navbar navbar-expand-lg navbar-light fixed-top header"
          >
            <a className="logo" href="#/">
              <img className="ps-4 logo" src={logo} alt="" />
            </a>
            {/* Veterinary docter online */}
            {/* Veterinary docter cow / rabbit / new me */}
            {/* Veterinary docter salary */}
            {/* Veterinary docter fees */}
            {/* Veterinary docter course */}
            {/* Veterinary docter jods */}
            {/* Veterinary docter kese bane */}
            {/* Goat farming training */}
            <button
              className="navbar-toggler bg-secondary"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              {/* Veterinary docter online */}
              {/* Veterinary docter cow / rabbit / new me */}
              {/* Veterinary docter salary */}
              {/* Veterinary docter fees */}
              {/* Veterinary docter course */}
              {/* Veterinary docter jods */}
              {/* Veterinary docter kese bane */}
              {/* Goat farming training */}
            </button>
            {/* Rumeno farm  */}
            {/* Rumeno */}
            {/* Veterinary */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* Veterinary docter online */}
              {/* Veterinary docter cow / rabbit / new me */}
              {/* Veterinary docter salary */}
              {/* Veterinary docter fees */}
              {/* Veterinary docter course */}
              {/* Veterinary docter jods */}
              {/* Veterinary docter kese bane */}
              {/* Goat farming training */}
              <ul className="navbar-nav w-100 justify-content-evenly bg-transparent">
                <li className="nav-item">
                  <NavLink
                    className="nav-link px-0"
                    activeclassname="active"
                    exact
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link px-0"
                    activeclassname="active"
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link px-0"
                    activeclassname="active"
                    to="/Services"
                  >
                    Services
                  </NavLink>
                </li>
                {/* Veterinary docter online */}
                {/* Veterinary docter cow / rabbit / new me */}
                {/* Veterinary docter salary */}
                {/* Veterinary docter fees */}
                {/* Veterinary docter course */}
                {/* Veterinary docter jods */}
                {/* Veterinary docter kese bane */}
                {/* Goat farming training */}
                <li className="nav-item">
                  <NavLink
                    className="nav-link px-0"
                    activeclassname="active"
                    to="/contactus"
                  >
                    Contact Us
                  </NavLink>
                </li>
                {/* <li className="nav-item" id="admin">
                  <button className="btn btn-success w-100 my-2">Admin</button>
                </li> */}
                <li className="nav-item">
                  <Link
                    id="login"
                    className="px-0"
                    onClick={() => setLgShow(true)}
                  >
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ color: "#f0f2f5" }}
                    />
                    <span className="badge-cart">{size}</span>
                   

                  </Link>
                </li>
                <div>Hello</div>
                <li className="nav-item logo-width logo-width" id="cart">
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn border-0 text-white  gradient-custom-2 my-2 w-100 custom-btn btn-11"
                      onClick={openModal}
                    >
                      Login
                    </button>
                  </div>
                  {/* Veterinary docter online */}
                  {/* Veterinary docter cow / rabbit / new me */}
                  {/* Veterinary docter salary */}
                  {/* Veterinary docter fees */}
                  {/* Veterinary docter course */}
                  {/* Veterinary docter jods */}
                  {/* Veterinary docter kese bane */}
                  {/* Goat farming training */}

                  <Login
                    showModal={showModal}
                    closeModal={closeModal}
                    openRegistrationModal={openRegistration}
                    OpenSendOtpModal={OpenSendOtp}
                    handleAddtoCartApi={handleAddtoCartApi}
                  />
                  <Registration
                    showModal={showRegistrationModal}
                    closeModal={closeRegistrationModal}
                  />
                  <SendOtp showModal={showOtp} closeModal={CloseSendOtp} />
                </li>
                <li>
                  {loggedInUser ? (
                    <NavLink to="/frmaftlog">
                    <button
                      typeof="button"
                      className="text-danger bg-secondary m-0 p-1 rounded-circle"
                    >
                      {loggedInUser}
                      Feedback
                    </button>
                    </NavLink>
                  ) : null}
                </li>
                <li>
                    {loggedInUser ? (
                      <button
                        className="btn border-0 text-white  gradient-custom-2 my-2 w-100 custom-btn btn-11"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    ) : (
                      <button
                        className="btn border-0 text-white  gradient-custom-2 my-2 w-100 custom-btn btn-11"
                        onClick={openModal}
                      >
                        Login
                      </button>
                    )}
                </li>
              </ul>
            </div>
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
      </div>
      {/* model-for-cart */}
      <Modal
        className="cart-model-sect"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Shopping Cart
          </Modal.Title>
        </Modal.Header>
         <Modal.Body className="cart-model-body">
          {size == 1 ||
          size == 2 ||
          size == 2 ||
          size == 3 ||
          size == 4 ||
          size == 5 ||
          size == 6 ||
          size == 7 ||
          size == 8 ||
          size == 9 ||
          size == 10 ? (
            <>
              {cart?.map((item, cartindex) => {
                totalPrice += item.amount * item.price;
                return (
                  <div className="row mb-4 cart-model" key={cartindex}>
                    <div className="col-sm-3 cart-model-img text-center">
                      <img className="mx-3" src={item.img} alt="Loading" />
                    </div>
                    <div className="col-sm-3 d-flex align-items-center justify-content-center">
                      <h4 className="my-2">{item.name}</h4>
                    </div>
                    <div className="col-sm-6  d-flex align-items-center justify-content-around ">
                      <FontAwesomeIcon
                        icon={faCirclePlus}
                        type="button"
                        className="text-primary h4 m-0"
                        onClick={() => handleChange(item, +1)}
                      />
                      <h6 className="m-0">{item.amount}</h6>
                      <FontAwesomeIcon
                        icon={faCircleMinus}
                        type="button"
                        className="text-primary h4 m-0"
                        onClick={() => handleChange(item, -1)}
                      />
                      <div>{item.price} Rs /-</div>
                      <FontAwesomeIcon
                        type="button"
                        className="text-danger"
                        icon={faTrash}
                        onClick={() => handleRemove(item.id)}
                      />
                    </div>
                    {/* <div className="col-sm-3 d-flex align-items-center justify-content-center ">
                    </div> */}
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <div>
                <div>
                  <h3 className="shopping-empty">Your Basket is Empty</h3>
                </div>
                <div className="shopping-empt-icon">
                  <h5>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </h5>
                </div>
              </div>
            </>
          )}
        </Modal.Body>
        {size == 1 ||
        size == 2 ||
        size == 2 ||
        size == 3 ||
        size == 4 ||
        size == 5 ||
        size == 6 ||
        size == 7 ||
        size == 8 ||
        size == 9 ||
        size == 10 ? (
          <>
            <div className="row border-top border-bottom justify-content-end mx-3 py-2">
              <div className="col-sm-12 d-flex align-items-center justify-content-between">
                <h4 className="mx-2 my-0">TOTAL</h4>
                <h4 className="mx-2 my-0">Rs /- {totalPrice}</h4>
              </div>
            </div>
            <div className="justify-content-end d-flex px-5 cart-model">
            <Link to="/transaction" className="w-100 text-center">
              <button className="btn gradient-custom-2 border-0 text-white my-3 w-75">
                PAYMENT
              </button>
            </Link>
            </div>
          </>
        ):null}
      </Modal>
    </>
  );
};

export default ResponsiveNavbar;