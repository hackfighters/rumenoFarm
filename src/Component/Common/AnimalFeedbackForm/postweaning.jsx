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
      setValue('post_wean_date', "");
      setValue('post_wean_weight', "");
      setValue('post_body_score', "");
      setValue('post_wean_comment', "");
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setValue('post_wean_date', "");
    setValue('post_wean_weight', "");
    setValue('post_body_score', "");
    setValue('post_wean_comment', "");
    setSelectedItem(null);
    
  };

  const onsubmit = async(data) => {
    let PWid;
    if (selectedItem !== null) {
      // Edit existing data
      const updatedData = [...postWean];
      updatedData[selectedItem] = { pw_id: selectedItem + 1, ...data };
      setPostWean(updatedData);
      console.log(updatedData[selectedItem])
      let PostWean = updatedData[selectedItem];
      let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData') ?? '{}');
      let Mrgcokifrm = { ...getcokidata, PostWean };
      Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
      console.log(Cookies.get("AnimalCookiesData"));
      try {
        const response = await axios.post('http://192.168.1.6:5000/post_wean',updatedData[selectedItem])
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
    setSelectedItem(null);

    } else {
      // Add new data
      const pw_id = postWean.length > 0 ? postWean[postWean.length - 1].pw_id + 1 : 1;
            setPostWean([...postWean, { pw_id: pw_id, ...data }]);
      PWid = {pw_id,...data}
      console.log(PWid)
      let PostWean = PWid;
      let getcokidata = JSON.parse(Cookies.get('AnimalCookiesData') ?? '{}');
      let Mrgcokifrm = { ...getcokidata, PostWean };
      Cookies.set("AnimalCookiesData", JSON.stringify(Mrgcokifrm));
      console.log(Cookies.get("AnimalCookiesData"));
    }
    try {
      const response = await axios.post('http://192.168.1.6:5000/post_wean',PWid)
      console.log(response.data)
  } catch (error) {
      console.log(error)
  }
    // console.log(data ,vaccine);
    setOpenDialog(false);
  };

  const handleEdit = (index) => {
    setValue('post_wean_date', postWean[index].post_wean_date);
    setValue('post_wean_weight', postWean[index].post_wean_weight);
    setValue('post_body_score', postWean[index].post_body_score);
    setValue('post_wean_comment', postWean[index].post_wean_comment);
    setSelectedItem(index);
    setOpenDialog(true);
  };

  const handleDelete = async(index) => {
    const deletedItem = postWean[index]; 
    const updatedData = [...postWean];
    updatedData.splice(index, 1);
    setPostWean(updatedData);
    console.log(deletedItem); 
    try {
      const response = await axios.delete('http://192.168.1.6:5000/post_wean',deletedItem)
      console.log(response.data)
  } catch (error) {
      console.log(error)
  }
  }

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
                            {item.post_wean_date}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Post Wean Weight :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.post_wean_weight}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Body Score :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.post_body_score}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Comment :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.post_wean_comment}
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
                              placeholder="Kid Weight"
                              type="number"
                              id="postweanweight"
                              className="form-control"
                              value={postWean.post_wean_weight}
                              {...register("post_wean_weight")}
                             
                            />
                          </div>

                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="postbodyscore">
                              Wean Body Score
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              value={postWean.post_body_score}
                              {...register("post_body_score")}
                             
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
                              value={postWean.post_wean_date}
                              {...register("post_wean_date")}
                             
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
                              value={postWean.post_wean_comment}
                              {...register("post_wean_comment")}
                             
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
