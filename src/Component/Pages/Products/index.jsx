
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
import { Helmet } from "react-helmet";

const Products = () => {
  const [cookies, setCookie] = useCookies(["cart"]);
  const { setSizevalue,cartdata ,UidData,cart,setCart,setiteamdata,iteamdata} = useContext(UserContext);
  
  console.log(iteamdata,333333333333)
  var Value = '';

  useEffect(() => {
    if (cookies.cart) {
      setCart(cookies.cart);
    }
  }, []);

  useEffect(() => {
  
    setCookie("cart", cart, { path: "/" });
     Value = cart.length;
    if(Value !== 0 ){
      setSizevalue(Value)
      handleAddtoCart()
    } 
     
  // console.log(Value,'BHNJMK,L.;/')
  }, [cart, setCookie]);


  const handleAddtoCart = async () => {
    // console.log(iteamdata,12222222222222)
    
    try {
    const response = await axios.post('https://7e94-2401-4900-1ca3-f9e5-4d3f-f6b7-3825-7f58.ngrok-free.app/cart', iteamdata);
    // console.log('Add to cart is Successfull', response.data);
//     if(response.data.msg == 'success'){
// handleClick()
//     }
    } catch (error) {
    console.error('Add to cart is not working', error);
    }
  };
  const handleClick = (item) => {

      let isPresent = false;
      cart.forEach((product) => {

        if (item.id === parseInt(product.id)) {
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


      setCart([...cart, { id: item.id, amount: 1, price: item.price, img: item.img , name: item.name, uID:UidData}]);
      const itemdatra =  { id: item.id, amount: 1, price: item.price, img: item.img , name: item.name, uID:UidData}
      setiteamdata(itemdatra)

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
 

  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Products-Rumeno</title>
                <link rel="canonical" href="https://rumeno.in/products" />
            </Helmet>
            <a className="d-none" href="https://www.amazon.in/Sheep-Goat-Feed/b?ie=UTF8&node=28179044031"></a>
        <a className="d-none" href="https://www.amazon.in/goat-medicine/s?k=goat+medicine"></a>
        <a className="d-none" href="https://www.amazon.in/goat-farming-accessories/s?k=goat+farming+accessories"></a>
        <a className="d-none" href="https://www.amazon.in/cow-farm-equipment/s?k=cow+farm+equipment"></a>
        <a className="d-none" href="https://www.amazon.in/cow-feed/s?k=cow+feed"></a>
        <a className="d-none" href="https://www.amazon.in/cattle-medicine/s?k=cattle+medicine"></a>
        <a className="d-none" href="https://www.indiamart.com/shakyaworldtrade/goat-farming-equipment-and-accessories.html"></a>
        <a className="d-none" href="https://www.flipkart.com/search?q=goat%20feed&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"></a>
        <a className="d-none" href="https://www.flipkart.com/search?q=goat%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"></a>
        <a className="d-none" href="https://www.flipkart.com/search?q=cow%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"></a>
      <div className="desk-nav">
        <Navbar
          size={cart.length}
          // carts={cart}
          // setCarts={setCart}
          // handleChange={handleChange}
          // item={item}
          // value={Value}
          // cookies={setCookie}
        />
      </div>
      <div className="mob-nav">
        <ResponsiveNavbar
          size={cart.length}
          // cart={cart}
          // setCart={setCart}
          // handleChange={handleChange}
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