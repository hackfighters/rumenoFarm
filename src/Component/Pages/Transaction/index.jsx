import React from "react";

// Third party Fortawesome
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// Common Component
import Footer from "../../Common/Footer";
import Navbar from "../../Common/Navbar/index";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import scanner from "../../../assets/img/scanner.png"
// {/* Rumeno farm  */}
// {/* Rumeno */}
// {/* Veterinary */}
const Transaction = () => {

  return (
    <>
      <div className="desk-nav">
        <Navbar />
      </div>
      <div className="mob-nav">
        <ResponsiveNavbar />
      </div>
      <section className="contact-sect container-fluid">
        <div className="row justify-content-center py-5">
          <div className="col-sm-10">
            <div className="contact_inner">
              <div className="row justify-content-between">
                <div className="col-sm-8">
                  <div className="contact_form_inner row  justify-content-center">
                    <div className="contact_field col-sm-7 pt-1 pb-5">
                      <h3 className="my-2 text-center">Payment Gateway</h3>
                      <p className="my-3 text-center">Transaction Details</p>
                      <input
                        type="text"
                        className="form-control form-group py-3"
                        placeholder="Name"
                      />
                      <input
                        type="number"
                        className="form-control form-group py-3"
                        placeholder="Number"
                      />
                      <input
                        type="text"
                        className="form-control form-group py-3"
                        placeholder="Transaction ID"
                      />
                      <input
                        type="number"
                        className="form-control form-group py-3"
                        placeholder="Amount"
                      />

                      <button className="contact_form_submit mt-5">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="right_conatct_social_icon d-flex align-items-end justify-content-center">
                    <div className="socil_item_inner d-flex py-2">
                      <FontAwesomeIcon
                        className="text-white mx-3 h3"
                        type="button"
                        icon={faFacebook}
                      />
                      <FontAwesomeIcon
                        className="text-white mx-3 h3"
                        type="button"
                        icon={faInstagram}
                      />
                      <FontAwesomeIcon
                        className="text-white mx-3 h3"
                        type="button"
                        icon={faWhatsapp}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact_info_sec py-4">
                <h4 className="text-white text-center">SCANNER</h4>
                <div 
                // className="d-flex info_single align-items-center my-4"
                >
                  {/* <FontAwesomeIcon
                    className="text-white mx-2 "
                    type="button"
                    icon={faPhone}
                  /> */}
                  <img className="w-100 mb-3" src={scanner} alt="" />
                </div>
                {/* <div className="d-flex info_single align-items-center my-4">
                  <FontAwesomeIcon
                    className="text-white mx-2 "
                    type="button"
                    icon={faEnvelope}
                  />
                  <span className="text-white">rumeno.farmotech@gmail.com</span>
                </div> */}
                {/* Rumeno farm  */}
                {/* Rumeno */}
                {/* Veterinary */}
                {/* <div className="d-flex info_single align-items-center my-4">
                  <FontAwesomeIcon
                    className="text-white mx-2 "
                    type="button"
                    icon={faLocationDot}
                  />
                  <span className="text-white">{t("v301")}</span>
                </div> */}
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* <div className="container-fluid ">
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <div className="map_inner mb-4">
              <MapComp />
            </div>
          </div>
        </div> */}
      {/* Rumeno farm  */}
      {/* Rumeno */}
      {/* Veterinary */}
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Transaction;
