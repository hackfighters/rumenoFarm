import React from "react";

import logo from "../../../assets/img/lv-bgr.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="topbar" class="d-flex align-items-center fixed-top">
        <div class="container">
          <div class="contact-info row">
            <div className="col-sm-4 d-flex">
              <i class="fa-solid fa-location-dot"></i>
                <span class="text-white d-flex align-items-center me-3">
                  598 Lala Mahaveer Prasad Rd, <br /> Sadar Bazar, Lucknow,
                  Uttar Pradesh 226002
                </span>
            </div>
            <div className="col-sm-3 d-flex ">
              <i class="fa-solid fa-envelope"></i>
                <span class="text-white  d-flex align-items-center me-3"> rumeno.farmotech@gamil.com</span>
              
            </div>
            <div className="col-sm-3 d-flex ">
              <i class="fa-regular fa-clock"></i>
                <span class="text-white  d-flex align-items-center me-3">Time 9:00am - 8:00pm</span>
            </div>
            <div className="col-sm-2 d-flex ">
              <i class="fa-solid fa-phone"></i>
                <span class="text-white  d-flex align-items-center me-3">+91 7355043892</span>
            </div>
          </div>
        </div>
      </div>

      <header id="header" class="fixed-top d-flex align-items-cente">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <h1 class="logo me-auto me-lg-0">
            <img src={logo} alt="" className="logo" />
          </h1>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  Products
                </a>
              </li>
              <li>
                <Link to="/services" class="nav-link scrollto" href="#menu">
                  Services
                </Link>
              </li>
              <li>
                <a class="nav-link scrollto" href="#specials">
                  Training
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#events">
                  Contact Us
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <div className="offset-2">
            <button className="nav-btn btn " type="button">
              Admin
            </button>
            <button className="nav-btn btn" type="button">
              Login
            </button>
          </div>
          <a
            href="#book-a-table"
            class="book-a-table-btn scrollto d-none d-lg-flex"
          >
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
