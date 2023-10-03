import React from "react";

// Third party i18next
import { useTranslation } from "react-i18next";

// Common Component
import Footer from "../../Common/Footer";
import Navbar from "../../Common/Navbar/index";
import FeedBackForm from "../../Common/Gooogleform/googleform";

// Image
import srvcimg1 from "../../../assets/img/service-img/srvc-img1.jpg";
import srvcimg3 from "../../../assets/img/service-img/srvc-img3.jpg";

const Services = () => {

  const { t } = useTranslation();

  return (
    <>
      <Navbar className="text-dark" />
      <section className="container-fluid p-0 service-bg pt-4 overflow-hidden">
        <div
          class="section-header text-center mx-auto mb-3 wow fadeInUp pt-5"
          data-wow-delay="0.1s"
        >
          <div className="d-flex justify-content-center pt-5"data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
             >
            <div className="mx-2">
              <div className="services-line-largeleft"></div>
              <div className="services-line-smallleft"></div>
            </div>
            <span className="label-title">Our Services</span>
            <div className="mx-2">
              <div className="services-line-largeright"></div>
              <div className="services-line-smallright"></div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <h2 className="  py-2 px-4 service-head">{t("v267")}</h2>
        </div>
        <div className="container">
          <div className="row my-3">
            <div className="col-lg-7"data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
              <h1 class="display-5 mb-4 mt-4">{t("v72")}</h1>
              <p class="mb-4 fs-5 text-danger">
              {t("v73")}
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>{t("v74")}
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>{t("v75")}
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>{t("v76")}
              </p>
            </div>
            <div className="col-lg-5 text-center" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
              <img className="w-75" src={srvcimg1} alt="Loading" />
            </div>
          </div>
        </div>
        <div className="col-lg-12 my-5">
          <h2 className=" py-2 px-4 service-head">
          {t("v268")}
          </h2>
        </div>
        <div className="container">
          <div className="row srvc-consl justify-content-evenly my-3">
            <div class="col-lg-4 col-md-6" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
              <img className="img-fluid w-100" src={srvcimg1} alt="Loading" />
              <div class="bg-light p-4 text-center">
                <h3 className="text-danger">{t("v78")}</h3>
                <p class="d-block h5 lh-base mb-4" href="">
                {t("v79")}
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
              <img className="img-fluid w-100" src={srvcimg3} alt="Loading" />
              <div class="bg-light p-4 text-center">
                <h3 className="text-danger">{t("v80")}</h3>
                <p class="d-block h5 lh-base mb-4" href="">
                {t("v81")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid srvc-consl-txt p-0 service-bg overflow-hidden">
        <div className="row justify-content-center py-4">
          <div className="col-lg-11" data-aos="fade-up" data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h3 className="px-2">{t("v82")}</h3>
            <p className="px-2">
            {t("v83")}
            </p>
            <h3 className="px-2">{t("v84")}</h3>
            <p className="px-2">
            {t("v85")}
            </p>
            <div className="justify-content-center service-ul">
              <div>
                <ul>
                  <li>{t("v86")}</li>
                  <li>{t("v87")}</li>
                  <li>{t("v88")}</li>
                  <li>{t("v89")}</li>
                  <li>{t("v90")}</li>
                  <li>{t("v91")}</li>
                  <li>{t("v92")}</li>
                  <li>{t("v93")}</li>
                  <li>{t("v94")}</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>{t("v95")}</li>
                  <li>{t("v96")}</li>
                  <li>{t("v97")}</li>
                  <li>{t("v98")}</li>
                  <li>{t("v99")}</li>
                  <li>{t("v100")}</li>
                  <li>{t("v101")}</li>
                  <li>{t("v102")}</li>
                  <li>{t("v103")}</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>{t("v104")}</li>
                  <li>{t("v105")}</li>
                  <li>{t("v106")}</li>
                  <li>{t("v107")}</li>
                  <li>{t("v108")}</li>
                  <li>{t("v109")}</li>
                  <li>{t("v110")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mb-3" >
          <h2 className=" py-2 px-4  service-head">
          {t("v111")}
          </h2>
        </div>
        <div className="row justify-content-center" data-aos="fade-down" data-aos-offset="300"
            data-aos-easing="ease-in-sine">
          <div className="col-lg-11">
            <p className="px-2">
            {t("v112")}
            </p>
            <p className="px-2">
            {t("v113")}
            </p>
            <p className="px-2">
            {t("v114")}
            </p>
            <p className="px-2">
            {t("v115")}
            </p>
            <h5 className="px-2">
            {t("v116")}
            </h5>
            <ul>
              <li>{t("v117")}</li>
              <li>{t("v118")}</li>
              <li>{t("v119")}</li>
            </ul>
            <p className="px-2">
            {t("v120")}
            </p>
          </div>
        </div>
      </div>
      <FeedBackForm />
      <Footer />
    </>
  );
};

export default Services;
