import React from "react";

// Common Component
import Navbar from "../../Common/Navbar/index";
import Footer from "../../Common/Footer";
import ProductSidebar from "./productSidebar";

// Image
import Roadmap from "../../../assets/img/prod-img/Rumeno Health Roadmap (1).png";

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="our-product-img">
        <img src={Roadmap} alt="Loading" className="w-100 pt-5" />
      </div>
      <div className="container-fluid abt-sect py-3 overflow-hidden">
        {/* <div className="text-center fs-2">Our Product</div> */}
        <div className="d-flex justify-content-center pt-2">
          <div className="mx-2">
            <div className="services-line-largeleft"></div>
            <div className="services-line-smallleft"></div>
          </div>
          <span className="label-title">Our Product</span>
          <div className="mx-2">
            <div className="services-line-largeright"></div>
            <div className="services-line-smallright"></div>
          </div>
        </div>
        <ProductSidebar />
      </div>
      <Footer />
    </>
  );
};

export default Products;
