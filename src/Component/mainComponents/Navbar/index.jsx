import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/lv-bgr.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from 'react-bootstrap/Modal';
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
import MyModal from "../../Common/Select/signLoginModal";
import Select from "../../Common/Select/index";
import i18next from "i18next";


const Navbar = ({ cart, count }) => {



  const [lgShow, setLgShow] = useState(false);
  const [signup, setSignup] = useState(false);
  const [CART, setCART] = useState([]);
  const [showSelect, setShowSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleSelect = () => {
    setShowSelect(!showSelect);
  };


  const handleChangen = (e) => {
    i18next.changeLanguage(e.target.value);
    setSelectedOption(e.target.value);
    setShowSelect(false);
  };


  const [showModal, setShowModal] = useState(false);
 

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <>
      <div className="container sect-topbar position-absolute">
        <div className="row">
          <div id="topbar" className="col-sm-12 d-flex align-items-center ">
            <div className="container">
              <div className="contact-info row">
                <div className="col-sm-4 d-flex cnt align-items-center">
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
                <div className="col-sm-2 d-flex cnt align-items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="me-2"
                    style={{ color: "#f1f4f8" }}
                  />
                  <span className="text-dark  ">+91 7355043892</span>
                </div>
                <div className="col-sm-2 align-items-center  nav-lang-switch">
                <FontAwesomeIcon type="button" onClick={toggleSelect} className="nav-lang-switch-icons m-0 h4 text-white" icon={faLanguage} />
                {showSelect &&(<Select className="" value={selectedOption} onChange={(e) => handleChangen(e)}/>)}
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
                <li className="nav-item active">
                  <Link className="nav-link text-light px-0" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light px-0" to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link text-light px-0">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link text-light px-0" href="#/">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item" id="admin">
                  <button className="btn btn-success w-100 my-2">Admin</button>
                </li>
                <li className="nav-item" id="cart">
                  <button className="btn btn-success w-100 my-2" type="button" onClick={openModal}>Login</button>
                  <MyModal showModal={showModal} closeModal={closeModal} />
                </li>
                <li className="nav-item">
                  <Link href="#/" id="login" className="px-0" onClick={() => setLgShow(true)}>
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ color: "#f0f2f5" }}
                    />
                    <span className="badge-cart">{count}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* model-for-cart */}
      <Modal className="cart-model-sect"
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
                  <FontAwesomeIcon icon={faCirclePlus} type="button" className="text-primary h4 m-0" />
                  <h6 className="m-0">7</h6>
                  <FontAwesomeIcon icon={faCircleMinus} type="button" className="text-primary h4 m-0" />
                </div>
                <div className="col-sm-3 d-flex align-items-center justify-content-center ">
                  <FontAwesomeIcon type="button" className="text-danger" icon={faTrash} />
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
          <button type="button" className="btn btn-success my-3">PAYMENT</button>
        </div>
      </Modal>
      <Modal className="p-3 "
        size="lg"
        show={signup}
        onHide={() => setSignup(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="model-registr">
          <form className="container">
            <div class="form-row row d-flex">
              <div class="form-group col-lg-6 my-2">
                <label className="my-2" for="">First Name</label>
                <input type="text" class="form-control" id="" placeholder="First Name" />
              </div>
              <div class="form-group col-lg-6 my-2">
                <label className="my-2" for="">Last Name</label>
                <input type="text" class="form-control" id="" placeholder="Last Name" />
              </div>
              <div class="form-group col-lg-12 my-2">
                <label className="my-2" for="">Mobile No</label>
                <input type="text" class="form-control" id="" placeholder="Mobile No" />
              </div>
              <div class="form-group col-lg-12 my-2">
                <label className="my-2" for=""> Email</label>
                <input type="email" class="form-control" id="" placeholder="Email" />
              </div>
              <div class="form-group col-lg-12 my-2">
                <label className="my-2" for="inputAddress">Address</label>
                <input type="text" class="form-control" id="" placeholder="1234 Main St" />
              </div>
              <div class="form-group col-lg-12 my-2">
                <label className="my-2" for="inputAddress">Password</label>
                <input type="password" class="form-control" id="" placeholder="password" />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" class="btn btn-primary my-4">Sign in</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      {/* Admin MOdel */}
      <Modal className="p-3 "
        size="lg"
        show={signup}
        onHide={() => setSignup(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">

          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="">

        </Modal.Body>
      </Modal>

    </>
  );
};

export default Navbar;
