import React, { useContext } from "react";
import Navbar from "../../Common/Navbar";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import Footer from "../../Common/Footer";
import { UserContext } from "../../Common/Modal/logusecont";
import { Accordion } from "react-bootstrap";

const DogCategoryPage = () => {
  
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
            <span className="label-title">Dog Feed Supplements</span>
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
            <h1 className="my-4 text-center">Dogs Supplements to Promote Optimal Health</h1>
            <p>
              Here at Rumeno Farmotech, we put your dog's health first. We make
              sure that your pet gets the assistance they require with our
              carefully chosen collection of dog vitamins. We offer the ideal
              remedies for any dog suffering from allergies, joint problems,
              weight issues, or nutritional deficits.
            </p>
            <h2 className="my-5">
              Examine Our Selection of Supplements for Dogs:
            </h2>
            <p>
              <strong>Dog Allergy Supplement:</strong> Described as a natural
              mixture, this supplement helps dogs with common allergies.
            </p>
            <p>
              <strong>Benefits:</strong> Aids in maintaining a strong immune
              system. minimizes the occurrence of allergic responses. improves
              general well-being.
            </p>
            <h3 className="my-5">Dog Supplements for Weight Gain:</h3>
            <p>
              <strong>Description:</strong> Our weight gain pills are the
              solution if your dog needs to put on weight.
            </p>
            <p>
              <strong>Benefits:</strong> Rich in calories and important
              nutrients. encourages a healthy increase in weight. Perfect for
              dogs who are underweight.
            </p>
            <hr className="my-4"/>
            <p>
              <strong>Iron Supplements for dogs:</strong> Overview: Our iron
              supplements provide the right amounts of iron for your dog's
              general well-being.
            </p>
            <p>
              <strong>Benefits:</strong> Encourages the creation of energy.
              strengthens the immune system. vital to the production of red
              blood cells.
            </p>
            <hr className="my-4"/>

            <p>
              <strong>Dog Joint Supplements:</strong> Overview: Our joint
              supplements help maintain the health of your dog's joints.
            </p>
            <p>
              <strong>Benefits:</strong> Glucosamine and chondroitin are
              present. increases the flexibility of joints. promotes the health
              of cartilage.
            </p>
            <hr className="my-4"/>

            <p>
              <strong>Weight Gain Supplements for dogs:</strong> Overview:
              Tailored specifically for dogs in need of additional calories,
              this supplement supports the development of muscular mass and
              general vigor.
            </p>
            <p>
              <strong>Advantages:</strong> Promotes a healthy increase in
              weight. gives vital nutrients. enhances general well-being.
            </p>
            <hr className="my-4"/>

            <p>
              <strong>Dog Fiber Supplement:</strong> Summary: Keep your dog's
              digestive system in good working order with our fiber supplement
            </p>
            <p>
              <strong>Pros:</strong> Facilitates digestion. keeps constipation
              at bay. promotes gut health.
            </p>
          </div>
        </div>
        <div className="row mx-1">
          <div className="col-lg-12">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item className="my-3" eventKey="0">
                <Accordion.Header>1 Do Dog Supplements Works?</Accordion.Header>
                <Accordion.Body>
                  Of course! Supplements for dogs can be quite beneficial if
                  they are chosen carefully. The secret is to choose supplements
                  that are supported by scientific research and target
                  particular needs. We at Rumeno Farmotech provide expertly
                  created, clinically supported supplements. To determine which
                  vitamins are best for your dog, speak with your veterinarian.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="my-3" eventKey="1">
                <Accordion.Header>
                  2 Are Dog Supplements Worth it?
                </Accordion.Header>
                <Accordion.Body>
                  If dog supplements offer noticeable advantages, then the
                  investment is worthwhile. Take into account the following
                  elements:
                  <ul>
                    <li className="my-3">
                      <strong>Health Objectives:</strong> Supplements can be
                      helpful if your dog needs help with joints, weight
                      management, or better coat health. Quality Is Important
                      Select premium supplements made entirely of natural
                      components.
                    </li>
                    <li className="my-3">
                      <strong>See Your Veterinarian:</strong> Consult a
                      veterinarian about the unique requirements of your dog to
                      decide whether supplements are beneficial for your animal
                      friend.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="my-3" eventKey="2">
                <Accordion.Header>
                  3 Dog Supplement for weight gain ?
                </Accordion.Header>
                <Accordion.Body>
                  For dogs who are underweight, our weight gain vitamins are
                  perfect. They supply calories and vital elements to encourage
                  a healthy weight growth. These supplements can significantly
                  improve your dog's ability to maintain a healthy weight.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className="my-3" eventKey="3">
                <Accordion.Header>
                  4 Supplements for Dogs to Gain Muscle?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Think about using our specific vitamins to help your dog get
                    more muscle. These goods are made to encourage the growth of
                    muscles, particularly in active or working dogs. Muscle
                    growth can be facilitated by specific supplements,
                    appropriate diet, and regular exercise.
                  </p>
                  <p>
                    Keep in mind that every person may experience different
                    outcomes, and you should always speak with a veterinarian
                    before beginning any new supplement regimen. At Rumeno
                    Farmotech, we provide safe and effective supplements with a
                    focus on your dog's health.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DogCategoryPage;
