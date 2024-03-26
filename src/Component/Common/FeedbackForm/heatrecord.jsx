import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../Modal/logusecont";
import { Modal } from "react-bootstrap";
import Cookies from "js-cookie";

const HeatRecord = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [heat, setheat] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenDialog = () => {
    setOpenDialog(true);
    setValue("heat", "");
    setValue("heatdate", "");
    setValue("heatresult", "");
    setValue("breedername", "");
    setValue("breeddate", "");
    setValue("duedate", "");
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

  // const onsubmit = (data) => {
  //   let HRid;
  //   let duedate = date.toLocaleDateString("en-GB");
  //   if (selectedItem !== null) {
  //     // Edit existing data
  //     const updatedData = [...heat];
  //     updatedData[selectedItem] = { hid: selectedItem + 1, duedate:duedate, ...data };
  //     setheat(updatedData);
  //     console.log(updatedData[selectedItem])
  //     let HeatRecord = updatedData[selectedItem];
  //     let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData') ?? '{}');
  //     let Mrgcokifrm = { ...getcokidata, HeatRecord };
  //     Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
  //     console.log(Cookies.get("AnimalCookiesData"));
    
  //   setSelectedItem(null);

  //   } else {
  //     // Add new data
  //     const hid = heat.length > 0 ? heat[heat.length - 1].hid + 1 : 1;
  //           setheat([...heat, { hid: hid, duedate:duedate ,...data }]);
  //     HRid = {hid,...data}
  //     console.log(HRid)
  //     let HeatRecord = HRid;
  //     let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData') ?? '{}');
  //     let Mrgcokifrm = { ...getcokidata, HeatRecord };
  //     Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
  //     console.log(Cookies.get("AnimalCookiesData"));
  //   }
  //   console.log(data ,heat);
  //   setOpenDialog(false);
  // };

  const onsubmit = (data) => {
    let HRid;
    let heat = data.heat;
    let heatdate = data.heatdate;
    let duedate = date.toLocaleDateString("en-GB");
    let breeddate = data.breeddate;
    if (selectedItem !== null) {
      data = { heat: heat, heatdate: heatdate, breeddate: breeddate , duedate: duedate  }
      // Edit existing data
      const updatedData = [...heat];
      updatedData[selectedItem] = { hid: selectedItem + 1, ...data  };
      setheat(updatedData);
      console.log(updatedData[selectedItem])
      let HeatRecord = updatedData[selectedItem];
      let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData') ?? '{}');
      let Mrgcokifrm = { ...getcokidata, HeatRecord };
      Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
      console.log(Cookies.get("AnimalCookiesData"));
    
    setSelectedItem(null);
  
    } else {
      data = { heat: heat, heatdate: heatdate, breeddate: breeddate , duedate: duedate  }
      // Add new data
      const hid = heat.length > 0 ? heat[heat.length - 1].hid + 1 : 1;
      let b = [...heat, { hid: hid,  heat: heat, heatdate: heatdate, breeddate: breeddate , duedate: duedate  }]
      setheat([...heat, { hid: hid,  ...data  }]);
      HRid = {hid,...data}
      console.log(HRid)
      let HeatRecord = HRid;
      let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData') ?? '{}');
      let Mrgcokifrm = { ...getcokidata, HeatRecord };
      Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
      console.log(Cookies.get("AnimalCookiesData"));
    }
    console.log(data);
    setOpenDialog(false);
  };
  


  const handleEdit = (index) => {
    const item = heat[index];
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
    const updatedData = [...heat];
    updatedData.splice(index, 1);
    setheat(updatedData);
  };

  return (
    <>
      <section className="bg-menu-theme">
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            <div className="layout-page">
              <div className="container-lg mt-4">
                <div>
                  <div>
                  <button
                    className="mt-3 btn btn-primary w-auto"
                    onClick={() => handleOpenDialog()}
                  >
                    Add heat
                  </button>
                    {heat.map((item, index) => (
                      <div className="row bg-light p-3 shadow row justify-content-evenly my-4" key={item.id}>
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
                          <button className="btn btn-warning w-auto mx-2" onClick={() => handleEdit(index)}>
                            Edit
                          </button>
                          <button className="btn btn-danger w-auto mx-2" onClick={() => handleDelete(index)}>
                            Delete
                          </button>
                        </span>
                      </div>
                    ))}
                  </div>

                  

                  <Modal show={openDialog} onHide={handleCloseDialog} size="lg">
                    <Modal.Header>
                      {selectedItem !== null ? "Edit Item" : "Add New Item"}
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="row justify-content-around">
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
                              value={heat.heatdate}
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
                              value={heat.breedername}
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
                            value={heat.inputValue}
                            onChange={handleDateChange}
                          />
                        </div>
                        <div className="col-lg-5 my-2">
                          <label className="form-label">Birth Due Date</label>
                          <h5
                            value={heat.duedate}
                            {...register("duedate")}
                          >
                            {date.toISOString().split('T')[0]}
                          </h5>
                          <div className="d-flex">
                            <button
                              className="btn btn-primary w-auto mx-2"
                              onClick={increaseDate}
                            >
                              Increase
                            </button>
                            <button
                              className="btn btn-primary w-auto mx-2"
                              onClick={decreaseDate}
                            >
                              Decrease
                            </button>
                          </div>
                        </div>

                          <button
                            type="submit"
                            className="btn btn-primary w-25 mt-3"
                          >
                            Submit
                          </button>
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

export default HeatRecord;
