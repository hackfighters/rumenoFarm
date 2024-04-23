import React, { useContext } from "react";
import Navbar from "../../Common/Navbar";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import Footer from "../../Common/Footer";
import { UserContext } from "../../Common/Modal/logusecont";
import { Accordion } from "react-bootstrap";

const PoultryCategoryPage = () => {
  const FAQ = [
    {
      question: "What is feed supplement for poultry?",
      answer: "Poultry feed supplements are additional nutritional substances given to chickens to enhance their diet and promote health and productivity.Commonly used supplements include protein sources like fish meal or soybean meal.The need for supplementation depends on various factors, and it’s crucial for egg - laying hens and during winter months12."
    },
    {
      question: "What is the best feed for poultry?",
      answer: "Scratch and Peck Organic Chicken Feeds are highly recommended. They are USDA certified organic, non-GMO, and sustainably sourced.These feeds contain essential vitamins, minerals, and protein sources like black soldier fly larvae(grubs) for optimal health and egg production3."
    },
    {
      question: "Which vitamin is good for poultry?",
      answer: "Vitamin A: Boosts growth and egg production.Vitamin B2: Supports growth.Vitamin K: Essential for muscle health and healthy blood.Vitamin E: Important for growth and reproduction.Vitamin D: Strengthens eggshells and increases egg production1."
    },
    {
      question: "Which medicine is best for poultry growth?",
      answer: "Rumeno Farmotech provides you various types of supplements that will increase your poultry growth like Energico=Maintains energy level Poultryfine=Antibacterial for your broilers Florovita- 12=Probiotic supplement for poultry and weight gainer   Selennium - E=helps to maintain selenium balance in broilers"
    },
    {
      question: "Do chickens need supplements?",
      answer: "Chickens benefit from supplements:Vitamin D for strong eggshells.     Calcium during peak egg production.    Stress relief during challenging times.    Consult experts for personalized advice."
    },
    {
      question: "Which poultry feed supplements promote eggshell strength?",
      answer: "When it comes to promoting eggshell strength in poultry, several supplements play a crucial role. One notable product is “Selennium-E” by Rumeno Farmotech. This supplement combines the power of selenium and vitamin E to enhance eggshell quality. Selenium supports antioxidant function, while vitamin E contributes to overall reproductive health. Including Selennium-E in your poultry feed can lead to stronger, more resilient eggshells."
    }
  ]
  const { cart } = useContext(UserContext);

  // var Value = '';
  // const AllData = [...Data, ...FarmEquipment, ...RumenoAmazon, ...HumanConsumable];
  // const [cookies, setCookie] = useCookies(["cart"]);
  // useEffect((item) => {
  //   if (cookies.cart) {
  //     setCart(cookies.cart);
  //   }
  // }, []);
  // useEffect(() => {
  //   setCookie("cart", cart, { path: "/" });
  //   Value = cart.length;
  //   if (Value !== 0) {
  //     setSizevalue(Value)
  //   }
  // }, [cart, setCookie]);


  // // Filter logic (you need to define your filter criteria here)
  // const filterData = AllData.filter((item) => {
  //   // Example filter criteria: filter items where the name includes "Goat"
  //   return item.name.toLowerCase().includes("goat");
  // });

  // const [showLoginModal, setShowLoginModal] = useState(false);
  // const { loggedInUser } = useContext(UserContext);

  // const openRegistration = () => {
  //   setShowRegistrtionModal(true);
  //   setShowLoginModal(false);
  // };

  // const closeRegistrationModal = () => {
  //   setShowRegistrtionModal(false);
  // };
  // const OpenSendOtp = () => {
  //   setShowOpt(true);
  //   setShowLoginModal(false);
  // };
  // const CloseSendOtp = () => {
  //   setShowOpt(false);
  // };



  // const AddToCarts = (item) => {
  //   if (loggedInUser) {
  //      // Check if the item already exists in the cart
  //      const itemExists = cart.some(cartItem => cartItem.name === item.name);

  //      if (!itemExists) {
  //        console.log("Item added to cart:", item);
  //        // Add logic to handle adding item to cart
  //        setCart([...cart, { id: item.id, amount: 1, price: item.price, img: item.img, name: item.name, uID: UidData }]);
  //        const itemData = { id: item.id, amount: 1, price: item.price, img: item.img, name: item.name, uID: UidData };
  //        setiteamdata(itemData);
  //        console.log(itemData);
  //      } else {
  //        // Optionally, show a message that the item is already in the cart
  //        console.log("Item already in cart");
  //      }
  //   } else {
  //      setShowLoginModal(!showLoginModal);
  //      toast.warn("Please Login", {
  //        position: "top-center",
  //        autoClose: 2000,
  //        hideProgressBar: false,
  //        closeOnClick: true,
  //        pauseOnHover: true,
  //        draggable: true,
  //        progress: undefined,
  //        theme: "light",
  //      });
  //   }
  //  };
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
            <span className="label-title">Poultry Category</span>
            <div className="mx-2">
              <div className="services-line-largeright"></div>
              <div className="services-line-smallright"></div>
            </div>
          </div>
        </div>
        {/* <div className="container-fluid">
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
                  <Link className="text-decoration-none fs-6 text-success d-flex align-items-center  px-1 rounded" >
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

        </div> */}
        <div className="row bg-white shadow mx-3 my-4 justify-content-center">
          <div className="col-lg-11 my-4">
            <h1 className="my-4 text-center">
              Enhancing Poultry Health An All-Inclusive Handbook on Poultry
              Supplements
            </h1>
            <h3 className="my-3">Overview</h3>
            <p>
              The dynamic field of poultry husbandry necessitates accuracy,
              tenderness, and a thorough comprehension of avian health. As a
              poultry farmer, you are well aware that the key to productive
              chicken production is a well-balanced diet. But occasionally, your
              flock doesn't get all the nutrition it needs from normal feed
              alone.Thats why poultry feed Supplements are used in this
              situation. We'll dive into the world of poultry supplements in
              this blog, highlighting their advantages and illuminating how
              they're changing the way that chicken nutrition is provided.
            </p>
            <h3 className="fw-bold my-4">
              Why Poultry Feed Supplements Are Important:
            </h3>
            <hr className="my-4" />

            <h4>1. Improved Weight Gain and Growth</h4>
            <p>
              Supplements to poultry feed, enhanced with premium proteins and
              amino acids, facilitate effective muscle growth and weight gain in
              birds. This results in birds that grow more quickly and are
              healthier and more marketable.
            </p>
            <hr className="my-4" />

            <h4>2. Higher Yield and Better Quality of Eggs</h4>
            <p>
              Egg production can be increased by taking certain supplements that
              contain important vitamins, minerals, and omega-3 fatty acids.
              They not only make eggs bigger, but their shells are also better.
              You will gain from increased egg harvests and enhanced market
              value as a chicken farmer.
            </p>
            <hr className="my-4" />

            <h4>3. A more robust immune system</h4>
            <p>
              Poultry need a strong immune system to fight against illnesses and
              infections. Antioxidants, probiotics, and herbal extracts are a
              few immune-boosting components added to poultry feed additives to
              enhance the birds' natural defenses and lower their risk of
              sickness.
            </p>
            <hr className="my-4" />
            <h4 className="">
              4. Better Absorption of Nutrients and Digestion
            </h4>
            <p>
              Supplementing with enzymes is essential for improving nutrition
              absorption and digestion. These supplements increase feed
              conversion ratios, improve nutritional availability, and decrease
              feed waste by optimizing the utilization of dietary components.
            </p>
            <p>
              Selecting the Proper Supplements for Poultry Feed When choosing
              supplements for poultry feed, take into account the following
              factors:
            </p>

            <p>
              <strong>Type of Supplement:</strong> There are many different
              kinds of supplements out there, such as probiotics, enzymes,
              vitamins, minerals, and amino acids. Select a supplement that
              fills in the particular nutrient gap found in your flock.
            </p>
            <p>
              <strong>Supplement Type:</strong>
              There are three types of supplements for poultry feed: liquids,
              pellets, and powders. Select the form that best fits the
              preferences of your birds and your management procedures.
            </p>
            <hr className="my-4" />

            <h4>Let me present Rumeno Farmotech.</h4>
            <p>
              We at Rumeno Farmotech are devoted to the well-being of poultry.
              Being a top producer of supplements for poultry feed, we are
              experts at making premium supplements that are suited to each
              species' particular dietary needs. Our products are carefully
              designed to improve the health and well-being of birds, increase
              their output, and guarantee healthy growth.
            </p>
            <p>
              Our quick-start poultry supplements are made to get your flock
              moving, whether you're an experienced farmer or just getting
              started. When you need dependable, scientifically supported
              solutions to increase your poultry output to new levels, turn to
              Rumeno Farmotech.
            </p>
            <p>
              Recall that happy birds translate into successful businesses. With
              Rumeno Farmotech's poultry health supplements, you can make an
              investment in your feathery companions' wellbeing.
            </p>
          </div>
        </div>
        <Accordion defaultActiveKey="0" flush>
          {FAQ.map((item, index) => (
            <Accordion.Item className="m-3" key={index} eventKey={index.toString()}>
              <Accordion.Header><strong className="mx-2">Q.{index + 1} </strong> {item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </section>
      <Footer />
    </>
  );
};

export default PoultryCategoryPage;
