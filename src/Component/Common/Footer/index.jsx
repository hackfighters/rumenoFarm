import React from "react";

// Third party Fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationCrosshairs,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

// Third party i18next
import { useTranslation } from "react-i18next";

// Image
import logo from "../../../assets/img/Logo/newlogo.png";
import { NavLink } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container-fluid footer pt-5">

        <div className="row py-4 text-light">
          <div
            className="col-lg-3 text-center"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <img className="footer-img" src={logo} alt="Loading" />
          
          </div>
    
          <div className="col-lg-2 pt-4">
            <div className="d-flex justify-content-center pb-2">
              <h5 className="">Pages</h5>
            </div>
            <div className="d-flex justify-content-center">
              <ul className="list-unstyled footer-li text-center">
                <li>
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    exact="true"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
       
                <li>
                <NavLink to="/home"   className="footer-page">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to="/veterinary-products"
                  >
                    Products
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/home"   className="footer-page">
                    Training
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    exact="true"
                    to="/privacypolicy"
                  >
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 pt-4 text-center text-lg-start">
            <h5 className="pb-2 text-center">Address</h5>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon
                  icon={faLocationCrosshairs}
                  className="me-2"
                  // style={{ color: "white" }}
                />
                {t("v301")}
              </li>
 
              <li  >
                <a className="text-decoration-none text-white" rel="noreferrer" href="https://mail.google.com" target="_blank">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="me-2"
                  style={{ color: "white" }}
                />
                rumeno.farmotech@gmail.com
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" rel="noreferrer" href="tel:+91 7355043892">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="me-2"
                  style={{ color: "white" }}
                />
                +91 7355043892
                </a>
              </li>
            </ul>
           
          </div>
          <div className="col-lg-4 pt-4">
            <div className="text-center">
              <h5>About Company</h5>
              <p className="footer-text pt-3">{t("v303")}</p>
            </div>
           
            <div>
              <ul className="list-unstyled d-flex justify-content-center footer-li">
                <li>
                  <a href="https://www.facebook.com/RumenoFarmotech/" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="mx-2 fs-3"
                    style={{ color: "white" }}
                  />
                  </a>
                </li>
                
                <li>
                <ReactWhatsapp
                  className="bg-transparent border-0"
                  number="+91 7355043892"
                  message="Hello World"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="mx-2 fs-3"
                    style={{ color: "white" }}
                    
                  /></ReactWhatsapp>
                </li>
                <li>
                  <a href="https://www.youtube.com/@RumenoFarmotech-bg5y" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="mx-2 fs-3"
                    style={{ color: "white" }}
                  />
                  </a>
                </li>
                
                <li>
                  <a href="https://www.instagram.com/rumenofarmotech/" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="mx-2 fs-3"
                    style={{ color: "white" }}
                  />
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
          
        </div>
        <hr className="text-white m-0" />
              <div id="copyright" className="text-white text-center py-3 mx-4 ">
                &copy; 2022 - {new Date().getFullYear()}{" "}
                <a href="https://www.rumeno.in/" target="_blank" rel="noreferrer">https://www.rumeno.in</a> -
                All Rights Reserved.
                
              </div>
              
        
      </div>
    </>
  );
};

export default Footer;
