import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../Modal/logusecont";
import { Modal } from "react-bootstrap";
import Cookies from "js-cookie";

const Deworm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [deworm, setDeworm] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    wormdate: "",
    wormreport: "",
    endodate: "",
    endoname: "",
    endotype: "",
    ectodate: "",
    ectoname: "",
    ectotype: "",
    bathdate: "",
  });

  const handleOpenDialog = () => {
    setOpenDialog(true);
    setValue("wormdate", "");
    setValue("wormreport", "");
    setValue("endodate", "");
    setValue("endoname", "");
    setValue("endotype", "");
    setValue("ectodate", "");
    setValue("ectoname", "");
    setValue("ectotype", "");
    setValue("bathdate", "");
    setSelectedItem(null);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setValue("wormdate", "");
    setValue("wormreport", "");
    setValue("endodate", "");
    setValue("endoname", "");
    setValue("endotype", "");
    setValue("ectodate", "");
    setValue("ectoname", "");
    setValue("ectotype", "");
    setValue("bathdate", "");
    setSelectedItem(null);
  };

  
  const onsubmit = (data) => {
    let DDid;
    if (selectedItem !== null) {
      // Edit existing data
      const updatedData = [...deworm];
      updatedData[selectedItem] = { did: selectedItem + 1, ...data };
      setDeworm(updatedData);
      console.log(updatedData[selectedItem])
      let Deworm = updatedData[selectedItem];
      let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData') ?? '{}');
      let Mrgcokifrm = { ...getcokidata, Deworm };
      Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
      console.log(Cookies.get("AnimalCookiesData"));
    
    setSelectedItem(null);

    } else {
      // Add new data
      const did = deworm.length > 0 ? deworm[deworm.length - 1].did + 1 : 1;
            setDeworm([...deworm, { did: did, ...data }]);
      DDid = {did,...data}
      console.log(DDid)
      let Deworm = DDid;
      let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData') ?? '{}');
      let Mrgcokifrm = { ...getcokidata, Deworm };
      Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
      console.log(Cookies.get("AnimalCookiesData"));
    }
    // console.log(data ,vaccine);
    setOpenDialog(false);
  };

  const handleEdit = (index) => {
    setValue("wormdate", deworm[index].wormdate);
    setValue("wormreport", deworm[index].wormreport);
    setValue("endodate", deworm[index].endodate);
    setValue("endoname", deworm[index].endoname);
    setValue("endotype", deworm[index].endotype);
    setValue("ectodate", deworm[index].ectodate);
    setValue("ectoname", deworm[index].ectoname);
    setValue("ectotype", deworm[index].ectotype);
    setValue("bathdate", deworm[index].bathdate);
    setSelectedItem(index);
    setOpenDialog(true);
  };

  const handleDelete = (index) => {
    const updatedData = [...deworm];
    updatedData.splice(index, 1);
    setDeworm(updatedData);
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
                      Add Deworm
                    </button>
                    {deworm.map((item, index) => (
                      <div
                        className="row bg-light p-3 shadow row justify-content-evenly my-4"
                        key={index}
                      >
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Worm Report :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.wormreport}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Worm Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.wormdate}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Endo Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.endodate}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Endo Name :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.endoname}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Endo Type :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.endotype}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Ecto Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.ectodate}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Ecto Name :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.ectoname}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Ecto Type :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.ectotype}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Animal Bath Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.bathdate}
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

                  <Modal show={openDialog} onHide={handleCloseDialog} size="xl">
                    <Modal.Header>
                      {selectedItem ? "Edit Item" : "Add New Item"}
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="row justify-content-around">
                          {/* <h2 className="text-center">KID DATA</h2> */}

                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="wormreport">
                              Deworm Report
                            </label>
                            <input
                              name="wormreport"
                              placeholder="Deworm Report"
                              type="text"
                              id="wormreport"
                              className="form-control"
                              {...register("wormreport")}
                              value={formData.wormreport}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  wormreport: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="wormdate">
                              Deworm Date
                            </label>
                            <input
                              name="wormdate"
                              placeholder=" Deworm Date"
                              type="date"
                              id="wormdate"
                              className="form-control"
                              {...register("wormdate")}
                              value={formData.wormdate}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  wormdate: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="endoname">
                              Deworm Name (Endo Parasite)
                            </label>
                            <input
                              name="endoname"
                              placeholder="Endo Name"
                              type="text"
                              id="endoname"
                              className="form-control"
                              {...register("endoname")}
                              value={formData.endoname}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  endoname: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="ectoname">
                              Deworm Name (Ecto Parasite)
                            </label>
                            <input
                              name="ectoname"
                              placeholder="Ecto Name"
                              type="text"
                              id="ectoname"
                              className="form-control"
                              {...register("ectoname")}
                              value={formData.ectoname}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  ectoname: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="endodate">
                              Endo Date
                            </label>
                            <input
                              name="endodate"
                              placeholder="Endo Date"
                              type="date"
                              id="endodate"
                              className="form-control"
                              {...register("endodate")}
                              value={formData.endodate}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  endodate: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="ectodate">
                              Ecto Date
                            </label>
                            <input
                              name="ectodate"
                              placeholder="Ecto Date"
                              type="date"
                              id="ectodate"
                              className="form-control"
                              {...register("ectodate")}
                              value={formData.ectodate}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  ectodate: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="endotype">
                              Endo Type
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              {...register("endotype")}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  endotype: e.target.value,
                                })
                              }
                            >
                              <option selected>
                                Open this and select endo type
                              </option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>
                          
                          
                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="ectotype">
                              Ecto Type
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              {...register("ectotype")}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  ectotype: e.target.value,
                                })
                              }
                            >
                              <option selected>
                                Open this and select ecto type
                              </option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>

                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2"
                                htmlFor="bathdate"
                              >
                                Animal Bath Ectoparasite Date
                              </label>
                            </div>
                            <input
                              {...register("bathdate")}
                              placeholder="Animal Bath Ectoparasite Date"
                              type="date"
                              id="bathdate"
                              className="form-control"
                              value={formData.bathdate}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  bathdate: e.target.value,
                                })
                              }
                            />
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

export default Deworm;
