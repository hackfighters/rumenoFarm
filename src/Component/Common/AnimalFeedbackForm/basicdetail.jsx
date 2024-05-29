import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { UserContext } from "../Modal/logusecont";
import { Link, NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faChevronRight,
  faPen,
  faPlus,
  faRuler,
  faTrash,
  faVenusMars,
  faWeightScale,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const MultiStepForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { selectedAnimal,FarmDataUMKid, setFarmDataUMKid } =
    useContext(UserContext);
  const [maindata, setMainData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [selectedItemData, setSelectedItemData] = useState({});


  const filteredData = maindata.filter((item) =>
    (item.uniquename?.includes(searchInput.toLowerCase()) || false) ||
    (item.age?.includes(searchInput.toLowerCase()) || false)
  );
  
  

  const openModal = () => {
    setModalIsOpen(true);
    setValue("uniquename", "");
    setValue("age", "");
    setValue("gender", "");
    setValue("height", "");
    setValue("weight", "");
    setValue("date_of_purchesing", "");
    setValue("pregnancy_detail", "");
    setValue("male_detail", "");
    setValue("body_score", "");
    setValue("basic_comment", "");
    setSelectedItem(null);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setValue("uniquename", "");
    setValue("age", "");
    setValue("gender", "");
    setValue("height", "");
    setValue("weight", "");
    setValue("date_of_purchesing", "");
    setValue("pregnancy_detail", "");
    setValue("male_detail", "");
    setValue("body_score", "");
    setValue("basic_comment", "");

    setSelectedItem(null);
  };
  const [showprntdetl, setshowprntdetl] = useState(false);

  const openshowprntdetl = (item) => {
    setSelectedItemData(item);
    setshowprntdetl(true);
  };

  const closeshowprntdetl = () => {
    setshowprntdetl(false);
  };
  let Uid = ''
  let finalData;
  const onSubmit = async (data) => {
    if (selectedItem !== null) {
      // Edit existing data
      const updatedData = [...maindata];
      
      finalData = {
        animal: selectedAnimal,
        kid: "7700" + (selectedItem + 1),
        mid: selectedItem + 1,
        uID:FarmDataUMKid.uID,
        uniquename: data.uniquename,
        age: data.age,
        gender: data.gender,
        height: data.height,
        weight: data.weight,
        date_of_purchesing: data.date_of_purchesing,
        pregnancy_detail: data.pregnancy_detail,
        male_detail: data.male_detail,
        body_score: data.body_score,
        basic_comment: data.basic_comment,
      };
      updatedData[selectedItem] = finalData;
      setMainData(updatedData);
      console.log(finalData,updatedData);
      try {
        const response = await axios.put('http://192.168.1.14:5000/basic_details',finalData)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
      setSelectedItem(null);
    } else {
      // Add new data
      
      finalData = {
        animal: selectedAnimal,
        kid: "7700" + (maindata.length + 1),
        mid: maindata.length + 1,
        uID:FarmDataUMKid.uID,
        uniquename: data.uniquename,
        age: data.age,
        gender: data.gender,
        height: data.height,
        weight: data.weight,
        date_of_purchesing: data.date_of_purchesing,
        pregnancy_detail: data.pregnancy_detail,
        male_detail: data.male_detail,
        body_score: data.body_score,
        basic_comment: data.basic_comment,
      };
      setMainData([...maindata, finalData]);
      console.log(finalData)
      try {
        const response = await axios.post('http://192.168.1.14:5000/basic_details',finalData)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }

    }
    // Set finalData in cookies
    Cookies.set("AnimalCookiesData", JSON.stringify(finalData));
    console.log(Cookies.get("AnimalCookiesData"));
    setModalIsOpen(false);
  };

  const AddMoreDtl = (index)=>{
    const basicDtl ={ kid:maindata[index].kid,mid:maindata[index].mid}; // Retrieve the item before deletion
    
    setFarmDataUMKid((prev) => ({ ...prev, ...basicDtl }));
    let b ={ selectedAnimal, Uid:maindata[index].Uid}
    console.log(b)
    Cookies.set("AnimalCookiesData", JSON.stringify(b));
    console.log(Cookies.get("AnimalCookiesData"));
  }

  
  const handleEdit = (index) => {
    setValue("uniquename", maindata[index].uniquename);
    setValue("age", maindata[index].age);
    setValue("gender", maindata[index].gender);
    setValue("height", maindata[index].height);
    setValue("weight", maindata[index].weight);
    setValue("date_of_purchesing", maindata[index].date_of_purchesing);
    setValue("pregnancy_detail", maindata[index].pregnancy_detail);
    setValue("male_detail", maindata[index].male_detail);
    setValue("body_score", maindata[index].body_score);
    setValue("basic_comment", maindata[index].basic_comment);
    setSelectedItem(index);
    setModalIsOpen(true);
  };

  const handleDelete = async(index) => {
    const deletedItem = maindata[index]; // Retrieve the item before deletion
    const updatedData = [...maindata];
    updatedData.splice(index, 1);
    setMainData(updatedData);
    console.log(deletedItem); // Log the deleted item
    try {
      const response = await axios.post('http://192.168.1.14:5000/basic_details',deletedItem)
      console.log(response.data)
  } catch (error) {
      console.log(error)
  }
  };
  return (
    <section className="home-backgroundColor animal-bg-size">
      <div className="container-fluid ">
        <Link className="btn btn-secondary w-auto m-3" to='/home' >home</Link>
        <div className="container m-0-auto  px-0">
          <div className="py-5 w-75 d-flex align-items-center justify-content-between m-auto">
          <button
            type="button"
            onClick={openModal}
            className="btn btn-secondary w-auto"
          >
            Create New
          </button>
      <input className="form-control mr-sm-2 w-25" type="search" placeholder="Search by Name or Age" aria-label="Search" value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}/>
          </div>
          <div className="row justify-content-center">
            {/* <div className="row"> */}

            {filteredData.map((item, index) => (
              <section className="detail-body m-3 p-3 col-lg-3 shadow rounded abt-sect">
                <ul className="list-unstyled" key={item.id}>
                  <li className="mx-2 mb-3 fs-2 d-flex justify-content-between align-items-center">
                    <span className="text-uppercase">{item.uniquename}</span>
                    <span
                      onClick={() => openshowprntdetl(item)}
                      className="fs-6 text-success d-flex align-items-center  px-1 rounded"
                    >
                      More
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </li>
                  <hr />
                  <div className="row justify-content-evenly w-75">
                    <span className="col-lg-12 d-flex align-items-center  my-2">
                      <FontAwesomeIcon
                        className="bg-secondary p-2 rounded mx-2 text-white"
                        icon={faRuler}
                      />
                      <strong className="d-block">Height</strong>{" "}
                      <span className="mx-3"> {item.height} Feet </span>
                    </span>

                    <span className="col-lg-12 d-flex align-items-center  text-center my-2">
                      <FontAwesomeIcon
                        className="bg-secondary p-2 rounded mx-2  text-white"
                        icon={faWeightScale}
                      />
                      <strong className="d-block">Weight</strong>{" "}
                      <span className="mx-3"> {item.weight} Kg </span>
                    </span>
                    <span className="col-lg-12 d-flex align-items-center  text-center my-2">
                      <FontAwesomeIcon
                        className="bg-secondary p-2 rounded mx-2  text-white"
                        icon={faVenusMars}
                      />
                      <strong className="d-block">Gender</strong>{" "}
                      <span className="mx-3"> {item.gender} </span>
                    </span>
                    <span className="col-lg-12 d-flex align-items-center  text-center my-2">
                      <FontAwesomeIcon
                        className="bg-secondary p-2 rounded mx-2  text-white"
                        icon={faCalendar}
                      />
                      <strong className="d-block">Age</strong>{" "}
                      <span className="mx-3"> {item.age} </span>
                    </span>
                  </div>
                </ul>
                {showprntdetl && (
                  <Modal
                    show={showprntdetl}
                    onHide={closeshowprntdetl}
                    size="md"
                  >
                    <Modal.Header>
                      <button
                        className="btn btn-secondary w-auto"
                        onClick={closeshowprntdetl}
                      >
                        close
                      </button>
                    </Modal.Header>
                    <Modal.Body className="modal-content">
                      <ul className="px-0">
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg2 px-2">
                          <span>
                            {" "}
                            <strong> MId : </strong>
                          </span>{" "}
                          <span> {selectedItemData.mid}</span>{" "}
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg1 px-2">
                          <span>
                            <strong> Name : </strong>
                          </span>{" "}
                          <span>{selectedItemData.uniquename}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg2 px-2">
                          <span>
                            <strong> Age : </strong>
                          </span>{" "}
                          <span>{selectedItemData.age}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg1 px-2">
                          <span>
                            <strong> Gender : </strong>
                          </span>{" "}
                          <span>{selectedItemData.gender}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg2 px-2">
                          <span>
                            <strong> Height : </strong>
                          </span>{" "}
                          <span>{selectedItemData.height}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg1 px-2">
                          <span>
                            <strong> Weight : </strong>
                          </span>{" "}
                          <span>{selectedItemData.weight}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg2 px-2">
                          <span>
                            <strong> Male Detail : </strong>
                          </span>{" "}
                          <span>{selectedItemData.male_detail}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg1 px-2">
                          <span>
                            <strong> Body Score: </strong>
                          </span>{" "}
                          <span>{selectedItemData.body_score}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg2 px-2">
                          <span>
                            <strong> Date of Purchasing : </strong>
                          </span>{" "}
                          <span>{selectedItemData.date_of_purchesing}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg1 px-2">
                          <span>
                            <strong> female detail : </strong>
                          </span>{" "}
                          <span>{selectedItemData.pregnancy_detail}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg2 px-2">
                          <span>
                            <strong> Comment : </strong>
                          </span>{" "}
                          <span>{selectedItemData.basic_comment}</span>
                        </li>
                      </ul>
                    </Modal.Body>
                  </Modal>
                )}
                <hr />
                <div className="justify-content-between d-flex">
                  <button
                    onClick={() => handleEdit(index)}
                    className="btn btn-secondary w-auto"
                  >
                    <FontAwesomeIcon className="me-2" icon={faPen} />
                    Edit
                  </button>
                  <div
                    onClick={() => handleDelete(index)}
                    className="bg-danger px-3 pe-auto rounded d-flex align-items-center"
                  >
                    <FontAwesomeIcon className="text-white" icon={faTrash} />
                  </div>
                  <NavLink to="/AnimalDetailTab" >
                    <button
                      type="submit"
                      onClick={() => AddMoreDtl(index)}
                      className="btn btn-outline-primary w-auto"
                    >
                      {/* Final Submit */}
                      Add More <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </NavLink>
                </div>
              </section>
            ))}

            {/* </div> */}
            <Modal show={modalIsOpen} onHide={closeModal} size="xl">
              <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row justify-content-center">
                    <h2 className="text-center">
                      {selectedItem !== null ? "Edit" : "Fill"} Basic Details of { selectedAnimal}
                    </h2>

                    <div className="col-lg-5 my-2">
                      <label className="form-label" for="uniquename">
                        Unique Name
                      </label>
                      <input
                        name="uniquename"
                        placeholder="Unique Name"
                        type="textt"
                        id="uniquename"
                        className="form-control"
                        value={maindata.uniquename}
                        {...register("uniquename")}
                      />
                    </div>

                    <div className="col-lg-5 my-2">
                      <label className="form-label" for="age">
                        Age
                      </label>
                      <input
                        name="age"
                        placeholder="Age"
                        type="number"
                        id="age"
                        className="form-control"
                        value={maindata.age}
                        {...register("age")}
                      />
                    </div>
                    <div className="col-lg-5 my-2">
                      <label className="form-label" for="height">
                        height
                      </label>
                      <input
                        name="height"
                        placeholder="height"
                        type="number"
                        id="height"
                        className="form-control"
                        value={maindata.height}
                        {...register("height")}
                      />
                    </div>
                    <div className="col-lg-5 my-2">
                      <label className="form-label" for="dateofpurchesing">
                        Date Of Purchasing
                      </label>
                      <input
                        name="dateofpurchesing"
                        placeholder="date of purchesing"
                        type="date"
                        id="dateofpurchesing"
                        className="form-control"
                        value={maindata.date_of_purchesing}
                        {...register("date_of_purchesing")}
                      />
                    </div>

                    <div className="col-lg-5 my-2">
                      <label className="form-label d-block" htmlFor="gender">
                        Gender
                      </label>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="inlineRadio1"
                          value="doe"
                          {...register("gender")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          Doe
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="inlineRadio2"
                          value="buck"
                          {...register("gender")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        >
                          Buck
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="inlineRadio3"
                          value="wether"
                          {...register("gender")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio3"
                        >
                          Wether
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-5 my-2">
                      <label className="form-label" htmlFor="weight">
                        Weight
                      </label>
                      <input
                        name="weight"
                        placeholder="Weight"
                        type="number"
                        id="weight"
                        className="form-control"
                        value={maindata.weight}
                        {...register("weight")}
                      />
                    </div>
                    {/* <div className="col-lg-5 my-2">
                    <div>
                      <label className="form-label px-2" htmlFor="castration">
                        Castration Date
                      </label>
                      <span className="h-6">(not able to reproduce)</span>
                    </div>
                    <input
                      name="castration"
                      placeholder="Castration Date"
                      type="date"
                      id="forcastration"
                      className="form-control"
                      {...register("castration")}
                      onChange={(e) => {
                        // setValue('castration', e.target.value);
                        handleInputChange("castration", e.target.value);
                      }}
                    />
                  </div> */}
                    <div className="col-lg-5 my-2">
                      <label className="form-label" for="selectfemale">
                        If Female Pregnancy Details
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={maindata.pregnancy_detail}
                        {...register("pregnancy_detail")}
                      >
                        <option selected disabled>
                          select pregnancy Detail
                        </option>
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="1">5</option>
                        <option value="notpregnent">not pregnent</option>
                        <option value="notconfirm">not confirm</option>
                      </select>
                    </div>
                    <div className="col-lg-5 my-2">
                      <label className="form-label" for="selectmale">
                        Select male detail
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={maindata.maledetail}
                        {...register("male_detail")}
                      >
                        <option selected disabled>
                          select if male
                        </option>
                        <option value="wheather">wheather</option>
                        <option value="breeder">breeder</option>
                      </select>
                    </div>
                    <div className="col-lg-5 my-2">
                      <label className="form-label" htmlFor="bodyscore">
                        Body Score
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={maindata.body_score}
                        {...register("body_score")}
                      >
                        <option defaultValue>
                          Open this and select body score
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div className="col-lg-5 my-2">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Any Comment
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        {...register("basic_comment")}
                        rows="3"
                      ></textarea>
                    </div>
                  </div>

                  <div className="row">
                    <div className=" d-flex justify-content-center">
                      <button
                        className="btn btn-primary mx-3 w-25"
                        // onClick={handleSave}
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiStepForm;
