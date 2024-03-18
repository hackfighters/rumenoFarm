import React from "react";

// Third party Fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationCrosshairs,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

// Third party i18next
import { useTranslation } from "react-i18next";

// Image
import logo from "../../../assets/img/Logo/newlogo.png";
import { NavLink } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
// {/* Rumeno farm  */}
// {/* Rumeno */}
// {/* Veterinary */}
const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container-fluid footer pt-5">
        {/* Veterinary docter online */}
        {/* Veterinary docter cow / rabbit / new me */}
        {/* Veterinary docter salary */}
        {/* Veterinary docter fees */}
        {/* Veterinary docter course */}
        {/* Veterinary docter jods */}
        {/* Veterinary docter kese bane */}
        {/* Goat farming training */}
        <div className="row py-4 text-light">
          <div
            className="col-lg-3 text-center"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <img className="footer-img" src={logo} alt="Loading" />
          
          </div>
          {/* Veterinary docter online */}
          {/* Veterinary docter cow / rabbit / new me */}
          {/* Veterinary docter salary */}
          {/* Veterinary docter fees */}
          {/* Veterinary docter course */}
          {/* Veterinary docter jods */}
          {/* Veterinary docter kese bane */}
          {/* Goat farming training */}
          <div className="col-lg-2 pt-4">
            <div className="d-flex justify-content-center pb-2">
              <h5 className="me-3">Pages</h5>
            </div>
            <div className="d-flex justify-content-center">
              <ul className="list-unstyled footer-li">
                <li>
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    exact
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                {/* Veterinary docter online */}
                {/* Veterinary docter cow / rabbit / new me */}
                {/* Veterinary docter salary */}
                {/* Veterinary docter fees */}
                {/* Veterinary docter course */}
                {/* Veterinary docter jods */}
                {/* Veterinary docter kese bane */}
                {/* Goat farming training */}
                <li>
                  <a href="#about" className="footer-page">
                    About
                  </a>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                {/* Veterinary docter online */}
                {/* Veterinary docter cow / rabbit / new me */}
                {/* Veterinary docter salary */}
                {/* Veterinary docter fees */}
                {/* Veterinary docter course */}
                {/* Veterinary docter jods */}
                {/* Veterinary docter kese bane */}
                {/* Goat farming training */}
                <li>
                  <a href="#training" className="footer-page">
                    Training
                  </a>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    exact
                    to="/privacypolicy"
                  >
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 pt-4 text-center text-lg-start">
            <h5 className="pb-2 text-center">Address</h5>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon
                  icon={faLocationCrosshairs}
                  className="me-2"
                  // style={{ color: "white" }}
                />
                {t("v301")}
              </li>
              {/* Veterinary docter online */}
              {/* Veterinary docter cow / rabbit / new me */}
              {/* Veterinary docter salary */}
              {/* Veterinary docter fees */}
              {/* Veterinary docter course */}
              {/* Veterinary docter jods */}
              {/* Veterinary docter kese bane */}
              {/* Goat farming training */}
              <li>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="me-2"
                  style={{ color: "white" }}
                />
                rumeno.farmotech@gmail.com
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="me-2"
                  style={{ color: "white" }}
                />
                +91 7355043892
              </li>
            </ul>
            {/* Veterinary docter online */}
            {/* Veterinary docter cow / rabbit / new me */}
            {/* Veterinary docter salary */}
            {/* Veterinary docter fees */}
            {/* Veterinary docter course */}
            {/* Veterinary docter jods */}
            {/* Veterinary docter kese bane */}
            {/* Goat farming training */}
          </div>
          <div className="col-lg-4 pt-4">
            <div className="text-center">
              <h5>About Company</h5>
              <p className="footer-text pt-3">{t("v303")}</p>
            </div>
            {/* Veterinary docter online */}
            {/* Veterinary docter cow / rabbit / new me */}
            {/* Veterinary docter salary */}
            {/* Veterinary docter fees */}
            {/* Veterinary docter course */}
            {/* Veterinary docter jods */}
            {/* Veterinary docter kese bane */}
            {/* Goat farming training */}
            <div>
              <ul className="list-unstyled d-flex justify-content-center footer-li">
                <li>
                  <a href="https://www.facebook.com/RumenoFarmotech/" target="_blank">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="mx-2 fs-3"
                    style={{ color: "white" }}
                  />
                  </a>
                </li>
                {/* Veterinary docter online */}
                {/* Veterinary docter cow / rabbit / new me */}
                {/* Veterinary docter salary */}
                {/* Veterinary docter fees */}
                {/* Veterinary docter course */}
                {/* Veterinary docter jods */}
                {/* Veterinary docter kese bane */}
                {/* Goat farming training */}
                <li>
                <ReactWhatsapp
                  className="bg-transparent border-0"
                  number="+91 7355043892"
                  message="Hello World"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="mx-2 fs-3"
                    style={{ color: "white" }}
                    
                  /></ReactWhatsapp>
                </li>
                <li>
                  <a href="https://www.youtube.com/@RumenoFarmotech-bg5y" target="_blank">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="mx-2 fs-3"
                    style={{ color: "white" }}
                  />
                  </a>
                </li>
                {/* Veterinary docter online */}
                {/* Veterinary docter cow / rabbit / new me */}
                {/* Veterinary docter salary */}
                {/* Veterinary docter fees */}
                {/* Veterinary docter course */}
                {/* Veterinary docter jods */}
                {/* Veterinary docter kese bane */}
                {/* Goat farming training */}
                <li>
                  <a href="https://www.instagram.com/rumenofarmotech/" target="_blank">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="mx-2 fs-3"
                    style={{ color: "white" }}
                  />
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
          {/* Veterinary docter online */}
          {/* Veterinary docter cow / rabbit / new me */}
          {/* Veterinary docter salary */}
          {/* Veterinary docter fees */}
          {/* Veterinary docter course */}
          {/* Veterinary docter jods */}
          {/* Veterinary docter kese bane */}
          {/* Goat farming training */}
        </div>
        <hr className="text-white m-0" />
              <div id="copyright" className="text-white text-center py-3 mx-4 ">
                &copy; 2022 - {new Date().getFullYear()}{" "}
                <a href="_https://www.rumeno.in/">https://www.rumeno.in</a> -
                All Rights Reserved.
                
              </div>
              
        {/* Rumeno farm  */}
        {/* Rumeno */}
        {/* Veterinary */}
      </div>
    </>
  );
};

export default Footer;
