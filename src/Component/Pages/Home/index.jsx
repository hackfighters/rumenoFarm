import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

// Common Component
import Navbar from "../../Common/Navbar/index";
import About from "../../Common/About";
import Footer from "../../Common/Footer";
import Training from "../../Common/Training";
import FooterTop from "../../Common/CertifiedBox/footer-top";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Image
import Prdimg4 from "../../../assets/img/OurProduct/prdaml2.png";
import Prdimg5 from "../../../assets/img/OurProduct/prdaml1.png";
import Prdimg6 from "../../../assets/img/OurProduct/prdaml3.png";
import Prdimg7 from "../../../assets/img/OurProduct/prdaml4.png";
import caroimg1 from "../../../assets/img/home-img/caroimg1.png";
import caroimg2 from "../../../assets/img/home-img/caroimg2.png";
import caroimg3 from "../../../assets/img/home-img/caroimg3.png";
import ReactWhatsapp from "react-whatsapp";
import { useContext } from "react";
import { UserContext } from "../../Common/Modal/logusecont";
import { Helmet } from "react-helmet";
import KeysWords from "../../Common/apiData/keyWords"

const Home = () => {
  const { t } = useTranslation();
  const { cart } = useContext(UserContext);

 

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home-Rumeno</title>
        <link rel="canonical" href="https://rumeno.in/home" />
      </Helmet>
      <ul className="d-none">
        {KeysWords.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <section className="container-fluid overflow-hidden p-0" id="#home">
        <a
          className="d-none"
          href="https://www.amazon.in/Sheep-Goat-Feed/b?ie=UTF8&node=28179044031"
        ></a>
        <a
          className="d-none"
          href="https://www.amazon.in/goat-medicine/s?k=goat+medicine"
        ></a>
        <a
          className="d-none"
          href="https://www.amazon.in/goat-farming-accessories/s?k=goat+farming+accessories"
        ></a>
        <a
          className="d-none"
          href="https://www.amazon.in/cow-farm-equipment/s?k=cow+farm+equipment"
        ></a>
        <a
          className="d-none"
          href="https://www.amazon.in/cow-feed/s?k=cow+feed"
        ></a>
        <a
          className="d-none"
          href="https://www.amazon.in/cattle-medicine/s?k=cattle+medicine"
        ></a>
        <a
          className="d-none"
          href="https://www.indiamart.com/shakyaworldtrade/goat-farming-equipment-and-accessories.html"
        ></a>
        <a
          className="d-none"
          href="https://www.flipkart.com/search?q=goat%20feed&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
        ></a>
        <a
          className="d-none"
          href="https://www.flipkart.com/search?q=goat%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"
        ></a>
        <a
          className="d-none"
          href="https://www.flipkart.com/search?q=cow%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"
        ></a>

        <div className="home-backgroundColor overflow-hidden">
          <Navbar size={cart.length} />

          <div className="container header-sect pt-5">
            <div className="row header-txt pt-5 mt-5">
              <div className="col-lg-6 pt-5" data-aos="fade-right">
                <h1 className="text-light mt-5 caro-text pt-5">
                  <span className="caroText">{t("v1")}</span>
                </h1>
                <p className="text-light h4">{t("v2")}</p>
              </div>

              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-delay="50"
              >
                <div className="container-fluid p-0 mb-5" data-wow-delay="0.1s">
                  <Carousel interval={2000}>
                    <Carousel.Item>
                      <img className="w-100" src={caroimg1} alt="loading" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="w-100" src={caroimg2} alt="loading" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="w-100" src={caroimg3} alt="loading" />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <a href="#training">
                <div className="training-sect">
                  <button className="btn gradient-custom-2 border-0 text-white btn--shockwave is-active">
                    TRAINING
                  </button>
                </div>
              </a>
              <a href="/#">
                <ReactWhatsapp
                  className="whatsapp-sect"
                  number="+91 7355043892"
                  message="Hello World"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-white btn--shockwave is-active"
                  />
                </ReactWhatsapp>
              </a>
            </div>
          </div>
        </div>
        <About />
        <div className="container">
          <div className="text-center">
            <div
              className="d-flex my-3"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <span className="label-title">Our Products</span>
              <div>
                <div className="about-line-large"></div>
                <div className="about-line-small"></div>
              </div>
            </div>
          </div>

          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div className="section-header text-start mb-3">
                <p>{t("v6")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-3"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="card-box py-4">
                <div className="card1">
                  <img src={Prdimg5} alt="Loading" className="card-img" />
                  <div className="card-body h-100">
                    <h4 className="card-title">{t("v269")}</h4>
                    <p className="card-sub-title"></p>
                    <p className="card-sub-title">{t("v270")}</p>
                    <Link   to={`/products/${"cow"}`}>
                      <button className="btn text-white border-0 gradient-custom-2 my-4 w-50">
                        See More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="card-box py-4">
                <div className="card1">
                  <img src={Prdimg4} alt="Loading" className="card-img" />
                  <div className="card-body h-100">
                    <h4 className="card-title">{t("v271")}</h4>
                    <p className="card-sub-title"></p>
                    <p className="card-sub-title">{t("v272")}</p>
                    <Link to={`/products/${"goat"}`}>
                      <button className="btn text-white border-0 gradient-custom-2 my-4 w-50">
                        See More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="card-box py-4">
                <div className="card1 caa">
                  <img
                    src={Prdimg7}
                    alt="Loading"
                    className="card-img img-width h-25"
                  />
                  <div className="card-body h-100">
                    <h4 className="card-title">{t("v273")}</h4>
                    <p className="card-sub-title"></p>
                    <p className="card-sub-title">{t("v274")}</p>
                    <Link to="/products">
                      <button className="btn text-white border-0 gradient-custom-2 my-4 w-50">
                        See More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="card-box py-4">
                <div className="card1 caa">
                  <img
                    src={Prdimg6}
                    alt="Loading"
                    className="card-img img-width h-100"
                  />
                  <div className="card-body h-100">
                    <h4 className="card-title">{t("v273")}</h4>
                    <p className="card-sub-title"></p>
                    <p className="card-sub-title">{t("v274")}</p>
                    <Link to="/products">
                      <button className="btn text-white border-0 gradient-custom-2 my-4 w-50">
                        See More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Training />
        <FooterTop />
        <Footer />
      </section>
    </>
  );
};
export default Home;
