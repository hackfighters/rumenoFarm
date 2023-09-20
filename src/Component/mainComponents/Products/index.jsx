import React from "react";
import Navbar from "../Navbar";
import ProductSidebar from "./productSidebar";

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="our-product-img"></div>
      <div className="container-fluid abt-sect py-4">
        <div className="text-center fs-2">Our Product</div>
        
        <ProductSidebar/>
      </div>
    </>
  );
};

export default Products;
