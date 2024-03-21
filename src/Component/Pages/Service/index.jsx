import React from "react";

// Third party i18next
import { useTranslation } from "react-i18next";

// Common Component
import Footer from "../../Common/Footer";
import Navbar from "../../Common/Navbar/index";
import ResponsiveNavbar from "../../Common/Navbar/navMob";

import FeedBackForm from "../../Common/Gooogleform/googleform";

// Image
import srvcimg1 from "../../../assets/img/service-img/srvc-img1.jpg";
import srvcimg3 from "../../../assets/img/service-img/srvc-img3.jpg";
import { useContext } from "react";
import { UserContext } from "../../Common/Modal/logusecont";
import { Helmet } from "react-helmet";
import KeysWords from "../../Common/apiData/keyWords";

const Services = () => {
  const { t } = useTranslation();
  const {cart} = useContext(UserContext);

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Services-Rumeno</title>
                <link rel="canonical" href="https://rumeno.in/services" />
            </Helmet>
            <ul className="d-none">
        {KeysWords.map((item) => (
          <li>{item}</li>
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
    <Navbar  size={cart.length}/>
    </div>
    <div className="mob-nav">
<ResponsiveNavbar size={cart.length}/>
    </div>
      <section className="container-fluid service-bg overflow-hidden">
        <div
          className="section-header text-center mx-auto mb-3 pt-5"
          data-wow-delay="0.1s"
        >
          <div
            className="d-flex justify-content-center pt-5 mt-lg-5"
            data-aos="fade-right"
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
          <h2 className="py-2 px-4 service-head">{t("v267")}</h2>
        </div>
        <div className="container">
          <div className="row my-3">
            <div
              className="col-lg-7"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h1 className="display-5 mb-4 mt-4">{t("v72")}</h1>
              <p className="mb-4 fs-5 text-danger">{t("v73")}</p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>
                {t("v74")}
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>
                {t("v75")}
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>
                {t("v76")}
              </p>
            </div>
            <div
              className="col-lg-5 text-center"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img className="w-75" src={srvcimg1} alt="Loading" />
            </div>
          </div>
        </div>
        <div className="col-lg-12 my-5">
          <h2 className=" py-2 px-4 service-head">{t("v268")}</h2>
        </div>
        <div className="container">
          <div className="row srvc-consl justify-content-evenly my-3">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img className="img-fluid w-100" src={srvcimg1} alt="Loading" />
              <div className="bg-light p-4 text-center">
                <h3 className="text-danger">{t("v78")}</h3>
                <p className="d-block h5 lh-base mb-4">{t("v79")}</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img className="img-fluid w-100" src={srvcimg3} alt="Loading" />
              <div className="bg-light p-4 text-center">
                <h3 className="text-danger">{t("v80")}</h3>
                <p className="d-block h5 lh-base mb-4">{t("v81")}</p>
              </div>
            </div>
          </div>
        </div>
        
      <div className="container-fluid p-0  overflow-hidden">
        <div className="row justify-content-center py-4">
          <div
            className="col-lg-11"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h3 className="px-2">{t("v82")}</h3>
            <p className="px-2">{t("v83")}</p>
            <h3 className="px-2">{t("v84")}</h3>
            <p className="px-2">{t("v85")}</p>
            <div className="justify-content-center service-ul">
              {/* Rumeno farm  */}
              {/* Rumeno */}
              {/* Veterinary */}
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
        <div className="col-lg-12 mb-3">
          <h2 className="py-2 px-4 service-head">{t("v111")}</h2>
        </div>
        <div
          className="row justify-content-center"
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="col-lg-11">
            <p className="px-2">{t("v112")}</p>
            <p className="px-2">{t("v113")}</p>
            <p className="px-2">{t("v114")}</p>
            <p className="px-2">{t("v115")}</p>
            <h5 className="px-2">{t("v116")}</h5>
            <ul>
              <li>{t("v117")}</li>
              <li>{t("v118")}</li>
              <li>{t("v119")}</li>
            </ul>
          </div>
        </div>
      </div>
      
      <FeedBackForm />
      </section>
      
      <Footer />
    </>
  );
};

export default Services;
