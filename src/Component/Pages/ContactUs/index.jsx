

import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
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
import { useTranslation } from "react-i18next";
import Footer from "../../Common/Footer";
import MapComp from "../../Common/Map/map";
import Navbar from "../../Common/Navbar/index";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../Common/Modal/logusecont";
import { Helmet } from "react-helmet";
import ReactWhatsapp from "react-whatsapp";
import KeysWords from "../../Common/apiData/keyWords";

const ContactUs = () => {
  const { t } = useTranslation();
  const { cart } = useContext(UserContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Make a POST request to your API endpoint
      const response = await axios.post(
        "http://127.0.0.1:5000/api/post_data",
        data
      );
      // console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error("Error submitting contact details:", error);

      // Handle error, show a message to the user, etc.
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact-Rumeno</title>
        <link rel="canonical" href="https://rumeno.in/contactus" />
      </Helmet>
      <ul className="d-none">
  {KeysWords.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
      <a className="d-none" href="https://www.amazon.in/Sheep-Goat-Feed/b?ie=UTF8&node=28179044031"></a>
        <a className="d-none" href="https://www.amazon.in/goat-medicine/s?k=goat+medicine"></a>
        <a className="d-none" href="https://www.amazon.in/goat-farming-accessories/s?k=goat+farming+accessories"></a>
        <a className="d-none" href="https://www.amazon.in/cow-farm-equipment/s?k=cow+farm+equipment"></a>
        <a className="d-none" href="https://www.amazon.in/cow-feed/s?k=cow+feed"></a>
        <a className="d-none" href="https://www.amazon.in/cattle-medicine/s?k=cattle+medicine"></a>
        <a className="d-none" href="https://www.indiamart.com/shakyaworldtrade/goat-farming-equipment-and-accessories.html"></a>
        <a className="d-none" href="https://www.flipkart.com/search?q=goat%20feed&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"></a>
        <a className="d-none" href="https://www.flipkart.com/search?q=goat%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"></a>
        <a className="d-none" href="https://www.flipkart.com/search?q=cow%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"></a>
      <div className="desk-nav">
        <Navbar size={cart.length} />
      </div>
      <div className="mob-nav">
        <ResponsiveNavbar size={cart.length} />
      </div>
      <section className="contact-sect container-fluid">
        <div className="row justify-content-center py-5">
          <div className="col-sm-10">
            <div className="contact_inner">
              <div className="row justify-content-between">
                <div className="col-sm-8">
                  <div className="contact_form_inner row justify-content-center">
                    <Form
                      className="contact_field col-sm-7 pt-1 pb-3"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <h3 className="my-2 text-center">Contact Us</h3>
                      <p className="my-3 text-center">
                        Feel Free to contact us any time.
                      </p>
                      <Form.Group >
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          {...register("name", {
                            required: "Name is required",
                          })}
                          isInvalid={errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name && errors.name.message}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group >
                        <Form.Control
                          type="text"
                          placeholder="Email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address",
                            },
                          })}
                          isInvalid={errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email && errors.email.message}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group >
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Message"
                          {...register("message", {
                            required: "Message is required",
                          })}
                          isInvalid={errors.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.message && errors.message.message}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <button
                        className="contact_form_submit mt-5"
                        type="submit"
                      >
                        Send
                      </button>
                    </Form>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="right_conatct_social_icon d-flex align-items-end justify-content-center">
                    <div className="socil_item_inner d-flex py-2">
                      <a
                        href="https://www.facebook.com/RumenoFarmotech/"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          className="text-white mx-3 h3"
                          type="button"
                          icon={faFacebook}
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/rumenofarmotech/"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          className="text-white mx-3 h3"
                          type="button"
                          icon={faInstagram}
                        />
                      </a>
                      <ReactWhatsapp
                        className="bg-transparent border-0"
                        number="+91 7355043892"
                        message="Hello World"
                      >
                        <FontAwesomeIcon
                          className="text-white mx-3 h3"
                          type="button"
                          icon={faWhatsapp}
                        />
                      </ReactWhatsapp>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact_info_sec-form">
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
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <div className="map_inner mb-4">
              <MapComp />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
