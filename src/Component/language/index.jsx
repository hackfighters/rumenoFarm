import React from "react";
import lgimg from "../../assets/img/logo.jpg";
import "../../assets/css/lang.css";
import { Link } from "react-router-dom";
import Select from "../Common/Select";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Lang = () => {
  const { t } = useTranslation();
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
          <div className=" lang-box col-lg-6 d-flex justify-content-around py-3">
            <div className="lang-img lang-box1">
              <img className="" src={lgimg} alt="" />
            </div>
            <hr className="lang-box-hr" />
            <div className="lang-box2 ">
            <Select onChange={(e) => handleChangen(e)} />
              <Link to="/home">
              <button>Sumit</button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lang;
