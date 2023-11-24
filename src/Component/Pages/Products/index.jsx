// import React, { useState } from "react";

// // Common Component
// import Navbar from "../../Common/Navbar/index";
// import Footer from "../../Common/Footer";
// import ProductSidebar from "./productSidebar";

// // Image
// import Roadmap1 from "../../../assets/img/OurProduct/rumeno-roadmap.png";
// import Roadmap3 from "../../../assets/img/roadmap_mobile.mp4";
// import ResponsiveNavbar from "../../Common/Navbar/navMob";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // Rumeno farm
// // Rumeno
// // Veterinary
// const Products = () => {
//   const [cart, setCart] = useState([]);

//   const handleClick = (item) => {
//     let isPresent = false;
//     cart.forEach((product) => {
//       if (item.id === product.id) {
//         isPresent = true;
//       }
//     });

//     if (isPresent) {
//       toast.warn("Item is already added to your cart", {
//         position: "top-center",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//       return;
//     }

//     setCart([...cart, item]);
//     toast.success("Item is added to your cart", {
//       position: "top-center",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };
//   const handleChange = (item, d) => {
//     let ind = -1;
//     cart.forEach((data, index) => {
//       if (data.id === item.id) ind = index;
//     });
//     const tempArr = cart;
//     tempArr[ind].amount += d;

//     if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
//     setCart([...tempArr]);
//   };
//   return (
//     <>
//       <div className="desk-nav">
//         <Navbar
//           size={cart.length}
//           cart={cart}
//           setCart={setCart}
//           handleChange={handleChange}
//         />
//       </div>
//       <div className="mob-nav">
//         <ResponsiveNavbar   size={cart.length}
//           cart={cart}
//           setCart={setCart}
//           handleChange={handleChange}/>
//       </div>
//       <div className="our-product-img">
//         <img
//           src={Roadmap1}
//           alt="Loading"
//           className="w-100  pt-5 vh-100 object-fit-fill"
//         />
//         <video
//           autoPlay="true"
//           loop="true"
//           muted
//           className="w-100  pt-5 vh-100 "
//           src={Roadmap3}
//         ></video>
//       </div>
//       <div className="container-fluid abt-sect py-3 overflow-hidden">
//         <div className="d-flex justify-content-center pt-2">
//           <div className="mx-2">
//             <div className="services-line-largeleft"></div>
//             <div className="services-line-smallleft"></div>
//           </div>
//           <span className="label-title text-center">Our Product</span>
//           <div className="mx-2">
//             <div className="services-line-largeright"></div>
//             <div className="services-line-smallright"></div>
//           </div>
//         </div>
//         <ProductSidebar handleClick={handleClick} />
//       </div>
//       {/* Rumeno farm  */}
//       {/* Rumeno */}
//       {/* Veterinary */}
//       <Footer />
//     </>
//   );
// };

// export default Products;



import React, { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import Navbar from "../../Common/Navbar/index";
import Footer from "../../Common/Footer";
import ProductSidebar from "./productSidebar";
import Roadmap1 from "../../../assets/img/OurProduct/rumeno-roadmap.png";
import Roadmap3 from "../../../assets/img/roadmap_mobile.mp4";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../Common/Modal/logusecont";

const Products = () => {
  const [cart, setCart] = useState([]);
  const [cookies, setCookie] = useCookies(["cart"]);
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    if (cookies.cart) {
      setCart(cookies.cart);
    }
  }, []);

  useEffect(() => {
    setCookie("cart", cart, { path: "/" });
  }, [cart, setCookie]);

  // const handleClick = (item) => {
  //   let isPresent = false;
  //   cart.forEach((product) => {
  //     if (item.id === product.id) {
  //       isPresent = true;
  //     }
  //   });
  //   if (isPresent) {
  //     toast.warn("Item is already added to your cart", {
  //       position: "top-center",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //     return;
  //   }
  //   setCart([...cart, { id: item.id, amount: 1, price: item.price, img: item.img , name: item.name}]);
  //   toast.success("Item is added to your cart", {
  //     position: "top-center",
  //     autoClose: 2000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // };

  const handleClick = (item) => {
    if (loggedInUser) {
      let isPresent = false;
      cart.forEach((product) => {
        if (item.id === product.id) {
          isPresent = true;
        }
      });
      if (isPresent) {
        toast.warn("Item is already added to your cart", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      setCart([...cart, { id: item.id, amount: 1, price: item.price, img: item.img , name: item.name}]);
      toast.success("Item is added to your cart", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      console.log("login first")
      // Show login page modal or redirect to login page
      // You can use a state variable to control the visibility of the modal
      // and show it when the user clicks on the add to cart button
      // or use a routing library to navigate to the login page
    }
  };


  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = [...cart];
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart(tempArr);
  };

  return (
    <>
      <div className="desk-nav">
        <Navbar
          size={cart.length}
          cart={cart}
          setCart={setCart}
          handleChange={handleChange}
        />
      </div>
      <div className="mob-nav">
        <ResponsiveNavbar
          size={cart.length}
          cart={cart}
          setCart={setCart}
          handleChange={handleChange}
        />
      </div>
      <div className="our-product-img">
        <img
          src={Roadmap1}
          alt="Loading"
          className="w-100  pt-5 vh-100 object-fit-fill"
        />
        <video
          autoPlay="true"
          loop="true"
          muted
          className="w-100  pt-5 vh-100 "
          src={Roadmap3}
        ></video>
      </div>
      <div className="container-fluid abt-sect py-3 overflow-hidden">
        <div className="d-flex justify-content-center pt-2">
          <div className="mx-2">
            <div className="services-line-largeleft"></div>
            <div className="services-line-smallleft"></div>
          </div>
          <span className="label-title text-center">Our Product</span>
          <div className="mx-2">
            <div className="services-line-largeright"></div>
            <div className="services-line-smallright"></div>
          </div>
        </div>
        <ProductSidebar handleClick={handleClick} />
      </div>
      <Footer />
    </>
  );
};

export default Products;