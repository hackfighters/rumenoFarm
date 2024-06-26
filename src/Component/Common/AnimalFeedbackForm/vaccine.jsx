import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../Modal/logusecont";
import { Modal } from "react-bootstrap";
import Cookies from "js-cookie";

const VaccineRecord = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { setUcvaccine } = useContext(UserContext);
  const [vaccine, setVacine] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenDialog = (item = {}) => {
    setOpenDialog(true);
    setValue("vaccine", "");
    setValue("vaccine_date", "");
    setSelectedItem(null);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setValue("vaccine", "");
    setValue("vaccine_date", "");
    setSelectedItem(null);
  };

  const onsubmit = async(data) => {
    let VVid;
    if (selectedItem !== null) {
      // Edit existing data
      const updatedData = [...vaccine];
      updatedData[selectedItem] = { v_id: selectedItem + 1, ...data };
      setVacine(updatedData);
      console.log(updatedData[selectedItem]);
      let Vaccine = updatedData[selectedItem];
      let getcokidata = JSON.parse(Cookies.get("AnimalCookiesData") ?? "{}");
      let Mrgcokifrm = { ...getcokidata, Vaccine };
      Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
      console.log(Cookies.get("AnimalCookiesData"));
      try {
        const response = await axios.put('http://192.168.1.6:5000/vaccine_details',updatedData[selectedItem])
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
      setSelectedItem(null);
    } else {
      // Add new data
      const v_id = vaccine.length > 0 ? vaccine[vaccine.length - 1].v_id + 1 : 1;
      setVacine([...vaccine, { v_id: v_id, ...data }]);
      VVid = { v_id, ...data };
      console.log(VVid);
      let Vaccine = VVid;
      let getcokidata = JSON.parse(Cookies.get("AnimalCookiesData") ?? "{}");
      let Mrgcokifrm = { ...getcokidata, Vaccine };
      Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
      console.log(Cookies.get("AnimalCookiesData"));
    }
    console.log(data, vaccine);
    try {
      const response = await axios.post('http://192.168.1.6:5000/vaccine_details',VVid)
      console.log(response.data)
  } catch (error) {
      console.log(error)
  }
    setOpenDialog(false);
  };

  const handleEdit = (index) => {
    setValue("vaccine", vaccine[index].vaccine);
    setValue("vaccine_date", vaccine[index].vaccine_date);
    setSelectedItem(index);
    setOpenDialog(true);
  };

  const handleDelete = async(index) => {
    const deletedItem = vaccine[index]; 
    const updatedData = [...vaccine];
    updatedData.splice(index, 1);
    setVacine(updatedData);
    console.log(deletedItem); 
    try {
      const response = await axios.delete('http://192.168.1.6:5000/vaccine_details',deletedItem)
      console.log(response.data)
  } catch (error) {
      console.log(error)
  }
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
                      Add Vaccine
                    </button>
                    {vaccine.map((item, index) => (
                      <div
                        className="row bg-light p-3 shadow row justify-content-evenly my-4"
                        key={item.id}
                      >
                        <span className="text-center px-4 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Vaccine Name :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.vaccine}
                          </span>
                        </span>
                        <span className="text-center px-4 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Vaccine Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                          {new Date(item.vaccine_date).toLocaleDateString('en-IN')}
                          </span>
                        </span>

                        <span className="text-center mx-2">
                          <button
                            className="w-auto mx-2 btn btn-warning "
                            onClick={() => handleEdit(index)}
                          >
                            Edit
                          </button>
                          <button
                            className="w-auto mx-2 btn btn-danger "
                            onClick={() => handleDelete(index)}
                          >
                            Delete
                          </button>
                        </span>
                      </div>
                    ))}
                  </div>

                  <Modal show={openDialog} onHide={handleCloseDialog}>
                    <Modal.Header>
                      {selectedItem !== null ? "Edit Item" : "Add New Item"}
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="row justify-content-around">
                          
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="vaccine">
                            Vaccine Name
                            </label>
                            <input
                              type="text"
                              placeholder="Select Vaccine"
                              id="vaccine"
                              className="form-control"
                              list="vaccineOptions"
                              value={vaccine.vaccine}
                              {...register("vaccine")}
                            />
                            <datalist id="vaccineOptions">
                              <option value="PPP">PPP</option>
                              <option value="FMD">FMD</option>
                              <option value="Booster">Booster</option>
                              <option value="Haemorrhagic Septicaemia">
                                Haemorrhagic Septicaemia
                              </option>
                              <option value="Black Quater">Black Quater</option>
                              <option value="Anthrax">Anthrax</option>
                            </datalist>
                          </div>

                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2"
                                htmlFor="vaccinedate"
                              >
                                Vaccine Date
                              </label>
                            </div>
                            <input
                              placeholder="vaccine Date"
                              type="date"
                              id="vaccinedate"
                              className="form-control"
                              value={vaccine.vaccinedate}
                              {...register("vaccine_date")}
                            />
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

export default VaccineRecord;
