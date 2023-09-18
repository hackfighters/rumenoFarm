import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "../Footer";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import MapComp from "../ContactUs/map";
import Navbar from "../Navbar";

const ContactUs = () => {

    return (
        <>
     <Navbar cart={undefined} count={undefined} />
           
            <section className="contact-sect container-fluid">
                <div className="row justify-content-center py-5">
                    <div className="col-sm-10">
                        <div className="contact_inner">
                            <div className="row justify-content-between">
                                <div className="col-sm-8">
                                    <div className="contact_form_inner row py-4 justify-content-center">
                                        <div className="contact_field col-sm-7 py-5">
                                            <h3 className="my-2 text-center">Contact Us</h3>
                                            <p className="my-3 text-center">Feel Free to contact us any time.</p>
                                            <input type="text" className="form-control form-group py-3" placeholder="Name" />
                                            <input type="text" className="form-control form-group py-3" placeholder="Email" />
                                            <textarea className="form-control form-group py-3" placeholder="Message"></textarea>
                                            <button className="contact_form_submit mt-5">Send</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="right_conatct_social_icon d-flex align-items-end justify-content-center">
                                        <div className="socil_item_inner d-flex py-2">
                                            <FontAwesomeIcon className="text-white mx-3 h3" type="button" icon={faFacebook} />
                                            <FontAwesomeIcon className="text-white mx-3 h3" type="button" icon={faInstagram} />
                                            <FontAwesomeIcon className="text-white mx-3 h3" type="button" icon={faWhatsapp} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact_info_sec">
                                <h4 className="text-white py-2">Contact Info</h4>
                                <div className="d-flex info_single align-items-center my-4">
                                    <FontAwesomeIcon className="text-white mx-2 " type="button" icon={faPhone} />
                                    <span className="text-white">+91 7355043892</span>
                                </div>
                                <div className="d-flex info_single align-items-center my-4">
                                    <FontAwesomeIcon className="text-white mx-2 " type="button" icon={faEnvelope} />
                                    <span className="text-white">rumeno.farmotech@gmail.com</span>
                                </div>
                                <div className="d-flex info_single align-items-center my-4">
                                    <FontAwesomeIcon className="text-white mx-2 " type="button" icon={faLocationDot} />
                                    <span className="text-white">598 Lala Mahaveer Prasad Rd, Sadar Bazar, Lucknow, Uttar Pradesh 226002</span>
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
                           <MapComp/> 
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}



export default ContactUs;