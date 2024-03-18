import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../Modal/logusecont";
import { Modal } from "react-bootstrap";
import Cookies from "js-cookie";


const PostWean = () => {
  const { register, handleSubmit ,setValue } = useForm();
  const { setUcPostWean } = useContext(UserContext);
  const [postWean, setPostWean] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const handleOpenDialog = () => {
    setOpenDialog(true);
      setValue('postweandate', "");
      setValue('postweanweight', "");
      setValue('postbodyscore', "");
      setValue('postweancomment', "");
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setValue('postweandate', "");
    setValue('postweanweight', "");
    setValue('postbodyscore', "");
    setValue('postweancomment', "");
    setSelectedItem(null);
    
  };

  const onsubmit = (data) => {
    let PWid;
    if (selectedItem !== null) {
      // Edit existing data
      const updatedData = [...postWean];
      updatedData[selectedItem] = { pwid: selectedItem + 1, ...data };
      setPostWean(updatedData);
      console.log(updatedData[selectedItem])
      let PostWean = updatedData[selectedItem];
      let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData') ?? '{}');
      let Mrgcokifrm = { ...getcokidata, PostWean };
      Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
      console.log(Cookies.get("AnimalCookiesData"));
    
    setSelectedItem(null);

    } else {
      // Add new data
      const pwid = postWean.length > 0 ? postWean[postWean.length - 1].pwid + 1 : 1;
            setPostWean([...postWean, { pwid: pwid, ...data }]);
      PWid = {pwid,...data}
      console.log(PWid)
      let PostWean = PWid;
      let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData') ?? '{}');
      let Mrgcokifrm = { ...getcokidata, PostWean };
      Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
      console.log(Cookies.get("AnimalCookiesData"));
    }
    // console.log(data ,vaccine);
    setOpenDialog(false);
  };

  const handleEdit = (index) => {
    setValue('postweandate', postWean[index].postweandate);
    setValue('postweanweight', postWean[index].postweanweight);
    setValue('postbodyscore', postWean[index].postbodyscore);
    setValue('postweancomment', postWean[index].postweancomment);
    setSelectedItem(index);
    setOpenDialog(true);
  };


  const handleDelete = (id) => {
    setPostWean((prevData) => {
      const deletedItem = prevData.find((item) => item.id === id);
      const newData = prevData.filter((item) => item.id !== id);
      console.log("Delete Item:", deletedItem);
      return newData;
    });
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
                    Add Post Wean
                  </button>
                    {postWean.map((item, index) => (
                      <div className="row bg-light p-3 shadow row justify-content-evenly my-4" key={item.id}>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Post Wean Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.postweandate}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Post Wean Weight :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.postweanweight}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Body Score :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.postbodyscore}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Comment :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.postweancomment}
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
                            <label className="form-label" for="postweanweight">
                              Kid Weight
                            </label>
                            <input
                              name="postweanweight"
                              placeholder="Unique Name"
                              type="number"
                              id="postweanweight"
                              className="form-control"
                              value={postWean.postweanweight}
                              {...register("postweanweight")}
                             
                            />
                          </div>

                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="postbodyscore">
                              Wean Body Score
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              value={postWean.postbodyscore}
                              {...register("postbodyscore")}
                             
                            >
                              <option selected>
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
                            <div>
                              <label
                                className="form-label px-2"
                                htmlFor="postweandate"
                              >
                                Wean Date
                              </label>
                              
                            </div>
                            <input
                              placeholder="Wean Date"
                              type="date"
                              id="postweandate"
                              className="form-control"
                              value={postWean.postweandate}
                              {...register("postweandate")}
                             
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
                              value={postWean.postweancomment}
                              {...register("postweancomment")}
                             
                              rows="3"
                            ></textarea>
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

export default PostWean;
