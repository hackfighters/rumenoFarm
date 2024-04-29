import React, { useContext } from "react";
import Navbar from "../../Common/Navbar";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import Footer from "../../Common/Footer";
import { UserContext } from "../../Common/Modal/logusecont";
import { Accordion } from "react-bootstrap";

const CattleCategoryPage = () => {
  const { cart } = useContext(UserContext);
  
  const FAQ = [
        {
            "question": "What is cattle feed supplement?",
            "answer": "Cattle feed supplements are essential additives that enhance the nutritional value of the basal feed for livestock. They provide essential nutrients like vitamins, minerals, and proteins to improve growth, health, and productivity.  Common supplements include calcium, phosphorus, magnesium, and selenium"
        },
        {
            "question": "What is livestock supplements?",
            "answer": "Livestock supplements are ingredients added to feed in micro quantities to improve growth, feed efficiency, and prevent diseases.  They include essential nutrients like vitamins, minerals, and protein sources.  Proper supplementation ensures optimal health and performance in cattle"
        },
        {
            "question": "Do Cows Need Supplements?",
            "answer": "Yes, cows benefit from supplements to meet their nutritional requirements.  Vitamins A, D, and E, along with minerals, are crucial for their health and productivity.  Supplements help address deficiencies and support growth, reproduction, and milk production."
        },
        {
            "question": "What is the best vitamins for cow?",
            "answer": "Vitamin A: Essential for vision, immune function, and reproductive health.  Vitamin D: Supports calcium absorption and bone health.  Vitamin E: Acts as an antioxidant and promotes muscle function.  Vitamin B12: Vital for metabolism and energy production"
        },
        {
            "question": "What is selenium vitamin for cows?",
            "answer": "Selenium is an essential trace mineral.  It works with vitamin E to protect tissues, supports muscle growth, and prevents white muscle disease.  Proper supplementation strategies are crucial to prevent deficiency or toxicity  You can get all selenium from our Selennium-E products"
        },
        {
            "question": "What is the best cow weight gain supplement?",
            "answer": "High-energy feeds like corn are effective for weight gain.  Consider protein-rich supplements (soybean meal, canola meal) to support growth.  Ensure a balanced diet with adequate nutrients for optimal weight gain"
        },
        {
            "question": "How to increase milk production in cows naturally ?",
            "answer": "Quality Forage: Provide high-quality pasture and hay.  Proper Nutrition: Balanced diet with adequate protein, energy, and minerals.  Hydration: Ensure access to clean water.  Stress Reduction: Minimize stressors like overcrowding or abrupt changes.  Regular Milking Schedule: Consistent milking routines stimulate production  Increase your cattle milk with our doodh vardhan product"
        }
    ]


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
            <span className="label-title">Cattle Feed Supplements</span>
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
            Enhancing Cattle Well-being and Growth with Rumeno's Cattle Feed Supplements
            </h1>
            <h2 className="my-2">Overview</h2>
            <p>
            Rumeno Farmotech produces high-quality animal feed supplements to enhance livestock health and productivity. Their cattle feed supplements includes mineral combinations and calcium supplements, ensuring robust growth and nourishment for cows and buffaloes. With a commitment to research-driven solutions, Rumeno Farmotech offers a broad range of products for your lovely cattle, like
            
            </p>
            <hr className="my-4"/>
            <h3 className="fw-bold">1. Cattle Weight Gain Supplements</h3>
            <p>
              Cattle need the proper balance of nutrients to acquire weight.
              Consider the following weight-gain supplements:
            </p>
            <h4>A. High-Intensity Foods</h4>
            <p>
              <strong>Corn:</strong> Feeds based on corn are high in energy and
              aid in the growth of cattle's mass. They are especially helpful
              when beef cattle are being finished.
            </p>
            <p>
              <strong>Barley: </strong> An additional grain high in energy that
              encourages weight gain.
            </p>
            <h4>B. Supplements with Protein</h4>
            <p>
              A common protein supplement for cattle is soybean meal. It offers
              the vital amino acids required for the growth of muscle.
              Cottonseed Meal: Packed in fiber and protein, this meal promotes
              weight gain.
            </p>
            <h4>C. Vitamin and Mineral Supplements</h4>
            <p>
              Calcium and phosphorus are necessary for healthy bones and general
              growth. Vitamin E: Promotes the growth of muscles and immunity.
            </p>
            <hr className="my-4"/>
            <h3 className="fw-bold">2. Supplements for Cattle Protein</h3>
            <p>
              Cattle require protein for both growth and maintenance because it
              is the building block of muscle. Consider the following protein
              supplements:
            </p>
            <h4>A. Meal Made of Soy</h4>
            <p>
              Soybean meal is a dependable source of protein, as previously
              noted
            </p>
            <p>
              <strong>Alfalfa Hay:</strong> Protein and fiber are both present
              in high-quality alfalfa hay.
            </p>
            <hr className="my-4"/>
            <h3 className="fw-bold">
              3. RumenO Farmotech: A Reputable Brand in Supplements for Cattle
            </h3>
            <p>
              In the cattle business, RumenO Farmotech is a well-known brand
              that provides a selection of premium supplements. This is why
              their products are unique:
            </p>
            <h4>A. Formulas Backed by Research</h4>
            <p>
              RumenO Farmotech makes research investments to create potent
              mixtures. Their supplements are made to specifically address the
              requirements of cattle.
            </p>
            <h4>B. Dietary Balance</h4>
            <p>
              RumenO Farmotech products offer balanced nutrition for weight
              gain, protein intake, and general wellness.
            </p>
            <h4>C. Licks and Mineral Blocks</h4>
            <p>
              Cattle may easily obtain necessary minerals with RumenO
              Farmotech's handy mineral blocks and licks.
            </p>
            <h4>In summary</h4>
            <p>
              As a farmer raising cattle, give your animals' wellbeing and
              growth in weight first priority. You should think about adding
              supplements from RumenO Farmotech to your feeding regimen. Recall
              that profitable and prosperous farms are the result of having
              healthy and well-fed livestock!
            </p>
          </div>
        </div>
        <Accordion defaultActiveKey="0" flush>
          {FAQ.map((item, index) => (
            <Accordion.Item className="m-3" key={index} eventKey={index.toString()}>
              <Accordion.Header><strong className="mx-2">Q.{index+1} </strong> {item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

      </section>
      <Footer />
    </>
  );
};

export default CattleCategoryPage;
