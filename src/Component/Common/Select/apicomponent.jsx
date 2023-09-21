// import "./App.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// // import "./assets/css/mainPageCss/style.css";
// // import "./assets/css/mainPageCss/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import Lang from './Component/language/index'
// import Home from "./Component/mainComponents/Home/index";
// import { Routes, Route } from "react-router-dom";
// import { useEffect } from "react";
// import Services from "./Component/mainComponents/Service";
// import ProductPage from "./Component/mainComponents/Products/index";
// import ContactUs from "./Component/mainComponents/ContactUs";


// function App() {
//   useEffect(() => {
//     AOS.init();
//     AOS.refresh();

//     const select = (el, all = false) => {
//       el = el.trim();
//       if (all) {
//         return [...document.querySelectorAll(el)];
//       } else {
//         return document.querySelector(el);
//       }
//     };

//     const onscroll = (el, listener) => {
//       el.addEventListener("scroll", listener);
//     };

//     const navbarlinksActive = () => {
//       let position = window.scrollY + 200;
//       let navbarlinks = select("#navbar .scrollto", true);
//       navbarlinks.forEach((navbarlink) => {
//         if (!navbarlink.hash) return;
//         let section = select(navbarlink.hash);
//         if (!section) return;
//         if (
//           position >= section.offsetTop &&
//           position <= section.offsetTop + section.offsetHeight
//         ) {
//           navbarlink.classList.add("active");
//         } else {
//           navbarlink.classList.remove("active");
//         }
//       });
//     };

//     const headerScrolled = () => {
//       let selectHeader = select("#header");
//       let selectTopbar = select("#topbar");
//       if (selectHeader) {
//         if (window.scrollY > 100) {
//           selectHeader.classList.add("header-scrolled");
//           if (selectTopbar) {
//             selectTopbar.classList.add("topbar-scrolled");
//           }
//         } else {
//           selectHeader.classList.remove("header-scrolled");
//           if (selectTopbar) {
//             selectTopbar.classList.remove("topbar-scrolled");
//           }
//         }
//       }
//     };

//     window.addEventListener("load", () => {
//       navbarlinksActive();
//       headerScrolled();
//     });

//     onscroll(document, () => {
//       navbarlinksActive();
//       headerScrolled();
//     });
//   }, []);

//   return (
//     <>
     
//       <Routes>
//         <Route path="/" element={<Lang />} />
//         <Route path="/home" element={<Home />} />        
//         <Route path="/services" element={<Services />} />        
//         <Route path="/products" element={<ProductPage />} />        
//         <Route path="/contactus" element={<ContactUs />} />        
//       </Routes>
//     </>
//   );
// }

// export default App;
