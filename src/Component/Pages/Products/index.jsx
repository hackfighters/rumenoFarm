import React from "react";

// Common Component
import Navbar from "../../Common/Navbar/index";
import Footer from "../../Common/Footer";
import ProductSidebar from "./productSidebar";

// Image
import Roadmap1 from "../../../assets/img/OurProduct/rumeno-roadmap.png";
import Roadmap2 from "../../../assets/img/OurProduct/proimg.png";

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="our-product-img">
        <picture>
          <source media="(min-width:465px)" srcSet={Roadmap1} />
          <img
            src={Roadmap2}
            alt="Loading"
            className="w-100 mt-5 vh-100 object-fit-fill"
          />
        </picture>
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
      <Footer />
    </>
  );
};

export default Products;
