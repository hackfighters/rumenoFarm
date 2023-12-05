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

// Common Component
import ProductItem from "../../Common/Product";

// Imges
import MICROFLORATONE from "../../../assets/img/OurProduct/microfloratane.jpg";
import Minromin from "../../../assets/img/OurProduct/minromix.jpg";
import farmimg1 from "../../../assets/img/OurProduct/FarmHouse.jpg";
import farmimg2 from "../../../assets/img/OurProduct/farm-floor.jpg";
import rumenoamazon1 from "../../../assets/img/OurProduct/Castrator.jpg";
import rumenoamazon2 from "../../../assets/img/OurProduct/GoatHoofCutter.jpg";
import rumenoamazon3 from "../../../assets/img/OurProduct/GoatNipple.jpg";
import rumenoamazon4 from "../../../assets/img/OurProduct/WaterBowl.jpg";
import rumenoamazon5 from "../../../assets/img/OurProduct/AnimalEarTagging.jpg";
import rumenoamazon6 from "../../../assets/img/OurProduct/WeighingMachine.jpg";
import rumenoamazon7 from "../../../assets/img/OurProduct/HangingWeighingScale.jpg";
import rumenoamazon8 from "../../../assets/img/OurProduct/InfraredThermometer.jpg";
import rumenoamazon9 from "../../../assets/img/OurProduct/GreenHouseMat2.jpg";
import humanconsumable1 from "../../../assets/img/OurProduct/HyegoatMilkpowder.jpg";
import humanconsumable2 from "../../../assets/img/OurProduct/farmfreshmilk.jpg";
import humanconsumable3 from "../../../assets/img/OurProduct/goatcreamsoap.jpg";
import goatforsale1 from "../../../assets/img/OurProduct/Barbarigoat.jpg";
import Rumenovita from "../../../assets/img/OurProduct/Rumenovita.jpg";
import Neonato from "../../../assets/img/OurProduct/NEONATO.jpg";
import TanavMukti from "../../../assets/img/OurProduct/Tanaav.jpg";
import Energico from "../../../assets/img/OurProduct/Energico-Animal.jpg";
import DigestoPlus from "../../../assets/img/OurProduct/Digesto-Plus.jpg";
import Liverofine from "../../../assets/img/OurProduct/Liverofine.jpg";
import DCox from "../../../assets/img/OurProduct/D-Cox.jpg";
import RumenoMicroFlora from "../../../assets/img/OurProduct/Rumeno-Micro-flora.jpg";
import LactoPup from "../../../assets/img/OurProduct/Lacto-Pup-Milk-Replacer.jpg";

