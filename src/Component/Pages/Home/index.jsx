import React from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

// Common Component
import Navbar from "../../Common/Navbar/index";
import About from "../../Common/About";
import Footer from "../../Common/Footer";
import Training from "../../Common/Training";
import FooterTop from "../../Common/CertifiedBox/footer-top";

// Image
import Prdimg4 from "../../../assets/img/OurProduct/minromix.jpg";
import Prdimg5 from "../../../assets/img/OurProduct/microfloratane.jpg";
import Prdimg6 from "../../../assets/img/OurProduct/minromix.jpg";
import caroimg1 from "../../../assets/img/home-img/caroimg1.png";
import caroimg2 from "../../../assets/img/home-img/caroimg2.png";
import caroimg3 from "../../../assets/img/home-img/caroimg3.png";
const Home = () => {
  const { t } = useTranslation();
  const Data = [
    // I will delete this Comment after connecting the api

    {
      heading: t(["v269"]),
      desp: t(["v270"]),
      img: Prdimg5,
    },
    {
      heading: t(["v271"]),
      desp: t(["v272"]),
      img: Prdimg6,
    },
    {
      heading: t(["v273"]),
      desp: t(["v274"]),
      img: Prdimg4,
    },
  ];
  return (
    <>
      <section className="container-fluid overflow-hidden p-0">
        <div className="home-backgroundColor overflow-hidden">
          <Navbar />
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
                <div
                  className="container-fluid p-0 mb-5"
                  data-wow-delay="0.1s"
                >
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
              <div
                className="section-header text-start mb-3"
              >
                <p>{t("v6")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {Data.map((index) => (
              <div
                className="col-lg-4"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div className="card-box py-4">
                  <div className="card1">
                    <img src={index.img} alt="Loading" className="card-img" />
                    <div className="card-body h-100">
                      <h4 className="card-title">{index.heading}</h4>
                      <p className="card-sub-title">{index.title}</p>
                      <p className="card-sub-title">{index.desp}</p>
                      <Link to="/products">
                        <button className="btn text-white border-0 gradient-custom-2 my-4 w-50">
                          See More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
