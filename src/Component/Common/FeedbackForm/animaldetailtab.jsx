import React, { useState } from "react";
import KidAddForm from "./addkid";
import BreedHeat from "./breeding";
import HeatRecord from "./heatrecord";
import Deworm from "./deworm";
import { NavLink } from "react-router-dom";
import Demo from "./demo";
import VaccineRecord from "./vaccine";
import PostWean from "./postweaning";
import FarmHygine from "./farmhygine";
import MilkRecord from "./milkrecord";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faSquareWhatsapp, faWhatsapp, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";

const AnimalDetailTab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Animal-Details-Rumeno</title>
                <link rel="canonical" href="https://rumeno.in/AnimalDetailTab" />
            </Helmet>
    <section className="home-backgroundColor animal-bg-size">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between mt-5">
            <div>
              <NavLink to="/frmaftlog">
                <button className="btn btn-secondary w-auto">Back</button>
              </NavLink>
            </div>
            <div className="mx-5 px-5">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn border-0 text-white  gradient-custom-2 my-2 w-100 custom-btn btn-11 is-active dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Help
                </button>
                <div className="dropdown-menu">
                  {/* <a className="dropdown-item letter-spacing" href="#">
                  <FontAwesomeIcon
                  icon={faPhone}
                  className="me-2"
                />
                +91 7355043892
                  </a> */}
                  <h5 className="text-center">Call or Whatsapp</h5>
                  
                  <a className="dropdown-item letter-spacing d-flex align-items-center justify-content-center" href="#">
                  <FontAwesomeIcon
                  icon={faPhone}
                  className="me-2 fs-6  bg-secondary p-1 rounded text-white"
                />
                +91 7355043892
                  </a>
                  
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                  <FontAwesomeIcon
                  icon={faEnvelope}
                  className="me-2"
                />
                <p className="fs-7 m-0">rumeno.farmotech@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <ul className="nav nav-tabs" id="myTabs">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 1 ? "active" : ""}`}
                  onClick={() => handleTabClick(1)}
                  data-toggle="tab"
                  href="#tab1"
                >
                  Add Kid
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 6 ? "active" : ""}`}
                  onClick={() => handleTabClick(6)}
                  data-toggle="tab"
                  href="#tab6"
                >
                  Post Wean
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 3 ? "active" : ""}`}
                  onClick={() => handleTabClick(3)}
                  data-toggle="tab"
                  href="#tab3"
                >
                  Milk
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 2 ? "active" : ""}`}
                  onClick={() => handleTabClick(2)}
                  data-toggle="tab"
                  href="#tab2"
                >
                  Vaccine
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 4 ? "active" : ""}`}
                  onClick={() => handleTabClick(4)}
                  data-toggle="tab"
                  href="#tab4"
                >
                  Deworm
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 8 ? "active" : ""}`}
                  onClick={() => handleTabClick(8)}
                  data-toggle="tab"
                  href="#tab8"
                >
                  Estrus Heat
                </a>
              </li>
            </ul>

            {/* Tab panes */}
            <div className="tab-content">
              <div
                id="tab1"
                className={`tab-pane fade ${
                  activeTab === 1 ? "show active" : ""
                }`}
                role="tabpanel"
              >
                <KidAddForm />
              </div>
              <div
                id="tab2"
                className={`tab-pane fade ${
                  activeTab === 2 ? "show active" : ""
                }`}
                role="tabpanel"
              >
                <VaccineRecord />
              </div>
              <div
                id="tab3"
                className={`tab-pane fade ${
                  activeTab === 3 ? "show active" : ""
                }`}
                role="tabpanel"
              >
                <MilkRecord />
              </div>
              <div
                id="tab4"
                className={`tab-pane fade ${
                  activeTab === 4 ? "show active" : ""
                }`}
                role="tabpanel"
              >
                <Deworm />
              </div>

              <div
                id="tab5"
                className={`tab-pane fade ${
                  activeTab === 6 ? "show active" : ""
                }`}
                role="tabpanel"
              >
                <PostWean />
              </div>

              <div
                id="tab5"
                className={`tab-pane fade ${
                  activeTab === 8 ? "show active" : ""
                }`}
                role="tabpanel"
              >
                <BreedHeat />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AnimalDetailTab;
