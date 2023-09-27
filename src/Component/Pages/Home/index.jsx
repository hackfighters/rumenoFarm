import React from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
// Common Component
import Navbar from "../../Common/Navbar/index";
import About from "../../Common/About";
import Footer from "../../Common/Footer";
import Training from "../../Common/Training";
import FooterTop from "../../Common/InternationalBox/footer-top";
// Image
import Prdimg4 from "../../../assets/img/OurProduct/rumeno minromix.jpg";
import Prdimg5 from "../../../assets/img/OurProduct/micro floratane.jpg";
import caroimg1 from "../../../assets/img/home-img/caroimg1.png";
import caroimg2 from "../../../assets/img/home-img/caroimg2.png";
import caroimg3 from "../../../assets/img/home-img/caroimg3.png";
const Home = () => {
  const { t } = useTranslation();
  const Data = [

    // I will delete this Comment after connecting the api

    {
      heading:"NTC",
      title:"new your city",
      desp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, saepe! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      img:Prdimg5
    },
    {
      heading:"NTC",
      title:"new your city",
      desp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, saepe! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      img:Prdimg4
    },
    {
      heading:"NTC",
      title:"new your city",
      desp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, saepe! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      img:Prdimg5
    }
  ]
  return (
    <>
      <section className="container-fluid overflow-hidden p-0">
        <div className="home-backgroundColor overflow-hidden">
          <Navbar />
          <div className="container header-sect  pt-5">
            <div className="row header-txt pt-5 mt-5">
              <div className="col-lg-6 pt-5" data-aos="fade-right">
                <h1 className="text-light mt-5 caro-text pt-5">
                  {t("welcome")} <span className="caroText">{t("rumeno")}</span>
                </h1>
                <p className="text-light h4">{t("hometitle")}</p>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-delay="50"
              >
                <div
                  class="container-fluid p-0 mb-5 wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <Carousel interval={2000}>
                    <Carousel.Item>
                      <img className="w-100" src={caroimg1} alt="#" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="w-100" src={caroimg2} alt="#" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="w-100" src={caroimg3} alt="#" />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <a href="#training">
                <div className="training-sect">
                  <button className="btn  btn-success  btn--shockwave is-active">
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
            <div className="d-flex my-3">
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
                className="section-header text-start mb-3 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: "500px" }}
              >
                <p>Rumeno Products for Animals</p>
              </div>
            </div>
          </div>
          <div className="row">
            {Data.map((index) => (
              <div className="col-lg-4">
              <div className="card-box py-4">
                <div className="card1">
                  <img src={index.img} alt="Loading" className="card-img" />
                  <div className="card-body h-100">
                    <h1 className="card-title">{index.heading}</h1>
                    <p className="card-sub-title">{index.title}</p>
                    <p className="card-sub-title">
                      {index.desp}
                    </p>
                    <Link to="/products">
                      <button className="btn text-white border-0 gradient-custom-2 my-4 w-50">See More</button>
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
