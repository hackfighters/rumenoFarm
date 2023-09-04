import React from "react";
import lgimg from "../../assets/img/logo.jpg";
import "../../assets/css/lang.css";
import { Link } from "react-router-dom";
import Select from "../Common/Select";
// import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Lang = () => {
  // const { t } = useTranslation();
  const handleChangen = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <section className="container-fluid context">
        <div className=" row justify-content-center ">
          <div className=" lang-box col-lg-5 d-flex justify-content-around py-3">
            <div className="row">
              <div className="col-lg-6">
            <div className="lang-img lang-box1">
              <img className="" src={lgimg} alt="" />
            </div>
              </div>
              <div className="col-lg-6">

            <div className="lang-box2 ">
            <Select onChange={(e) => handleChangen(e)} />
              <div className="lang-link">
              <Link to="/home">
              <button className="btn-grad-bt">Sumit</button>
              </Link>
              </div>
              
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lang;
