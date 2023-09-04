import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/lv-bgr.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isadminOpen, setIsadminOpen] = useState(false);

  useEffect(() => {
    const handleCartToggle = () => {
      setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
    };
    const handleLoginToggle = () => {
      setIsLoginOpen((prevIsLoginOpen) => !prevIsLoginOpen);
    };
    const handleadminToggle = () => {
      setIsadminOpen((prevIsadminOpen) => !prevIsadminOpen);
    };

    const cartButton = document.getElementById("cart");
    cartButton.addEventListener("click", handleCartToggle);

    const loginButton = document.getElementById("login");
    loginButton.addEventListener("click", handleLoginToggle);
    
    const adminButton = document.getElementById("admin");
    adminButton.addEventListener("click", handleadminToggle);

    const handleScroll = () => {
      setIsCartOpen(false);
      setIsLoginOpen(false);
      setIsadminOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      cartButton.removeEventListener("click", handleCartToggle);
      loginButton.removeEventListener("click", handleLoginToggle);
      adminButton.removeEventListener("click", handleadminToggle);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeCart = () => {
    setIsCartOpen(false);
  };
  const closeLogin = () => {
    setIsLoginOpen(false);
  };
  const closeadmin = () => {
    setIsadminOpen(false);
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
                  <Link className="nav-link text-light" to="/home">
                    Home
                  </Link>
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
                <li className="nav-item" id="admin">
                  <button className="btn btn-success w-100 my-2">Admin</button>
                </li>
                <li className="nav-item" id="cart">
                  <button className="btn btn-success w-100 my-2">Login</button>
                </li>
                <li className="nav-item">
                  <a href="#/" id="login">
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
          <div className="shopping-cart-c login pt-2 pb-4 px-3">
            <div class="mb-2 d-flex justify-content-end">
              <button class="btn close-button btn-primary" onClick={closeCart}>
                X
              </button>
            </div>
            <div className="shopping-cart-header-c border-0">
              <div className="row">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">User Name</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Username"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                  <div className="text-center mt-3">
                    <h6>
                      not have an account ?{" "}
                      <Link
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        Create Account
                      </Link>
                    </h6>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoginOpen && (
        <div className="container-cart ">
          <div className="shopping-cart-c cartdetail pt-2 pb-4 px-3">
            <div class="mb-2 d-flex justify-content-end">
              <button class="btn close-button btn-primary" onClick={closeLogin}>
                X
              </button>
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
              <li className="clearfix">product 1 </li>
              <li className="clearfix">product 2 </li>
              <li className="clearfix">product 3 </li>
              <li className="clearfix">product 4 </li>
            </ul>
            <a href="#/" type="button" className="btn btn-primary button w-100">
              Checkout
            </a>
          </div>
        </div>
      )}
      {isadminOpen && (
        <div className="container-cart ">
        <div className="shopping-cart-c cartadmin pt-2 pb-4 px-3">
          <div class="mb-2 d-flex justify-content-end">
            <button class="btn close-button btn-primary" onClick={closeadmin}>
              X
            </button>
          </div>
          <div className="shopping-cart-header-c border-0">
            <div className="row">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">User Name</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Username"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Create Account
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">First Name</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter First Name"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Mobile Number</label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Number"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email Address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
