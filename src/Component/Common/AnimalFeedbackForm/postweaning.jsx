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
  const apiUrl = `${process.env.REACT_APP_API}/farm_data/wean`;
  const getMidCookies = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");

  const handleOpenDialog = () => {
    setOpenDialog(true);
      setValue('post_wean_date', "");
      setValue('post_wean_weight_kg', "");
      setValue('post_wean_weight_gm', "");
      setValue('post_body_score', "");
      setValue('post_wean_comment', "");
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setValue('post_wean_date', "");
    setValue('post_wean_weight_kg', "");
    setValue('post_wean_weight_gm', "");
    setValue('post_body_score', "");
    setValue('post_wean_comment', "");
    setSelectedItem(null);
    
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/${getMidCookies.mid}`,
        {
          headers: {
            'Authorization': `${getMidCookies.token}`
          }
        });
      setPostWean(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const onsubmit = async (data) => {
    if (selectedItem !== null) {
      // Edit existing item
      try {
        const response = await axios.put(`${apiUrl}/${postWean[selectedItem]._id}`, data,
          {
            headers: {
              'Authorization': `${getMidCookies.token}`
            }
          });
        const updatedpostWean = [...postWean];
        updatedpostWean[selectedItem] = response.data;
        fetchItems();
      } catch (error) {
        console.error("Error updating item:", error);
      }
    } else {
      // Add new item
      try {
    const payload = {...data,...{parentid:getMidCookies.mid,parentName: getMidCookies?.parentName}}
    console.log('payload: ', payload);
        const response = await axios.post(apiUrl, payload,
          {
            headers: {
              'Authorization': `${getMidCookies.token}`
            }
          });
        fetchItems();
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
    handleCloseDialog();
  };

  const handleEdit = (index) => {
    setValue('post_wean_date', postWean[index].post_wean_date);
    setValue('post_wean_weight_kg', postWean[index].post_wean_weight_kg);
    setValue('post_wean_weight_gm', postWean[index].post_wean_weight_gm);
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
      const response = await axios.delete(`${apiUrl}/${postWean[index]._id}`,
        {
          headers: {
            'Authorization': `${getMidCookies.token}`
          }
        });
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
                        <span className="text-center d-flex gap-2 pb-2 bg-light ">
                            <div className=""><span className="animal-bg2 p-1">Parent Name :</span> <span className="animal-bg1 fw-bold p-1">{item?.parentName}</span></div>
                            <div className=""><span className="animal-bg2 p-1">Parent ID :</span> <span className="animal-bg1 fw-bold p-1">{item?.parentid}</span></div>
                          </span>
                          <hr />
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
                            {item.post_wean_weight_kg}Kg {" "}
                            {item.post_wean_weight_gm ?`${item.post_wean_weight_gm}Gm`:''}
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
                          <div className="d-flex">
                            <div>
                            <input
                              name="postweanweight"
                              placeholder="Kg"
                              type="number"
                              id="postweanweight"
                              className="form-control"
                              value={postWean.post_wean_weight_kg}
                              {...register("post_wean_weight_kg")}
                             
                            />
                            </div>
                            <div>
                            <input
                              name="postweanweight"
                              placeholder="Gm"
                              type="number"
                              id="postweanweight"
                              className="form-control"
                              value={postWean.post_wean_weight_gm}
                              {...register("post_wean_weight_gm")}
                             
                            />
                            </div>
                          </div>
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
                                Open this and select Body score
                              </option>
                              <option value="Very slim Skinned body with entire skeleton appearing on skins">1: Very slim Skinned body with entire skeleton appearing on skins</option>
                        <option value="Skinned body with appearing sharp bones of chest on skin ">2: Skinned body with appearing sharp bones of chest on skin </option>
                        <option value="Slimmed body but chest bone does not appear with having a little muscles on body">3: Slimmed body but chest bone does not appear with having a little muscles on body</option>
                        <option value="Mild fat with having good muscles on body and less fat">4: Mild fat with having good muscles on body and less fat</option>
                        <option value="Fatty bulky Body. Without appearing any bones on body">5: Fatty bulky Body. Without appearing any bones on body</option>
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
                            className="btn btn-primary w-auto mt-3"
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
