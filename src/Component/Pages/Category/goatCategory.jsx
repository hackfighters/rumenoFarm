import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Common/Navbar";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import Footer from "../../Common/Footer";
import { UserContext } from "../../Common/Modal/logusecont";
import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

// import images
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
import ProductItem from "../../Common/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEye } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import ProudctFeedbackModal from "../../Common/Modal/productFeedback";
import Login from "../../Common/Modal/Login";
import Registration from "../../Common/Modal/Registion";
import SendOtp from "../../Common/Modal/otp";
import { Link } from "react-router-dom";

const GoatCategoryPage = ({ }) => {

  const { UidData, cart, setCart, setiteamdata, setSizevalue } = useContext(UserContext);
  const [showRegistrationModal, setShowRegistrtionModal] = useState(false);
  const [showOtp, setShowOpt] = useState(false);


  const { t } = useTranslation();
  const Data = [
    {
      id: 1,
      name: t(["v254"]),
      priceText: "Price: 245 INR/Bottle",
      amount: 1,
      price: 245.0,
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
      name: t(["v197"]),
      priceText: "Price: 285 INR/Piece",
      amount: 1,
      price: 285.0,
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
      price: 700.0,
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
      price: 245.0,
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
      price: 700.0,
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
      price: 350.0,
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
      price: 195.0,
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
      price: 125.0,
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
  var Value = '';
  const AllData = [...Data, ...FarmEquipment, ...RumenoAmazon, ...HumanConsumable];
  const [cookies, setCookie] = useCookies(["cart"]);
  useEffect(() => {
    if (cookies.cart) {
      setCart(cookies.cart);
    }
  }, []);
  useEffect(() => {
    setCookie("cart", cart, { path: "/" });
    Value = cart.length;
    if (Value !== 0) {
      setSizevalue(Value)
    }
  }, [cart, setCookie]);


  // Filter logic (you need to define your filter criteria here)
  const filterData = AllData.filter((item) => {
    // Example filter criteria: filter items where the name includes "Goat"
    return item.name.toLowerCase().includes("goat");
  });

  const [showLoginModal, setShowLoginModal] = useState(false);
  const { loggedInUser } = useContext(UserContext);

  const openRegistration = () => {
    setShowRegistrtionModal(true);
    setShowLoginModal(false);
  };

  const closeRegistrationModal = () => {
    setShowRegistrtionModal(false);
  };
  const OpenSendOtp = () => {
    setShowOpt(true);
    setShowLoginModal(false);
  };
  const CloseSendOtp = () => {
    setShowOpt(false);
  };



  const AddToCarts = (item) => {
    if (loggedInUser) {
      console.log("Item added to cart:", item);
      // handleClick(item);
      // Add logic to handle adding item to cart
      setCart([...cart, { id: item.id, amount: 1, price: item.price, img: item.img, name: item.name, uID: UidData }]);
      const itemdatra = { id: item.id, amount: 1, price: item.price, img: item.img, name: item.name, uID: UidData }
      setiteamdata(itemdatra)
      console.log(itemdatra)
    } else {
      // console.log("login first");
      setShowLoginModal(!showLoginModal);
      toast.warn("Please Login", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
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
            <span className="label-title">Goat Category</span>
            <div className="mx-2">
              <div className="services-line-largeright"></div>
              <div className="services-line-smallright"></div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">

            {filterData.map((item, index) => (
              <div key={index} className="col-lg-3 text-center border bg-white m-3  shadow">
                <img src={item.img} className="w-100 mt-2" height={200} alt="loading" />
                <h5 className="mt-3  fw-bold m-auto text-center">{item.name}</h5>
                <p className="mt-2"> dolor similique expedita provident ipsam sunt rerum rem voluptatem.</p>
                <hr className="my-0" />
                <div className="d-flex justify-content-between mx-2 align-item-center">
                  <button
                    className="btn text-white border-0 w-auto gradient-custom-2 my-4 p-2"
                    onClick={() => AddToCarts(item)}
                  >
                    Add to Cart
                  </button>
                  <Link className="text-decoration-none fs-6 text-success d-flex align-items-center  px-1 rounded" to={`/products/ProductDetail/${item.name}`}>
                    <span
                      className=""
                    >
                      View More
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </Link>

                </div>
              </div>
            ))}



            <Login
              showModal={showLoginModal}
              closeModal={setShowLoginModal}
              openRegistrationModal={openRegistration}
              OpenSendOtpModal={OpenSendOtp}
            />
            <Registration
              showModal={showRegistrationModal}
              closeModal={closeRegistrationModal}
            />
            <SendOtp showModal={showOtp} closeModal={CloseSendOtp} />
          </div>

        </div>
        <div className="row bg-white shadow mx-3 my-4 justify-content-center">


          <div className="col-lg-11">
            <h1 className="my-4 text-center">
              Goat Feed Supplements Improving Performance and Health
            </h1>
            <p>
              If you own goats, you are aware of how important good nourishment
              is to your pets' health and wellbeing. Giving your goats the
              correct vitamins can have a big impact on how well they perform
              overall, whether you raise them for meat, milk, or as pets. This
              post will introduce you to Rumeno Farmotech, a reputable brand in
              the business, and discuss the advantages of goat feed supplements.
            </p>
            <h2 className="my-4">The Significance of Goat Feed Supplements</h2>
            <p>
              Goats have special dietary requirements, and depending on age,
              breed, and use, these needs can change. Supplements for goat feed
              are essential for the following reasons:
            </p>
            <p className="my-4">
              <strong>Better Growth and Weight increase:</strong>Supplements for
              goat weight increase are essential for encouraging healthy growth.
              They supply vital vitamins, minerals, and amino acids that promote
              the growth of muscles and the general health of the body.
            </p>
            <p className="my-4">
              <strong>Enhanced Milk Production:</strong> Providing your dairy
              goats with the correct nutrients in their diet can help them
              produce more milk. Improved lactation is a result of using goat
              supplements high in calcium, phosphorus, and trace minerals.
            </p>
            <p className="my-4">
              <strong>Strong Immune System:</strong>Preventing disease requires
              a strong immune system. Selenium, zinc, and copper found in goat
              mineral supplements strengthen immunity and lower illness risk.
            </p>
            <p className="my-4">
              <strong>Healthy Skin and Hooves:</strong>Eating a balanced diet
              has an impact on both skin and hoof health. Zinc and biotin
              supplements promote healthy hoof growth and guard against frequent
              problems like hoof rot.
            </p>
            <p className="my-4">
              <strong>Presenting Farmotech Rumeno:</strong>Renowned in the
              livestock sector, Rumeno Farmotech specializes in premium
              supplements for goat feed. Here are some reasons to think about
              their products:
            </p>
            <p className="my-4">
              <strong>Scientifically Formulated:</strong>A great deal of study
              and scientific principles are used in the development of Rumeno
              Farmotech's supplements. Every product is precisely calibrated to
              satisfy the unique requirements of goats.
            </p>
            <p className="my-4">
              <strong>Variety of Options:</strong>Rumeno Farmotech offers a
              selection of weight gain supplements, mineral blends, and general
              health enhancers. Goats of various ages and purposes are catered
              to by their goods. Rumeno Farmotech is aware of the significance
              of trace minerals in the diets of goats. To ensure optimum health,
              their supplements include vital components including manganese,
              copper, and selenium.
            </p>
            <p className="my-4">
              <strong>Client Contentment:</strong>Rumeno Farmotech is the
              supplement brand that goat owners nationwide rely on for
              consistent and potent results. The organization stands out for its
              dedication to client satisfaction. In summary Purchasing premium
              additives for goat feed is an investment in the future of your
              herd. The supplies you need to maintain your goats happy, healthy,
              and productive are available from Rumeno Farmotech. Check out
              their product range now to provide your goats with the nourishment
              they need!
            </p>
          </div>
        </div>
        <div className="row mx-1">
          <div className="col-lg-12">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item className="my-3" eventKey="0">
                <Accordion.Header>
                  1 What is Goat Supplementary Feeding?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <strong>Goat supplementary feeding</strong> refers to
                    providing additional nutrition to goats beyond their natural
                    forage intake. It ensures that goats receive essential
                    nutrients for optimal health and productivity.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="my-3" eventKey="1">
                <Accordion.Header>
                  2 What Supplements Do Goats Need?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li className="my-2">
                      Goats require various supplements to meet their
                      nutritional needs:
                    </li>
                    <li className="my-2">
                      <strong>Loose Minerals:</strong> Essential for vitamins
                      and minerals. Offer free choice.
                    </li>
                    <li className="my-2">
                      <strong>Sodium Bicarbonate (Baking Soda):</strong> Aids
                      digestion and prevents bloat.
                    </li>
                    <li className="my-2">
                      <strong>Probios (Probiotic):</strong> Supports rumen
                      function.
                    </li>
                    <li className="my-2">
                      <strong>Vitamins and Minerals:</strong> Selenium, zinc,
                      copper, calcium, phosphorus, iodine, iron, and manganese
                      are crucial.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="my-3" eventKey="2">
                <Accordion.Header>
                  3 Do Goats Need Supplemental Feed?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, especially when natural forage lacks certain nutrients.
                  Proper supplementation ensures overall health.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="my-3" eventKey="3">
                <Accordion.Header>
                  4 What Is the Best Feed for Goats?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <strong>Forages:</strong> High-quality grass, hay, leaves,
                    and woody plants.
                  </p>
                  <p>
                    <strong>Mineral Supplements:</strong> Loose minerals and
                    essential vitamins.
                  </p>
                  <p>
                    <strong>Avoid Excessive Grain-Based Feeds:</strong> Focus on
                    forages and balanced nutrition
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="my-3" eventKey="4">
                <Accordion.Header>
                  5 Is Medicated Feed Good for Goats?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Medicated feed may be necessary for specific health
                    conditions. Consult a veterinarian for guidance.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <p className="text-center">
              Remember, a well-informed goat owner ensures their herd stays
              healthy and happy!{" "}
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default GoatCategoryPage;
