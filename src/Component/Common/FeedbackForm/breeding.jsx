import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../Modal/logusecont";
import { Modal } from "react-bootstrap";
import Cookies from "js-cookie";

const BreedHeat = () => {
 const { register, handleSubmit, setValue } = useForm();
 const [breeddata, setBreeddata] = useState([]);
 const [openDialog, setOpenDialog] = useState(false);
 const [selectedItem, setSelectedItem] = useState(null);

 const [date, setDate] = useState(new Date());
 const [inputValue, setInputValue] = useState(date.toISOString().split('T')[0]);

 const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
 };

 const handleDateChange = (event) => {
    const inputDate = new Date(event.target.value);
    if (!isNaN(inputDate.getTime())) {
      setDate(inputDate);
      setInputValue(event.target.value); // Update the inputValue state as well
    }
 };

 const increaseDate = (e) => {
    e.preventDefault();
    const newDate = addDays(date, 7);
    setDate(newDate);
 };

 const decreaseDate = (e) => {
    e.preventDefault();
    const newDate = addDays(date, -7);
    setDate(newDate);
 };

 const handleOpenDialog = () => {
    setOpenDialog(true);
    setValue("heat", "");
    setValue("heatdate", "");
    setValue("heatresult", "");
    setValue("breedername", "");
    setValue("breeddate", "");
    setValue("duedate", "");
    setSelectedItem(null);
 };

 const handleCloseDialog = () => {
    setOpenDialog(false);
    setValue("heat", "");
    setValue("heatdate", "");
    setValue("heatresult", "");
    setValue("breedername", "");
    setValue("breeddate", "");
    setValue("duedate", "");
    setSelectedItem(null);
 };



const onsubmit = (data) => {
  let BRid;
  let duedate = date.toLocaleDateString("en-GB");
  let breeddate = data.breeddate;
  let heat = data.heat;
  let heatdate = data.heatdate;
  let heatresult = data.heatresult;
  let breedername = data.breedername;
  if (selectedItem !== null) {
    data = {  heat: heat, heatdate: heatdate, heatresult: heatresult,breedername: breedername, breeddate: breeddate , duedate: duedate  }
    // Edit existing data
    const updatedData = [...breeddata];
    updatedData[selectedItem] = { brdid: selectedItem + 1, ...data  };
    setBreeddata(updatedData);
    console.log(updatedData[selectedItem])
    let BreedRecord = updatedData[selectedItem];
    let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData') ?? '{}');
    let Mrgcokifrm = { ...getcokidata, BreedRecord };
    Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
    console.log(Cookies.get("AnimalCookiesData"));
  
  setSelectedItem(null);

  } else {
    data = {  heat: heat, heatdate: heatdate,heatresult: heatresult,breedername: breedername, breeddate: breeddate , duedate: duedate  }
    // Add new data
    const brdid = breeddata.length > 0 ? breeddata[breeddata.length - 1].brdid + 1 : 1;
    let b = [...breeddata, { brdid: brdid, heat: heat, heatdate: heatdate,heatresult: heatresult,breedername: breedername, breeddate: breeddate , duedate: duedate  }]
          setBreeddata([...breeddata, { brdid: brdid,  ...data  }]);
    BRid = {brdid,...data}
    console.log(BRid)
    let BreedRecord = BRid;
    let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData') ?? '{}');
    let Mrgcokifrm = { ...getcokidata, BreedRecord };
    Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
    console.log(Cookies.get("AnimalCookiesData"));
  }
  console.log(data);
  setOpenDialog(false);
};

 const handleEdit = (index) => {
    const item = breeddata[index];
    setValue("heat", item.heat);
    setValue("heatdate", item.heatdate);
    setValue("heatresult", item.heatresult)
    setValue("breedername", item.breedername)
    setValue("breeddate", item.breeddate);
    setValue("duedate", item.duedate);
    setSelectedItem(index);
    setOpenDialog(true);
 };

 const handleDelete = (index) => {
    const updatedData = [...breeddata];
    updatedData.splice(index, 1);
    setBreeddata(updatedData);
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
                    Add Heat
                  </button>
                  <div>
                    {breeddata.map((item, index) => (
                      <div
                        className="row bg-light p-3 shadow row justify-content-evenly my-4"
                        key={item.id}
                      >
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Heat :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.heat}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Date of Heat :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.heatdate}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Heat Result :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.heatresult}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Breeder Name :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.breedername}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Breed Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.breeddate}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Due Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.duedate}
                          </span>
                        </span>

                        <span className="text-center mx-2">
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
                    ))}
                  </div>

                  <Modal show={openDialog} onHide={handleCloseDialog} size="lg">
                    <Modal.Header closeButton>
                      <Modal.Title>{selectedItem !== null ? 'Edit' : 'Add'} Add Heat</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={handleSubmit(onsubmit)}>
                      <div className="row justify-content-center">

                        <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="heat">
                              heat No
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              {...register("heat")}
                            >
                              <option defaultValue>
                                Open this and select heat name
                              </option>
                              <option value="heat1">heat 1</option>
                              <option value="heat2">heat 2</option>
                              <option value="heat3">heat 3</option>
                              <option value="heat4">heat 4</option>
                              <option value="heat5">heat 5</option>
                            </select>
                          </div>

                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2"
                                htmlFor="heatdate"
                              >
                                heat Date
                              </label>
                            </div>
                            <input
                              placeholder="heat Date"
                              type="date"
                              id="heatdate"
                              className="form-control"
                              value={breeddata.heatdate}
                              {...register("heatdate")}
                            />
                          </div>

                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="heatresult">
                              heat Result
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              {...register("heatresult")}
                            >
                              <option defaultValue>
                                Open this and select heat Result
                              </option>
                              <option value="heat1">Meeted</option>
                              <option value="heat5">Left for Next Cycle</option>
                            </select>
                          </div>

                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2"
                                htmlFor="breedername"
                              >
                                Breeder Name
                              </label>
                              
                            </div>
                            <input
                              placeholder="Breeder Name"
                              type="text"
                              id="breedername"
                              className="form-control"
                              value={breeddata.breedername}
                              {...register("breedername")}
                              
                            />
                          </div>
                        
                        <div className="col-lg-5 my-2">
                          <label className="form-label" for="breeddate">
                            Date of Breed
                          </label>
                          <input
                            name="breeddate"
                            placeholder="Breed Date"
                            type="date"
                            id="breeddate"
                            className="form-control"
                            {...register("breeddate")}
                            value={breeddata.inputValue}
                            onChange={handleDateChange}
                          />
                        </div>
                        <div className="col-lg-5 my-2">
                          <label className="form-label">Birth Due Date</label>
                          <h5
                            value={breeddata.duedate}
                            {...register("duedate")}
                          >
                            {date.toISOString().split('T')[0]}
                          </h5>
                          <div className="d-flex">
                            <button
                              className="btn btn-primary w-auto mx-2"
                              onClick={increaseDate}
                            >
                              + due date
                            </button>
                            <button
                              className="btn btn-primary w-auto mx-2"
                              onClick={decreaseDate}
                            >
                              - due date
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="text-center my-4">
                        <button
                          type="submit"
                          className="btn btn-primary w-auto"
                        >
                          submit
                        </button>
                      </div>
                    </form>
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

export default BreedHeat;

