import React from "react";

import caroimg1 from "../../../assets/img/home-img/caroimg1.png";
import caroimg2 from "../../../assets/img/home-img/caroimg2.png";
import caroimg3 from "../../../assets/img/home-img/caroimg3.png";
import Navbar from "../Navbar/index";
// import Lang from "../../language";
import About from "../About";
import Products from "../Products/index";
import { useTranslation } from "react-i18next";
import Test from "../Products/test";
// import i18next from "i18next";



const Home = () => {
  const { t } = useTranslation();
  // const handleChangen = (e) => {
  //   i18next.changeLanguage(e.target.value);
  // };
  return (
    <>
      <div className="home-backgroundColor ">
        <Navbar />
        {/* <Test/> */}
        <div className="container pt-5">
          <div className="row pt-5 mt-5">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="text-light mt-5 caro-text pt-5">
                {/* <Select onChange={(e) => handleChangen(e)} /> */}
                {t("welcome")} <span className="caroText">Veterinary</span>
              </h1>
              <p className="text-light h4">
                Solve all your Farming problems with Rumeno
              </p>
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
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="w-100" src={caroimg1} alt="Image" />
                    </div>
                    <div className="carousel-item">
                      <img className="w-100" src={caroimg2} alt="Image" />
                    </div>
                    <div className="carousel-item">
                      <img className="w-100" src={caroimg3} alt="Image" />
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
          </div>
        </div>
      </div>
      <About />
      <Products/>
      {/* <Test/> */}
    </>
  );
};

export default Home;
