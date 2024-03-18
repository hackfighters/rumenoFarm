import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../Modal/logusecont";
import { Modal } from "react-bootstrap";
import Cookies from "js-cookie";


const FarmHygine = () => {
  const { register, handleSubmit  ,setValue} = useForm();
  const [farmHygine, setFarmhygine] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const handleOpenDialog = () => {
    setOpenDialog(true);
    setValue('soildate', "");
    setValue('limesprinkledate', "");
    setValue('insecticidedate', "");
    setValue('insecticide', "");
    setSelectedItem(null);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setValue('soildate', "");
    setValue('limesprinkledate', "");
    setValue('insecticidedate', "");
    setValue('insecticide', "");
    setSelectedItem(null);
  };


  useEffect(() => {
    console.log(Cookies.get("AnimalCookiesData"));
    let b = Cookies.get("AnimalCookiesData")
    // setFarmhygine((prev)=>)
  }, []); 

 
    // ... (your existing functions and JSX)

  const onsubmit = (data) => {
    let FFid;
    if (selectedItem !== null) {
      // Edit existing data
      const updatedData = [...farmHygine];
      updatedData[selectedItem] = { fid: selectedItem + 1, ...data };
      setFarmhygine(updatedData);
      console.log(updatedData[selectedItem])
      let FarmHygine = updatedData[selectedItem];
      let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData') ?? '{}');
      let Mrgcokifrm = { ...getcokidata, FarmHygine };
      Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
      console.log(Cookies.get("AnimalCookiesData"));
    
    setSelectedItem(null);

    } else {
      // Add new data
      const fid = farmHygine.length > 0 ? farmHygine[farmHygine.length - 1].fid + 1 : 1;
            setFarmhygine([...farmHygine, { fid: fid, ...data }]);
      FFid = {fid,...data}
      console.log(FFid)
      let FarmHygine = FFid;
      let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData') ?? '{}');
      let Mrgcokifrm = { ...getcokidata, FarmHygine };
      Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
      console.log(Cookies.get("AnimalCookiesData"));
    }
    // console.log(data ,vaccine);
    setOpenDialog(false);
  };

  const handleEdit = (index) => {
    setValue('soildate',farmHygine[index].soildate);
    setValue('limesprinkledate',farmHygine[index].limesprinkledate);
    setValue('insecticidedate',farmHygine[index].insecticidedate);
    setValue('insecticide',farmHygine[index].insecticide);
    setSelectedItem(index);
    setOpenDialog(true);
  };

  const handleDelete = (index) => {
    const updatedData = [...farmHygine];
    updatedData.splice(index, 1);
    setFarmhygine(updatedData);
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
                    className="mt-3 w-auto btn btn-primary"
                    onClick={() => handleOpenDialog()}
                  >
                    Add 
                  </button>
                    {farmHygine.map((item, index) => (
                      <div className="row bg-light p-3 shadow row justify-content-evenly my-4" key={item.id}>
                        


                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Solid Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.soildate}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Lime Sprinkle Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.limesprinkledate}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                          Insecticide Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.insecticidedate}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                          Insecticide Name :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.insecticide}
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

                  

                  <Modal show={openDialog} onHide={handleCloseDialog}>
                    <Modal.Header>
                      {selectedItem !== null ? "Edit Item" : "Add New Item"}
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="row justify-content-around">


                       

                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2"
                                htmlFor="soildate"
                              >
                                Soil date Date
                              </label>
                              
                            </div>
                            <input
                              placeholder="soildate Date"
                              type="date"
                              id="soildate"
                              className="form-control"
                              value={farmHygine.soildate}
                              {...register("soildate")}
                              
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2"
                                htmlFor="limesprinkledate"
                              >
                                Lime Sprinkle Date
                              </label>
                              
                            </div>
                            <input
                              placeholder="Lime Sprinkle Date"
                              type="date"
                              id="limesprinkledate"
                              className="form-control"
                              value={farmHygine.limesprinkledate}
                              {...register("limesprinkledate")}
                              
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2"
                                htmlFor="insecticide"
                              >
                                Insecticide Date
                              </label>
                              
                            </div>
                            <input
                              placeholder="Incesticide Date"
                              type="date"
                              id="insecticidedate"
                              className="form-control"
                              value={farmHygine.insecticidedate}
                              {...register("insecticidedate")}
                              
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2"
                                htmlFor="insecticide"
                              >
                                Insecticide Name
                              </label>
                              
                            </div>
                            <input
                              placeholder="Incesticide Name"
                              type="text"
                              id="insecticide"
                              className="form-control"
                              value={farmHygine.insecticide}
                              {...register("insecticide")}
                              
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

export default FarmHygine;
