import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { UserContext } from "../Modal/logusecont";
import { NavLink } from "react-router-dom";
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

const MultiStepForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { selectedAnimal, setAnimalData, AnimalData, setprntUid, prntUid } =
    useContext(UserContext);

  const [maindata, setMainData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [searchInput, setSearchInput] = useState("");

  const filteredData = maindata.filter((item) =>
    item.uniquename.includes(searchInput.toLowerCase()) || item.age.includes(searchInput.toLowerCase())
  );

  const openModal = () => {
    setModalIsOpen(true);
    setValue("uniquename", "");
    setValue("age", "");
    setValue("gender", "");
    setValue("height", "");
    setValue("weight", "");
    setValue("dateofpurchesing", "");
    setValue("pregnancydetail", "");
    setValue("maledetail", "");
    setValue("bodyscore", "");
    setValue("basiccomment", "");
    setSelectedItem(null);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setValue("uniquename", "");
    setValue("age", "");
    setValue("gender", "");
    setValue("height", "");
    setValue("weight", "");
    setValue("dateofpurchesing", "");
    setValue("pregnancydetail", "");
    setValue("maledetail", "");
    setValue("bodyscore", "");
    setValue("basiccomment", "");

    setSelectedItem(null);
  };
  const [showprntdetl, setshowprntdetl] = useState(false);

  const openshowprntdetl = () => {
    setshowprntdetl(true);
  };

  const closeshowprntdetl = () => {
    setshowprntdetl(false);
  };
  let Uid = ''
  let finalData;
  const onSubmit = (data) => {
    if (selectedItem !== null) {
      // Edit existing data
      const updatedData = [...maindata];
      updatedData[selectedItem] = data;
      setMainData(updatedData);
      finalData = {
        animal: selectedAnimal,
        Uid: "7700" + (selectedItem + 1),
        mid: selectedItem + 1,
        uniquename: data.uniquename,
        age: data.age,
        gender: data.gender,
        height: data.height,
        weight: data.weight,
        dateofpurchesing: data.dateofpurchesing,
        pregnancydetail: data.pregnancydetail,
        maledetail: data.maledetail,
        bodyscore: data.bodyscore,
        basiccomment: data.basiccomment,
      };
      setSelectedItem(null);
    } else {
      // Add new data
      setMainData([...maindata, data]);
      finalData = {
        animal: selectedAnimal,
        Uid: "7700" + (maindata.length + 1),
        mid: maindata.length + 1,
        uniquename: data.uniquename,
        age: data.age,
        gender: data.gender,
        height: data.height,
        weight: data.weight,
        dateofpurchesing: data.dateofpurchesing,
        pregnancydetail: data.pregnancydetail,
        maledetail: data.maledetail,
        bodyscore: data.bodyscore,
        basiccomment: data.basiccomment,
      };
      setMainData([...maindata, finalData]);

    }
    console.log(data,maindata)
    // Set finalData in cookies
    Cookies.set("AnimalCookiesData", JSON.stringify(finalData));
    console.log(Cookies.get("AnimalCookiesData"));
    setModalIsOpen(false);
  };

  const AddMoreDtl = (index)=>{
    let b ={ selectedAnimal, Uid:maindata[index].Uid}
    console.log(b)
    Cookies.set("AnimalCookiesData", JSON.stringify(b));
    console.log(Cookies.get("AnimalCookiesData"));
  }

  // const onSubmit = (data) => {
  //   if (selectedItem !== null) {
  //     const updatedData = [...goatdata];
  //     updatedData[selectedItem] = data;
  //     setMainData(updatedData);
  //   const testMainData = {
  //     animal: selectedAnimal,
  //     Uid: "7700" + (selectedItem + 1),
  //     mid: selectedItem + 1,
  //     uniquename: data.uniquename,
  //     age: data.age,
  //     gender: data.gender,
  //     heating: brddata.heating,
  //     duedate: brddata.duedate,
  //     heatdate: brddata.heatdate,
  //     breeddate: brddata.breeddate,
  //     cid: Ucaddkid.cid,
  //     birthdate: Ucaddkid.birthdate,
  //     birthtype: Ucaddkid.birthtype,
  //     birthweight: Ucaddkid.birthweight,
  //     breed: Ucaddkid.breed,
  //     castration: Ucaddkid.castration,
  //     basiccomment: Ucaddkid.basiccomment,
  //     kidgender: Ucaddkid.kidgender,
  //     kidage: Ucaddkid.kidage,
  //     kidcode: Ucaddkid.kidcode,
  //     kidscore: Ucaddkid.kidscore,
  //     kiduniquename: Ucaddkid.kiduniquename,
  //     kidweight: Ucaddkid.kidweight,
  //     motherage: Ucaddkid.motherage,
  //     motherweandate: Ucaddkid.motherweandate,
  //     motherweanweight: Ucaddkid.motherweanweight,
  //     weandate: Ucaddkid.weandate,
  //     weanweight: Ucaddkid.weanweight,
  //     milkforkid: Ucaddkid.milkforkid,
  //     milkvolume: Ucaddkid.milkvolume,
  //     milkdate: Ucaddkid.milkdate,
  //     postweandate: UcPostWean.postweandate,
  //     postweanweight: UcPostWean.postweanweight,
  //     postbodyscore: UcPostWean.postbodyscore,
  //     postweanbasiccomment: UcPostWean.postweanbasiccomment,
  //     vaccine: Ucvaccine.vaccine,
  //     vaccinedate: Ucvaccine.vaccinedate,
  //   };
  //   console.log(testMainData);
  // } else {
  //   setMainData([...goatdata, data]);
  //   const testMainData = {
  //     animal: selectedAnimal,
  //     Uid: "7700" + (goatdata.length + 1),
  //     mid: goatdata.length + 1,
  //     uniquename: data.uniquename,
  //     age: data.age,
  //     gender: data.gender,
  //     heating: brddata.heating,
  //     duedate: brddata.duedate,
  //     heatdate: brddata.heatdate,
  //     breeddate: brddata.breeddate,
  //     cid: Ucaddkid.cid,
  //     birthdate: Ucaddkid.birthdate,
  //     birthtype: Ucaddkid.birthtype,
  //     birthweight: Ucaddkid.birthweight,
  //     breed: Ucaddkid.breed,
  //     castration: Ucaddkid.castration,
  //     basiccomment: Ucaddkid.basiccomment,
  //     kidgender: Ucaddkid.kidgender,
  //     kidage: Ucaddkid.kidage,
  //     kidcode: Ucaddkid.kidcode,
  //     kidscore: Ucaddkid.kidscore,
  //     kiduniquename: Ucaddkid.kiduniquename,
  //     kidweight: Ucaddkid.kidweight,
  //     motherage: Ucaddkid.motherage,
  //     motherweandate: Ucaddkid.motherweandate,
  //     motherweanweight: Ucaddkid.motherweanweight,
  //     weandate: Ucaddkid.weandate,
  //     weanweight: Ucaddkid.weanweight,
  //     milkforkid: Ucaddkid.milkforkid,
  //     milkvolume: Ucaddkid.milkvolume,
  //     milkdate: Ucaddkid.milkdate,
  //     postweandate: UcPostWean.postweandate,
  //     postweanweight: UcPostWean.postweanweight,
  //     postbodyscore: UcPostWean.postbodyscore,
  //     postweanbasiccomment: UcPostWean.postweanbasiccomment,
  //     vaccine: Ucvaccine.vaccine,
  //     vaccinedate: Ucvaccine.vaccinedate,
  //   };
  //   console.log(testMainData);
  // }
  // setModalIsOpen(false);

  //   // console.log(Ucaddkid);
  //   // console.log(testMainData);
  //   // console.log(data);
  // };

  const handleEdit = (index) => {
    setValue("uniquename", maindata[index].uniquename);
    setValue("age", maindata[index].age);
    setValue("gender", maindata[index].gender);
    setValue("height", maindata[index].height);
    setValue("weight", maindata[index].weight);
    setValue("dateofpurchesing", maindata[index].dateofpurchesing);
    setValue("pregnancydetail", maindata[index].pregnancydetail);
    setValue("maledetail", maindata[index].maledetail);
    setValue("bodyscore", maindata[index].bodyscore);
    setValue("basiccomment", maindata[index].basiccomment);
    setSelectedItem(index);
    setModalIsOpen(true);
  };

  const handleDelete = (index) => {
    const updatedData = [...maindata];
    updatedData.splice(index, 1);
    setMainData(updatedData);
  };

  return (
    <section className="home-backgroundColor animal-bg-size">
      <div className="container-fluid ">
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
                      onClick={openshowprntdetl}
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
                          <span> {item.id}</span>{" "}
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg1 px-2">
                          <span>
                            <strong> Name : </strong>
                          </span>{" "}
                          <span>{item.uniquename}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg2 px-2">
                          <span>
                            <strong> Age : </strong>
                          </span>{" "}
                          <span>{item.age}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg1 px-2">
                          <span>
                            <strong> Gender : </strong>
                          </span>{" "}
                          <span>{item.gender}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg2 px-2">
                          <span>
                            <strong> Height : </strong>
                          </span>{" "}
                          <span>{item.height}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg1 px-2">
                          <span>
                            <strong> Weight : </strong>
                          </span>{" "}
                          <span>{item.weight}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg2 px-2">
                          <span>
                            <strong> Male Detail : </strong>
                          </span>{" "}
                          <span>{item.maledetail}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg1 px-2">
                          <span>
                            <strong> Body Score: </strong>
                          </span>{" "}
                          <span>{item.bodyscore}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg2 px-2">
                          <span>
                            <strong> Date of Purchasing : </strong>
                          </span>{" "}
                          <span>{item.dateofpurchesing}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg1 px-2">
                          <span>
                            <strong> femaledetail : </strong>
                          </span>{" "}
                          <span>{item.pregnancydetail}</span>
                        </li>
                        <li className="mx-4 my-2 d-flex justify-content-between rounded animal-bg2 px-2">
                          <span>
                            <strong> Comment : </strong>
                          </span>{" "}
                          <span>{item.basiccomment}</span>
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
                    onClick={handleDelete}
                    className="bg-danger px-3 pe-auto rounded d-flex align-items-center"
                  >
                    <FontAwesomeIcon className="text-white" icon={faTrash} />
                  </div>
                  <NavLink to="/AnimalDetailTab">
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
                      {selectedItem !== null ? "Edit" : "Fill"} Basic Details of
                      Goat
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
                        placeholder="dateofpurchesing"
                        type="number"
                        id="dateofpurchesing"
                        className="form-control"
                        value={maindata.dateofpurchesing}
                        {...register("dateofpurchesing")}
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
                        value={maindata.pregnancydetail}
                        {...register("pregnancydetail")}
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
                        Select maledetail
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={maindata.maledetail}
                        {...register("maledetail")}
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
                        value={maindata.bodyscore}
                        {...register("bodyscore")}
                      >
                        <option selected>
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
                        {...register("basiccomment")}
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
