import React, { useState } from "react";
import Prdcom from "../../../assets/img/prod-img/prdcom-1.jpg";
import Prdcoms from "../../../assets/img/prod-img/prdcom-1.jpg";
import ReactStars from "react-rating-stars-component";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHouse,
  faPerson,
  faScaleUnbalancedFlip,
  faTractor,
  faWheatAwn,
} from "@fortawesome/free-solid-svg-icons";
import { faAmazon, faYoutube } from "@fortawesome/free-brands-svg-icons";

import farmimg1 from "../../../assets/img/prod-img/floor-burner.jpg";
import farmimg2 from "../../../assets/img/prod-img/farm-floor.jpg";
import rumenoamazon1 from "../../../assets/img/prod-img/Castrator.jpg";
import rumenoamazon2 from "../../../assets/img/prod-img/GoatHoofCutter.jpg";
import rumenoamazon3 from "../../../assets/img/prod-img/Nipple.jpg";
import rumenoamazon4 from "../../../assets/img/prod-img/WaterBowl.jpg";
import rumenoamazon5 from "../../../assets/img/prod-img/Eartagging.jpg";
import rumenoamazon6 from "../../../assets/img/prod-img/WeighningMachine.jpg";
import rumenoamazon7 from "../../../assets/img/prod-img/HangingWeighingScale.jpg";
import rumenoamazon8 from "../../../assets/img/prod-img/InfraredThermometer.jpg";
import rumenoamazon9 from "../../../assets/img/prod-img/GreenHouseMat2.jpg";
import humanconsumable1 from "../../../assets/img/prod-img/HyegoatMilkpowder.jpg";
import humanconsumable2 from "../../../assets/img/prod-img/farmfreshmilk.jpg";
import humanconsumable3 from "../../../assets/img/prod-img/goatcreamsoap.jpg";
import goatforsale1 from "../../../assets/img/prod-img/Barbarigoat.jpg";

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
  const FarmEquipment = [
    {
      name: "Farm House Floor Burner",
      price: "Rs. 3000 + shipping",
      description:
        "Gas fueled Floor Burner is developed for destroying micro bacteria, virus, fungus, hidden parasites, parasites eggs & insect contamination in and around the shed. Flame can be controlled by a knob fitted in the pipe",
      img: farmimg1,
    },
    {
      name: "Plastic Slatted Floor",
      price: "Rs. 135 per Square feet + GST + Shipping",
      description:
        "Size 1 feet X 2 FeetThickness 8mmArea 2 square feet/pieceLoad Capacity up to 100kg (220lbs)Impact & Wear MediumLife more than 5 years ",
      img: farmimg2,
    },
  ];
  const RumenoAmazon = [
    {
      name: "Castrator",
      img: rumenoamazon1,
    },
    {
      name: "Goat Hoof Cutter",
      img: rumenoamazon2,
    },
    {
      name: "Goat Nipple ",
      img: rumenoamazon3,
    },
    {
      name: "Automatic Water Bowl ",
      img: rumenoamazon4,
    },
    {
      name: "Animal Ear Tagging ",
      img: rumenoamazon5,
    },
    {
      name: "Large Platform Weighing Machine ",
      img: rumenoamazon6,
    },
    {
      name: "Hanging Weighing Scale",
      img: rumenoamazon7,
    },
    {
      name: "Infrared Thermometer",
      img: rumenoamazon8,
    },
    {
      name: "Green House Net",
      img: rumenoamazon9,
    },
  ];
  const HumanConsumable = [
    {
      name: "Rumeno Goat Milk Powder",
      img: humanconsumable1,
    },
    {
      name: "Rumeno Farm Goat Fresh Milk",
      img: humanconsumable2,
    },
    {
      name: "Goat Milk Cream Soap",
      img: humanconsumable3,
    },
  ];
  const GoatForSale = [
    {
      name: "Goat",
      img: goatforsale1,
    },
  ];

  const [animal, setAnimal] = useState(true);
  const [farmhouseequip, setfarmhouseequip] = useState(false);
  const [rumenoamazon, setrumenoamazon] = useState(false);
  const [humanconsumable, sethumanconsumable] = useState(false);
  const [goatforsale, setgoatforsale] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const onHandleChangefarmhouseequip = () => {
    setfarmhouseequip(true);
    setAnimal(false);
    setrumenoamazon(false);
    sethumanconsumable(false);
    setgoatforsale(false);
  };

  const onHandleChangeanimal = () => {
    setAnimal(true);
    setfarmhouseequip(false);
    setrumenoamazon(false);
    sethumanconsumable(false);
    setgoatforsale(false);
  };
  const onHandleChangerunemoamazon = () => {
    setrumenoamazon(true);
    setAnimal(false);
    setfarmhouseequip(false);
    sethumanconsumable(false);
    setgoatforsale(false);
  };
  const onHandleChangehumanconsumable = () => {
    sethumanconsumable(true);
    setrumenoamazon(false);
    setAnimal(false);
    setfarmhouseequip(false);
    setgoatforsale(false);
  };
  const onHandleChangegoatforsale = () => {
    setgoatforsale(true);
    sethumanconsumable(false);
    setrumenoamazon(false);
    setAnimal(false);
    setfarmhouseequip(false);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);
  const Farmequip = FarmEquipment.slice(indexOfFirstItem, indexOfLastItem);
  // const Rumenoamazon = FarmEquipment.slice(indexOfFirstItem, indexOfLastItem);
  // const Goatforsale = FarmEquipment.slice(indexOfFirstItem, indexOfLastItem);

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
                    className="text-dark h5 mx-2 my-0"
                    icon={faHouse}
                  />
                  <span className="ms-1 d-none d-sm-inline text-dark">
                    Animal Supplement
                  </span>
                </li>
                <li
                  className="sildar my-3 ms-2"
                  onClick={onHandleChangefarmhouseequip}
                >
                  <FontAwesomeIcon
                    className="text-dark h5 mx-2 my-0"
                    icon={faTractor}
                  />
                  <span className="ms-1 d-none d-sm-inline text-dark">
                    farmhouse Equipment
                  </span>
                </li>
                <li
                  className="sildar my-3 ms-2"
                  onClick={onHandleChangerunemoamazon}
                >
                  <FontAwesomeIcon
                    className="text-dark h5 mx-2 my-0"
                    icon={faAmazon}
                  />
                  <span className="ms-1 d-none d-sm-inline text-dark">
                    Rumeno with Amazon
                  </span>
                </li>
                <li
                  className="sildar my-3 ms-2"
                  onClick={onHandleChangehumanconsumable}
                >
                  <FontAwesomeIcon
                    className="text-dark h5 mx-2 my-0"
                    icon={faPerson}
                  />
                  <span className="ms-1 d-none d-sm-inline text-dark">
                    Human Consumable
                  </span>
                </li>
                <li
                  className="sildar my-3 ms-2"
                  onClick={onHandleChangefarmhouseequip}
                >
                  <FontAwesomeIcon
                    className="text-dark h5 mx-2 my-0"
                    icon={faWheatAwn}
                  />
                  <span className="ms-1 d-none d-sm-inline text-dark">
                    Crop Seeds
                  </span>
                </li>
                <li
                  className="sildar my-3 ms-2"
                  onClick={onHandleChangegoatforsale}
                >
                  <FontAwesomeIcon
                    className="text-dark h5 mx-2 my-0"
                    icon={faScaleUnbalancedFlip}
                  />
                  <span className="ms-1 d-none d-sm-inline text-dark">
                    Goats for Sale
                  </span>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div className="col-md-10 product-sect p-3">
            {animal &&
              currentItems.map((s, index) => (
                <div className="col py-1" key={index}>
                  <div className="bg-light h-50 rounded text-dark bg-opacity-50 p-2">
                    <div className="row">
                      <div className="col-sm-3 p-2">
                        <img src={s.img} alt="Loading" className="w-100" />
                      </div>
                      <div className="col-sm-9 p-2 ps-5">
                        <div className="fs-3">{s.name}</div>
                        <div className="fs-4 mt-2">{s.price} Rs /-</div>
                        <div className="mt-2">{s.description}</div>
                        <div className="mt-2">
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                          />
                        </div>
                        <div className="mt-2">
                          <div className="quantity-container">
                            <div
                              className="quantity-button"
                              id="decrease"
                              onClick={decreaseQuantity}
                            >
                              -
                            </div>
                            <input
                              type="text"
                              className="quantity-input"
                              value={quantity}
                              readOnly
                            />
                            <div
                              className="quantity-button"
                              id="increase"
                              onClick={increaseQuantity}
                            >
                              +
                            </div>
                          </div>
                        </div>
                        <FontAwesomeIcon
                          className="mx-2 my-3 h3 text-primary"
                          type="button"
                          icon={faYoutube}
                          beat
                        />
                        <FontAwesomeIcon
                          className="mx-2 my-3 h3 text-primary"
                          type="button"
                          icon={faEye}
                          beat
                        />
                        <div className="prd-btn w-50">
                          <button className="btn btn-success w-100 my-2">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {farmhouseequip &&
              Farmequip.map((f, index) => (
                <div className="col py-1" key={index}>
                  <div className="bg-light h-50 rounded text-dark bg-opacity-50 p-2">
                    <div className="row">
                      <div className="col-sm-3 p-2">
                        <img src={f.img} alt="Loading" className="w-100" />
                      </div>
                      <div className="col-sm-9 p-2 ps-5">
                        <div className="fs-3">{f.name}</div>
                        <div className="fs-4 mt-2">{f.price}</div>
                        <div className="mt-2">{f.description}</div>
                        <div className="mt-2">
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                          />
                        </div>
                        <div className="mt-2">
                          <div className="quantity-container">
                            <div
                              className="quantity-button"
                              id="decrease"
                              onClick={decreaseQuantity}
                            >
                              -
                            </div>
                            <input
                              type="text"
                              className="quantity-input"
                              value={quantity}
                              readOnly
                            />
                            <div
                              className="quantity-button"
                              id="increase"
                              onClick={increaseQuantity}
                            >
                              +
                            </div>
                          </div>
                        </div>
                        <FontAwesomeIcon
                          className="mx-2 my-3 h3 text-primary"
                          type="button"
                          icon={faYoutube}
                          beat
                        />
                        <FontAwesomeIcon
                          className="mx-2 my-3 h3 text-primary"
                          type="button"
                          icon={faEye}
                          beat
                        />
                        <div className="w-50">
                          <button className="btn btn-success w-100 my-2">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {rumenoamazon &&
              RumenoAmazon.map((r, index) => (
                <div className="col py-1" key={index}>
                  <div className="bg-light h-50 rounded text-dark bg-opacity-50 p-2">
                    <div className="row">
                      <div className="col-sm-3 p-2">
                        <img src={r.img} alt="Loading" className="w-100" />
                      </div>
                      <div className="col-sm-9 p-2 ps-5">
                        <div className="fs-3">{r.name}</div>
                        <div className="mt-2">
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                          />
                        </div>
                        <div className="mt-2">
                          <div className="quantity-container">
                            <div
                              className="quantity-button"
                              id="decrease"
                              onClick={decreaseQuantity}
                            >
                              -
                            </div>
                            <input
                              type="text"
                              className="quantity-input"
                              value={quantity}
                              readOnly
                            />
                            <div
                              className="quantity-button"
                              id="increase"
                              onClick={increaseQuantity}
                            >
                              +
                            </div>
                          </div>
                        </div>
                        <FontAwesomeIcon
                          className="mx-2 my-3 h3 text-primary"
                          type="button"
                          icon={faYoutube}
                          beat
                        />
                        <FontAwesomeIcon
                          className="mx-2 my-3 h3 text-primary"
                          type="button"
                          icon={faEye}
                          beat
                        />
                        <div className="w-50">
                          <button className="btn btn-success w-100 my-2">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {humanconsumable &&
              HumanConsumable.map((r, index) => (
                <div className="col py-1" key={index}>
                  <div className="bg-light h-50 rounded text-dark bg-opacity-50 p-2">
                    <div className="row">
                      <div className="col-sm-3 p-2">
                        <img src={r.img} alt="Loading" width={200} />
                      </div>
                      <div className="col-sm-9 p-2 ps-5">
                        <div className="fs-3">{r.name}</div>
                        <div className="mt-2">
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                          />
                        </div>
                        <div className="mt-2">
                          <div className="quantity-container">
                            <div
                              className="quantity-button"
                              id="decrease"
                              onClick={decreaseQuantity}
                            >
                              -
                            </div>
                            <input
                              type="text"
                              className="quantity-input"
                              value={quantity}
                              readOnly
                            />
                            <div
                              className="quantity-button"
                              id="increase"
                              onClick={increaseQuantity}
                            >
                              +
                            </div>
                          </div>
                        </div>
                        <FontAwesomeIcon
                          className="mx-2 my-3 h3 text-primary"
                          type="button"
                          icon={faYoutube}
                          beat
                        />
                        <FontAwesomeIcon
                          className="mx-2 my-3 h3 text-primary"
                          type="button"
                          icon={faEye}
                          beat
                        />
                        <div className="w-50">
                          <button className="btn btn-success w-100 my-2">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {humanconsumable &&
              HumanConsumable.map((r, index) => (
                <div className="col py-1" key={index}>
                  <div className="bg-light h-50 rounded text-dark bg-opacity-50 p-2">
                    <div className="row">
                      <div className="col-sm-3 p-2">
                        <img src={r.img} alt="Loading" width={200} />
                      </div>
                      <div className="col-sm-9 p-2 ps-5">
                        <div className="fs-3">{r.name}</div>
                        <div className="mt-2">
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                          />
                        </div>
                        <div className="mt-2">
                          <div className="quantity-container">
                            <div
                              className="quantity-button"
                              id="decrease"
                              onClick={decreaseQuantity}
                            >
                              -
                            </div>
                            <input
                              type="text"
                              className="quantity-input"
                              value={quantity}
                              readOnly
                            />
                            <div
                              className="quantity-button"
                              id="increase"
                              onClick={increaseQuantity}
                            >
                              +
                            </div>
                          </div>
                        </div>
                        <FontAwesomeIcon
                          className="mx-2 my-3 h3 text-primary"
                          type="button"
                          icon={faYoutube}
                          beat
                        />
                        <FontAwesomeIcon
                          className="mx-2 my-3 h3 text-primary"
                          type="button"
                          icon={faEye}
                          beat
                        />
                        <div className="w-50">
                          <button className="btn btn-success w-100 my-2">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {goatforsale &&
              GoatForSale.map((r, index) => (
                <div className="col py-1" key={index}>
                  <div className="bg-light h-50 rounded text-dark bg-opacity-50 p-2">
                    <div className="row">
                      <div className="col-sm-3 p-2">
                        <img src={r.img} alt="Loading" width={200} />
                      </div>
                      <div className="col-sm-9 p-2 ps-5">
                        <div className="fs-3">{r.name}</div>
                        <div className="mt-2">
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                          />
                        </div>
                        <div className="mt-2">
                          <div className="quantity-container">
                            <div
                              className="quantity-button"
                              id="decrease"
                              onClick={decreaseQuantity}
                            >
                              -
                            </div>
                            <input
                              type="text"
                              className="quantity-input"
                              value={quantity}
                              readOnly
                            />
                            <div
                              className="quantity-button"
                              id="increase"
                              onClick={increaseQuantity}
                            >
                              +
                            </div>
                          </div>
                        </div>
                        <FontAwesomeIcon
                          className="mx-2 my-3 h3 text-primary"
                          type="button"
                          icon={faYoutube}
                          beat
                        />
                        <FontAwesomeIcon
                          className="mx-2 my-3 h3 text-primary"
                          type="button"
                          icon={faEye}
                          beat
                        />
                        <div className="w-50">
                          <button className="btn btn-success w-100 my-2">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
