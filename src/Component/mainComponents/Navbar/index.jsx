import React from "react";

import logo from "../../../assets/img/lv-bgr.png";
// import { Link } from "react-router-dom";

const Navbar = () => {
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
          {/* <header id="header" className="col-sm-12 fixed-top">
            <div className="d-flex">
              <h1 className="logo me-auto me-lg-0">
                <img src={logo} alt="" className="logo" />
              </h1>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                  <li>
                    <a className="nav-link scrollto active" href="#hero">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#about">
                      Products
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="nav-link scrollto"
                      href="#menu"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#specials">
                      Training
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#events">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <button className="nav-btn btn " type="button">
                      Admin
                    </button>
                  </li>
                  <li>
                    <button className="nav-btn btn" type="button">
                      Login
                    </button>
                  </li>
                  <li>
                    <a
                      href="#book-a-table"
                      className="book-a-table-btn scrollto d-none d-lg-flex"
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                    </a>
                  </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
            </div>
          </header> */}
          <div
            id="header"
            className="col-sm-12 navbar navbar-expand-lg navbar-light fixed-top"
          >
            <a className="logo" href="/#">
              <img className="logo" src={logo} alt="" />
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
              <ul className="navbar-nav w-100 justify-content-evenly">
                <li className="nav-item active">
                  <a className="nav-link" href="/#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Training
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
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
                  <a
                    href="#book-a-table"
                    className="book-a-table-btn scrollto d-none px-0 d-lg-flex"
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
