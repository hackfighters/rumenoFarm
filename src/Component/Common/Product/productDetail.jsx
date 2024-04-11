import React, { useContext, useEffect, useState } from 'react'

// 
import ReactStars from "react-rating-stars-component";

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
import { faArrowRightArrowLeft, faChevronRight, faCircleMinus, faCirclePlus, faEye, faTags, faTrash } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from '../Modal/logusecont';
import { useTranslation } from 'react-i18next';
import Navbar from '../Navbar';
import ResponsiveNavbar from '../Navbar/navMob';
import Footer from '../Footer';
import { useParams } from 'react-router-dom';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
import { Accordion } from 'react-bootstrap';


const ProductDetail = () => {
    const { UidData, cart, setCart, setiteamdata, setSizevalue } = useContext(UserContext);
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

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegistrationModal, setShowRegistrtionModal] = useState(false);
    const [showOtp, setShowOpt] = useState(false);
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

    var ItemQuantity;
    const handleChange = (item, change) => {
        const updatedCart = cart.map(cartItem => {
            if (cartItem.id === item.id) {
                const ItemQuantity = cartItem.amount + change;
                if (ItemQuantity < 1) return cartItem; // Prevent quantity from going below 1
                console.log(ItemQuantity)
                return { ...cartItem, amount: ItemQuantity };
            }
            return cartItem;
        });
        setCart(updatedCart);
    };

    const allData = [...Data, ...FarmEquipment, ...RumenoAmazon, ...HumanConsumable];
    const { name } = useParams();

    const AddToCarts = (item) => {
        if (loggedInUser) {
            // Check if the item already exists in the cart
            const itemExists = cart.some(cartItem => cartItem.name === item.name);

            if (!itemExists) {
                console.log("Item added to cart:", item);
                // Add logic to handle adding item to cart
                setCart([...cart, { id: item.id, amount: 1, price: item.price, img: item.img, name: item.name, uID: UidData }]);
                const itemData = { id: item.id, amount: 1, price: item.price, img: item.img, name: item.name, uID: UidData };
                setiteamdata(itemData);
                console.log(itemData);
            } else {
                // Optionally, show a message that the item is already in the cart
                console.log("Item already in cart");
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


    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        const items = allData;
        if (name) {
            // Filter items based on the name parameter
            const filtered = items.filter((item) => item.name.includes(name));
            setFilteredItems(filtered);
        } else {
            setFilteredItems(items);
        }
    }, [name]);

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
                        className="d-flex justify-content-center pt-4 mt-lg-5"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >
                        <div className="mx-2">
                            <div className="services-line-largeleft"></div>
                            <div className="services-line-smallleft"></div>
                        </div>
                        <span className="label-title">Product Detail</span>
                        <div className="mx-2">
                            <div className="services-line-largeright"></div>
                            <div className="services-line-smallright"></div>
                        </div>
                    </div>
                </div>
                {filteredItems.map((item, index) => (
                    <>
                        <div className='row justify-content-center bg-white  lg:mx-5 mx-0 py-2'>
                            <div className="col-lg-4">
                                <img className='w-100' src={item.img} height={500} alt="loading" />
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <h1 className=''>{item.name}</h1>
                                <h1 className='my-3 text-danger fw-bold'>₹ {item.price} /-</h1>
                                <Accordion className='' defaultActiveKey="0" flush>
                                    <Accordion.Item className="my-3" eventKey="0">
                                        <Accordion.Header className='border bg-none'>
                                            <FontAwesomeIcon className='text-danger' icon={faTags} /><strong className='mx-2 text-primary'>Save Extra</strong>get 5% Discount and more...
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                <strong>Get 5% discount</strong> on susbscribing youtube channel & <strong>get extra 5% discount</strong> on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of  livestock farming  by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days.

                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                {/* <div class="dropdown show my-3">
                                    <a class="px-3 py-3 btn  border w-auto my-1 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <FontAwesomeIcon className='text-danger' icon={faTags} /><strong className='mx-2 text-primary'>Save Extra</strong>get 5% Discount and more...
                                    </a>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <p className='px-2'>
                                            <strong>Get 5% discount</strong> on susbscribing youtube channel & <strong>get extra 5% discount</strong> on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of  livestock farming  by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days.
                                        </p>
                                    </div>
                                </div> */}
                                <h5><FontAwesomeIcon className='text-success mx-1' icon={faCircleDot} /> This is a <strong>vegetarian</strong> product</h5>
                                <hr />
                                <div className="my-3 d justify-content-center">
                                    <h6 className='my-0'>Please Rate Us Our Product</h6>
                                    <ReactStars
                                        count={5}
                                        // onChange={ratingChanged}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <div className='my-3'>
                                    <span className="fw-bold">{item.suitable}</span>
                                    <span>{item.tipe}</span>

                                </div>
                                <div className='my-3'>
                                    <span className="fw-bold">{item.efficacy}</span>
                                    <span>{item.efficacy1}</span>
                                    <span>{item.efficacy2}</span>

                                </div>
                                <div className='my-3'>
                                    <h5 className='text-danger d-flex align-items-center'>For Videos<FontAwesomeIcon
                                        className="mx-2 my-0 h3 text-danger"
                                        type="button"
                                        icon={faYoutube}
                                    /></h5>
                                    <hr />
                                    <h4 className='fw-bold'>Delivery</h4>
                                    <p className='my-1'>within 5 -7 days</p>
                                    <p className='text-primary'><FontAwesomeIcon className='mx-1' icon={faArrowRightArrowLeft} /> Refundable for any manufacturing defect within 1 week
                                    </p>
                                </div>
                                <hr />
                                <h5><strong>Weight :</strong> <span className='text-danger mx-1 fw-bold'>500 gm</span></h5>
                                <hr />
                                <div className='d-flex justify-content-between align-items-center'>
                                    <FontAwesomeIcon
                                        icon={faCirclePlus}
                                        type="button"
                                        className="text-primary h3  mx-2 my-0"
                                        onClick={() => handleChange(item, +1)}
                                    />
                                    <h5 className="px-4 fw-bold py-2 my-0 border rounded">{item.amount}</h5>
                                    <FontAwesomeIcon
                                        icon={faCircleMinus}
                                        type="button"
                                        className="text-primary h3  mx-2 my-0"
                                        onClick={() => handleChange(item, -1)}
                                    />
                                <button
                                    className="btn text-white border-0 w-75 gradient-custom-2 my-4 p-2"
                                    onClick={() => AddToCarts(item)}
                                >
                                    Add to Cart
                                </button>
                                </div>


                                <ul className='border-top pt-3'>
                                    <li>
                                        <strong>Tanav Mukti Powder:</strong> A specialized blend of natural adaptogenic herbs designed to alleviate stress in animals.
                                    </li>
                                    <li className='my-1'>
                                        <strong>Dosage:</strong> Mix the recommended amount of Tanav Mukti Powder with your pet’s food or water.
                                    </li>
                                    <li className='my-1'>
                                        <strong>Frequency:</strong> Administer twice daily for optimal results.
                                    </li>
                                    <li>
                                        <strong>Consult a Veterinarian:</strong> Always consult a veterinarian before introducing any new product to your pet’s routine.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row my-4 lg:mx-5 mx-0 py-4 bg-white">
                            <h4 className='fw-bold mb-2'>* Description</h4>
                            <hr />
                            <p className='mx-4'>{item.description}</p>

                        </div>
                    </>
                ))}

            </section>
            <Footer />
        </>
    )
}

export default ProductDetail