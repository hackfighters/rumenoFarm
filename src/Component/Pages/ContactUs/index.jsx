import React from "react";

// Third party Fortawesome
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

// Third party i18next
import { useTranslation } from "react-i18next";

// Common Component
import Footer from "../../Common/Footer";
import MapComp from "../../Common/Map/map";
import Navbar from "../../Common/Navbar/index";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
// {/* Rumeno farm  */}
// {/* Rumeno */}
// {/* Veterinary */}
const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <>
       <div className="desk-nav">
    <Navbar/>
    </div>
    <div className="mob-nav">
<ResponsiveNavbar/>
    </div>
      <section className="contact-sect container-fluid">
        <div className="row justify-content-center py-5">
          <div className="col-sm-10">
            <div className="contact_inner">
              <div className="row justify-content-between">
                <div className="col-sm-8">
                  <div className="contact_form_inner row  justify-content-center">
                    <div className="contact_field col-sm-7 pt-1 pb-3">
                      <h3 className="my-2 text-center">Contact Us</h3>
                      <p className="my-3 text-center">
                        Feel Free to contact us any time.
                      </p>
                      <input
                        type="text"
                        className="form-control form-group py-3"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        className="form-control form-group py-3"
                        placeholder="Email"
                      />
                      <textarea
                        className="form-control form-group py-3"
                        placeholder="Message"
                      ></textarea>
                      <button className="contact_form_submit mt-5">Send</button>
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
              <div className="contact_info_sec">
                <h4 className="text-white py-2">Contact Info</h4>
                <div className="d-flex info_single align-items-center my-4">
                  <FontAwesomeIcon
                    className="text-white mx-2 "
                    type="button"
                    icon={faPhone}
                  />
                  <span className="text-white">+91 7355043892</span>
                </div>
                <div className="d-flex info_single align-items-center my-4">
                  <FontAwesomeIcon
                    className="text-white mx-2 "
                    type="button"
                    icon={faEnvelope}
                  />
                  <span className="text-white">rumeno.farmotech@gmail.com</span>
                </div>
                {/* Rumeno farm  */}
                {/* Rumeno */}
                {/* Veterinary */}
                <div className="d-flex info_single align-items-center my-4">
                  <FontAwesomeIcon
                    className="text-white mx-2 "
                    type="button"
                    icon={faLocationDot}
                  />
                  <span className="text-white">{t("v301")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <div className="map_inner mb-4">
              <MapComp />
            </div>
          </div>
        </div>
        {/* Rumeno farm  */}
        {/* Rumeno */}
        {/* Veterinary */}
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
