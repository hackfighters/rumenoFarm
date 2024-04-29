import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../Modal/logusecont";
import { Modal } from "react-bootstrap";
import Cookies from "js-cookie";


const MilkRecord = () => {
  const { register, handleSubmit , setValue} = useForm();
  const { setUcmilkrec,setUcaddkid } = useContext(UserContext);
  const [milkrec, setMilkrec] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const handleOpenDialog = () => {
    setOpenModal(true);
    setValue('milkforkid', "");
    setValue('milkvolume', "");
    setValue('milkdate', "");  
    setSelectedItem(null);
  };

  const handleCloseDialog = () => {
    setOpenModal(false);
    setValue('milkforkid', "");
    setValue('milkvolume', "");
    setValue('milkdate', "");
    setSelectedItem(null);
  };


  const onsubmit = (data) => {
    let MMid;
    if (selectedItem !== null) {
      // Edit existing data
      const updatedData = [...milkrec];
      updatedData[selectedItem] = { mlkid: selectedItem + 1, ...data };
      setMilkrec(updatedData);
      console.log(updatedData[selectedItem])
      let MilkRecord = updatedData[selectedItem];
      let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData') ?? '{}');
      let Mrgcokifrm = { ...getcokidata, MilkRecord };
      Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
      console.log(Cookies.get("AnimalCookiesData"));
    
    setSelectedItem(null);

    } else {
      // Add new data
      const mlkid = milkrec.length > 0 ? milkrec[milkrec.length - 1].mlkid + 1 : 1;
            setMilkrec([...milkrec, { mlkid: mlkid, ...data }]);
      MMid = {mlkid,...data}
      console.log(MMid)
      let MilkRecord = MMid;
      let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData') ?? '{}');
      let Mrgcokifrm = { ...getcokidata, MilkRecord };
      Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
      console.log(Cookies.get("AnimalCookiesData"));
    }
    // console.log(data ,vaccine);
    setOpenModal(false);
  };


  const handleEdit = (index) => {
    setValue('milkforkid', milkrec[index].milkforkid);
    setValue('milkvolume', milkrec[index].milkvolume);
    setValue('milkdate', milkrec[index].milkdate);
    setSelectedItem(index);
    setOpenModal(true);
  };


  const handleDelete = (index) => {
    const updatedData = [...milkrec];
    updatedData.splice(index, 1);
    setMilkrec(updatedData);
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
                    Add Milk Record
                  </button>
                    {milkrec.map((item, index) => (
                      <div className="row bg-light p-3 shadow row justify-content-evenly my-4" key={item.id}>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Number of kids  :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.milkforkid}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Milk Volume  :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.milkvolume} Liter
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Milk Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.milkdate}
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

                 

                  <Modal show={openModal} onHide={handleCloseDialog} size="lg">
                    <Modal.Header>
                      {selectedItem !==null ? "Edit Item" : "Add New Item"}
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="row justify-content-around">
                          {/* <h2 className="text-center">KID DATA</h2> */}

                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="milkvolume">
                              Milk Volume
                            </label>
                            <input
                              name="milkvolume"
                              placeholder="Milk Volume in liter"
                              type="number"
                              id="milkvolume"
                              className="form-control"
                              value={milkrec.milkvolume}
                              {...register("milkvolume")}
                              // onChange={(e) =>
                              //   setmilkrec({
                              //     ...milkrec,
                              //     milkvolume: e.target.value,
                              //   })
                              // }
                            />
                          </div>

                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="milkforkid">
                              Number of Kids 
                            </label>
                            <input
                              name="milkforkid"
                              placeholder="Number of Kids"
                              type="number"
                              id="milkforkid"
                              className="form-control"
                              value={milkrec.milkforkid}
                              {...register("milkforkid")}
                              // onChange={(e) =>
                              //   setmilkrec({
                              //     ...milkrec,
                              //     milkforkid: e.target.value,
                              //   })
                              // }
                            />
                          </div>

                        

                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2"
                                htmlFor="milkdate"
                              >
                                 Date
                              </label>
                              
                            </div>
                            <input
                              placeholder="Date"
                              type="date"
                              id="milkdate"
                              className="form-control"
                              value={milkrec.milkdate}
                              {...register("milkdate")}
                              // onChange={(e) =>
                              //   setmilkrec({
                              //     ...formData,
                              //     milkdate: e.target.value,
                              //   })
                              // }
                            />
                          </div>

                          
                          <div className="text-center"><button
                            type="submit"
                            className="btn btn-primary w-25 mt-3"
                          >
                            Submit
                          </button></div>
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

export default MilkRecord;
