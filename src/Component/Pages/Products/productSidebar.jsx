import React, { useState } from "react";
import Prdcom from "../../../assets/img/prod-img/prdcom-1.jpg";
import Prdcoms from "../../../assets/img/prod-img/prdcom-1.jpg";
// import ViewModal from "../../Common/PopModal";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPerson,
  faScaleUnbalancedFlip,
  faTractor,
  faWheatAwn,
} from "@fortawesome/free-solid-svg-icons";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";

// import farmimg1 from "../../../assets/img/prod-img/floor-burner.jpg";
// import farmimg2 from "../../../assets/img/prod-img/farm-floor.jpg";
// import rumenoamazon1 from "../../../assets/img/prod-img/Castrator.jpg";
// import rumenoamazon2 from "../../../assets/img/prod-img/GoatHoofCutter.jpg";
// import rumenoamazon3 from "../../../assets/img/prod-img/Nipple.jpg";
// import rumenoamazon4 from "../../../assets/img/prod-img/WaterBowl.jpg";
// import rumenoamazon5 from "../../../assets/img/prod-img/Eartagging.jpg";
// import rumenoamazon6 from "../../../assets/img/prod-img/WeighningMachine.jpg";
// import rumenoamazon7 from "../../../assets/img/prod-img/HangingWeighingScale.jpg";
// import rumenoamazon8 from "../../../assets/img/prod-img/InfraredThermometer.jpg";
// import rumenoamazon9 from "../../../assets/img/prod-img/GreenHouseMat2.jpg";
// import humanconsumable1 from "../../../assets/img/prod-img/HyegoatMilkpowder.jpg";
// import humanconsumable2 from "../../../assets/img/prod-img/farmfreshmilk.jpg";
// import humanconsumable3 from "../../../assets/img/prod-img/goatcreamsoap.jpg";
// import goatforsale1 from "../../../assets/img/prod-img/Barbarigoat.jpg";
import ProductItem from "../../Common/Product";

const ProductSidebar = () => {
  const Data = [
    {
      name: "Tanaav Mukti",
      price: 700,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: Prdcom,
    },
    {
      name: "Tanaav Mukti",
      price: 700,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: Prdcoms,
    },
    {
      name: "Tanaav Mukti",
      price: 700,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: Prdcoms,
    },
    {
      name: "Tanaav Mukti",
      price: 700,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: Prdcoms,
    },
    {
      name: "Tanaav Mukti",
      price: 700,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: Prdcoms,
    },
  ];
  // farm equipment
  // const FarmEquipment = [
  //   {
  //     name: "Farm House Floor Burner",
  //     price: "Rs. 3000 + shipping",
  //     description:
  //       "Gas fueled Floor Burner is developed for destroying micro bacteria, virus, fungus, hidden parasites, parasites eggs & insect contamination in and around the shed. Flame can be controlled by a knob fitted in the pipe",
  //     img: farmimg1,
  //   },
  //   {
  //     name: "Plastic Slatted Floor",
  //     price: "Rs. 135 per Square feet + GST + Shipping",
  //     description:
  //       "Size 1 feet X 2 FeetThickness 8mmArea 2 square feet/pieceLoad Capacity up to 100kg (220lbs)Impact & Wear MediumLife more than 5 years ",
  //     img: farmimg2,
  //   },
  // ];


  const [animal, setAnimal] = useState(true);
 
  // const [quantity, setQuantity] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  // const onHandleChangefarmhouseequip = () => {
  //   setfarmhouseequip(true);
  //   setAnimal(false);
  //   setrumenoamazon(false);
  //   sethumanconsumable(false);
  //   setgoatforsale(false);
  // };

  const onHandleChangeanimal = () => {
    setAnimal(true);
  };


  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);
  // const Rumenoamazon = FarmEquipment.slice(indexOfFirstItem, indexOfLastItem);
  // const Goatforsale = FarmEquipment.slice(indexOfFirstItem, indexOfLastItem);

  // const openModal = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row flex-nowrap justify-content-center">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-white rounded">
            <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white">
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li
                  className="nav-item sildar my-3 ms-2"
                  onClick={onHandleChangeanimal}
                >
                  <FontAwesomeIcon
                    className=" h5 mx-2 my-0"
                    icon={faHouse}
                  />
                  <span className="ms-1 d-none d-sm-inline">
                    Animal Supplement
                  </span>
                </li>
                <li
                  className="sildar my-3 ms-2"
                  // onClick={kj}
                >
                  <FontAwesomeIcon
                    className=" h5 mx-2 my-0"
                    icon={faTractor}
                  />
                  <span className="ms-1 d-none d-sm-inline">
                    farmhouse Equipment
                  </span>
                </li>
                <li
                  className="sildar my-3 ms-2"
                  // onClick={gdg}
                >
                  <FontAwesomeIcon
                    className=" h5 mx-2 my-0"
                    icon={faAmazon}
                  />
                  <span className="ms-1 d-none d-sm-inline">
                    Rumeno with Amazon
                  </span>
                </li>
                <li
                  className="sildar my-3 ms-2"
                  // onClick={sdfd}
                >
                  <FontAwesomeIcon
                    className=" h5 mx-2 my-0"
                    icon={faPerson}
                  />
                  <span className="ms-1 d-none d-sm-inline">
                    Human Consumable
                  </span>
                </li>
                <li
                  className="sildar my-3 ms-2"
                  // onClick={vd}
                >
                  <FontAwesomeIcon
                    className=" h5 mx-2 my-0"
                    icon={faWheatAwn}
                  />
                  <span className="ms-1 d-none d-sm-inline">
                    Crop Seeds
                  </span>
                </li>
                <li
                  className="sildar my-3 ms-2"
                  // onClick={sgsdg}
                >
                  <FontAwesomeIcon
                    className=" h5 mx-2 my-0"
                    icon={faScaleUnbalancedFlip}
                  />
                  <span className="ms-1 d-none d-sm-inline">
                    Goats for Sale
                  </span>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div childrenlassName="col-md-10 product-sect p-3">
            {animal &&
              currentItems.map((s, index) => (
                <ProductItem key={index} img={s.img} name={s.name} price={s.price} description={s.description}/>
              ))}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={Math.ceil(Data.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination justify-content-center my-5"}
              activeClassName={"active"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSidebar;
