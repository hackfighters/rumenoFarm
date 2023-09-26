import React from "react";

// Third party i18next
import { useTranslation } from "react-i18next";

// Image
import abtimg1 from "../../../assets/img/about-img/about-1.jpg";
import abtimg2 from "../../../assets/img/about-img/about-2.jpg";
import abtimg3 from "../../../assets/img/about-img/about-3.jpg";
import abtimg4 from "../../../assets/img/about-img/about-4.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container-fluid abt-sect  py-5 overflow-hidden">
        <div className="row justify-content-evenly my-5">
          <div
            className="col-lg-5 mb-6 mb-lg-0"
            data-aos-delay="1"
            data-aos-duration="1500"
            data-aos="fade-right"
          >
            <div className="d-flex mb-3">
              <span className="label-title">About</span>
              <div>
                <div className="about-line-large"></div>
                <div className="about-line-small"></div>
              </div>
            </div>

            <h2 className="abt-sect-txt1 mb-3">{t("abouttitle")}</h2>
            <p className="par">
              {t("aboutparagraph")}
              <br />
              <br />
            </p>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="row card-gutters">
                <div
                  className="col-sm-6 offset-sm-1 mb-2 "
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
          <div className="col-lg-11">
            <p className="par">{t("aboutparagraph2")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
