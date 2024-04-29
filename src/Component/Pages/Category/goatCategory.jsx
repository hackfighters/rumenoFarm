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
import rumenoamazon3 from "../../../assets/img/OurProduct/GoatNipple.png";
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
import Neonato from "../../../assets/img/OurProduct/NOENATO.png";
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
import axios from "axios";

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

  const MainJson =
  [
    {
      id: 1,
      name: "Tanav Mukti",
      priceText: 700,
      img: "https://www.rumeno.in/static/media/Tanaav.f892208d5402ec8a78de.jpg",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of  livestock farming  by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "500gm",
      Shortdescription: "Tanav Mukti Powder: A specialized blend of natural adaptogenic herbs designed to alleviate stress in animals. This non-sedative formula helps pets cope with physical, mental, and emotional stressors, promoting a sense of calm and well-being.\nHolistic Approach: Tanav Mukti takes a holistic approach to stress management, addressing both the physiological and psychological aspects of anxiety in animals.\nEasy Administration: Simply mix the recommended dosage with your pet’s food or water. It’s palatable and easy to incorporate into their daily routine.\nSafe and Gentle: Tanav Mukti is free from harmful chemicals and additives, making it suitable for all breeds and sizes of animals.\nResults Over Time: Consistent use of Tanav Mukti can lead to noticeable improvements in your pet’s overall demeanor and behavior.",
      description: "Tanav Mukti: The Advanced Supplement for Animal Stress Relief, Energy Boosting, and Immunity Enhancement\n\nBringing home a new animal or transporting one can be an exciting but stressful experience for both you and your animal. The change in environment, routine, and diet can trigger stress, anxiety, and weakened immunity in animals. That's why it's crucial to give them the right kind of support to help them adjust and thrive in their new surroundings. And this is where Tanav Mukti comes in as the ultimate stress reliever, energy booster, and immunity enhancer for animals.\n\nWhat is Tanav Mukti?\n\nTanav Mukti is an advanced supplement designed to provide holistic support for animals' overall wellbeing. It is made with a blend of natural ingredients that work synergistically to reduce stress, boost energy, and enhance immunity in animals. Tanav Mukti is a highly effective supplement that can be used for different animal species, including goats, sheeps, cattle, dogs, cats, horses, birds, and livestock.\n\nBenefits of Tanav Mukti\n\nStress Relief: Tanav Mukti helps animals cope with stress and anxiety related to changes in environment, routine, or diet. It promotes relaxation, calmness, and a sense of well-being, which can help your animal adjust to its new surroundings more easily.\n\nEnergy Boost: Tanav Mukti is also an excellent energy booster that provides animals with the necessary nutrients and vitamins to stay active and healthy. It improves endurance, strength, and vitality, allowing animals to perform at their best.\n\nImmunity Enhancement: Tanav Mukti contains powerful antioxidants and immune-boosting compounds that help animals fight off infections and diseases. It strengthens their immune system, making them less susceptible to common illnesses and health issues.\n\nEasy to Use: Tanav Mukti comes in an easy-to-administer powder form, that can be easily mixed with food or water. It's also safe for animals of all ages, breeds, and sizes.\n\nWhy choose Tanav Mukti?\n\nTanav Mukti is a reliable and effective solution for animal stress relief, energy boosting, and immunity enhancement. It's made with high-quality natural ingredients that are safe and gentle on animals' bodies. Moreover, Tanav Mukti is formulated by animal experts who understand the unique needs and challenges of animals. With Tanav Mukti, you can be assured that your animal is getting the best possible support for their overall health and wellbeing.",
      Instruction: "Tanav Mukti Powder: A specialized blend of natural adaptogenic herbs designed to alleviate stress in animals.\nDosage: Mix the recommended amount of Tanav Mukti Powder with your pet’s food or water.\nFrequency: Administer twice daily for optimal results.\nConsult a Veterinarian: Always consult a veterinarian before introducing any new product to your pet’s routine.",
      Category: "All",
      Type: "Medicine"
    },
    {
      id: 2,
      name: "Neonato",
      priceText: 245,
      img: Neonato,
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of  livestock farming  by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "100ml",
      Shortdescription: "Neonato Powder: A specialized blend of natural compounds designed to enhance the immune system of newborn animals.\nBoosts Immunity: Neonato provides essential nutrients and bioactive compounds to strengthen the innate defenses of young animals.\nGentle and Effective: Formulated to be gentle on delicate systems while promoting overall health and resilience.",
      description: "Neonato\n\nNeonato is a specially designed bioactive supplement that provides essential support for the health and immunity of newborn animals, kids, and chicks. It contains a unique blend of natural ingredients that work synergistically to maintain a healthy gut microflora, boost immunity, and prevent the growth of harmful bacteria. \n\nThe Benefits of Neonato\n\nKills Harmful Bacteria: Neonato is highly effective in killing harmful bacteria that can cause diseases and infections in newborn animals, kids, and chicks. It creates an environment in the gut that is unfavorable to the growth of harmful microorganisms, thereby protecting the animals from potential infections.\n\nSaves Good Bacteria : Unlike antibiotics, which kill both good and bad bacteria, Neonato only targets harmful microorganisms, while preserving the beneficial ones. This helps maintain a healthy balance of gut microflora, which is essential for optimal digestive and immune health.\n\nBoosts Immunity: Neonato contains natural immune-boosting ingredients that stimulate the production of antibodies and other immune cells. This enhances the animal's ability to fight off infections and diseases, and helps them develop a strong immune system from an early age.\n\nImproves Digestion: Neonato promotes the growth of beneficial bacteria in the gut, which helps improve digestion and nutrient absorption. This can lead to better growth, development, and overall health of newborn animals, kids, and chicks.\n\nSafe and Easy to Use: Neonato is a safe and easy-to-use supplement that can be added to the animal's feed or water. It does not contain any harmful chemicals or antibiotics, and is gentle on the animal's digestive system.\n\nWhy Choose Neonato?\n\nNeonato is a reliable and effective solution for supporting the health and immunity of newborn animals, kids, and chicks. It is made with high-quality natural ingredients that have been carefully selected for their beneficial properties. Neonato is also formulated by animal experts who understand the unique needs and challenges of newborn animals, kids, and chicks.",
      Instruction: "Dosage Preparation:\nMix 1 scoop (provided) of Neonato Powder with 100 ml of warm water. Stir well until fully dissolved.\nAdjust the quantity based on the animal’s weight and age. Consult a veterinarian for precise dosing.\nFeeding Schedule:\nAdminister Neonato twice daily, preferably after feeding.\nFor newborn animals, start Neonato within the first 24 hours of life.\nContinue Neonato for at least 7 days or as recommended by your vet.\nAdministration:\nUse a clean feeding bottle or syringe to feed Neonato to young animals.\nGradually increase the amount as the animal grows.\nStorage:\nStore Neonato in a cool, dry place away from direct sunlight.\nKeep the container tightly sealed to maintain freshness.",
      Category: "For All Kids",
      Type: "Medicine"
    },
    {
      id: 3,
      name: "Energico",
      priceText: "₹235 , ₹390",
      img: "https://www.rumeno.in/static/media/Energico-Animal.99c24705a20ebcdc16a8.jpg",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of  livestock farming  by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "500gm,1kg",
      Shortdescription: "Energico Powder: A specialized blend of essential electrolytes designed to maintain proper hydration and support overall well-being in animals.\nBoosts Hydration: Energico replenishes vital minerals lost during stress, illness, or physical exertion.\nEasy to Administer: Simply mix with water or food for convenient use",
      description: "Energico\n\nEnergico is the premium electrolyte supplement designed for animal health and performance, brought to you by Rumeno. Formulated with essential electrolytes, dextrose, maltodextrin, and probiotics, Energico provides a quick source of energy and promotes proper hydration, energy, and digestive health in horses, cattle, sheep, goats, and other livestock. Trust Rumeno for the ultimate support in keeping your animals healthy, energized, and performing at their best.\n\nRumeno's Energico is the ultimate electrolyte supplement for supporting animal health and performance. Made with the highest quality ingredients, including essential electrolytes, dextrose, maltodextrin, and probiotics, Energico provides a quick and effective source of energy and promotes proper hydration, energy, and digestive health in horses, cattle, sheep, goats, and other livestock. Choose Energico and give your animals the support they need to thrive.\n\nWhen it comes to animal health and performance, trust the experts at Rumeno and Energico. Our premium electrolyte supplement is packed with essential electrolytes, dextrose, maltodextrin, and probiotics, providing a quick source of energy and promoting proper hydration, energy, and digestive health in horses, cattle, sheep, goats, and other livestock. With Energico, you can rest assured that your animals are receiving the highest quality care and support available.\n\nGive your animals the premium care and support they deserve with Rumeno's Energico. Our advanced electrolyte supplement is specially formulated with essential electrolytes, dextrose, maltodextrin, and probiotics, promoting proper hydration, energy, and digestive health in horses, cattle, sheep, goats, and other livestock. Choose Energico and see the difference in your animals' performance and overall well-being.\n\nRumeno's Energico is the top choice for animal owners who demand the best for their animals. Our premium electrolyte supplement is made with only the highest quality ingredients, including essential electrolytes, dextrose, maltodextrin, and probiotics, providing a quick source of energy and promoting proper hydration, energy, and digestive health in horses, cattle, sheep, goats, and other livestock. Give your animals the support they need to thrive with Energico by Rumeno.",
      Instruction: "Energico Powder: A specialized blend of essential electrolytes designed to maintain proper hydration and support overall well-being in animals.\r\nDosage:\r\nMix 1 scoop (provided) of Energico Powder with 1 liter of clean water.\r\nAdjust the quantity based on the animal’s size and condition. Consult a veterinarian for precise dosing.\r\nAdministration:\r\nOffer the prepared solution to the animal using a clean water bowl or syringe.\r\nRepeat as needed during periods of stress, illness, or hot weather.\r\nStorage:\r\nStore Energico in a cool, dry place away from direct sunlight.\r\nKeep the container tightly sealed to maintain freshness.",
      Category: "All",
      Type: "Medicine"
    },
    {
      id: 4,
      name: "Micro Floratone",
      priceText: 245,
      img: "https://www.rumeno.in/static/media/microfloratane.5f9b45158503745d7101.jpg",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of  livestock farming  by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "100gm",
      Shortdescription: "Micro Floratone Powder: A premium quality blend of prebiotics, probiotics, vitamins, and minerals. Specifically formulated to support overall health and well-being in pets.\nHolistic Approach: Enhances digestion, supports bowel health, and promotes a balanced gut microbiome.\nEasy to Administer: Mix with food for convenient daily use.",
      description: "Micro Floratone\n\nIntroducing Micro Floratone - the ultimate all-in-one dietary supplement for dogs and cats. This premium quality supplement is specially formulated to support your pet's overall health and well-being with a unique blend of prebiotics, probiotics, vitamins, and minerals.\nMicro Floratone contains a powerful combination of prebiotics and probiotics to support your pet's digestive health and immune system. It promotes the growth of beneficial bacteria in your pet's gut, while also reducing the population of harmful bacteria. This helps to maintain a healthy balance of gut flora, which can lead to better digestion, stronger immunity, and improved nutrient absorption.\nIn addition to its prebiotic and probiotic blend, Micro Floratone also contains a range of essential vitamins and minerals that are important for your pet's overall health. These include vitamins A, B1, B2, B6, B12, D3, E, and K, as well as minerals like calcium, phosphorus, and iron.\nDogs and cats may need Micro Floratone Pre+Probiotic or Micro Floratone (Pre+Probiotic with multi-vitamins and minerals) for a variety of reasons, such as:\n1.\tDigestive Issues: If your pet is experiencing digestive issues like diarrhea, constipation, or vomiting, it could be a sign of an imbalance in their gut flora. The prebiotics and probiotics in Micro Floratone can help restore this balance and promote healthy digestion.\n2.\tAntibiotic Use: Antibiotics can kill off both good and bad bacteria in your pet's gut, leading to an imbalance in their gut flora. Supplementing with Micro Floratone can help replenish the beneficial bacteria and prevent digestive upset.\n3.\tStressful Events: Events such as a change in diet, a move to a new home, or a stay in a kennel can be stressful for pets and may affect their gut health. Micro Floratone can help support their digestive and immune systems during these times.\n4.\tImmune Support: The probiotics in Micro Floratone can help support your pet's immune system by promoting the growth of beneficial bacteria in their gut, which play a crucial role in maintaining overall health and immunity.\n5.\tAging: As pets age, their digestive and immune systems may become weaker. Supplementing with Micro Floratone can help support these systems and keep your pet healthy and comfortable in their golden years.\nDogs and cats may need Micro Floratone Pre+Probiotic or Micro Floratone (Pre+Probiotic with multi-vitamins and minerals) for a variety of reasons related to digestive health, immunity, and overall well-being. If you have concerns about your pet's health or are looking for ways to support their health and longevity, consult with your veterinarian to see if Micro Floratone is right for your furry friend.\nMicro Floratone is suitable for dogs and cats of all ages and breeds, and is easy to use - simply sprinkle the recommended amount over your pet's food. It is free from artificial colors, flavors, and preservatives.\nWith regular use of Micro Floratone, you can help to ensure that your pet is getting all of the essential nutrients they need to thrive. Whether you have a young kitten or a senior dog, this supplement can help support their overall health and well-being. So if you want to give your pet the best possible chance at a healthy and happy life, try Micro Floratone today.",
      Instruction: "Micro Floratone Powder: A premium quality blend of prebiotics, probiotics, vitamins, and minerals designed to support your pet’s overall health and well-being1.\nDosage:\nMix the recommended amount of Micro Floratone Powder with your pet’s food.\nAdjust the quantity based on your pet’s size and age. Consult a veterinarian for precise dosing.\nDaily Use:\nAdminister once daily for optimal results.\nMicro Floratone provides a full spectrum of quality ingredients to promote digestive health and immunity.\nStorage:\nStore in a cool, dry place away from direct sunlight.\nSeal the container tightly to maintain freshness.",
      Category: "Dog and cat",
      Type: "Medicine"
    },
    {
      id: 5,
      name: "Minromix",
      priceText: "₹285 , ₹1400 , ₹4600",
      img: "https://www.rumeno.in/static/media/minromix.0fbc134a1c446a054159.jpg",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of  livestock farming  by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "1kg, 5kg, 20kg",
      Shortdescription: "Minromix: A comprehensive mineral and vitamin supplement for animals.\nContains essential minerals such as calcium, phosphorus, and magnesium.\nEnriched with vitamins A, D, and E for overall health.\nSupports bone development, immune system, and reproductive health.\nIdeal for livestock, poultry, and pets.\nEasy to administer – simply mix with feed or water.",
      description: "Minromix\n\nMinromix is an innovative product that is specially designed for better production in livestock. It is a blend of Metho Chelated Multi Vitamins, Macro and Micro Mineral Mixture, essential enzymes, amino acids, bioactivated chromium, Probiotics and Bypass Fat. This unique blend of ingredients is designed to meet the nutritional requirements of livestock and promote healthy growth, productivity, and overall well-being.\n\nOne of the key features of Minromix is its Metho Chelated Multi Vitamins. These vitamins are essential for optimal animal health and help to support normal growth and development, improve immune function, and increase the efficiency of nutrient utilization. Additionally, the Macro and Micro Mineral Mixture in Minromix contains a balanced blend of essential minerals that are critical for the development and maintenance of strong bones, healthy muscles, and overall animal health.\n\nAnother unique aspect of Minromix is the addition of essential enzymes, amino acids, and bioactivated chromium. These ingredients help to improve the digestibility and absorption of nutrients from feed, ensuring that animals get the most out of their diet. This can lead to improved feed conversion ratios and increased productivity, as well as reduced feed costs.\n\nFurthermore, Minromix contains Probiotics, which are beneficial bacteria that help to maintain a healthy gut microbiome. These beneficial bacteria can help to improve digestion, reduce the risk of digestive disorders, and support immune function. Lastly, the addition of Bypass Fat in Minromix provides a source of energy for livestock that is easily digestible and can be used to support growth and productivity.\n\nOverall, Minromix is an excellent product that is designed to meet the nutritional needs of livestock and promote optimal growth and productivity. With its unique blend of Metho Chelated Multi Vitamins, Macro and Micro Mineral Mixture, essential enzymes, amino acids, bioactivated chromium, Probiotics, and Bypass Fat, Minromix is a complete nutritional solution that can help to ensure that animals reach their full potential.",
      Instruction: "Minromix Powder: A blend of macro and micro minerals, essential vitamins, and other vital nutrients to support overall health in animals.\nDosage:\nMass Feeding: Mix 1-2% of Minromix Powder with the animal’s regular feed.\nIndividual Feeding:\nCows/Buffaloes: Administer 30 grams daily.\nCalves/Sheep/Goats: Provide 5-10 grams per day.\nPackaging: Available in 1 kg and 25 kg containers1.",
      Category: "All",
      Type: "Medicine"
    },
    {
      id: 6,
      name: "Rumenovita ",
      priceText: "₹700 , ₹3250",
      img: "https://www.rumeno.in/static/media/Rumenovita.309f164bb1e0f66284e2.jpg",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of  livestock farming  by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "1kg, 5kg",
      Shortdescription: "Rumenovita Fast Weight Gainer: Specifically beneficial for goats and sheep, it helps animals quickly gain weight, especially when they need to reach a certain weight for market or breeding purposes1.\nPromotes Rapid Growth: Formulated to enhance growth rates in young animals.\nEssential for Market-Ready Animals: Ideal for achieving desired weight targets.",
      description: "Rumenovita\n\nIntroducing Rumenovita - the ultimate product that is specifically formulated to support fast growth and weight gain in your animals. With its unique blend of high by-pass protein and other key ingredients, Rumenovita provides the ultimate nutritional support to help your animals reach their full potential.\n\nThe high by-pass protein in Rumenovita is carefully selected to ensure that your animals are receiving the highest quality protein sources available. By providing this valuable nutrient in a form that is more easily absorbed by the animal's body, Rumenovita helps to support muscle growth and development, which in turn helps to promote faster weight gain.\n\nIn addition to its high-quality protein sources, Rumenovita is also packed with other essential nutrients that are critical for optimal growth and development. These include a carefully balanced blend of vitamins, minerals, and other key nutrients that work together to support your animal's overall health and wellbeing.\n\nOne of the key benefits of Rumenovita is its ability to support healthy digestion in your animals. The unique blend of probiotics, prebiotics, and other digestive enzymes helps to promote a healthy gut environment, which is essential for optimal nutrient absorption and utilization. This means that your animals are able to get the most out of their feed, which can lead to faster growth and weight gain.\n\nAt Rumenovita, we understand the importance of providing your animals with the best possible nutrition. That's why we've developed a product that is specifically designed to support fast growth and weight gain, while also promoting overall health and wellbeing. Whether you're raising cattle, sheep, or other livestock, Rumenovita is the perfect choice for farmers and livestock owners who want to give their animals the best possible chance at success.\n\nSo why wait? Give your animals the nutritional support they need to reach their full potential with Rumenovita. With its high-quality ingredients, proven results, and unbeatable value, Rumenovita is the ultimate choice for fast growth and weight gain in your animals. Try it today and see the difference for yourself!",
      Instruction: "Consultation with a Professional:\nBefore starting any supplementation, consult a veterinarian or a livestock nutritionist.\nDiscuss the specific needs of your animals and any existing health conditions.\nDosage and Administration:\nAdminister Rumenovita orally to the animals.\nMix the recommended dosage with their regular feed or water.\nThe appropriate dosage may vary based on factors such as the animal’s age, weight, and overall health.\nFollow the manufacturer’s guidelines closely for accurate dosing.\nFrequency:\nProvide Rumenovita daily or as advised by an expert.\nFor young animals, consider administering it during critical growth phases.\nBenefits and Expected Outcomes:\nImproved Digestion: Rumenovita enhances rumen function, aiding in better nutrient breakdown and absorption.\nWeight Gain: The supplement supports healthy weight gain by optimizing nutrient utilization.\nGrowth Promotion: It contributes to overall growth and development.\nImmune Support: Rumenovita boosts the immune system, reducing the risk of diseases.\nCoat Condition: Some users report shinier and healthier coats in animals.\nStorage:\nStore Rumenovita in a cool, dry place away from direct sunlight.\nFollow any specific storage instructions provided on the packaging.\nPrecautions:\nBalanced Nutrition: Remember that Rumenovita is not a substitute for a well-rounded diet. Ensure your animals receive proper nutrition.\nMonitoring: Observe your animals closely for any adverse reactions.\nDiscontinue if Necessary: If unusual symptoms occur, discontinue use and seek professional advice.\nCompatibility with Other Supplements or Medications:\nRumenovita can be used alongside other feed supplements or medications. However, consult a professional to avoid interactions.\nRecord Keeping:\nMaintain accurate records of Rumenovita administration.\nNote down dates, dosages, and details of the animals receiving the supplement.\nRegularly assess their progress to evaluate the effectiveness of the product.",
      Category: "All",
      Type: "Medicine"
    },
    {
      id: 7,
      name: "Digesto Plus",
      priceText: "₹190 , ₹875",
      img: "https://www.rumeno.in/static/media/Digesto-Plus.58b7849606e0ed51a509.jpg",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of  livestock farming  by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "1kg, 5kg",
      Shortdescription: "Digesto Plus Powder: A unique formulation containing a combination of buffer agents and toxin binders. It regulates rumen pH levels, prevents acidosis, and improves feed efficiency.\nToxin Binder: Contains toxin binders to neutralize harmful substances like mycotoxins, ensuring overall digestive well-being.\nEssential Component: An effective addition to any animal nutrition program, supporting ruminants’ health and performance",
      description: "Digesto Plus\n\nDigesto Plus is a specialized product designed to help maintain the optimal digestive health of ruminants such as cattle, sheep, and goats. The unique formulation of this product contains a combination of buffer agents and toxin binders that work together to support a healthy digestive system in animals.\n\nThe digestive system of ruminants is complex and sensitive, and any imbalances can lead to a range of health issues. Digesto Plus helps to regulate the pH levels in the rumen and prevent acidosis, which can be a common problem for ruminants fed high-grain diets. By promoting a healthy pH balance, this product helps to improve feed efficiency and reduce the risk of digestive disorders.\n\nIn addition to its buffering properties, Digesto Plus also contains toxin binders that help to neutralize harmful substances such as mycotoxins. Mycotoxins are toxic substances produced by fungi that can contaminate feed and cause a range of health problems in animals, including reduced feed intake, poor growth, and impaired immune function. The inclusion of toxin binders in Digesto Plus helps to protect animals from the negative effects of mycotoxins and other harmful substances.\n\nDigesto Plus is a reliable and effective product that is easy to use and can be incorporated into a range of feeding programs. It is specially designed to help keep ruminants healthy and support optimal performance, making it an essential component of any animal nutrition program. With Digesto Plus, you can rest assured that your animals are receiving the support they need to maintain a healthy digestive system and reach their full potential.",
      Instruction: "Product Description:\nDigesto Plus contains a unique combination of buffer agents and toxin binders.\nIt supports a healthy digestive system in ruminants by regulating rumen pH and neutralizing harmful substances.\nTarget Animals:\nSuitable for:\nCattle\nSheep\nGoats\nDosage and Administration:\nConsult a veterinarian before use.\nAdminister orally, mixed with feed or water.\nRecommended dosage: 22.7 mg decoquinate per 100 lbs (0.5 mg per kg) body weight per day.\nBenefits:\npH Regulation: Prevents acidosis, common in ruminants fed high-grain diets.\nFeed Efficiency: Improves feed utilization.\nToxin Neutralization: Contains binders to counter mycotoxins and other harmful substances.\nStorage:\nStore in a cool, dry place away from sunlight.\nPrecautions:\nMonitor for adverse reactions.\nSeek professional advice if needed.",
      Category: "cow, goat ",
      Type: "Medicine"
    },
    {
      id: 8,
      name: "Liverofine",
      priceText: "₹125 , ₹600",
      img: "https://www.rumeno.in/static/media/Liverofine.e956615d5fe6c67bac95.jpg",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of  livestock farming  by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "200gm, 1kg",
      Shortdescription: "Liverofine Liver Tonic: A unique blend of vitamins, minerals, and herbal extracts specifically formulated to promote optimal liver function and overall well-being.\nKey Ingredients:\nMilk Thistle: Contains silymarin, a powerful antioxidant that protects liver cells and aids in tissue regeneration.\nDandelion Root: Traditionally used as a natural diuretic and liver tonic, helping flush out toxins.\nB Vitamins: Essential for energy production and nutrient metabolism.\nEasy to Administer: Suitable for all ages, Liverofine can be added to food or water for convenient use",
      description: "Liverofine\n\nLiverofine is a high-quality liver tonic that has been specifically formulated to support liver health in animals. This unique blend of vitamins, minerals, and herbal extracts is designed to promote optimal liver function and overall well-being in pets and livestock.\n\nThe liver is a vital organ that plays a critical role in the metabolism of nutrients and the detoxification of harmful substances in the body. However, factors such as poor diet, exposure to toxins, and certain medical conditions can impair liver function and lead to a range of health problems in animals.\n\nLiverofine is made with a combination of natural ingredients that have been carefully selected for their beneficial effects on liver health. These ingredients include milk thistle, dandelion root and various B vitamins, all of which are known for their ability to support liver function and promote overall wellness in animals.\n\nMilk thistle, for example, contains a powerful antioxidant called silymarin that helps protect liver cells from damage and promotes the regeneration of healthy liver tissue. Dandelion root has been traditionally used as a natural diuretic and liver tonic, helping to flush out toxins from the body and support healthy liver function, while B vitamins are essential for energy production and the metabolism of nutrients in the body.\n\nLiverofine is easy to administer and can be added to your animal's food or water. It is suitable for use in pets and livestock of all ages and breeds, and can be particularly beneficial for animals with liver disease, compromised liver function, or a history of exposure to toxins.\n\nTherefore, Liverofine is a safe and effective liver tonic that can help support optimal liver function and promote overall well-being in your animal.",
      Instruction: "Product Description:\nLiverofine is a specialized liver tonic formulated to enhance liver function and overall well-being in animals.\nIt contains essential nutrients and herbal extracts that promote liver health and aid in detoxification.\nTarget Animals:\nLiverofine is suitable for various animals, including:\nCattle\nSheep\nGoats\nPoultry\nSwine\nHorses\nDosage and Administration:\nConsult a veterinarian or livestock expert before using Liverofine.\nAdminister the product orally, preferably mixed with feed or water.\nThe recommended dosage may vary based on the animal’s weight, age, and specific liver health needs.\nFollow the manufacturer’s guidelines for accurate dosing.\nFrequency:\nProvide Liverofine daily or as advised by a professional.\nFor animals with liver issues, consider prolonged use or as part of a maintenance regimen.\nBenefits:\nLiver Support: Liverofine aids in liver detoxification and supports optimal liver function.\nAntioxidant Properties: Contains antioxidants that protect liver cells from damage.\nMetabolic Balance: Helps maintain metabolic processes related to liver health.\nImproved Digestion: A healthy liver contributes to better nutrient absorption and digestion.\nStorage:\nStore Liverofine in a cool, dry place away from direct sunlight.\nFollow any specific storage instructions provided on the packaging.\nPrecautions:\nMonitor animals closely for any adverse reactions.\nDiscontinue use if unusual symptoms occur and seek professional advice.\nCompatibility:\nLiverofine can be used alongside other supplements or medications. Consult a professional to avoid interactions.\nRecord Keeping:\nMaintain records of Liverofine administration, including dates, dosages, and animal details.\nRegularly assess the animals’ liver health to evaluate the effectiveness of the tonic.",
      Category: "poultry, goat, cow",
      Type: "Medicine"
    },
    {
      id: 9,
      name: "D-Cox",
      priceText: 250,
      img: "https://www.rumeno.in/static/media/D-Cox.a94b558940bc0e2ddaeb.jpg",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of  livestock farming  by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "250gm",
      Shortdescription: "D-Cox Powder: Formulated to enhance growth rates in young goats during the critical weaning phase.\nSupports Weight Gain: Boosts weight gain and overall development.\nEasy Administration: Simply mix with feed for convenient use.",
      description: "D-Cox\n\nD-Cox is a natural feed supplement designed specifically for weaning goat and sheep kids. It is formulated to help support healthy growth and development while also providing protection against common diseases such as coccidia.\n\nWeaning is a critical period in the life of young animals, as it marks the transition from milk to solid food. During this time, the digestive system undergoes significant changes, and the animals may be more susceptible to digestive upsets and other health problems. D-Cox is designed to provide the essential nutrients and support needed to help young animals thrive during this period.\n\nThe key ingredient in D-Cox is a blend of natural herbs and botanicals that have been carefully selected for their nutritional and medicinal properties. These ingredients work together to support healthy digestion, boost immunity, and promote growth and development in young animals.\n\nOne of the most significant benefits of D-Cox is its ability to help prevent and treat coccidia, a common and potentially deadly disease that affects young goats and sheep. Coccidia is caused by a parasite that can infect the digestive tract, leading to diarrhea, dehydration, and weight loss. D-Cox contains natural compounds that help to eliminate these parasites, reducing the risk of infection and improving overall health and wellbeing.\n\nIn addition to its anti-coccidia properties, D-Cox also contains a range of other nutrients and ingredients that are essential for healthy growth and development in young animals. These include vitamins, minerals, amino acids, and digestive enzymes.\n\nD-Cox is easy to use and can be added to the animals' feed or water. It is safe and gentle on the digestive system, making it suitable for use with even the most delicate young animals.\n\nOverall, D-Cox is an excellent choice for farmers and animal breeders who want to ensure the health and wellbeing of their young goats and sheep during the critical weaning period. With its natural, herbal formula, D-Cox can help to support healthy growth and development, boost immunity, and provide protection against common diseases like coccidia.",
      Instruction: "Product Description:\nD-Cox is a coccidiostat formulated to prevent coccidiosis in young goats during the critical weaning phase.\nIt contains the active drug ingredient Decoquinate (6%) to combat Eimeria christenseni and E. ninakohlyakimovae, the common coccidia species affecting goats.\nTarget Animals:\nD-Cox is specifically intended for young goats during the weaning period.\nDosage and Administration:\nConsult a veterinarian or livestock expert before using D-Cox.\nAdminister the product orally, preferably mixed with feed or water.\nThe recommended dosage is to provide 22.7 mg decoquinate per 100 lbs (0.5 mg per kg) body weight per day.\nMix D-Cox thoroughly into the goat’s ration.\nDuration:\nFeed D-Cox for at least 28 days during periods of coccidiosis exposure or when experience indicates coccidiosis is likely to be a hazard.\nTypes of Medicated Feed:\nType C Medicated Feed (Complete Ration):\nMix D-Cox into the complete feed to provide the proper decoquinate levels daily.\nExample dosages:\n0.5 lbs per ton of feed (13.6 g/ton) for 20 lbs body weight\n0.7 lbs per ton of feed (19.0 g/ton) for 14.3 lbs body weight\n1.0 lb per ton of feed (27.2 g/ton) for 10 lbs body weight\nStorage:\nStore D-Cox in a cool, dry place away from direct sunlight.\nFollow any specific storage instructions provided on the packaging.\nPrecautions:\nMonitor goats closely for any adverse reactions.\nDiscontinue use if unusual symptoms occur and seek professional advice.",
      Category: "goat",
      Type: "Medicine"
    },
    {
      id: 10,
      name: "Rumeno Micro Flora",
      priceText: "₹90 , ₹350 , ₹650 , ₹1300",
      img: "https://www.rumeno.in/static/media/Rumeno-Micro-flora.8fbf39e80d47c16a054a.jpg",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of  livestock farming  by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "50gm, 250gm, 500gm, 1kg",
      Shortdescription: "Rumeno Micro Flora Powder: A premium quality blend of prebiotics and probiotics designed to support your pet’s overall health and well-being.\nDigestive Health: Promotes the growth of beneficial bacteria in your pet’s gut, while reducing harmful bacteria, leading to better digestion and stronger immunity.\nEssential Nutrients: Contains vitamins (A, B1, B2, B6, B12, D3, E, and K) and minerals (calcium, phosphorus, and iron) for optimal health.\n",
      description: "Rumeno Micro Flora\n\nIntroducing Rumeno Micro-Flora, a powerful pre+probiotic supplement designed specifically for animals. With a unique blend of multi beneficial bacteria, Rumeno Micro-Flora is formulated to support the digestive health of your beloved pets and farm animals.\n\nOur carefully crafted blend of pre+probiotics contains a diverse range of live microorganisms that work together to promote a healthy gut microbiome. By supporting the growth of good bacteria and suppressing harmful pathogens, Rumeno Micro-Flora helps to improve nutrient absorption, boost immunity, and reduce digestive issues such as bloating, gas, and diarrhea.\n\nUnlike many other pre+probiotic supplements, Rumeno Micro-Flora contains a high concentration of beneficial bacteria, including Lactobacillus spp, Bifidobacterium spp , Streptococcus spp, Sacchromyces spp, Bacillus spp, among others. Each strain is specially selected for its unique health benefits, and our manufacturing process ensures that the bacteria remain viable and active until consumed by your animal.\n\nPrebiotics are non-digestible fibers that serve as a food source for beneficial bacteria in the gut. When animals consume prebiotics, they pass through the digestive system undigested until they reach the colon, where they are fermented by the gut microbiota.\n\nCombining prebiotics and probiotics in a supplement can provide a range of health benefits for animals, as they work together to support a healthy gut microbiome. Here are some of the benefits that can result from a combination of prebiotics and probiotics:\n\nImproved digestive health: Probiotics introduce beneficial bacteria to the gut, while prebiotics provide the food source that helps these bacteria thrive. Together, they work to balance the gut microbiome, improve digestion, and reduce the risk of digestive disorders such as diarrhea, constipation, and irritable bowel syndrome.\n\nEnhanced immune function: The gut microbiome plays a critical role in immune function, and prebiotics and probiotics can work together to promote a healthy immune system. Probiotics can boost the production of immune cells, while prebiotics nourish the gut microbiota and support immune function.\n\nIncreased nutrient absorption: Prebiotics and probiotics can enhance the absorption of nutrients, such as calcium, magnesium, and iron, by improving the digestive process and promoting the growth of beneficial bacteria.\n\nReduced stress and anxiety: Studies have shown that prebiotics and probiotics can help to reduce stress and anxiety in animals, possibly by regulating the production of stress hormones in the body.\n\nImproved feed conversion: The prebiotics in Rumeno Micro-Flora can help to improve the digestibility of feed in farm animals, which can lead to more efficient feed conversion and better weight gain. This can be especially important for meat animals, as it can reduce the amount of time and feed required to reach market weight.\n\nIncreased milk production: In dairy animals, the combination of prebiotics and probiotics in Rumeno Micro-Flora can help to improve digestion and nutrient absorption, which can lead to increased milk production.\n\nEnhanced nutrient uptake: The probiotics in Rumeno Micro-Flora can help to promote the growth of beneficial bacteria in the gut, which can enhance the uptake of nutrients such as calcium, magnesium, and iron. This can help to improve overall health and wellbeing in farm animals, as well as support increased production.\n\nReduced risk of digestive disorders: The prebiotics and probiotics in Rumeno Micro-Flora can help to balance the gut microbiome, which can reduce the risk of digestive disorders such as diarrhea, bloat, and colic. This can help to keep animals healthy and productive, which can ultimately benefit the bottom line for farmers.\n\nNatural and safe: Rumeno Micro-Flora is made from high-quality, natural ingredients and is free from harsh chemicals and antibiotics. This means that it provides a safe and effective way to support production in farm animals without the risk of negative side effects or antibiotic resistance.\n\nBy supporting a healthy gut microbiome, prebiotics and probiotics can improve overall health and wellbeing in animals. This can include improved skin and coat health, increased energy levels, and reduced risk of chronic diseases.\n\nOverall, a combination of prebiotics and probiotics can provide a range of benefits for animals, from improved digestion and immune function to enhanced nutrient absorption and reduced stress. By working together to support a healthy gut microbiome, prebiotics and probiotics can help to promote optimal health and wellbeing in your furry friends.\n\nWhether you're a pet owner looking to support your furry friend's digestive health, or a farmer looking to improve the productivity and well-being of your livestock, Rumeno Micro-Flora is the perfect solution. Our easy-to-administer supplement can be added to your animal's food or water, and is suitable for all types of animals, including dogs, cats, horses, cows, goats, sheep, pigs, poultry, parrots, piegions and more.\n\nSo why wait? Try Rumeno Micro-Flora today and give your animal the gift of a healthy gut and improved overall health and wellness.",
      Instruction: "Product Description:\nRumeno Micro Flora is a specialized blend of prebiotics and probiotics formulated to enhance the microbial balance in the rumen of ruminant animals.\nIt promotes efficient digestion, nutrient absorption, and overall gut health.\nTarget Animals:\nSuitable for various ruminants, including:\nCattle\nSheep\nGoats\nDosage and Administration:\nConsult a veterinarian or livestock expert before using Rumeno Micro Flora.\nAdminister the supplement orally, preferably mixed with feed or water.\nThe recommended dosage may vary based on the animal’s weight, age, and specific digestive needs.\nFollow the manufacturer’s guidelines for accurate dosing.\nBenefits:\nPrebiotics: Nourish beneficial gut bacteria, creating an optimal environment for their growth.\nProbiotics: Introduce live beneficial microbes (such as Lactobacillus and Bifidobacterium) to the rumen.\nImproved Digestion: Enhances fiber breakdown and nutrient utilization.\nImmune Support: A healthy gut contributes to overall immune function.\nStorage:\nStore Rumeno Micro Flora in a cool, dry place away from direct sunlight.\nFollow any specific storage instructions provided on the packaging.\nPrecautions:\nMonitor animals closely for any adverse reactions.\nDiscontinue use if unusual symptoms occur and seek professional advice.\nRecord Keeping:\nMaintain records of Rumeno Micro Flora administration, including dates, dosages, and animal details.\nRegularly assess the animals’ gut health to evaluate the effectiveness of the supplement.",
      Category: "goat ,cow",
      Type: "Medicine"
    },
    {
      id: 11,
      name: "Lacto-Pup Milk Replacer",
      priceText: 600,
      img: "https://www.rumeno.in/static/media/Lacto-Pup-Milk-Replacer.0683b2701f8fe6234860.jpg",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of  livestock farming  by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "500gm",
      Shortdescription: "Complete Milk Replacement: Ideal for newborn puppies, Lacto-Pup provides essential nutrients and amino acids, closely resembling natural mother’s milk.\nBoosts Cognitive Development: Enriched with DHA (Docosahexaenoic acid) for cognitive development and visual acuity.\nVersatile Use: Suitable for weaning puppies, pregnant or lactating mothers, and convalescing animals. Lacto-Pup has been trusted for over 100 years in saving young lives",
      description: "Lacto-Pup Milk Replacer\n\nIntroducing Lacto Pup Milk Replacer - the perfect solution for puppies that require a milk substitute. Made from high-quality ingredients, Lacto Pup Milk Replacer is specially formulated to provide all the necessary nutrients and vitamins to ensure optimal growth and development in young puppies.\nWith Lacto Pup Milk Replacer, you can rest assured that your puppy is getting the nutrition they need to thrive. Our milk replacer is made with high-quality ingredients, including premium-grade milk proteins, vitamins, and minerals as calcium and phosphorus, to support strong bones and teeth. . It contains a perfect blend of proteins, fats, and carbohydrates to support healthy growth and development in puppies. Lacto Pup Milk Replacer is carefully crafted to mimic the nutritional profile of mother's milk. It is also enriched with probiotics, which helps to support digestive health and boost the immune system.\nOur milk replacer is ideal for newborn puppies who are unable to nurse from their mother or those who are weaning. It is also suitable for orphaned puppies or those whose mothers cannot produce enough milk. It is also an excellent choice for growing puppies who need additional nutrients to support their growth and development.. Lacto Pup Milk Replacer is easy to prepare and can be given to puppies as a sole source of nutrition or as a supplement to mother's milk. \nLacto Pup Milk Replacer is easy to prepare and feed, making it the ideal choice for busy pet owners. Simply mix the powder with warm water according to the instructions on the package and offer it to your puppy. It can be fed as a complete diet or in combination with solid food.\nWith Lacto Pup Milk Replacer, you can rest assured that your puppy is getting the nutrition they need to thrive. It is recommended by veterinarians and trusted by breeders nationwide. Give your puppy the best start in life with Lacto Pup Milk Replacer.",
      Instruction: "Product Description:\nLacto-Pup Milk Replacer is designed to provide essential nutrition for puppies during their early stages of life.\nIt closely resembles natural mother’s milk, ensuring optimal growth and development.\nTarget Animals:\nSuitable for:\nNewborn puppies\nOrphaned puppies\nUnderweight puppies\nPreparation:\nUsing the scoop provided, add Lacto-Pup Milk Replacer to warm water (allow boiled water to cool before use).\nStir until completely dissolved.\nAllow the mixture to cool until lukewarm (around 38°C or blood temperature).\nFeeding Equipment:\nUse proper feeding equipment, such as the Beaphar Feeding Set or Beaphar Feeding Syringes.\nEnsure the equipment is clean and sterile.\nRecommended Dilution:\nThe recommended dilution for different puppy weights:\nFor 250g (0.25kg) puppies: Add 7 level scoops to 100ml warm water.\nFor 500g (0.5kg) puppies: Add 160ml per day.\nFor 1000g (1kg) puppies: Add 250ml per day.\nFor 2000g (2kg) puppies: Add 400ml per day.\nFor 5000g (5kg) puppies: Add 900ml per day.\nFeeding Frequency:\nAdjust the volume per day based on the puppy’s weight and age.\nSplit the daily volume across the recommended number of feeds per day.\nGradually transition to solid food after the 28th day.\nStorage:\nPrepared Lacto-Pup Milk Replacer can be refrigerated for up to 24 hours.\nReheat to 38°C or blood temperature before feeding.",
      Category: "all except poultry",
      Type: "Medicine"
    }
  ]

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
    { id:14, name: t(["v325"]), img: rumenoamazon1, amount: 1, price: 600 },
    { id:15, name: t(["v326"]), img: rumenoamazon2, amount: 1, price: 600 },
    {
      id:16, name: t(["v172"]),
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
    { id:17, name: t(["v328"]), img: rumenoamazon4 },
    { id:18, name: t(["v329"]), img: rumenoamazon5 },
    { id:19, name: t(["v330"]), img: rumenoamazon6 },
    { id:20, name: t(["v331"]), img: rumenoamazon7 },
    { id:21, name: t(["v332"]), img: rumenoamazon8 },
    { id:22, name: t(["v333"]), img: rumenoamazon9 },
  ];

  const HumanConsumable = [
    {id:23, name: t(["v334"]), img: humanconsumable1 },
    {id:24, name: t(["v335"]), img: humanconsumable2 },
    {id:25, name: t(["v336"]), img: humanconsumable3 },
  ];
  var Value = '';
  const AllData = [...MainJson];
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
    return item.Category.toLowerCase().includes( "goat") || item.Category.toLowerCase().includes( "all");
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



  const AddToCarts = async (item) => {
    if (loggedInUser) {
       // Check if the item already exists in the cart
       const itemExists = cart.some(cartItem => cartItem.id === item.id && cartItem.name === item.name);
       console.log(cart)
   
       if (!itemExists) {
         console.log("Item added to cart:", item);
         // Add logic to handle adding item to cart
         setCart([...cart, { id: item.id, amount: 1, price: item.price, img: item.img, name: item.name, uID: UidData }]);
         const itemData = { id: item.id, amount: 1, price: item.price, img: item.img, name: item.name, uID: UidData };
         setiteamdata(itemData);
         console.log(itemData);
         try {
          const response = await axios.post('http://192.168.1.11:5000/carts', itemData);
          console.log('Add to cart is Successfull', response.data);
              if(response.data.msg == 'success'){
              }
        } catch (error) {
          console.error('Add to cart is not working', error);
        }
       } else {
         // Optionally, show a message that the item is already in the cart
         console.log("Item already in cart",item);
       }
    } else {
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
            <span className="label-title">Goat Feed Supplements</span>
            <div className="mx-2">
              <div className="services-line-largeright"></div>
              <div className="services-line-smallright"></div>
            </div>
          </div>
        </div>
        <div className="container-fluid category-section">
          <div className="row category-menu justify-content-end mx-1">
          <div className="col-lg-9 bg-white shadow ">
              <h4 className="mt-2 text-center mb-0 fw-bold">CATEGORY MENU</h4>
              <hr className="my-2"/>
              <ul>
                <li><Link className="text-decoration-none text-dark">Goat Vaccine</Link></li>
                <li><Link className="text-decoration-none text-dark">Goat Accessories</Link></li>
                <li><Link className="text-decoration-none text-dark">Goat Deworm</Link></li>
                <li><Link className="text-decoration-none text-dark">Goat Food</Link></li>
                <li><Link className="text-decoration-none text-dark">Goat Medicine</Link></li>
              </ul>
          </div>
          </div>
          <div className="row justify-content-start">

            {filterData.map((item, index) => (
              <div key={index} className="col-lg-3 text-center border bg-white mx-2  my-3  shadow">
                <img src={item.img} className="w-100 mt-2" height={250} alt="loading" />
                <h5 className="mt-3  fw-bold m-auto text-center">{item.name}</h5>
                <p className="mt-2 text-trun">{item.description}</p>
                <hr className="my-0" />
                <div className="d-flex justify-content-between mx-2 align-item-center">
                  <button
                    className="btn text-white border-0 w-auto gradient-custom-2 my-4 p-2"
                    onClick={() => AddToCarts(item)}
                  >
                    Add to Cart
                  </button>
                  <Link className="text-decoration-none fs-6 text-success d-flex align-items-center  px-1 rounded" to={`/veterinary-products/ProductDetail/${item.id}`} >
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
