import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../Modal/logusecont";
import { Modal } from "react-bootstrap";
import Cookies from "js-cookie";

const MilkRecord = () => {
  const { register, handleSubmit, setValue, reset } = useForm();
  const { setUcmilkrec, setUcaddkid } = useContext(UserContext);
  const [milkrec, setMilkrec] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const apiUrl = process.env.REACT_APP_API_KID;
  const getMidCookies = JSON.parse(Cookies.get("loginUserData") ?? "[]");
  
  const handleOpenDialog = () => {
    setOpenModal(true);
    reset();
    setSelectedItem(null);
  };
  
  const handleCloseDialog = () => {
    setOpenModal(false);
    reset();
    setSelectedItem(null);
  };
  
  useEffect(() => {
    fetchItems(getMidCookies.mid);
  }, []);
  
  const fetchItems = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/${id}`);
      setMilkrec(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  

  const onSubmit = async (data) => {
    if (selectedItem !== null) {
      // Edit existing item
      try {
        const response = await axios.put(`${apiUrl}/${getMidCookies.mid}/${milkrec[selectedItem].id}`, data);
        const updatedMilkrec = [...milkrec];
        updatedMilkrec[selectedItem] = response.data;
        fetchItems(getMidCookies.mid);
      } catch (error) {
        console.error("Error updating item:", error);
      }
    } else {
      // Add new item
      try {
        const response = await axios.post(`${apiUrl}/${getMidCookies.mid}`, data);
        fetchItems(getMidCookies.mid);
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
    console.log('data: ', data,milkrec);

    handleCloseDialog();
  };
  
  const handleEdit = (index) => {
    const { milk_for_kid, milk_volume, milk_date } = milkrec[index];
    setValue('milk_for_kid', milk_for_kid);
    setValue('milk_volume', milk_volume);
    setValue('milk_date', milk_date);
    setSelectedItem(index);
    setOpenModal(true);
  };
  
  const handleDelete = async (index) => {
    try {
      const response = await axios.delete(`${apiUrl}/${getMidCookies.mid}/${milkrec[index].id}`);
      console.log(response.data);
      setMilkrec(milkrec.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error deleting item:', error);
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
                    Add Milk Record
                  </button>
                    {milkrec.map((item, index) => (
                      <div className="row bg-light p-3 shadow row justify-content-evenly my-4" key={item.id}>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Number of kids  :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.milk_for_kid}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Milk Volume  :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.milk_volume} Liter
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Milk Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                          {new Date(item.milk_date).toLocaleDateString('en-IN')}
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
                    {selectedItem !== null ? "Edit Item" : "Add New Item"}
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row justify-content-around">
                          {/* <h2 className="text-center">KID DATA</h2> */}

                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="milkvolume">
                              Milk Volume
                            </label>
                            <input
                              name="milkvolume"
                              placeholder="Milk Volume in liter"
                              type="number"
                              id="milkvolume"
                              className="form-control"
                              value={milkrec.milkvolume}
                              {...register("milk_volume")}
                              // onChange={(e) =>
                              //   setmilkrec({
                              //     ...milkrec,
                              //     milkvolume: e.target.value,
                              //   })
                              // }
                            />
                          </div>

                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="milkforkid">
                              Number of Kids 
                            </label>
                            <input
                              name="milkforkid"
                              placeholder="Number of Kids"
                              type="number"
                              id="milkforkid"
                              className="form-control"
                              value={milkrec.milkforkid}
                              {...register("milk_for_kid")}
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
                                htmlhtmlfor="milkdate"
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
                              {...register("milk_date")}
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




// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';

// function CrudApi() {
//   const [items, setItems] = useState([]);
//   const [editItem, setEditItem] = useState(null);
//   const [editName, setEditName] = useState('');
//   const [editAge, setEditAge] = useState('');
  
//   const { register, handleSubmit, reset } = useForm();

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:7000/items');
//       setItems(response.data);
//     } catch (error) {
//       console.error('Error fetching items:', error);
//     }
//   };

//   const handleCreate = async (data) => {
//     try {
//       const response = await axios.post('http://localhost:7000/items', data);
//       setItems([...items, response.data]);
//       reset();
//     } catch (error) {
//       console.error('Error creating item:', error);
//     }
//   };

//   const handleUpdate = async (id) => {
//     try {
//       const updatedData = { name: editName, age: editAge };
//       const response = await axios.put(`http://localhost:7000/items/${id}`, updatedData);
//       setItems(items.map(item => (item.id === id ? response.data : item)));
//       setEditItem(null);
//       setEditName('');
//       setEditAge('');
//     } catch (error) {
//       console.error('Error updating item:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:7000/items/${id}`);
//       setItems(items.filter(item => item.id !== id));
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>CRUD App</h1>
//       <form onSubmit={handleSubmit(handleCreate)}>
//         <input
//           type="text"
//           placeholder="Name"
//           {...register('name', { required: true })}
//         />
//         <input
//           type="number"
//           placeholder="Age"
//           {...register('age', { required: true })}
//         />
//         <button type="submit">Add Item</button>
//       </form>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             {editItem === item.id ? (
//               <div>
//                 <input
//                   type="text"
//                   value={editName}
//                   onChange={(e) => setEditName(e.target.value)}
//                 />
//                 <input
//                   type="number"
//                   value={editAge}
//                   onChange={(e) => setEditAge(e.target.value)}
//                 />
//                 <button onClick={() => handleUpdate(item.id)}>Update</button>
//               </div>
//             ) : (
//               <div>
//                 {item.name} - {item.age}
//                 <button onClick={() => {
//                   setEditItem(item.id);
//                   setEditName(item.name);
//                   setEditAge(item.age);
//                 }}>Edit</button>
//                 <button onClick={() => handleDelete(item.id)}>Delete</button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CrudApi;
