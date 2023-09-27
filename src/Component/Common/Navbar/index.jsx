import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

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

// Common Component
import Login from "../../Common/Modal/Login";
import Registration from "../../Common/Modal/Registion";

import Select from "../../Common/Select/index";

// Image
import logo from "../../../assets/img/lv-bgr.png";

const Navbar = ({ cart, count }) => {
  // State
  const [showlogin, setshowlogin] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [CART, setCART] = useState([]);
  const [showSelect, setShowSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showRegistrationModal, setShowRegistrtionModal] = useState(false);

  const username = "admin";
  const password = "password";

  // Function
  useEffect(() => {
    if (username === "admin" && password === "password") {
      setshowlogin(true);
    } else {
      setshowlogin(false);
    }
  }, []);

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

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <>
      <div className="container-fluid sect-topbar position-absolute">
        <div className="row">
          <div id="topbar" className="col-sm-12 d-flex align-items-center ">
            <div className="container-fluid">
              <div className="contact-info row justify-content-center">
                <div className="col-sm-3 d-flex cnt align-items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="me-2"
                    style={{ color: "#f5f5f5" }}
                  />
                  <span className="text-dark">
                    598 Lala Mahaveer Prasad Rd, Sadar Bazar, Lucknow, Uttar
                    Pradesh 226002
                  </span>
                </div>
                <div className="col-sm-2 d-flex cnt justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="me-2"
                    style={{ color: "#f0f0f0" }}
                  />
                  <span className="text-dark">rumeno.farmotech@gmail.com</span>
                </div>
                <div className="col-sm-2 d-flex cnt justify-content-end align-items-center">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="me-2"
                    style={{ color: "#fafcff" }}
                  />
                  <span className="text-dark  ">Time 9:00am - 8:00pm</span>
                </div>
                <div className="col-sm-2 d-flex cnt align-items-center justify-content-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="me-2"
                    style={{ color: "#f1f4f8" }}
                  />
                  <span className="text-dark  ">+91 7355043892</span>
                </div>
                <div className="col-sm-2 align-items-center  nav-lang-switch">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav w-100 justify-content-evenly bg-transparent">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    exact
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/Services"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
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
                    href="#/"
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
                  <button className="btn border-0 text-white  gradient-custom-2 my-2 w-100 custom-btn btn-11" onClick={openModal}>Login</button>
                    {/* <ToastContainer /> */}
                  </div>

                  <Login
                    showModal={showModal}
                    closeModal={closeModal}
                    openRegistrationModal={openRegistration}
                  />
                  <Registration
                    showModal={showRegistrationModal}
                    closeModal={closeRegistrationModal}
                  />
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
        <div className="row border-top border-bottom justify-content-end mx-5 py-1">
          <div className="col-sm-12 d-flex align-items-center justify-content-between">
            <h4 className="mx-2">TOTAL</h4>
            <h4 className="mx-2">$ 7000</h4>
          </div>
        </div>
        <div className="justify-content-end d-flex px-5 cart-model">
          <button type="button" className="btn btn-success my-3">
            PAYMENT
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
