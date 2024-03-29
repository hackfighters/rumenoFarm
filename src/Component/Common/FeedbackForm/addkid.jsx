import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../Modal/logusecont";
import Modal from "react-bootstrap/Modal";
import MilkRecord from "./milkrecord";
import { prettyFormat } from "@testing-library/react";
import Cookies from "js-cookie";

const KidAddForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { Ucaddkid, setUcaddkid, Ucmilkrec } = useContext(UserContext);
  const [addkiddata, setaddkiddata] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenDialog = () => {
    setModalIsOpen(true);
    setValue("kidage", "");
    setValue("kiduniquename", "");
    setValue("birthdate", "");
    setValue("kgender", "");
    setValue("breed", "");
    setValue("kidcode", "");
    setValue("kidscore", "");
    setValue("birthtype", "");
    setValue("kidweight", "");
    setValue("weandate", "");
    setValue("weanweight", "");
    setValue("motherweanweight", "");
    setValue("motherweandate", "");
    setValue("castration", "");
    setValue("kidcomment", "");
    setValue("breeddate", "");
  };

  const handleCloseDialog = () => {
    setModalIsOpen(false);
    setValue("kidage", "");
    setValue("kiduniquename", "");
    setValue("birthdate", "");
    setValue("kgender", "");
    setValue("breed", "");
    setValue("kidcode", "");
    setValue("kidscore", "");
    setValue("birthtype", "");
    setValue("kidweight", "");
    setValue("weandate", "");
    setValue("weanweight", "");
    setValue("motherweanweight", "");
    setValue("motherweandate", "");
    setValue("castration", "");
    setValue("kidcomment", "");
    setValue("breeddate", "");
    setSelectedItem(null);
  };

  // const onsubmit = (data) => {
  //   let finalData;
  //   if (selectedItem !== null) {
  //     // Edit existing data
  //     const updatedData = [...addkiddata];

  //     updatedData[selectedItem] = data;
  //     setaddkiddata(updatedData);
  //     finalData = {
  //       Uid: "200" + (selectedItem + 1),
  //       cno: selectedItem + 1,
  //       birthdate: data.birthdate,
  //       birthtype: data.birthtype,
  //       birthweight: data.birthweight,
  //       breed: data.breed,
  //       castration: data.castration,
  //       kidcomment: data.kidcomment,
  //       kidkgender: data.kidkgender,
  //       kidage: data.kidage,
  //       kidcode: data.kidcode,
  //       kidscore: data.kidscore,
  //       kiduniquename: data.kiduniquename,
  //       kidweight: data.kidweight,
  //       motherage: data.motherage,
  //       motherweandate: data.motherweandate,
  //       motherweanweight: data.motherweanweight,
  //       weandate: data.weandate,
  //       weanweight: data.weanweight,
  //       milkforkid: Ucaddkid.milkforkid,
  //       milkvolume: Ucaddkid.milkvolume,
  //       milkdate: Ucaddkid.milkdate,
  //     };
  //     console.log(finalData);
  //   } else {
  //     // Add new data
  //     setaddkiddata([...addkiddata, data]);
  //     finalData = {
  //       Uid: "200" + (addkiddata.length + 1),
  //       cno: addkiddata.length + 1,
  //       birthdate: data.birthdate,
  //       birthtype: data.birthtype,
  //       birthweight: data.birthweight,
  //       breed: data.breed,
  //       castration: data.castration,
  //       kidcomment: data.kidcomment,
  //       kidkgender: data.kidkgender,
  //       kidage: data.kidage,
  //       kidcode: data.kidcode,
  //       kidscore: data.kidscore,
  //       kiduniquename: data.kiduniquename,
  //       kidweight: data.kidweight,
  //       motherage: data.motherage,
  //       motherweandate: data.motherweandate,
  //       motherweanweight: data.motherweanweight,
  //       weandate: data.weandate,
  //       weanweight: data.weanweight,
  //       milkforkid: Ucaddkid.milkforkid,
  //       milkvolume: Ucaddkid.milkvolume,
  //       milkdate: Ucaddkid.milkdate,
  //     };
  //     console.log(finalData);
  //   }
  //   let KidData = finalData
  //   let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData'))
  //   let Mrgcokifrm = {...getcokidata, KidData}
  //   console.log(getcokidata)
  //   Cookies.set('AnimalCookiesData', JSON.stringify(Mrgcokifrm));
  //   console.log(Mrgcokifrm)
  //   console.log(Cookies.get('AnimalCookiesData'));
  //   setModalIsOpen(false);
  // };

  const onsubmit = (data) => {
    let KKid;
    if (selectedItem !== null) {
      // Edit existing data
      const updatedData = [...addkiddata];
      updatedData[selectedItem] = { kid: selectedItem + 1, ...data };
      setaddkiddata(updatedData);
      console.log(updatedData[selectedItem]);
      let KidData = updatedData[selectedItem];
      let getcokidata = JSON.parse(Cookies.get("AnimalCookiesData") ?? "{}");
      let Mrgcokifrm = { ...getcokidata, KidData };
      Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
      console.log(Cookies.get("AnimalCookiesData"));

      setSelectedItem(null);
    } else {
      // Add new data
      const kid =
        addkiddata.length > 0 ? addkiddata[addkiddata.length - 1].kid + 1 : 1;
      setaddkiddata([...addkiddata, { kid: kid, ...data }]);
      KKid = { kid, ...data };
      console.log(KKid);
      let KidData = KKid;
      let getcokidata = JSON.parse(Cookies.get("AnimalCookiesData") ?? "{}");
      let Mrgcokifrm = { ...getcokidata, KidData };
      Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
      console.log(Cookies.get("AnimalCookiesData"));
    }
    // console.log(data ,vaccine);
    setModalIsOpen(false);
  };

  const FinalSubmit = () => {
    // let finalData = {
    //   Uid:'20'+addkiddata.length+1,
    //   cid: addkiddata.length,
    //   birthdate: addkiddata.birthdate,
    //   birthtype: addkiddata.birthtype,
    //   birthweight: addkiddata.birthweight,
    //   breed: addkiddata.breed,
    //   castration: addkiddata.castration,
    //   kidcomment: addkiddata.kidcomment,
    //   kidkgender: addkiddata.kidkgender,
    //   kidage: addkiddata.kidage,
    //   kidcode: addkiddata.kidcode,
    //   kidscore: addkiddata.kidscore,
    //   kiduniquename: addkiddata.kiduniquename,
    //   kidweight: addkiddata.kidweight,
    //   motherage: addkiddata.motherage,
    //   motherweandate: addkiddata.motherweandate,
    //   motherweanweight: addkiddata.motherweanweight,
    //   weandate: addkiddata.weandate,
    //   weanweight: addkiddata.weanweight,
    //   milkforkid: Ucaddkid.milkforkid,
    //   milkvolume: Ucaddkid.milkvolume,
    //   milkdate: Ucaddkid.milkdate,
    // };
    // setUcaddkid(finalData);
    // console.log(Ucaddkid);
    // setModalIsOpen(false);
  };

  const handleEdit = (index) => {
    setValue("kidage", addkiddata[index].kidage);
    setValue("kiduniquename", addkiddata[index].kiduniquename);
    setValue("birthdate", addkiddata[index].birthdate);
    setValue("kgender", addkiddata[index].kgender);
    setValue("breed", addkiddata[index].breed);
    setValue("kidcode", addkiddata[index].kidcode);
    setValue("kidscore", addkiddata[index].kidscore);
    setValue("birthtype", addkiddata[index].birthtype);
    setValue("kidweight", addkiddata[index].kidweight);
    setValue("weandate", addkiddata[index].weandate);
    setValue("weanweight", addkiddata[index].weanweight);
    setValue("motherweanweight", addkiddata[index].motherweanweight);
    setValue("motherweandate", addkiddata[index].motherweandate);
    setValue("castration", addkiddata[index].castration);
    setValue("kidcomment", addkiddata[index].kidcomment);
    setValue("breeddate", addkiddata[index].breeddate);
    setSelectedItem(index);
    setModalIsOpen(true);
  };

  const handleDelete = (index) => {
    const updatedData = [...addkiddata];
    updatedData.splice(index, 1);
    setaddkiddata(updatedData);
  };

  return (
    <>
      <section className="bg-menu-theme">
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            <div className="layout-page">
              <div className="container-lg mt-4">
                <div>
                  <button
                    className="mt-3 btn btn-primary w-auto"
                    onClick={() => handleOpenDialog()}
                  >
                    Add Kid
                  </button>
                  <div className="">
                    {addkiddata.map((item, index) => (
                      <>
                        <div
                          className="row bg-light p-3 shadow row justify-content-evenly my-4"
                          key={item.id}
                        >
                          <span className="text-center px-0 py-2 fs-2 col-lg-3 ">
                            <strong className="d-block text-uppercase">
                              {item.kiduniquename}
                            </strong>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Age :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.kidage}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Birth Date :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.birthdate}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Gender :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.kidkgender}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Kid Code :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.kidcode}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Kid Score :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.kidscore}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Birth Type :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.birthtype}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Kid Weight :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.kidweight}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Wean Date :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.weandate}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Wean Weight :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.weanweight}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Mother Wean Weight :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.motherweanweight}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Mother Wean Date :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.motherweandate}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Castration :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.castration}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3">
                            <strong className="d-block animal-bg2">
                              Birth Weight :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.birthweight}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Breed :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.breed}
                            </span>
                          </span>

                          <span className="text-center px-5 py-4 col-lg-3">
                            <strong className="d-block animal-bg2">
                              Mother Age :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.motherage}
                            </span>
                          </span>

                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Comment :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.kidcomment}
                            </span>
                          </span>
                          <span className="text-center mx-2 py-3  ">
                            <button
                              className="btn btn-warning w-auto mx-2"
                              onClick={() => handleEdit(index)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger w-auto mx-2"
                              onClick={() => handleDelete(index)}
                            >
                              Delete
                            </button>
                          </span>
                        </div>
                      </>
                    ))}
                  </div>

                  <Modal
                    show={modalIsOpen}
                    onHide={handleCloseDialog}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    size="xl"
                  >
                    <Modal.Header>
                      <h4>Kid Details</h4>
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="row justify-content-around">
                          {/* <h2 className="text-center">KID DATA</h2> */}
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="kiduniquename">
                              Unique Name
                            </label>
                            <input
                              name="kiduniquename"
                              placeholder="Unique Name"
                              type="textt"
                              id="kiduniquename"
                              className="form-control"
                              value={addkiddata.kiduniquename}
                              {...register("kiduniquename")}
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="kidage">
                              Age
                            </label>
                            <input
                              name="kidage"
                              placeholder="Kid Age"
                              type="textt"
                              id="kidage"
                              className="form-control"
                              value={addkiddata.kidage}
                              {...register("kidage")}
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="kidweight">
                              Kid Weight
                            </label>
                            <input
                              name="kidweight"
                              placeholder="Kid Weight"
                              type="textt"
                              id="kidweight"
                              className="form-control"
                              value={addkiddata.kidweight}
                              {...register("kidweight")}
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="motherage">
                              Age of Mother
                            </label>
                            <input
                              name="motherage"
                              placeholder="Mother Age"
                              type="number"
                              id="motherage"
                              className="form-control"
                              value={addkiddata.motherage}
                              {...register("motherage")}
                            />
                          </div>
                        
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="selectbreed">
                              Select Breed
                            </label>
                            <input
                              type="text"
                              placeholder="Select Breed"
                              id="selectbreed"
                              className="form-control"
                              list="breedOptions"
                              value={addkiddata.breed}
                              {...register("breed")}
                            />
                            <datalist id="breedOptions">
                              <option value="Barbari">Barbari</option>
                              <option value="Jakhrana">Jakhrana</option>
                              <option value="jamunapari">jamunapari</option>
                              <option value="Beetal">Beetal</option>
                              <option value="Unidentified">Unidentified</option>
                            </datalist>
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="birthdate">
                              Birth Date
                            </label>
                            <input
                              name="birthdate"
                              placeholder="Birth Date"
                              type="date"
                              id="birthdate"
                              className="form-control"
                              value={addkiddata.birthdate}
                              {...register("birthdate")}
                            />
                          </div>

                          <div className="col-lg-5 my-2">
                            <label
                              className="form-label d-block"
                              htmlFor="kgender"
                            >
                              Gender
                            </label>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="kgender"
                                id="inlineRadio1"
                                value="doe"
                                {...register("kidkgender")}
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
                                name="kgender"
                                id="inlineRadio2"
                                value="buck"
                                {...register("kidkgender")}
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
                                name="kgender"
                                id="inlineRadio3"
                                value="wether"
                                {...register("kidkgender")}
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
                            <label className="form-label" htmlFor="kidcode">
                              Kidding Code
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              {...register("kidcode")}
                            >
                              <option selected disabled>
                                Open this and select kidding code
                              </option>
                              <option value="NO ASSISTANCE">
                                NO ASSISTANCE
                              </option>
                              <option value="SLIGHT ASSISTANCE">
                                SLIGHT ASSISTANCE
                              </option>
                              <option value="jamunapari">jamunapari</option>
                              <option value="HARD PULL">HARD PULL</option>
                              <option value="ABNORMAL PRESENTATION">
                                ABNORMAL PRESENTATION
                              </option>
                            </select>
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="kidscore">
                              Kidding Score
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              {...register("kidscore")}
                            >
                              <option defaultValue>
                                Open this and select kidding score
                              </option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>

                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="birthtype">
                              Birth Type
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              {...register("birthtype")}
                            >
                              <option value="Single">Single</option>
                              <option value="Twin">Twin</option>
                              <option value="Triple">Triple</option>
                              <option value="Quad">Quad</option>
                            </select>
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="birthweight">
                              Birth Weight
                            </label>
                            <input
                              name="birthweight"
                              placeholder="Birth Weight"
                              type="number"
                              id="birthweight"
                              className="form-control"
                              value={addkiddata.birthweight}
                              {...register("birthweight")}
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2"
                                htmlFor="weandate"
                              >
                                Wean Date
                              </label>
                              <span className="h-6">
                                ( when animal start eating food)
                              </span>
                            </div>
                            <input
                              {...register("weandate")}
                              placeholder="Wean Date"
                              type="date"
                              id="weandate"
                              value={addkiddata.weandate}
                              className="form-control"
                            />
                          </div>

                          <div className="col-lg-5 my-2">
                            <label
                              className="form-label px-2"
                              htmlFor="weanweight"
                            >
                              Wean Weight
                            </label>
                            <input
                              {...register("weanweight")}
                              placeholder="Wean Weight"
                              type="number"
                              id="weanweight"
                              value={addkiddata.weanweight}
                              className="form-control"
                            />
                          </div>

                          <div className="col-lg-5 my-2">
                            <div className="">
                              <label
                                className="form-label px-2 m-0 d-block"
                                htmlFor="motherweanweight"
                              >
                                Mother Weight At Wean
                              </label>
                              <span className="">
                                ( weight of mother goat when child starts eating
                                food)
                              </span>
                            </div>
                            <input
                              {...register("motherweanweight")}
                              placeholder="Mother Weight at Wean"
                              type="number"
                              id="motherweanweight"
                              value={addkiddata.motherweanweight}
                              className="form-control"
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2 m-0 d-block"
                                htmlFor="motherweandate"
                              >
                                Mother Wean Date
                              </label>
                              <span className="h-6">
                                ( mother wean date when child start eating food)
                              </span>
                            </div>
                            <input
                              name="motherweandate"
                              placeholder="Wean Date"
                              type="date"
                              id="motherweandate"
                              className="form-control"
                              value={addkiddata.motherweandate}
                              {...register("motherweandate")}
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2"
                                htmlFor="castration"
                              >
                                Castration Date
                              </label>
                              <span className="h-6">
                                (not able to reproduce)
                              </span>
                            </div>
                            <input
                              name="castration"
                              placeholder="Castration Date"
                              type="date"
                              id="forcastration"
                              className="form-control"
                              value={addkiddata.castration}
                              {...register("castration")}
                            />
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
                              value={addkiddata.kidcomment}
                              {...register("kidcomment")}
                              rows="3"
                            ></textarea>
                          </div>
                          <div className="text-center">
                            <button
                              type="submit"
                              className="btn btn-primary w-25 mt-3"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KidAddForm;
