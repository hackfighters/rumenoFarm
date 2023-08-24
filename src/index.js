import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import i18n, { changeLanguage } from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import Lang from "./Component/language";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import './Component/i18/index';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
