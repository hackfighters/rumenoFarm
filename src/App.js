import React , { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Lang from "./Component/language/index";
import Home from "./Component/Pages/Home/index";
import Services from "./Component/Pages/Service";
import ProductPage from "./Component/Pages/Products/index";
import ContactUs from "./Component/Pages/ContactUs";
// Rumeno farm
// Rumeno
// Veterinary
const App = () => {

  // const [deferredPrompt, setDeferredPrompt] = useState(null);

  // useEffect(() => {
  //   const handleBeforeInstallPrompt = (event) => {
  //     // Prevent Chrome's default popup from appearing
  //     event.preventDefault();

  //     // Save the event for later use
  //     setDeferredPrompt(event);
  //   };

  //   // Listen for beforeinstallprompt event
  //   window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

  //   return () => {
  //     // Clean up the event listener when the component unmounts
  //     window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  //   };
  // }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     // Trigger the installation prompt after 7 seconds
  //     if (deferredPrompt) {
  //       deferredPrompt.prompt();

  //       deferredPrompt.userChoice.then((choiceResult) => {
  //         if (choiceResult.outcome === 'accepted') {
  //           console.log('User accepted the installation');
  //         } else {
  //           console.log('User dismissed the installation');
  //         }
  //       });

  //       // Clear the deferred prompt variable
  //       setDeferredPrompt(null);
  //     }
  //   }, 1000);

  //   return () => {
  //     // Clear the timer when the component unmounts or when the prompt is triggered
  //     clearTimeout(timer);
  //   };
  // }, [deferredPrompt]);

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
      {/* // Rumeno farm
// Rumeno
// Veterinary */}
      <Routes>
        <Route path="/" element={<Lang />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
