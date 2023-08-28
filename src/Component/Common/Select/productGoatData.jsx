import React from "react";

import Prdimg1 from "../../../assets/img/prod-img/prdcom-1.jpg";
import Prdimg2 from "../../../assets/img/prod-img/prdcom-2.jpg";
import Prdimg3 from "../../../assets/img/prod-img/prdcom-3.jpg";
import Prdimg4 from "../../../assets/img/prod-img/prdcom-4.jpg";
import Prdimg5 from "../../../assets/img/prod-img/prdcom-5.jpg";
import Prdimg6 from "../../../assets/img/prod-img/prdcom-6.jpg";
import Prdimg7 from "../../../assets/img/prod-img/prdGS-1.jpg";
import Prdimg8 from "../../../assets/img/prod-img/prdGS-2.jpg";


const PrdCard2 = () => {
  const PrdData2 = [
    {
      name: "Feeding Nipple",
      price: "₹7:00",
      oldprice: "₹10:00",
      img: Prdimg7,
    },
    {
      name: "Pro-Lac",
      price: "₹7:00",
      oldprice: "₹10:00",
      img: Prdimg8,
    },
    {
      name: "Tanaav Mukti",
      price: "₹7:00",
      oldprice: "₹10:00",
      img: Prdimg1,
    },
    {
      name: "Neonato",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg2,
    },
    {
      name: "Energico",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg3,
    },
    {
      name: "Digesto Plus",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg4,
    },
    {
      name: "Micro-Flora",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg5,
    },
    {
      name: "Rumenovita",
      price: "₹5:00",
      oldprice: "₹8:00",
      img: Prdimg6,
    },
  ];

  return PrdData2.map((card2) => {
    return (
      <>
        <div
          class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div class="product-item">
            <div class="position-relative bg-light overflow-hidden">
              <img class="img-fluid w-100" src={card2.img} alt="" />
              {/* <div class="bg-success text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        New
                      </div> */}
            </div>
            <div class="text-center p-4">
              <a class="d-block h4 mb-2 fw-bold text-decoration-none">
                {card2.name}
              </a>
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
      </>
    );
  });
};
export default PrdCard2;
