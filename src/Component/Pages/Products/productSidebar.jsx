import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPerson,
  faScaleUnbalancedFlip,
  faTractor,
  faWheatAwn,
} from "@fortawesome/free-solid-svg-icons";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";

// Third party i18next
import { useTranslation } from "react-i18next";

// Imges
import TannavImg from "../../../assets/img/OurProduct/rumenovita backgrond.jpg";
import Prdcoms from "../../../assets/img/prod-img/prdcom-1.jpg";
import ProductItem from "../../Common/Product";
import farmimg1 from "../../../assets/img/OurProduct/1652436131083-PhotoRoom (3).jpg";
import farmimg2 from "../../../assets/img/prod-img/farm-floor.jpg";
import rumenoamazon1 from "../../../assets/img/OurProduct/1652436131083-PhotoRoom (7).jpg";
import rumenoamazon2 from "../../../assets/img/prod-img/GoatHoofCutter.jpg";
import rumenoamazon3 from "../../../assets/img/OurProduct/1642371191784-PhotoRoom (1).jpg";
import rumenoamazon4 from "../../../assets/img/prod-img/WaterBowl.jpg";
import rumenoamazon5 from "../../../assets/img/prod-img/Eartagging.jpg";
import rumenoamazon6 from "../../../assets/img/OurProduct/1652436131083-PhotoRoom (1).jpg";
import rumenoamazon7 from "../../../assets/img/prod-img/HangingWeighingScale.jpg";
import rumenoamazon8 from "../../../assets/img/OurProduct/1652436131083-PhotoRoom (6).jpg";
import rumenoamazon9 from "../../../assets/img/prod-img/GreenHouseMat2.jpg";
import humanconsumable1 from "../../../assets/img/prod-img/HyegoatMilkpowder.jpg";
import humanconsumable2 from "../../../assets/img/prod-img/farmfreshmilk.jpg";
import humanconsumable3 from "../../../assets/img/prod-img/goatcreamsoap.jpg";
import goatforsale1 from "../../../assets/img/prod-img/Barbarigoat.jpg";

