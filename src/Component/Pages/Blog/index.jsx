import React, { useContext, useState } from "react";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import { Helmet } from "react-helmet";
import { UserContext } from "../../Common/Modal/logusecont";
import blgimg1 from '../../../assets/img/OurProduct/GreenHouseMat2.jpg';
import blgimg2 from '../../../assets/img/OurProduct/farm-floor.jpg'

const Blog = () => {

const blogdata = [{
  img:blgimg1,
  heading:"Know All About Mycotoxicosis Disease and its Management inPoultry",
  content:" Mycotoxicosis in poultry is a disease caused by toxins frommold-infected feed. Effective management is crucial for poultryhealth. mold-infected feed. Effective management is crucial forpoultry health. mold-infected feed. Effective management iscrucial for poultry health.",
  title1:'Animal',
  title2:'Animal',
  title3:'blog',
  title4:'Farmer',
  bottomcontent:'Refit Animal Care',
},
{
  img:blgimg2,
  heading:" Management inPoultry Know All About Mycotoxicosis Disease and its",
  content:" Mycotoxicosis in poultry is a disease caused by toxins frommold-infected feed. Effective management is crucial for poultryhealth. mold-infected feed. Effective management is crucial forpoultry health. mold-infected feed. Effective management iscrucial for poultry health.",
  title1:'Animal',
  title2:'Animal',
  title3:'blog',
  title4:'Farmer',
  bottomcontent:'Refit Animal Care',
},]

  const { cart } = useContext(UserContext);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog-Rumeno</title>
        <link rel="canonical" href="https://rumeno.in/blog" />
      </Helmet>
      <div className="desk-nav">
        <Navbar size={cart.length} />
      </div>
      <div className="mob-nav">
        <ResponsiveNavbar size={cart.length} />
      </div>
      <section className="container-fluid service-bg overflow-hidden">
        <div
          className="section-header text-center mx-auto mb-3 pt-5"
          data-wow-delay="0.1s"
        >
          <div
            className="d-flex justify-content-center pt-5 mt-lg-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="mx-2">
              <div className="services-line-largeleft"></div>
              <div className="services-line-smallleft"></div>
            </div>
            <span className="label-title">Blog</span>
            <div className="mx-2">
              <div className="services-line-largeright"></div>
              <div className="services-line-smallright"></div>
            </div>
          </div>
        </div>
        {blogdata.map((item,index) => (
        <div className="row justify-content-center my-3" key={index}>
          <div className="d-flex col-lg-10 py-2 align-items-center shadow bg-white ">
            <img
              className=" me-3 rounded w-100 "
              src={item.img}
              alt="loading"
              // width={150}
              height={300}
            />
            <div className="flex-grow-1 my-2">
              <h3 className="mb-3 ">
                {item.heading}
              </h3>
              <div className="text-muted mb-3">
               {item.content}
              </div>
              <ul className="list-unstyled d-flex mb-0">
                <li className="me-3 fw-bold text-primary ">{item.title1} </li>
                <li className="me-3 fw-bold text-primary ">{item.title2} </li>
                <li className="me-3 fw-bold text-primary ">{item.title3}</li>
                <li className="me-3 fw-bold text-primary ">{item.title4} </li>
              </ul>
              <ul className="list-unstyled d-flex mt-3">
                <li className="me-3 ">
                  <span>{item.bottomcontent}</span>
                </li>
                <li>
                  <span className="text-danger">{new Date().toLocaleDateString("en-GB")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
         ))}
      </section>
      <Footer />
    </>
  );
};

export default Blog;
