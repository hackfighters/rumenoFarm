import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Lang from "./Component/language/index";
import Home from "./Component/Pages/Home/index";
import Services from "./Component/Pages/Service";
import ProductPage from "./Component/Pages/Products/index";
import ContactUs from "./Component/Pages/ContactUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Component/Common/Modal/logusecont";
import Transaction from "./Component/Pages/Transaction";
import TransactionDetail from "./Component/Pages/Transaction/transactiondetail";
import Error from "./Component/Common/404page/index";
import Feedback from './Component/Common/Navbar/frmaftlog'

const App = () => {
    const location = useLocation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;

        setTimeout(() => {
          const header = document.getElementById("header");
          const topbar = document.getElementById("topbar");

          if (header && topbar) {
            const isHeaderScrolled = window.scrollY > 100;
            header.classList.toggle("header-scrolled", isHeaderScrolled);
            topbar.classList.toggle("topbar-scrolled", isHeaderScrolled);
          }

          isScrolling = false;
        }, 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navbarlinksActive = () => {
      const position = window.scrollY + 200;
      const navbarlinks = document.querySelectorAll("#navbar .scrollto");

      navbarlinks.forEach((navbarlink) => {
        const sectionId = navbarlink.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);

        if (
          section &&
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };
    window.scrollTo(0, 0);

    navbarlinksActive();
  }, [location]);

  return (
    <>
      <ToastContainer />
      <UserProvider>
        <Routes>
          <Route path="/" Component={Lang} />
          <Route path="/home" Component={Home} />
          <Route path="/services" Component={Services} />
          <Route path="/products" Component={ProductPage} />
          <Route path="/contactus" Component={ContactUs} />
          <Route path="/transaction" Component={Transaction} />
          <Route path="/transdetail" Component={TransactionDetail} />
          <Route path="/frmaftlog" Component={Feedback}/>
          <Route path="*" Component={Error} />
        </Routes>
      </UserProvider>

      {/* <Test/> */}
    </>
  );
};

export default App;
