import React from "react";
import logo from "../../../assets/img/newlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationCrosshairs, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer pt-5">
        <div className="row py-4 text-light">
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
              <li>
                <FontAwesomeIcon icon={faLocationCrosshairs} className="me-2" style={{ color: "white", }} />
                598 Lala Mahaveer Prasad Rd, Sadar Bazar, Lucknow, Uttar Pradesh
                226002
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" style={{ color: "white", }} />
                rumeno.farmotech@gmail.com
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="me-2" style={{ color: "white" }} />+91 7355043892
              </li>
            </ul>
          </div>
          <div className="col-lg-4 pt-4">
            <div className="text-center">
              <h5>About Company</h5>
              <p className="footer-text pt-3">
                Rumeno Farmotech is a nutrition and feed supplement technologies
                company
              </p>
            </div>
            <div>
              <ul className="list-unstyled d-flex justify-content-center footer-li">
                <li>
                  <FontAwesomeIcon icon={faFacebook} className="mx-2 fs-3" style={{ color: "white", }} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faWhatsapp} className="mx-2 fs-3" style={{ color: "white", }} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faYoutube} className="mx-2 fs-3" style={{ color: "white", }} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faInstagram} className="mx-2 fs-3" style={{ color: "white", }} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
