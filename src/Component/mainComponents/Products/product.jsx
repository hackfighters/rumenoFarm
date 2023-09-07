import React, { useEffect, useState } from "react";

import { Navbar } from "react-bootstrap";
import Footer from "../Footer";
import PrdCard1 from "../../Common/Select/productCowData";
import PrdCard2 from "../../Common/Select/productGoatData";
import PrdCard3 from "../../Common/Select/productSheepData";

const ProductPage = () => {
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    const buttons = document.querySelectorAll(".menu__item");
    buttons.forEach((item) => {
      const text = item.querySelector(".menu__text");
      setLineWidth(text, item);
      window.addEventListener("resize", () => {
        setLineWidth(text, item);
      });
      item.addEventListener("click", function () {
        if (this.classList.contains("active")) return;
        this.classList.add("active");
        if (activeButton) {
          activeButton.classList.remove("active");
          activeButton.querySelector(".menu__text").classList.remove("active");
        }
        handleTransition(this, text);
        setActiveButton(this);
      });
    });
  }, [activeButton]);

  const setLineWidth = (text, item) => {
    const lineWidth = text.offsetWidth + "px";
    item.style.setProperty("--lineWidth", lineWidth);
  };

  const handleTransition = (item, text) => {
    item.addEventListener("transitionend", (e) => {
      if (e.propertyName !== "flex-grow" || !item.classList.contains("active"))
        return;
      text.classList.add("active");
    });
  };
  return (
    <>
      <Navbar />
      <section className="product-page">
       
        <div className="container-xxl py-5" id="myTab" role="tablist">
        <div className="container">
          <div className="mb-5 text-center">
            <h1 className="display-5 mb-3">Our Products</h1>
          </div>
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="section-header text-start mb-5 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: "500px" }}
              >
                <p>Rumeno Products for Animals</p>
              </div>
            </div>
            <div
              className="col-lg-6 text-start text-lg-end wow slideInRight"
              data-wow-delay="0.1s"
            >
              <ul
                className="nav nav-pills d-inline-flex justify-content-end mb-5"
                id="home-tab"
              >
                <li className="nav-item me-2" id="home-tab">
                  <a
                    className="btn btn-outline-success
                     border-2 active w-100"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    Cow
                  </a>
                </li>
                <li className="nav-item me-2" id="profile-tab">
                  <a
                    className="btn btn-outline-success
                     border-2 w-100"
                    data-bs-toggle="pill"
                    href="#tab-2"
                  >
                    Goat
                  </a>
                </li>
                <li className="nav-item me-0" id="contact-tab">
                  <a
                    className="btn btn-outline-success
                     border-2 w-100"
                    data-bs-toggle="pill"
                    href="#tab-3"
                  >
                    Sheep
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <PrdCard1 />
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
              <div className="row g-4">
                <PrdCard2 />
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
              <div className="row g-4">
                <PrdCard3 />
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductPage;
