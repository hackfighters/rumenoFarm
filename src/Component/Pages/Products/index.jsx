import React from "react";

// Common Component
import Navbar from "../../Common/Navbar/index";
import Footer from "../../Common/Footer";
import ProductSidebar from "./productSidebar";

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="our-product-img"></div>
      <div className="container-fluid abt-sect py-4 overflow-hidden">
        <div className="text-center fs-2">Our Product</div>
        <ProductSidebar />
      </div>
      <Footer />
    </>
  );
};

export default Products;