const ProductSidebar = () => {
  const { t } = useTranslation();

  const Data = [
    {
      name: "Tanaav Mukti",
      price: 700,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: TannavImg,
    },
    {
      name: "Tanaav Mukti",
      price: 700,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: Prdcoms,
    },
    {
      name: "Tanaav Mukti",
      price: 700,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: Prdcoms,
    },
    {
      name: "Tanaav Mukti",
      price: 700,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: Prdcoms,
    },
    {
      name: "Tanaav Mukti",
      price: 700,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: Prdcoms,
    },
  ];

  const FarmEquipment = [
    {
      name: "Farm House Floor Burner",
      price: "Rs. 3000 + shipping",
      description:
        "Gas fueled Floor Burner is developed for destroying micro bacteria, virus, fungus, hidden parasites, parasites eggs & insect contamination in and around the shed. Flame can be controlled by a knob fitted in the pipe",
      img: farmimg1,
    },
    {
      name: "Plastic Slatted Floor",
      price: "Rs. 135 per Square feet + GST + Shipping",
      description:
        "Size 1 feet X 2 FeetThickness 8mmArea 2 square feet/pieceLoad Capacity up to 100kg (220lbs)Impact & Wear MediumLife more than 5 years ",
      img: farmimg2,
    },
  ];

  const RumenoAmazon = [
    { name: "Castrator", img: rumenoamazon1 },
    { name: "Goat Hoof Cutter", img: rumenoamazon2 },
    { name: "Goat Nipple", img: rumenoamazon3 },
    { name: "Automatic Water Bowl", img: rumenoamazon4 },
    { name: "Animal Ear Tagging", img: rumenoamazon5 },
    { name: "Large Platform Weighing Machine", img: rumenoamazon6 },
    { name: "Hanging Weighing Scale", img: rumenoamazon7 },
    { name: "Infrared Thermometer", img: rumenoamazon8 },
    { name: "Green House Net", img: rumenoamazon9 },
  ];

  const HumanConsumable = [
    { name: "Rumeno Goat Milk Powder", img: humanconsumable1 },
    { name: "Rumeno Farm Goat Fresh Milk", img: humanconsumable2 },
    { name: "Goat Milk Cream Soap", img: humanconsumable3 },
  ];

  const GoatForSale = [{ name: "Goat", img: goatforsale1 }];

  const [category, setCategory] = useState("animal");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const categoryItems = {
    animal: Data,
    farmhouseequip: FarmEquipment,
    rumenoamazon: RumenoAmazon,
    humanconsumable: HumanConsumable,
    goatforsale: GoatForSale,
  };

  const items = categoryItems[category].slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleCategoryChange = (category) => {
    setCategory(category);
    setCurrentPage(0);
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row flex-nowrap justify-content-center ms-0">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-white rounded">
          <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white w-100">
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100"
              id="menu"
            >
              <li
                className={`nav-item sildar py-1  w-100 ${
                  category === "animal" ? "active" : ""
                }`}
                onClick={() => handleCategoryChange("animal")}
              >
                <div className="py-2 d-flex text-start align-items-center">
                  <FontAwesomeIcon className="h5 m-0 px-lg-2" icon={faHouse} />
                  <span className="m-0 d-none d-sm-inline">
                    {/* Animal <div>Supplement</div> */}
                    {t("v275")}
                  </span>
                </div>
              </li>
              <li
                className={`sildar py-1  w-100 ${
                  category === "farmhouseequip" ? "active" : ""
                }`}
                onClick={() => handleCategoryChange("farmhouseequip")}
              >
                <div className="py-2 d-flex text-start align-items-center">
                  <FontAwesomeIcon className="h5 m-0 px-lg-2" icon={faTractor} />
                  <span className="m-0 d-none d-sm-inline">
                    {/* Farmhouse <div>Equipment</div> */}
                    {t("v276")}
                  </span>
                </div>
              </li>
              <li
                className={`sildar py-1  w-100 ${
                  category === "rumenoamazon" ? "active" : ""
                }`}
                onClick={() => handleCategoryChange("rumenoamazon")}
              >
                <div className="py-2 d-flex text-start align-items-center">
                  <FontAwesomeIcon className="h5 m-0 px-lg-2" icon={faAmazon} />
                  <span className="m-0 d-none d-sm-inline">
                    {/* Rumeno<div>with Amazon</div> */}
                    {t("v277")}
                  </span>
                </div>
              </li>
              <li
                className={`sildar py-1  w-100 ${
                  category === "humanconsumable" ? "active" : ""
                }`}
                onClick={() => handleCategoryChange("humanconsumable")}
              >
                <div className="py-2 d-flex text-start align-items-center">
                  <FontAwesomeIcon className="h5 m-0 px-lg-2" icon={faPerson} />
                  <span className="m-0 d-none d-sm-inline">
                    {/* Human <div>Consumable</div> */}
                    {t("v278")}
                  </span>
                </div>
              </li>
              <li
                className={`sildar py-1  w-100 ${
                  category === "goatforsale" ? "active" : ""
                }`}
                onClick={() => handleCategoryChange("goatforsale")}
              >
                <div className="py-2 d-flex text-start align-items-center">
                  <FontAwesomeIcon className="h5 m-0 px-lg-2" icon={faWheatAwn} />
                  <span className="m-0 d-none d-sm-inline">
                    {/* Crop <div>Seeds</div> */}
                    {t("v279")}
                  </span>
                </div>
              </li>
              <li
                className={`sildar py-1  w-100 ${
                  category === "goatforsale" ? "active" : ""
                }`}
                onClick={() => handleCategoryChange("goatforsale")}
              >
                <div className="py-2 d-flex text-start align-items-center">
                  <FontAwesomeIcon
                    className="h5 m-0 px-lg-2"
                    icon={faScaleUnbalancedFlip}
                  />
                  <span className="m-0 d-none d-sm-inline">
                    {/* Goats <div>for Sale</div> */}
                    {t("v300")}
                  </span>
                </div>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        <div className="col-md-10 product-sect p-3">
          {items.map((item, index) => (
            <ProductItem
              key={index}
              img={item.img}
              name={item.name}
              price={item.price}
              description={item.description}
            />
          ))}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={Math.ceil(categoryItems[category].length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination justify-content-center my-5"}
            activeclassname={"active"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
