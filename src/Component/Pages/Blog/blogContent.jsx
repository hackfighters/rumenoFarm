import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import blgimg1 from "../../../assets/img/OurProduct/GreenHouseMat2.jpg";
import blgimg2 from "../../../assets/img/OurProduct/farm-floor.jpg";
import { Helmet } from 'react-helmet';
import { UserContext } from "../../Common/Modal/logusecont";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import { Link } from "react-router-dom";
import ResponsiveNavbar from "../../Common/Navbar/navMob";


const BlogContent = () => {
  const { cart } = useContext(UserContext);
    const blogdata = [
        {
          id: 1,
          img: blgimg1,
          heading:
            "Know All About Mycotoxicosis Disease and its Management inPoultry",
          content:
            " Mycotoxicosis in poultry is a disease caused by toxins frommold-infected feed. Effective management is crucial for poultryhealth. mold-infected feed. Effective management is crucial forpoultry health. mold-infected feed. Effective management iscrucial for poultry health.",
          title1: "Animal",
          title2: "Animal",
          title3: "blog",
          title4: "Farmer",
          bottomcontent: "Refit Animal Care",
        },
        {
          id: 2,
          img: blgimg2,
          heading:
            " Management inPoultry Know All About Mycotoxicosis Disease and its",
          content:
            "n Mycotoxicosis in poultry is a disease caused by toxins frommold-infected feed. Effective management is crucial for poultryhealth. mold-infected feed. Effective management is crucial forpoultry health. mold-infected feed. Effective management iscrucial for poultry health.",
          title1: "Animal",
          title2: "Animal",
          title3: "blog",
          title4: "Farmer",
          bottomcontent: "Refit Animal Care",
        },
      ];
    const { id } = useParams();
    const blog = blogdata.find(blog => blog.id === parseInt(id));
  return (
<>
<Helmet>
        <meta charSet="utf-8" />
        <title>Blog-Rumeno</title>
        <link rel="canonical" href="https://rumeno.in/blog" />
      </Helmet>
      <a className="d-none" href="https://www.amazon.in/Sheep-Goat-Feed/b?ie=UTF8&node=28179044031"></a>
        <a className="d-none" href="https://www.amazon.in/goat-medicine/s?k=goat+medicine"></a>
        <a className="d-none" href="https://www.amazon.in/goat-farming-accessories/s?k=goat+farming+accessories"></a>
        <a className="d-none" href="https://www.amazon.in/cow-farm-equipment/s?k=cow+farm+equipment"></a>
        <a className="d-none" href="https://www.amazon.in/cow-feed/s?k=cow+feed"></a>
        <a className="d-none" href="https://www.amazon.in/cattle-medicine/s?k=cattle+medicine"></a>
        <a className="d-none" href="https://www.indiamart.com/shakyaworldtrade/goat-farming-equipment-and-accessories.html"></a>
        <a className="d-none" href="https://www.flipkart.com/search?q=goat%20feed&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"></a>
        <a className="d-none" href="https://www.flipkart.com/search?q=goat%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"></a>
        <a className="d-none" href="https://www.flipkart.com/search?q=cow%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"></a>
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
          <div className="row justify-content-center m-2 " >
            <div
              className="d-flex col-lg-12  py-2 align-items-center shadow bg-white"
            >
              <img
                className=" me-3 rounded w-100 "
                src={blog.img}
                alt="loading"
                // width={150}
                height={300}
              />
              <div className="flex-grow-1 my-2">
                  <h1 className="mb-3 ">{blog.heading}</h1>

                <div className="text-muted mb-3">{blog.content}</div>
                <ul className="list-unstyled d-flex mb-0">
                  <li className="me-3 fw-bold text-primary ">{blog.title1} </li>
                  <li className="me-3 fw-bold text-primary ">{blog.title2} </li>
                  <li className="me-3 fw-bold text-primary ">{blog.title3}</li>
                  <li className="me-3 fw-bold text-primary ">{blog.title4} </li>
                </ul>
                <ul className="list-unstyled d-flex mt-3">
                  <li className="me-3 ">
                    <span>{blog.bottomcontent}</span>
                  </li>
                  <li>
                    <span className="text-danger">
                      {new Date().toLocaleDateString("en-GB")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </section>
      <Footer />
</>
    )
}

export default BlogContent