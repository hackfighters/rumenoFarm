import React from "react";
import logo from "../../../assets/img/logo.jpg";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div className="row pt-4">
          <div className="col-lg-3">
            <img className="w-100" src={logo} alt="" />
          </div>
          <div className="col-lg-2 pt-4">
            <div className="d-flex justify-content-center pb-2">
            <h5 className="me-3">Pages</h5>
            </div>
            <div className="d-flex justify-content-center">
            <ul className="list-unstyled footer-li">
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Training</li>
            </ul>
            </div>
          </div>
          <div className="col-lg-3 pt-4">
            <h5 className="pb-2 text-center">Address</h5>
            <ul className="list-unstyled">
              <li><i class=" fa-solid fa-location-dot me-2"></i>
                598 Lala Mahaveer Prasad Rd, Sadar Bazar, Lucknow, Uttar Pradesh
                226002
              </li>
              <li><i class=" fa-solid fa-envelope me-2"></i>rumeno.farmotech@gamil.com</li>
              <li><i class=" fa-solid fa-phone me-2"></i>+91 73550438</li>
            </ul>
          </div>
          <div className="col-lg-4 pt-4">
            <div className="text-center">
            <h5>About Company</h5>
            <p className="footer-text pt-3">Rumeno Farmotech is a nutrition and feed supplement technologies company</p>
            </div>
            <div>
            <ul className="list-unstyled d-flex justify-content-center footer-li">
              <li><i class="fa-brands fa-facebook mx-2 fs-3"></i></li>
              <li><i class="fa-brands fa-instagram mx-2 fs-3"></i></li>
              <li><i class="fa-brands fa-twitter mx-2 fs-3"></i></li>
              <li><i class="fa-brands fa-youtube mx-2 fs-3"></i></li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
