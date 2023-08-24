import React from "react";

import logo from "../../../assets/img/lv-bgr.png";

const Navbar = () => {
  return (
    <>
      {/* <!-- ======= Top Bar ======= --> */}
      <div id="topbar" class="d-flex align-items-center fixed-top">
        <div class="container">
          <div class="contact-info row d-flex">
            <div className="col-lg-4 d-flex align-items-center">
            <i class="fa-solid fa-location-dot"></i>
            <i class="bi bi-phone d-flex align-items-center me-3">
              <span>598 Lala Mahaveer Prasad Rd, <br /> Sadar Bazar, Lucknow, Uttar Pradesh 226002</span>
            </i>
            </div>
           <div className="col-lg-3 d-flex align-items-center">
           <i class="fa-solid fa-envelope"></i>
            <i class="bi bi-clock d-flex align-items-center me-3">
              <span> rumeno.farmotech@gamil.com</span>
            </i>
           </div>
           <div className="col-lg-3 d-flex align-items-center justify-content-center">
           <i class="fa-regular fa-clock"></i>
            <i class="bi bi-clock d-flex align-items-center me-3">
              <span>Time 9:00am - 8:00pm</span>
            </i>
           </div>
            <div className="col-lg-2 d-flex align-items-center justify-content-end">
            <i class="fa-solid fa-phone"></i>
            <i class="bi bi-clock d-flex align-items-center me-3">
              <span>+91 7355043892</span>
            </i>
            </div>
          </div>
        </div>
      </div>
  
      {/* <!-- ======= Header ======= --> */}
      <header id="header" class="fixed-top d-flex align-items-cente">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <h1 class="logo me-auto me-lg-0">
          <img src={logo} alt="" className="logo" />

          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <a href="index.html" class="logo me-auto me-lg-0">
            <img src="assets/img/logo.png" alt="" class="img-fluid" />
          </a> */}
  
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
                <a class="nav-link scrollto" href="#menu">
                  Services
                </a>
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
              {/* <li>
                <a class="nav-link scrollto" href="#chefs">
                  Chefs
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#gallery">
                  Gallery
                </a>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li class="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i class="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li> */}
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}
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

}
 

export default Navbar;
