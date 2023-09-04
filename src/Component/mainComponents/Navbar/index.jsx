import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/lv-bgr.png";
import { Link } from "react-router-dom";


const Navbar = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleCartToggle = () => {
      setIsCartOpen(prevIsCartOpen => !prevIsCartOpen);
    };

    const cartButton = document.getElementById("cart");
    cartButton.addEventListener("click", handleCartToggle);

    return () => {
      cartButton.removeEventListener("click", handleCartToggle);
    };
  }, [isCartOpen]);

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div id="topbar" className="col-sm-12 d-flex align-items-center ">
            <div className="container">
              <div className="contact-info row">
                <div className="col-sm-4 d-flex cnt align-items-center">
                  <i className="fa-solid fa-location-dot mx-2"></i>
                  <span className="text-white">
                    598 Lala Mahaveer Prasad Rd, Sadar Bazar, Lucknow, Uttar
                    Pradesh 226002
                  </span>
                </div>
                <div className="col-sm-3 d-flex cnt align-items-center">
                  <i className="fa-solid fa-envelope mx-2"></i>
                  <span className="text-white">
                    {" "}
                    rumeno.farmotech@gamil.com
                  </span>
                </div>
                <div className="col-sm-3 d-flex cnt align-items-center">
                  <i className="fa-regular fa-clock mx-2"></i>
                  <span className="text-white  ">Time 9:00am - 8:00pm</span>
                </div>
                <div className="col-sm-2 d-flex cnt align-items-center">
                  <i className="fa-solid fa-phone mx-2"></i>
                  <span className="text-white  ">+91 7355043892</span>
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
                  <a className="nav-link text-light" href="#/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#/">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link text-light">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#/">
                    Training
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#/">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-success w-100 my-2">Admin</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-success w-100 my-2">Login</button>
                </li>
                <li className="nav-item">
                  <a href="#/" id="cart">
                    <i className="fs-5 fa fa-shopping-cart"></i>
                    <span className="badge-cart">3</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {isCartOpen && (
        <div className="container-cart ">
          <div className="shopping-cart-c pt-2 pb-4 px-3">
          <div class="mb-2 d-flex justify-content-end">
    <button class="btn close-button btn-primary" onClick={closeCart}>X</button>
  </div>
            <div className="shopping-cart-header-c border p-2 d-flex align-itmes-center justify-content-between">
              <i className="fa fa-shopping-cart cart-icon"></i>
              <span className="badge-cart">3</span>
              <div className="shopping-cart-total-c">
                <span className="lighter-text">Total:</span>
                <span className="main-color-text">$2,229.97</span>
              </div>
            </div>
            <ul className="shopping-cart-items-c p-3 list-unstyled">
              <li  className="clearfix">
              </li>
            </ul>
            <a href="#/" type="button" className="btn btn-primary button w-100">
              Checkout
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