// {/* Rumeno farm  */}
// {/* Rumeno */}
// {/* Veterinary */}
const ProductSidebar = ({ handleClick }) => {
  const { t } = useTranslation();

  const Data = [
    {
      id: 1,
      name: t(["v269"]),
      priceText: "Price: 245 INR/Bottle",
      amount: 1,
      price: 245.00,
      description: t(["v270"]),
      img: MICROFLORATONE,
      text: [
        <>
          {t(["v255"])}
          <br></br>
          <br></br>
          {t(["v256"])}
          <br></br>
          <br></br>
          {t(["v257"])}
          <br></br>
          <br></br>
          {t(["v258"])}
          <br></br>
          <br></br>
          {t(["v259"])}
          <br></br>
          <br></br>
          {t(["v260"])}
          <br></br>
          <br></br>
          {t(["v261"])}
          <br></br>
          <br></br>
          {t(["v262"])}
          <br></br>
          <br></br>
          {t(["v263"])}
          <br></br>
          <br></br>
        </>,
      ],
      suitable: t(["v337"]),
      tipe: t(["v339"]),
      efficacy: t(["v338"]),
      efficacy1: t(["v340"]),
      efficacy2: t(["v341"]),
    },
    {
      id: 2,
      name: t(["v271"]),
      priceText: "Price: 285 INR/Piece",
      amount: 1,
      price: 285.00,
      description: t(["v272"]),
      img: Minromin,
      text: [
        <>
          {t(["v198"])}
          <br></br>
          <br></br>
          {t(["v199"])}
          <br></br>
          <br></br>
          {t(["v200"])}
          <br></br>
          <br></br>
          {t(["v201"])}
          <br></br>
          <br></br>
          {t(["v202"])}
          <br></br>
          <br></br>
          {t(["v260"])}
          <br></br>
          <br></br>
          {t(["v261"])}
          <br></br>
          <br></br>
          {t(["v262"])}
          <br></br>
          <br></br>
          {t(["v263"])}
          <br></br>
          <br></br>
        </>,
      ],
      suitable: t(["v337"]),
      tipe: t(["v342"]),
      efficacy: t(["v338"]),
      efficacy1: t(["v343"]),
      efficacy2: t(["v344"]),
    },
    {
      id: 3,
      name: t(["v273"]),
      priceText: "Price: 700 INR/Piece",
      amount: 1,
      price: 700.00,
      description: t(["v274"]),
      img: Rumenovita,
      text: [
        <>
          {t(["v204"])}
          <br></br>
          <br></br>
          {t(["v205"])}
          <br></br>
          <br></br>
          {t(["v206"])}
          <br></br>
          <br></br>
          {t(["v207"])}
          <br></br>
          <br></br>
          {t(["v208"])}
          <br></br>
          <br></br>
          {t(["v209"])}
          <br></br>
          <br></br>
        </>,
      ],
      suitable: t(["v337"]),
      tipe: t(["v345"]),
      efficacy: t(["v338"]),
      efficacy1: t(["v343"]),
      efficacy2: t(["v341"]),
    },
    {
      id: 4,
      name: t(["v149"]),
      priceText: "Price: 245 INR/Bottle",
      amount: 1,
      price: 245.00,
      description: t(["v150"]),
      img: Neonato,
      text: [
        <>
          {t(["v150"])}
          <br></br>
          <br></br>
          {t(["v151"])}
          <br></br>
          <br></br>
          {t(["v152"])}
          <br></br>
          <br></br>
          {t(["v153"])}
          <br></br>
          <br></br>
          {t(["v154"])}
          <br></br>
          <br></br>
          {t(["v155"])}
          <br></br>
          <br></br>
          {t(["v156"])}
          <br></br>
          <br></br>
          {t(["v157"])}
          <br></br>
          <br></br>
          {t(["v158"])}
          <br></br>
          <br></br>
          {t(["v159"])}
          <br></br>
          <br></br>
          {t(["v160"])}
          <br></br>
          <br></br>
        </>,
      ],
      suitable: t(["v337"]),
      tipe: t(["v339"]),
      efficacy: t(["v338"]),
      efficacy1: t(["v340"]),
      efficacy2: t(["v346"]),
    },
    {
      id: 5,
      name: t(["v135"]),
      priceText: "Price: 700 INR/Piece",
      amount: 1,
      price: 700.00,
      description: t(["v136"]),
      img: TanavMukti,
      text: [
        <>
          {t(["v136"])}
          <br></br>
          <br></br>
          {t(["v137"])}
          <br></br>
          <br></br>
          {t(["v138"])}
          <br></br>
          <br></br>
          {t(["v139"])}
          <br></br>
          <br></br>
          {t(["v140"])}
          <br></br>
          <br></br>
          {t(["v141"])}
          <br></br>
          <br></br>
          {t(["v142"])}
          <br></br>
          <br></br>
          {t(["v143"])}
          <br></br>
          <br></br>
          {t(["v144"])}
          <br></br>
          <br></br>
          {t(["v145"])}
          <br></br>
          <br></br>
          {t(["v146"])}
          <br></br>
          <br></br>
          {t(["v147"])}
          <br></br>
          <br></br>
          {t(["v148"])}
          <br></br>
          <br></br>
        </>,
      ],
      suitable: t(["v337"]),
      tipe: t(["v342"]),
      efficacy: t(["v338"]),
      efficacy1: t(["v340"]),
      efficacy2: t(["v347"]),
    },
    {
      id: 6,
      name: t(["v161"]),
      priceText: "Price: 350 INR/Piece",
      amount: 1,
      price: 350.00,
      description: t(["v162"]),
      img: Energico,
      text: [
        <>
          {t(["v162"])}
          <br></br>
          <br></br>
          {t(["v163"])}
          <br></br>
          <br></br>
          {t(["v164"])}
          <br></br>
          <br></br>
          {t(["v165"])}
          <br></br>
          <br></br>
          {t(["v166"])}
          <br></br>
          <br></br>
        </>,
      ],
      suitable: t(["v337"]),
      tipe: t(["v342"]),
      efficacy: t(["v338"]),
      efficacy1: t(["v340"]),
      efficacy2: t(["v346"]),
    },
    {
      id: 7,
      name: t(["v167"]),
      priceText: "Price: 195 INR/Piece",
      amount: 1,
      price: 195.00,
      description: t(["v168"]),
      img: DigestoPlus,
      text: [
        <>
          {t(["v168"])}
          <br></br>
          <br></br>
          {t(["v169"])}
          <br></br>
          <br></br>
          {t(["v170"])}
          <br></br>
          <br></br>
          {t(["v171"])}
          <br></br>
          <br></br>
        </>,
      ],
      suitable: t(["v337"]),
      tipe: t(["v345"]),
      efficacy: t(["v338"]),
      efficacy1: t(["v340"]),
      efficacy2: t(["v348"]),
    },
    {
      id: 8,
      name: t(["v182"]),
      priceText: "Price: 125 INR/Piece",
      amount: 1,
      price: 125.00,
      description: t(["v183"]),
      img: Liverofine,
      text: [
        <>
          {t(["v183"])}
          <br></br>
          <br></br>
          {t(["v184"])}
          <br></br>
          <br></br>
          {t(["v185"])}
          <br></br>
          <br></br>
          {t(["v186"])}
          <br></br>
          <br></br>
          {t(["v187"])}
          <br></br>
          <br></br>
          {t(["v188"])}
          <br></br>
          <br></br>
        </>,
      ],
      suitable: t(["v337"]),
      tipe: t(["v345"]),
      efficacy: t(["v338"]),
      // efficacy1: t(["v340"]),
      efficacy2: t(["v344"]),
    },
    {
      id: 9,
      name: t(["v189"]),
      priceText: "Price: 250 INR/Piece",
      amount: 1,
      price: 250,
      description: t(["v190"]),
      img: DCox,
      text: [
        <>
          {t(["v190"])}
          <br></br>
          <br></br>
          {t(["v191"])}
          <br></br>
          <br></br>
          {t(["v192"])}
          <br></br>
          <br></br>
          {t(["v193"])}
          <br></br>
          <br></br>
          {t(["v194"])}
          <br></br>
          <br></br>
          {t(["v195"])}
          <br></br>
          <br></br>
          {t(["v196"])}
          <br></br>
          <br></br>
        </>,
      ],
      suitable: t(["v337"]),
      tipe: t(["v342"]),
      // efficacy: t(["v338"]),
      // efficacy1: t(["v340"]),
      // efficacy2: t(["v341"]),
    },
    {
      id: 10,
      name: t(["v210"]),
      priceText: "Price: 1300 INR/Piece",
      amount: 1,
      price: 1300,
      description: t(["v211"]),
      img: RumenoMicroFlora,
      text: [
        <>
          {t(["v212"])}
          <br></br>
          <br></br>
          {t(["v213"])}
          <br></br>
          <br></br>
          {t(["v214"])}
          <br></br>
          <br></br>
          {t(["v215"])}
          <br></br>
          <br></br>
          {t(["v216"])}
          <br></br>
          <br></br>
          {t(["v217"])}
          <br></br>
          <br></br>
          {t(["v218"])}
          <br></br>
          <br></br>
          {t(["v219"])}
          <br></br>
          <br></br>
          {t(["v220"])}
          <br></br>
          <br></br>
          {t(["v221"])}
          <br></br>
          <br></br>
          {t(["v223"])}
          <br></br>
          <br></br>
          {t(["v224"])}
          <br></br>
          <br></br>
          {t(["v225"])}
          <br></br>
          <br></br>
          {t(["v226"])}
          <br></br>
          <br></br>
          {t(["v227"])}
          <br></br>
          <br></br>
          {t(["v228"])}
          <br></br>
          <br></br>
        </>,
      ],
      suitable: t(["v337"]),
      tipe: t(["v342"]),
      efficacy: t(["v338"]),
      efficacy1: t(["v343"]),
      efficacy2: t(["v341"]),
    },
    {
      id: 11,
      name: t(["v248"]),
      priceText: "Price: 600 INR/Piece",
      amount: 1,
      price: 600,
      description: t(["v249"]),
      img: LactoPup,
      text: [
        <>
          {t(["v249"])}
          <br></br>
          <br></br>
          {t(["v250"])}
          <br></br>
          <br></br>
          {t(["v251"])}
          <br></br>
          <br></br>
          {t(["v252"])}
          <br></br>
          <br></br>
          {t(["v253"])}
          <br></br>
          <br></br>
        </>,
      ],
      suitable: t(["v337"]),
      tipe: t(["v345"]),
      efficacy: t(["v338"]),
      efficacy1: t(["v343"]),
      efficacy2: t(["v344"]),
    },
  ];

  const FarmEquipment = [
    {
      id: 12,
      name: t(["v319"]),
      priceText: t(["v320"]),
      amount: 1,
      price: 3400,
      description: t(["v321"]),
      img: farmimg1,
    },
    {
      id: 13,
      name: t(["v322"]),
      priceText: t(["v323"]),
      amount: 1,
      price: 600,
      description: t(["v324"]),
      img: farmimg2,
    },
  ];

  const RumenoAmazon = [
    { name: t(["v325"]), img: rumenoamazon1, amount: 1, price: 600 },
    { name: t(["v326"]), img: rumenoamazon2, amount: 1, price: 600 },
    {
      name: t(["v172"]),
      img: rumenoamazon3,
      description: t(["v173"]),
      amount: 1,
      priceText: "Rs. 55",
      price: 55,
      text: [
        <>
          {t(["v173"])}
          <br></br>
          <br></br>
          {t(["v174"])}
          <br></br>
          <br></br>
          {t(["v175"])}
          <br></br>
          <br></br>
          {t(["v176"])}
          <br></br>
          <br></br>
          {t(["v180"])}
          <br></br>
          <br></br>
          {t(["v181"])}
          <br></br>
          <br></br>
        </>,
      ],
    },
    { name: t(["v328"]), img: rumenoamazon4 },
    { name: t(["v329"]), img: rumenoamazon5 },
    { name: t(["v330"]), img: rumenoamazon6 },
    { name: t(["v331"]), img: rumenoamazon7 },
    { name: t(["v332"]), img: rumenoamazon8 },
    { name: t(["v333"]), img: rumenoamazon9 },
  ];

  const HumanConsumable = [
    { name: t(["v334"]), img: humanconsumable1 },
    { name: t(["v335"]), img: humanconsumable2 },
    { name: t(["v336"]), img: humanconsumable3 },
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
      <div className="row flex-nowrap justify-content-center ms-0 mx-md-4 mx-lg-0">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-white rounded h-100">
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
                  <span className="m-0 d-none d-sm-inline mx-md-3 ">
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
                  <FontAwesomeIcon
                    className="h5 m-0 px-lg-2"
                    icon={faTractor}
                  />
                  <span className="m-0 d-none d-sm-inline mx-md-3 ">
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
                  <span className="m-0 d-none d-sm-inline mx-md-3 ">
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
                  <span className="m-0 d-none d-sm-inline mx-md-3 ">
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
                  <FontAwesomeIcon
                    className="h5 m-0 px-lg-2"
                    icon={faWheatAwn}
                  />
                  <span className="m-0 d-none d-sm-inline mx-md-3 ">
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
                  <span className="m-0 d-none d-sm-inline mx-md-3 ">
                    {t("v300")}
                  </span>
                </div>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        <div className="col-md-10 p-3">
          {items.map((item, index) => (
            <ProductItem item={item} handleClick={handleClick} />
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
