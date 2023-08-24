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
          <div className="col-lg-5 mb-6 mb-lg-0"
            data-aos-delay="1"
            data-aos-duration="1500"
            data-aos="fade-right"
          >
            <span className="label-title mb-3">About</span>
            <h2 className="abt-sect-txt1 mb-3">
              Rumeno Farmotech is a nutrition and feed supplement technologies
              company
            </h2>
            <p className="par">
              Rumeno Farmotech offers a wide range of products, including
              Probiotics, milk replacer, Macro & Micro Minerals, Multi Vitamins,
              Enzymes, Amino Acids, feed additives, premixes, concentrates, and
              specialty products for livestock, poultry, and aquaculture. These
              products are designed to address specific nutritional needs and
              challenges faced by farmers and producers, such as improving
              growth rates, enhancing immune function, increasing feed
              efficiency, and reducing environmental impact.
              <br />
              <br />
              {/* The company's team of experts includes veterinarians,
              nutritionists, and other professionals with extensive experience
              in animal nutrition and health. They work closely with customers
              to understand their specific needs and develop customized
              solutions that meet their goals and objectives.
              <br />
              <br />
              Rumeno Farmotech also places a strong emphasis on quality and
              sustainability. All products are manufactured using the highest
              quality ingredients and are rigorously tested to ensure safety and
              efficacy. The company is committed to minimizing its environmental
              impact by utilizing sustainable production methods and reducing
              waste. Rumeno Farmotech is a trusted partner for farmers and
              producers seeking high-quality nutrition and feed supplement
              technologies to improve animal health, welfare, and productivity. */}
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
          <div className="col-lg-11">
          <p className="par">
          The company's team of experts includes veterinarians,
              nutritionists, and other professionals with extensive experience
              in animal nutrition and health. They work closely with customers
              to understand their specific needs and develop customized
              solutions that meet their goals and objectives.
              <br />
              <br />
              Rumeno Farmotech also places a strong emphasis on quality and
              sustainability. All products are manufactured using the highest
              quality ingredients and are rigorously tested to ensure safety and
              efficacy. The company is committed to minimizing its environmental
              impact by utilizing sustainable production methods and reducing
              waste. Rumeno Farmotech is a trusted partner for farmers and
              producers seeking high-quality nutrition and feed supplement
              technologies to improve animal health, welfare, and productivity.
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
