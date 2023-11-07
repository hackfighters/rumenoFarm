import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
// import i18next from "i18next";
// import { useTranslation } from "react-i18next";

// Common Component
import Login from "../../Common/Modal/Login";
import Registration from "../../Common/Modal/Registion";

// Image
import logo from "../../../assets/img/Logo/lv-bgr.png";
import SendOtp from "../Modal/otp";
// {
//   /* Rumeno farm  */
// }
// {
//   /* Rumeno */
// }
// {
//   /* Veterinary */
// }
const ResponsiveNavbar = ({ cart, count }) => {
  // const {  } = useTranslation();

  // State
  const [showlogin] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [CART, setCART] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showRegistrationModal, setShowRegistrtionModal] = useState(false);
  const [showOtp, setShowOpt] = useState(false);

  // const username = "admins";
  // const password = "password";

  // const user = "admin";
  // const pass = "password";

  // Function
  // useEffect(() => {
  //   if (username === username && password === password) {
  //     setshowlogin(true);
  //   } else {
  //     setshowlogin(false);
  //   }
  // }, []);



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

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <>
      <div className="container-fluid sect-topbar position-absolute">
        <div className="row">
          <div
            id=""
            className="col-sm-12 navbar navbar-expand-lg navbar-light fixed-top header"
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
                    <span className="badge-cart">{count}</span>
                  </Link>
                </li>
                <li className="nav-item logo-width logo-width" id="cart">
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn border-0 text-white  gradient-custom-2 my-2 w-100 custom-btn btn-11"
                      onClick={openModal}
                    >
                      Login
                    </button>
                    {/* <ToastContainer /> */}
                  </div>

                  <Login
                    showModal={showModal}
                    closeModal={closeModal}
                    openRegistrationModal={openRegistration}
                    OpenSendOtpModal={OpenSendOtp}
                  />
                  <Registration
                    showModal={showRegistrationModal}
                    closeModal={closeRegistrationModal}
                  />
                  <SendOtp showModal={showOtp} closeModal={CloseSendOtp} />
                </li>
                {showlogin ? (
                  <li>
                    <h4
                      typeof="button"
                      className="text-danger bg-light m-0 p-1 rounded-circle"
                    >
                      HV
                    </h4>
                  </li>
                ) : null}
              </ul>
            </div>
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
          {CART?.map((cartItem, cartindex) => {
            return (
              <div className="row mb-4 cart-model">
                <div className="col-sm-3 cart-model-img">
                  <img className="mx-3" src={cartItem.img} alt="" />
                </div>
                <div className="col-sm-3 d-flex align-items-center justify-content-center">
                  <h4>{cartItem.name}</h4>
                </div>
                <div className="col-sm-3  d-flex align-items-center justify-content-around ">
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    type="button"
                    className="text-primary h4 m-0"
                  />
                  <h6 className="m-0">7</h6>
                  <FontAwesomeIcon
                    icon={faCircleMinus}
                    type="button"
                    className="text-primary h4 m-0"
                  />
                </div>
                <div className="col-sm-3 d-flex align-items-center justify-content-center ">
                  <FontAwesomeIcon
                    type="button"
                    className="text-danger"
                    icon={faTrash}
                  />
                </div>
              </div>
            );
          })}
        </Modal.Body>
        {count === 0 && (
          <>
            <div className="row border-top border-bottom justify-content-end mx-5 py-1">
              <div className="col-sm-12 d-flex align-items-center justify-content-between">
                <h4 className="mx-2">TOTAL</h4>
                <h4 className="mx-2">$ 7000</h4>
              </div>
            </div>
            <div className="justify-content-end d-flex px-5 cart-model">
              <button className="btn gradient-custom-2 border-0 text-white my-3">
                PAYMENT
              </button>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default ResponsiveNavbar;
