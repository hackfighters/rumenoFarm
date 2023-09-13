import React from "react";

import caroimg1 from "../../../assets/img/home-img/caroimg1.png";
import caroimg2 from "../../../assets/img/home-img/caroimg2.png";
import caroimg3 from "../../../assets/img/home-img/caroimg3.png";
import Navbar from "../Navbar/index";
import About from "../About";
import { useTranslation } from "react-i18next";
import Footer from "../Footer";
import Training from "../Training";
import Prdimg6 from "../../../assets/img/prod-img/prdcom-6.jpg";
import Prdimg5 from "../../../assets/img/prod-img/prdcom-5.jpg";
import Prdimg8 from "../../../assets/img/prod-img/prdGS-2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  return (
    <><section className="container-fluid overflow-hidden p-0">
      <div className="home-backgroundColor overflow-hidden">
        <Navbar />
        <div className="container  pt-5">
          <div className="row header-txt pt-5 mt-5">
            <div className="col-lg-6 pt-5" data-aos="fade-right">
              <h1 className="text-light mt-5 caro-text pt-5">
                {t("welcome")} <span className="caroText">{t("rumeno")}</span>
              </h1>
              <p className="text-light h4">{t("hometitle")}</p>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="50">
              <div
                class="container-fluid p-0 mb-5 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div
                  id="header-carousel"
                  class="carousel slide"
                  data-bs-ride="carousel"
                  data-ride="carousel"
                  data-interval="50"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="w-100" src={caroimg1} alt="#" />
                    </div>
                    <div className="carousel-item">
                      <img className="w-100" src={caroimg2} alt="#" />
                    </div>
                    <div className="carousel-item">
                      <img className="w-100" src={caroimg3} alt="#" />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#header-carousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#header-carousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="training-sect">
              <h5>TRAINING</h5>
            </div>
          </div>
        </div>
      </div>
      <About />
      <div className="container">
        <div className="text-center">
          <h1 className="display-5 mb-3 mt-3">Our Products</h1>
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
          <div className="col-lg-4">
            <div className="card-box py-4">
              <div className="card1">
                <img src={Prdimg5} alt="Loading" className="card-img" />
                <div className="card-body">
                  <h1 className="card-title">NYC</h1>
                  <p className="card-sub-title">new your city</p>
                  <p className="card-sub-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, saepe! Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet.
                  </p>
                  <Link to="/products">
                    <button className="card-btn">See More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-box py-4">
              <div className="card1">
                <img src={Prdimg6} alt="Loading" className="card-img" />
                <div className="card-body">
                  <h1 className="card-title">NYC</h1>
                  <p className="card-sub-title">new your city</p>
                  <p className="card-sub-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, saepe! Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet.
                  </p>
                  <Link to="/products">
                    <button className="card-btn">See More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-box py-4">
              <div className="card1">
                <img src={Prdimg8} alt="Loading" className="card-img" />
                <div className="card-body">
                  <h1 className="card-title">NYC</h1>
                  <p className="card-sub-title">new your city</p>
                  <p className="card-sub-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, saepe! Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet.
                  </p>
                  <Link to="/products">
                    <button className="card-btn">See More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Training />
      <Footer />
      </section>
    </>
  );
};

export default Home;
