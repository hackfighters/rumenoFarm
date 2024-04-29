import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const ThankYouPage = () => {

    return (
        <>
        <Navbar/>
        <section className='pt-5'>
            <div class="mt-4  pt-5 text-center">
                <h1 class="text-2xl font-bold pt-5">Thank You!</h1>
                <p className='h4 my-2 '>Thank you for Purchasing  </p>
                <svg viewBox="0 0 512 512" fill='green' className='' width={150}>
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" /></svg>
                <p class="mt-3 h5">
                    Thank you for visiting <strong className='text-danger h5 fw-bold'>RUMENO</strong> website. You will receive you product on time
                </p>
                <p class="my-3">
                    Please check your mail for more Details

                </p>
            </div>
        </section>
            <Footer/>

        </>
    )
}

export default ThankYouPage

// import React from 'react';

// // Assuming t is a function that translates text and farmimg1, farmimg2 are imported images
// // You might need to adjust this part based on how your translation function and images are set up

// const FarmEquipmentCard = ({ equipment }) => {
//  // Split weights and prices into arrays
//  const weights = equipment.weight.split(', ');
//  const prices = equipment.price.split(', ');

//  return (
//     <div>
//       {weights.map((weight, index) => (
//         <div key={index} className="card">
//           <img src={equipment.img} alt={equipment.name} />
//           <h2>{++index}</h2>
//           <h2>{equipment.name}</h2>
//           <p>{weight}</p>
//           <p>{prices[index]}</p>
//           <p>{equipment.description}</p>
//         </div>
//       ))}
//     </div>
//  );
// };

// const ThankYouPage = () => {
//  const MainData = [
//     {
//       id: 1,
//       name:'admin',
//       weight: "1kg",
//       price: "10",
//       description:'hello world',
//     },
// {
//       id: 1,
//       name:'admin',
//       weight: 2kg",
//       price: "2",
//       description:'hello world',
//     },
// {
//       id: 2,
//       name:'admin',
//       weight: "7kg",
//       price: "7",
//       description:'hello world',
//     },
//  ];

//  return (
//     <div>
//       {FarmEquipment.map((equipment) => (
//         <FarmEquipmentCard key={equipment.id} equipment={equipment} />
//       ))}
//     </div>
//  );
// };

// export default ThankYouPage;

// 

// import React, { useState } from 'react';

// const FarmEquipment = [
//  {
//     id: 12,
//     name: 'Item 1', 
//     priceText: 'Price Text 1',
//     weight: ['1kg', '2kg', '3kg'],
//     price: [100, 200, 300],
//     description: 'Description 1',
//     img: 'image1.jpg'
//  },
//  {
//     id: 13, 
//     name: 'Item 2',
//     priceText: 'Price Text 2',
//     weight: ['4kg', '3kg', '7kg', '11kg'], 
//     price: [10, 80, 70, 64],
//     description: 'Description 2',
//     img: 'image2.jpg'
//  }
// ];

// const ThankYouPage = () => {
//  const [selectedWeight, setSelectedWeight] = useState(null);
//  const [selectedPrice, setSelectedPrice] = useState(0);

//  const handleAddToCart = (item, weightIndex) => {
//     console.log(item, item.weight[weightIndex], item.price[weightIndex]);
//     console.log(selectedPrice)
//     // Here you can implement the logic to add the item to the cart
//     // For example, you might want to update the cart state or call an API
//  };

//  return (
//     <div>
//       {FarmEquipment.map((item, index) => (
//         <div key={index}>
//           <h3>{item.name}</h3>
//           <p>Price: {item.price.join(', ')}</p>
//           <p>Weight: {item.weight.join(', ')}</p> 
//           <p>{item.description}</p>
//           <p>{selectedPrice}</p>
//           <img src={item.img} alt={item.name} />
//           {item.weight.map((weight, weightIndex) => (
//             <button 
//               key={weight} 
//               onClick={() => {
//                 setSelectedWeight(weight);
//                 setSelectedPrice(item.price[weightIndex]);
//               }}
//               style={{ backgroundColor: selectedWeight === weight ? 'lightgreen' : 'initial' }}
//             >
//               {weight}
//             </button>
//           ))}
//           <button 
//             onClick={() => handleAddToCart(item, item.weight.indexOf(selectedWeight))}
//           >
//             Add to Cart
//           </button>
//         </div>
//       ))}
//     </div>
//  );
// }

// export default ThankYouPage;





// import React from 'react';
// import { useParams } from 'react-router-dom';

