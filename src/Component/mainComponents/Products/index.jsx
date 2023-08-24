import React from "react";

// import imgw from "../../../assets/img/prod-img/"

// import Prdcards from "../../Common/prodCards";

import Prdimg1 from "../../../assets/img/prod-img/prdcom-1.jpg";
import Prdimg2 from "../../../assets/img/prod-img/prdcom-2.jpg";
import Prdimg3 from "../../../assets/img/prod-img/prdcom-3.jpg";
import Prdimg4 from "../../../assets/img/prod-img/prdcom-4.jpg";
import Prdimg5 from "../../../assets/img/prod-img/prdcom-5.jpg";
import Prdimg6 from "../../../assets/img/prod-img/prdcom-6.jpg";
import Prdimg7 from "../../../assets/img/prod-img/prdGS-1.jpg";
import Prdimg8 from "../../../assets/img/prod-img/prdGS-2.jpg";

const PrdCards = () => {
  
  const PrdData1 =
 [ {
    name:'Digesto', price:"₹7:00" , oldprice:"₹10:00" , img:Prdimg1
  },
  {
    name:'Million', price:"₹5:00" , oldprice:"₹8:00" , img:Prdimg2
  },
  {
    name:'Name2', price:"₹5:00" , oldprice:"₹8:00" , img:Prdimg3
  },
  {
    name:'Products', price:"₹5:00" , oldprice:"₹8:00" , img:Prdimg4
  },
  {
    name:'Products', price:"₹5:00" , oldprice:"₹8:00" , img:Prdimg5
  },
  {
    name:'Products', price:"₹5:00" , oldprice:"₹8:00" , img:Prdimg6
  },


]
const PrdData2 =
[
  {
    name:'Products', price:"₹5:00" , oldprice:"₹8:00" , img:Prdimg7
  },
  {
    name:'Products', price:"₹5:00" , oldprice:"₹8:00" , img:Prdimg8
  },
  {
   name:'Digesto', price:"₹7:00" , oldprice:"₹10:00" , img:Prdimg1
 },
 {
   name:'Million', price:"₹5:00" , oldprice:"₹8:00" , img:Prdimg2
 },
 {
   name:'Name2', price:"₹5:00" , oldprice:"₹8:00" , img:Prdimg3
 },
 {
   name:'Products', price:"₹5:00" , oldprice:"₹8:00" , img:Prdimg4
 },


]
const PrdData3 =
[ {
  name:'Products', price:"₹5:00" , oldprice:"₹8:00" , img:Prdimg7
},
{
  name:'Products', price:"₹5:00" , oldprice:"₹8:00" , img:Prdimg8
},
  {
   name:'Digesto', price:"₹7:00" , oldprice:"₹10:00" , img:Prdimg1
 },
 {
   name:'Million', price:"₹5:00" , oldprice:"₹8:00" , img:Prdimg2
 },
 {
   name:'Name2', price:"₹5:00" , oldprice:"₹8:00" , img:Prdimg3
 },
 {
   name:'Products', price:"₹5:00" , oldprice:"₹8:00" , img:Prdimg4
 },


]
  return (
    <>
        {PrdData1.map((card1) => (
          <div
            class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div class="product-item">
              <div class="position-relative bg-light overflow-hidden">
                <img class="img-fluid w-100" src={card1.img} alt="" />
                <div class="bg-success text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                  New
                </div>
              </div>
              <div class="text-center p-4">
                <a class="d-block h4 mb-2 fw-bold text-decoration-none">{card1.name}</a>
                <span class="text-primary me-1">{card1.price}</span>
                <span class="text-body text-decoration-line-through">
                  {card1.oldprice}
                </span>
              </div>
              <div class="d-flex border-top">
                <small class="w-50 text-center border-end py-2">
                  <a class="text-body">
                    <i class="fa fa-eye text-primary me-2"></i>View detail
                  </a>
                </small>
                <small class="w-50 text-center py-2">
                  <a class="text-body">
                    <i class="fa fa-shopping-bag text-primary me-2"></i>Add to
                    cart
                  </a>
                </small>
              </div>
            </div>
          </div>
        ))}
        {PrdData2.map((card2) => (
          <div
            class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div class="product-item">
              <div class="position-relative bg-light overflow-hidden">
                <img class="img-fluid w-100" src={card2.img} alt="" />
                <div class="bg-success text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                  New
                </div>
              </div>
              <div class="text-center p-4">
                <a class="d-block h4 mb-2 fw-bold text-decoration-none">{card2.name}</a>
                <span class="text-primary me-1">{card2.price}</span>
                <span class="text-body text-decoration-line-through">
                  {card2.oldprice}
                </span>
              </div>
              <div class="d-flex border-top">
                <small class="w-50 text-center border-end py-2">
                  <a class="text-body">
                    <i class="fa fa-eye text-primary me-2"></i>View detail
                  </a>
                </small>
                <small class="w-50 text-center py-2">
                  <a class="text-body">
                    <i class="fa fa-shopping-bag text-primary me-2"></i>Add to
                    cart
                  </a>
                </small>
              </div>
            </div>
          </div>
        ))}
        {PrdData3.map((card3) => (
          <div
            class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div class="product-item">
              <div class="position-relative bg-light overflow-hidden">
                <img class="img-fluid w-100" src={card3.img} alt="" />
                <div class="bg-success text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                  New
                </div>
              </div>
              <div class="text-center p-4">
                <a class="d-block h4 mb-2 fw-bold text-decoration-none">{card3.name}</a>
                <span class="text-primary me-1">{card3.price}</span>
                <span class="text-body text-decoration-line-through">
                  {card3.oldprice}
                </span>
              </div>
              <div class="d-flex border-top">
                <small class="w-50 text-center border-end py-2">
                  <a class="text-body">
                    <i class="fa fa-eye text-primary me-2"></i>View detail
                  </a>
                </small>
                <small class="w-50 text-center py-2">
                  <a class="text-body">
                    <i class="fa fa-shopping-bag text-primary me-2"></i>Add to
                    cart
                  </a>
                </small>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

const products = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="mb-5 text-center">
            <h1 className="display-5 mb-3">Our Products</h1>
          </div>
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="section-header text-start mb-5 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: "500px" }}
              >
                {/* <h1 className="display-5 mb-3">Our Products</h1> */}
                <p>Rumeno Products for Animals</p>
              </div>
            </div>
            <div
              className="col-lg-6 text-start text-lg-end wow slideInRight"
              data-wow-delay="0.1s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                <li className="nav-item me-2">
                  <a
                    className="btn btn-outline-success
                     border-2 active w-100"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    Vegetable
                  </a>
                </li>
                <li className="nav-item me-2">
                  <a
                    className="btn btn-outline-success
                     border-2 w-100"
                    data-bs-toggle="pill"
                    href="#tab-2"
                  >
                    Fruits
                  </a>
                </li>
                <li className="nav-item me-0">
                  <a
                    className="btn btn-outline-success
                     border-2 w-100"
                    data-bs-toggle="pill"
                    href="#tab-3"
                  >
                    Fresh
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <PrdCards />
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
              <div className="row g-4">
               
               
              <PrdCards />
                  
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
              <div className="row g-4">
                <PrdCards/>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default products;
