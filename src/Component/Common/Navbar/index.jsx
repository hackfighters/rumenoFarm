import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { UserContext } from "../Modal/logusecont";
// import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

// Third party Fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleMinus,
  faCirclePlus,
  faLanguage,
  faLocationDot,
  faPhone,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";

// Third party i18next
import i18next from "i18next";
import { useTranslation } from "react-i18next";

// Common Component
import Login from "../../Common/Modal/Login";
import Registration from "../../Common/Modal/Registion";
import Select from "../../Common/Select/index";

// Image
import logo from "../../../assets/img/Logo/lv-bgr.png";
import SendOtp from "../Modal/otp";
import axios from "axios";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import logstatus from "../../../assets/img/Logo/navstatus - Copy.png";
{
  /* Rumeno farm  */
}
{
  /* Rumeno */
}
{
  /* Veterinary */
}
const Navbar = ({ size, carts, setCarts, handleChange }) => {
  const { t } = useTranslation();
  const { loggedInUser, setCartdata, UidData,setamountData} = useContext(UserContext);
  const [lgShow, setLgShow] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showRegistrationModal, setShowRegistrtionModal] = useState(false);
  const [showOtp, setShowOpt] = useState(false);



  var totalAmount = 0;
  var totalPrice = 0;

  useEffect(() => {
    setCartdata(carts);
    // console.log(carts,12333333333);
  }, []);

  const toggleSelect = () => {
    setShowSelect(!showSelect);
  };
  setCartdata(carts);
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

