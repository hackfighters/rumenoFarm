import React from "react";

import abtimg1 from "../../../assets/img/about-img/about-1.jpg";
import abtimg2 from "../../../assets/img/about-img/about-2.jpg";
import abtimg3 from "../../../assets/img/about-img/about-3.jpg";
import abtimg4 from "../../../assets/img/about-img/about-4.jpg";

const About = () => {
  return (
    <>
      
        <div className="container-fluid abt-sect  py-5">
          <div className="row justify-content-evenly my-5">
            <div
              className="col-lg-5 mb-6 mb-lg-0"
              data-aos-delay="1"
              data-aos-duration="1500"
              data-aos="fade-right"
            >
              <span className="label-title mb-3">About</span>
              <h2 className="abt-sect-txt1 mb-3">
              Its a journey to know more about Rumeno and our products 
              </h2>
              <p className="par">
                The time has come to bring those ideas and plans to life. This
                is where we really begin to visualize your napkin sketches and
                make them into beautiful pixels.Now that your brand is all
                dressed up and ready to party.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="row card-gutters">
                  <div
                    className="col-sm-6 offset-sm-1 mb-2 "
                    // data-aos-delay="1"
                    
                    data-aos-duration="1500"
                    data-aos="fade-up"
                  >
                    <a
                      className="hover-effect  popup-image"
                      href="assets/img/1.jpeg"
                    >
                      <img className="img-fluid w-100" src={abtimg1} alt="" />
                      <span className="hover-effect-container">
                        <span className="hover-effect-icon">
                          <span className="fa fa-plus hover-effect-icon-inner"></span>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div
                    className="col-sm-5 align-self-end mb-2"
                    data-aos-delay="50"
                    data-aos-duration="1500"
                    data-aos="fade-down"
                  >
                    <a
                      className="hover-effect  popup-image"
                      href="assets/img/3.jpeg"
                    >
                      <img className="img-fluid w-100" src={abtimg2} alt="" />
                      <span className="hover-effect-container">
                        <span className="hover-effect-icon">
                          <span className="fa fa-plus hover-effect-icon-inner"></span>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div
                    className="col-sm-5 mb-2"
                    data-aos-delay="50"
                    data-aos-duration="1500"
                    data-aos="fade-right"
                  >
                    <a
                      className="hover-effect  popup-image"
                      href="/assets/img/4.jpeg"
                    >
                      <img className="img-fluid w-100" src={abtimg3} alt="" />
                      <span className="hover-effect-container">
                        <span className="hover-effect-icon">
                          <span className="fa fa-plus hover-effect-icon-inner"></span>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div
                    className="col-sm-6 mb-2"
                    data-aos-delay="50"
                    data-aos-duration="1500"
                    data-aos="fade-left"
                  >
                    <a
                      className="hover-effect  popup-image"
                      href="assets/img/1.jpeg"
                    >
                      <img className="img-fluid w-100" src={abtimg4} alt="" />
                      <span className="hover-effect-container">
                        <span className="hover-effect-icon">
                          <span className="fa fa-plus hover-effect-icon-inner"></span>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="col-sm-6 mb-2">
                    <a
                      className="hover-effect  popup-image"
                      href="/assets/img/2.jpeg"
                    >
                      <img
                        className="img-fluid w-100"
                        src="/assets/img/2.jpeg"
                        alt=""
                      />
                      <span className="hover-effect-container">
                        <span className="hover-effect-icon">
                          <span className="fa fa-plus hover-effect-icon-inner"></span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default About;
