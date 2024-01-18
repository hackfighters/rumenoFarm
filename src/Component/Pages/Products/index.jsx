
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Navbar from "../../Common/Navbar/index";
import Footer from "../../Common/Footer";
import ProductSidebar from "./productSidebar";
import Roadmap1 from "../../../assets/img/OurProduct/rumeno-roadmap.png";
import Roadmap3 from "../../../assets/img/roadmap_mobile.mp4";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { UserContext } from "../../Common/Modal/logusecont";
import axios from "axios";

const Products = () => {
  const [cart, setCart] = useState([]);
  const [cookies, setCookie] = useCookies(["cart"]);
  const { setSizevalue,cartdata ,UidData} = useContext(UserContext);

  var item = ""
  var Value = '';

  useEffect(() => {
    if (cookies.cart) {
      setCart(cookies.cart);
    }
  }, []);

  useEffect(() => {
    setCookie("cart", cart, { path: "/" });
     Value = cart.length;
     setSizevalue(Value)
     handleAddtoCart()
  console.log(Value)
  }, [cart, setCookie]);


  // const habnle = () => {
  //   console.log('ghnm,.',cart)

  // }

  const handleAddtoCart = async () => {
        console.log('ghnm,.',cart)

    try {
      const response = await axios.post('https://d002-171-61-11-131.ngrok-free.app/cart', cart);
      console.log('Add to cart is Successfull', response.data);
    } catch (error) {
      console.error('Add to cart is not working', error);
    }
  };


  const handleClick = (item) => {
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
     
      setCart([...cart, { id: item.id, amount: 1, price: item.price, img: item.img , name: item.name, Uid:UidData}]);

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
      

    };
  
console.log(cartdata)

  const handleChange = (item, d) => {
    let ind = -1;
    cartdata.forEach((data, index) => {
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
          carts={cart}
          setCarts={setCart}
          handleChange={handleChange}
          // item={item}
          // value={Value}
          // cookies={setCookie}
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