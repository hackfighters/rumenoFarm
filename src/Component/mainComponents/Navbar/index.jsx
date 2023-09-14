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
  // const [LoginShow, setLoginShow] = useState(false);
  const [signup, setSignup] = useState(false);
  const [CART, setCART] = useState([]);

  const handleChangen = (e) => {
    i18next.changeLanguage(e.target.value);
  };


  const [showModal, setShowModal] = useState(false);
  const [Active, setActive] = useState(false);
  const toggleVisibility = () => {
    setActive(!Active);
  };

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
                  <span className="text-white">
                    598 Lala Mahaveer Prasad Rd, Sadar Bazar, Lucknow, Uttar
                    Pradesh 226002
                  </span>
                </div>
                <div className="col-sm-3 d-flex cnt align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="me-2"
                    style={{ color: "#f0f0f0" }}
                  />
                  <span className="text-white">rumeno.farmotech@gmail.com</span>
                </div>
                <div className="col-sm-2 d-flex cnt align-items-center">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="me-2"
                    style={{ color: "#fafcff" }}
                  />
                  <span className="text-white  ">Time 9:00am - 8:00pm</span>
                </div>
                <div className="col-sm-2 d-flex cnt align-items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="me-2"
                    style={{ color: "#f1f4f8" }}
                  />
                  <span className="text-white  ">+91 7355043892</span>
                </div>
                <div className="col-sm-1 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon type="button" onClick={toggleVisibility} className="m-0 h4 text-white" icon={faLanguage} />
                {setActive ?(<Select onChange={(e) => handleChangen(e)} />):(null)}
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
                  <Link className="nav-link text-light px-0" href="#training">
                    Training
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light px-0" href="#/">
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
      {/* model-for-login */}
      {/* <Modal className=""
        size="lg"
        show={LoginShow}
        onHide={() => setLoginShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="container">



            <div class="row">
              <div class="col-lg-6 py-4">
                <div class="">

                  <div class="text-center">
                    <img src={logo} className="w-25" alt="logo" />
                    <h4 class="mt-1 mb-3 pb-1">RUMENO</h4>
                  </div>

                  <form>
                    <p className="mb-3">Please login to your account</p>

                    <div class="form-outline  mb-3">
                      <label class="form-label mx-2" for="form2Example11">Username</label>
                      <input type="email" id="form2Example11" class="form-control"
                        placeholder="Phone number or email address" />
                    </div>

                    <div class="form-outline mb-3">
                      <label class="form-label mx-2" for="form2Example22">Password</label>
                      <input type="password" id="form2Example22" class="form-control"
                        placeholder="Password" />
                    </div>

                    <div class="text-center pt-1  pb-1">
                      <button class="btn btn-primary border-0 gradient-custom-2 mb-3 w-75" type="button">Log
                        in</button>
                      <a class="text-muted d-block mb-4" href="#!">Forgot password?</a>
                    </div>

                    <div class="d-flex align-items-center justify-content-center pb-4">
                      <p class="mb-0 me-2">Don't have an account?</p>
                      <button type="button" class="btn btn-outline-danger" onClick={() => setSignup(true)}>Create new</button>
                    </div>

                  </form>

                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div class="text-white text-center px-2">
                  <h4 class="mb-4">WELCOME TO RUMENO</h4>
                  <p class="small mb-0">Rumeno Farmotech is a nutrition and feed supplement technologies company offers a wide range of products, including Probiotics, milk replacer, Macro & Micro Minerals, Multi Vitamins, Enzymes, Amino Acids, feed additives, premixes, concentrates, and specialty products for livestock, poultry, and aquaculture.</p>
                </div>
              </div>
            </div>
          </div>


        </Modal.Body>

      </Modal> */}
      {/* sign up  */}
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