// const FarmEquipment = [
//   {
//     id: 12,
//     name: 'Item 1', 
//     priceText: 'Price Text 1',
//     weight: '1kg, 2kg, 3kg',
//     price: '100, 200, 300',
//     description: 'Description 1',
//     img: 'image1.jpg'
//   },
//   {
//     id: 13, 
//     name: 'Item 2',
//     priceText: 'Price Text 2',
//     weight: '4kg, 3kg, 7kg, 11kg', 
//     price: '10, 80, 70, 64',
//     description: 'Description 2',
//     img: 'image2.jpg'
//   }
// ];

// const ThankYouPage = () => {
//   const { itemId } = useParams();

//   const handleAddToCart = (item, weight, price) => {
//     // Constructing a unique ID for the item in the cart
//     const cartItemId = `${item.id}-${weight}-${price}`;
//     // Logging the data
//     console.log("Added to cart:", {
//       id: cartItemId,
//       name: item.name,
//       weight: weight,
//       price: price,
//       description: item.description,
//       pricetext: item.priceText,
//       img: item.img
//     });     
//   };

//   const selectedItem = FarmEquipment.find(item => item.id === parseInt(itemId));

//   if (!selectedItem) {
//     return <div>Item not found!</div>;
//   }

//   const { name, description, priceText, img } = selectedItem;
//   const weights = selectedItem.weight.split(', ');
//   const prices = selectedItem.price.split(', ');

//   return (
//     <div>
//       {/* Large Size Card */}
//       <div>
//         <h3>{name}</h3>
//         <p>{description}</p>
//         <p>{priceText}</p>
//         <img src={img} alt={name} />
//       </div>

//       {/* Small Size Cards */}
//       {weights.map((weight, index) => (
//         <div key={`${selectedItem.id}-${index}`}>
//           <h4>Weight: {weight}</h4>
//           <p>Price: {prices[index]}</p>
//           {/* Button to add to cart */}
//           <button onClick={() => handleAddToCart(selectedItem, weight, prices[index])}>
//             Add to Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ThankYouPage;

//  const MainData = [
//     {
//       id: 1,
//       name:'admin',
//       weight: "1kg",
//       price: "10",
//       description:'hello world',
//     },
// {
//       id: 1,
//       name:'admin',
//       weight: 2kg",
//       price: "2",
//       description:'hello world',
//     },
// {
//       id: 2,
//       name:'admin',
//       weight: "7kg",
//       price: "7",
//       description:'hello world',
//     },
//  ];
// ThankYouPage
// import React from 'react';

// function ThankYouPage() {


//   return (
//     <>
//     <div class="container">
//   <h1>Use Bootstrap's carousel to show multiple items per slide.</h1>
//   <div class="row">
//     <div class="col-md-12">
//       <div class="carousel slide multi-item-carousel" id="theCarousel">
//         <div class="carousel-inner">
//           <div class="item active">
//             <div class="col-xs-4"><a href="#1"><img src="http://placehold.it/300/f44336/000000" class="img-responsive"/></a></div>
//           </div>
//           <div class="item">
//             <div class="col-xs-4"><a href="#1"><img src="http://placehold.it/300/e91e63/000000" class="img-responsive"/></a></div>
//           </div>
//           <div class="item">
//             <div class="col-xs-4"><a href="#1"><img src="http://placehold.it/300/9c27b0/000000" class="img-responsive"/></a></div>
//           </div>
//           <div class="item">
//             <div class="col-xs-4"><a href="#1"><img src="http://placehold.it/300/673ab7/000000" class="img-responsive"/></a></div>
//           </div>
//           <div class="item">
//             <div class="col-xs-4"><a href="#1"><img src="http://placehold.it/300/4caf50/000000" class="img-responsive"/></a></div>
//           </div>
//           <div class="item">
//             <div class="col-xs-4"><a href="#1"><img src="http://placehold.it/300/8bc34a/000000" class="img-responsive"/></a></div>
//           </div>

//           <div class="item">
//             <div class="col-xs-4"><a href="#1"><img src="http://placehold.it/300/8bc34a/000000" class="img-responsive"/></a></div>
//           </div>

//         </div>
//         <a class="left carousel-control" href="#theCarousel" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a>
//         <a class="right carousel-control" href="#theCarousel" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>
//       </div>
//     </div>
//   </div>
// </div>
//     </>
//   )

// }

// export default ThankYouPage;

// import React, { useState, useEffect } from 'react';
// import '../../assets/css/test.css';


// function ThankYouPage() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Check if the user has scrolled down by a certain amount
//       const scrollPosition = window.scrollY;
//       if (scrollPosition > 100) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <div className={isScrolled ? "navbar scrolled" : "navbar"}>
//         {/* Your navbar content */}
//         Navbar
//       </div>
//       <div className="content">
//         {/* Your page content */}
//         {Array.from({ length: 100 }, (_, i) => (
//           <p key={i}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ThankYouPage;
