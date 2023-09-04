import React from "react";
import logo from "../../../assets/img/newlogo.png";
import footcaro1 from "../../../assets/img/New folder/footcaro1.png"
import footcaro2 from "../../../assets/img/New folder/footcaro2.png"
import footcaro3 from "../../../assets/img/New folder/footcaro3.png"
import footcaro4 from "../../../assets/img/New folder/footcaro4.png"

const Footer = () => {
  return (
    <>
    <div className="container bg-primary">
      <div className="row">
        <div className="col-sm-9">
          <h2>
          An ISO 9001:2015 recognized by International Accredited Forum Certified Company
          </h2>
        </div>
        <div className="col-sm-3">
        <div
                  id="header-carousel"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="w-100" src={footcaro1} alt="#" />
                    </div>
                    <div className="carousel-item">
                      <img className="w-100" src={footcaro2} alt="#" />
                    </div>
                    <div className="carousel-item">
                      <img className="w-100" src={footcaro3} alt="#" />
                    </div>
                    <div className="carousel-item">
                      <img className="w-100" src={footcaro4} alt="#" />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#header-carousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#header-carousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
        </div>
      </div>
    </div>
      <div className="container-fluid footer">
        <div className="row pt-4">
          <div className="col-lg-3 text-center">
            <img className="footer-img" src={logo} alt="" />
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