const handleAddtoCartApi = async () => {

  // console.log('Hello')
  // try {
  //   const response = await axios.get('https://d002-171-61-11-131.ngrok-free.app/cart',);
  //   console.log('Add to cart is Successfull', response.data);
  // } catch (error) {
  //   console.error('Add to cart is not working', error);
  // }
}


  const handleRemoves = async (id) => {
    const RemoveCartData = {id:id,uID:UidData}
    // console.log(RemoveCartData,'ghgjhjjjj')
    try {
      const response = await axios.post('https://89a8-2401-4900-1c08-7658-ec3a-e43b-4210-c5fa.ngrok-free.app/deleteCart', RemoveCartData);
      console.log('Add to cart', response.data);
      if (response.data.msg === 'success') {
        toast.success("Add to cart is Remove Successfull", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const arr = carts.filter((item) => item.id !== id);
        setCarts(arr);
        
      } else {
        toast.error("Add to cart is Remove Failed", {
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

    } catch (error) {
      console.error('Add to cart is not Remove', error);
    }
    // handleRemoveCart(id)

    
  };

  const { setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("loggedInUser");
    Cookies.remove("cart");
    setLoggedInUser(null);
    navigate("/home");
  };

  return (
    <>
      <div className="container-fluid sect-topbar position-absolute">
        <div className="row">
          {/* Veterinary docter online */}
          {/* Veterinary docter cow / rabbit / new me */}
          {/* Veterinary docter salary */}
          {/* Veterinary docter fees */}
          {/* Veterinary docter course */}
          {/* Veterinary docter jods */}
          {/* Veterinary docter kese bane */}
          {/* Goat farming training */}
          <div id="topbar" className="col-sm-12 d-flex align-items-center px-0">
            <div className="container-fluid">
              <div className="contact-info row justify-content-between px-0">
                {/* Veterinary docter online */}
                {/* Veterinary docter cow / rabbit / new me */}
                {/* Veterinary docter salary */}
                {/* Veterinary docter fees */}
                {/* Veterinary docter course */}
                {/* Veterinary docter jods */}
                {/* Veterinary docter kese bane */}
                {/* Goat farming training */}
                <div className="col-sm-3 px-4 d-flex cnt align-items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="me-2"
                    style={{ color: "#f5f5f5" }}
                  />
                  <span className="text-dark">{t("v301")}</span>
                </div>
                {/* Veterinary docter online */}
                {/* Veterinary docter cow / rabbit / new me */}
                {/* Veterinary docter salary */}
                {/* Veterinary docter fees */}
                {/* Veterinary docter course */}
                {/* Veterinary docter jods */}
                {/* Veterinary docter kese bane */}
                {/* Goat farming training */}
                <div className="col-sm-3 px-3  d-flex cnt justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="me-2"
                    style={{ color: "#f0f0f0" }}
                  />
                  <span className="text-dark">rumeno.farmotech@gmail.com</span>
                  {/* Veterinary docter online */}
                  {/* Veterinary docter cow / rabbit / new me */}
                  {/* Veterinary docter salary */}
                  {/* Veterinary docter fees */}
                  {/* Veterinary docter course */}
                  {/* Veterinary docter jods */}
                  {/* Veterinary docter kese bane */}
                  {/* Goat farming training */}
                </div>
                <div className="col-sm-2 px-sm-5 px-lg-2 d-flex cnt justify-content-end align-items-center">
                  {/* Veterinary docter online */}
                  {/* Veterinary docter cow / rabbit / new me */}
                  {/* Veterinary docter salary */}
                  {/* Veterinary docter fees */}
                  {/* Veterinary docter course */}
                  {/* Veterinary docter jods */}
                  {/* Veterinary docter kese bane */}
                  {/* Goat farming training */}
                  <FontAwesomeIcon
                    icon={faClock}
                    className="me-2"
                    style={{ color: "#fafcff" }}
                  />
                  <span className="text-dark  ">
                    {" "}
                    {t("v302")} 9:00am - 8:00pm
                  </span>
                </div>
                <div className="col-lg-2 col-sm-1 px-2 d-flex cnt align-items-center justify-content-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="me-2"
                    style={{ color: "#f1f4f8" }}
                  />
                  <span className="text-dark  ">+91 7355043892</span>
                </div>
                <div className="col-sm-2  px-2   align-items-center  nav-lang-switch h-100 my-auto  justify-content-lg-start  justify-content-sm-center">
                  <FontAwesomeIcon
                    type="button"
                    onClick={toggleSelect}
                    className="nav-lang-switch-icons m-0 h4 text-white"
                    icon={faLanguage}
                  />
                  {showSelect && (
                    <Select
                      className=""
                      value={selectedOption}
                      onChange={(e) => handleChangen(e)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Veterinary docter online */}
          {/* Veterinary docter cow / rabbit / new me */}
          {/* Veterinary docter salary */}
          {/* Veterinary docter fees */}
          {/* Veterinary docter course */}
          {/* Veterinary docter jods */}
          {/* Veterinary docter kese bane */}
          {/* Goat farming training */}
          <div
            id="header"
            className="col-sm-12 navbar navbar-expand-lg navbar-light fixed-top"
          >
            <a className="logo" href="#/">
              <img className="ps-4 logo" src={logo} alt="" />
            </a>
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
            </button>
            {/* Rumeno farm  */}
            {/* Rumeno */}
            {/* Veterinary */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
                  {/* Veterinary docter online */}
                  {/* Veterinary docter cow / rabbit / new me */}
                  {/* Veterinary docter salary */}
                  {/* Veterinary docter fees */}
                  {/* Veterinary docter course */}
                  {/* Veterinary docter jods */}
                  {/* Veterinary docter kese bane */}
                  {/* Goat farming training */}
                </li>
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
                <li className="nav-item logo-width logo-width" id="cart">
                  <div className="d-flex justify-content-start">
                    {loggedInUser ? (
                      <div class="dropdown">
                        <a
                          class="p-0  justify-content-end "
                          href="#"
                          id="dropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img src={logstatus} className="w-75" alt="" />
                        </a>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <li className="d-flex align-items-center justify-content-center my-2">
                            <img
                              src={logstatus}
                              className="nav-log-status mx-2"
                              alt=""
                            />
                            <h5
                              typeof="button"
                              className="text-danger fw-bolder m-0 p-1 text-uppercase"
                            >
                              {loggedInUser}
                            </h5>
                          </li>
                          <li>
                            <a
                              class="dropdown-item justify-content-center"
                              href="/products"
                            >
                              Product
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item justify-content-center"
                              href="/contactus"
                            >
                              Contact Us
                            </a>
                          </li>
                          <hr />
                          <li className="px-4">
                            <button
                              className="btn border-0 text-white  gradient-custom-2 my-2 w-100 custom-btn btn-11"
                              onClick={handleLogout}
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <button
                        className="btn border-0 text-white  gradient-custom-2 my-2 w-100 custom-btn btn-11"
                        onClick={openModal}
                      >
                        Login
                      </button>
                    )}
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

                {/* <li>
                  {loggedInUser ? (
                    <h4
                      typeof="button"
                      className="text-danger bg-light m-0 p-1 rounded-circle"
                    >
                      {loggedInUser}
                    </h4>
                  ) : null}
                </li> */}
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
          {size === 1 ||
          size === 2 ||
          size === 3 ||
          size === 4 ||
          size === 5 ||
          size === 6 ||
          size === 7 ||
          size === 8 ||
          size === 9 ||
          size === 10 ? (
            <>
              {carts?.map((item) => {
                totalAmount += item.amount * item.price;
               const  datat = totalAmount
                setamountData(datat)
                totalPrice = item.price * item.amount;

                return (
                  <div className="row mb-4 cart-model" key={item.id}>
                    <div className="col-sm-3 cart-model-img text-center">
                      <img className="mx-3" src={item.img} alt="Loading" />
                      {/* <img className="mx-3" src={cookies.img} alt="Loading" /> */}
                    </div>
                    <div className="col-sm-3 d-flex align-items-center justify-content-center">
                      <h4>{item.name}</h4>
                    </div>
                    <div className="col-sm-6  d-flex align-items-center justify-content-around ">
                      <FontAwesomeIcon
                        icon={faCirclePlus}
                        type="button"
                        className="text-primary h4 m-0"
                        onClick={() => handleChange(item, +1)}
                      />
                      <h6 className="m-0">{item.amount}</h6>
                      {/* <h6 className="m-0">{cookies.amount}</h6> */}
                      <FontAwesomeIcon
                        icon={faCircleMinus}
                        type="button"
                        className="text-primary h4 m-0"
                        onClick={() => handleChange(item, -1)}
                      />
                      <div>{totalPrice} Rs /-</div>
                      <FontAwesomeIcon
                        type="button"
                        className="text-danger"
                        icon={faTrash}
                        onClick={() => handleRemoves(item.id)}
                      />
                    </div>
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

        {size === 1 ||
        size === 2 ||
        size === 3 ||
        size === 4 ||
        size === 5 ||
        size === 6 ||
        size === 7 ||
        size === 8 ||
        size === 9 ||
        size === 10 ? (
          <>
            <div className="row border-top border-bottom justify-content-end mx-5 py-1">
              <div className="col-sm-12 d-flex align-items-center justify-content-between">
                <h4 className="mx-2">TOTAL</h4>
                <h4 className="mx-2">Rs /- {totalAmount}</h4>
              </div>
            </div>
            <div className="justify-content-end d-flex px-5 cart-model">
              <Link to="/transaction" className="w-100 text-end">
                <button className="btn gradient-custom-2 border-0 text-white my-3">
                  PAYMENT
                </button>
              </Link>
            </div>
          </>
        ) : null}
      </Modal>
    </>
  );
};

export default Navbar;
