import React from "react";

// Common Component
import Navbar from "../../Common/Navbar/index";
import Footer from "../../Common/Footer";
import ProductSidebar from "./productSidebar";

// Image
import Roadmap1 from "../../../assets/img/OurProduct/rumeno-roadmap.png";
import Roadmap3 from "../../../assets/img/roadmap_mobile.mp4";
import ResponsiveNavbar from "../../Common/Navbar/navMob";

// Rumeno farm
// Rumeno
// Veterinary
const Products = () => {
  return (
    <>
    <div className="desk-nav">
    <Navbar/>
    </div>
    <div className="mob-nav">
<ResponsiveNavbar/>
    </div>
      <div className="our-product-img">
          <img src={Roadmap1} alt="Loading"className="w-100  pt-5 vh-100 object-fit-fill"/>
          <video autoPlay="true" loop="true" muted className="w-100  pt-5 vh-100 " src={Roadmap3}></video>
      </div>
      <div className="container-fluid abt-sect py-3 overflow-hidden">
        {/* <div className="text-center fs-2">Our Product</div> */}
        <div className="d-flex justify-content-center pt-2">
          <div className="mx-2">
            <div className="services-line-largeleft"></div>
            <div className="services-line-smallleft"></div>
          </div>
          <span className="label-title text-center">Our Product</span>
          <div className="mx-2">
            <div className="services-line-largeright"></div>
            <div className="services-line-smallright"></div>
          </div>
        </div>
        <ProductSidebar />
      </div>
      {/* Rumeno farm  */}
      {/* Rumeno */}
      {/* Veterinary */}
      <Footer />
    </>
  );
};

export default Products;
