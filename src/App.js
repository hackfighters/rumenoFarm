import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/css/mainPageCss/style.css";
import "./assets/css/mainPageCss/bootstrap.min.css";
import Lang from './Component/language/index'
import Home from "./Component/mainComponents/Home/index";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
   useEffect(() => {
    AOS.init();
    AOS.refresh();



    /**
   * Easy selector helper function
   */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
      /**
   * Easy event listener function
   */
  // const on = (type, el, listener, all = false) => {
  //   let selectEl = select(el, all)
  //   if (selectEl) {
  //     if (all) {
  //       selectEl.forEach(e => e.addEventListener(type, listener))
  //     } else {
  //       selectEl.addEventListener(type, listener)
  //     }
  //   }
  // }
  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

    /**
   * Navbar links active state on scroll
   */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    // const scrollto = (el) => {
      
    //   let header = select('#header')
    //   let offset = header.offsetHeight
  
    //   let elementPos = select(el).offsetTop
    //   window.scrollTo({
    //     top: elementPos - offset,
    //     behavior: 'smooth'
    //   })
    // }
  
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    let selectTopbar = select('#topbar')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
          if (selectTopbar) {
            selectTopbar.classList.add('topbar-scrolled')
          }
        } else {
          selectHeader.classList.remove('header-scrolled')
          if (selectTopbar) {
            selectTopbar.classList.remove('topbar-scrolled')
          }
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }

  }, []);
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Lang />} />
        <Route path="/home" element={<Home />} />        
      </Routes>
    </>
  );
}

export default App;
