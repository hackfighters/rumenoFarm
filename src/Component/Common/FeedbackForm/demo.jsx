// import React, { useState } from "react";
// import Modal from "react-modal";
// import { useForm } from "react-hook-form";

// const Demo = () => {
//   const [data, setData] = useState([]);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: "", date: "" });
//   const [editIndex, setEditIndex] = useState(null);
//   const { register, handleSubmit } = useForm();

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setFormData({ name: "", date: "" });
//     setEditIndex(null);
//   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

//   const handleSubmitdata = () => {
//     if (editIndex !== null) {
//       // Edit existing data
//       const updatedData = [...data];
//       updatedData[editIndex] = formData;
//       setData(updatedData);
//     } else {
//       // Add new data
//       setData([...data, formData]);
//     }

//     closeModal();
//   };
//   const onsubmit = (data)=>{
//     console.log(data);
//   }

//   const handleEdit = (index) => {
//     setFormData(data[index]);
//     setEditIndex(index);
//     setModalIsOpen(true);
//   };

//   const handleDelete = (index) => {
//     const updatedData = [...data];
//     updatedData.splice(index, 1);
//     setData(updatedData);
//   };

//   return (
//     <div>
//       <h1>Data List</h1>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>
//             {item.name} - {item.date}
//             <button onClick={() => handleEdit(index)}>Edit</button>
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       <button onClick={openModal}>Add</button>

//       <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
//         <h2>{editIndex !== null ? "Edit" : "Add"} Data</h2>
//         <form onSubmit={handleSubmit(onsubmit)}>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               id="name"
//               {...register("name")}
//               value={formData.name}
//               onChange={(e) =>
//                                 setFormData({
//                                   ...formData,
//                                   name: e.target.value,
//                                 })}
//             />
//           </label>
//           <br />
//           <label>
//             Date:
//             <input
//               type="text"
//               name="date"
//               {...register("date")}
//               onChange={(e) =>
//                                 setFormData({
//                                   ...formData,
//                                   date: e.target.value,
//                                 })}
//               value={formData.date}
//             />
//           </label>
//           <br />
//           <button type="button" onClick={handleSubmitdata}>
//             {editIndex !== null ? "Edit" : "Add"}
//           </button>
//         </form>
//         <button onClick={closeModal}>Close</button>
//       </Modal>
//     </div>
//   );
// };

// export default Demo;



// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form'; // Import React Hook Form
// import Modal from 'react-modal';

// const Demo = () => {
//   const [data, setData] = useState([]);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset, // Use reset function from React Hook Form
//   } = useForm({ mode: 'all' }); // Set validation mode to 'all'

//   const openModal = () => {
//     setModalIsOpen(true);
//     reset(); // Use reset to clear form data when opening modal
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setEditIndex(null);
//   };

//   const handleEdit = (index) => {
//     setFormData(data[index]);
//     setEditIndex(index);
//     setModalIsOpen(true);
//   };

//   const handleDelete = (index) => {
//     const updatedData = [...data];
//     updatedData.splice(index, 1);
//     setData(updatedData);
//   };

//   const onSubmit = (formData) => {
//     if (editIndex !== null) {
//       // Edit existing data
//       const updatedData = [...data];
//       updatedData[editIndex] = formData;
//       setData(updatedData);
//     } else {
//       // Add new data
//       setData([...data, formData]);
//     }

//     closeModal();
//   };

//   return (
//     <div>
//       <h1>Data List</h1>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>
//             {item.name} - {item.date}
//             <button onClick={() => handleEdit(index)}>Edit</button>
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       <button onClick={openModal}>Add</button>

//       <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
//         <h2>{editIndex !== null ? 'Edit' : 'Add'} Data</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               {...register('name', { required: true })}
//               value={formData.name}
//               onChange={handleChange}
//             />
//             {errors.name && <span>Name is required.</span>}
//           </label>
//           <br />
//           <label>
//             Date:
//             <input
//               type="text"
//               name="date"
//               {...register('date', { required: true })}
//               value={formData.date}
//               onChange={handleChange}
//             />
//             {errors.date && <span>Date is required.</span>}
//           </label>
//           <br />
//           <button type="submit">{editIndex !== null ? 'Edit' : 'Add'}</button>
//         </form>
//         <button onClick={closeModal}>Close</button>
//       </Modal>
//     </div>
//   );
// };

// export default Demo;

// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import { useForm } from 'react-hook-form';

// const Demo = () => {
//   const { handleSubmit,  setValue, register, } = useForm();
//   const [data, setData] = useState([]);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setValue('name', ''); // Clear the form values using react-hook-form
//     setValue('date', '');
//     setEditIndex(null);
//   };

//   const onSubmit = (ii) => {
//     if (editIndex !== null) {
//       // Edit existing data
//       const updatedData = [...data];
//       updatedData[editIndex] = ii;
//       setData(updatedData);
//       console.log(updatedData[editIndex])
//     } else {
//       // Add new data
//       setData([...data, ii]);
//     }
//     console.log(ii)
//     closeModal();
//   };

//   const handleEdit = (index) => {
//     setValue('name', data[index].name);
//     setValue('date', data[index].date);
//     setEditIndex(index);
//     setModalIsOpen(true);
//   };

//   const handleDelete = (index) => {
//     const updatedData = [...data];
//     updatedData.splice(index, 1);
//     setData(updatedData);
//   };

//   return (
//     <div>
//       <h1>Data List</h1>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>
//             {item.name} - {item.date}
//             <button onClick={() => handleEdit(index)}>Edit</button>
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       <button onClick={openModal}>Add</button>

//       <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
//         <h2>{editIndex !== null ? 'Edit' : 'Add'} Data</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <label>
//             Name:
//             <input
//               name="name"
//               defaultValue=""
//               value={data.name}
//               {...register('name')}
//             />
//           </label>
//           <br />
//           <label>
//             Date:
//             <input
//               name="date"
//               defaultValue=""
//               value={data.date}
//               {...register('date')}
//             />
//           </label>
//           <br />
//           <button type="submit">
//             {editIndex !== null ? 'Edit' : 'Add'}
//           </button>
//         </form>
//         <button onClick={closeModal}>Close</button>
//       </Modal>
//     </div>
//   );
// };

// export default Demo;


// import React, { useState } from "react";

// function Demo() {
//   const [date, setDate] = useState(new Date());
//   const [days, setDays] = useState('');

//   const handleDateChange = (e) => {
//     setDate(new Date(e.target.value));
//   };

//   const handleIncrease = () => {
//     setDays(days + 1);
//   };

//   const handleDecrease = () => {
//     setDays(days - 1);
//   };

//   const newDate = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);

//   return (
//     <div>
//       <input type="date" value={date.toISOString().slice(0, 10)} onChange={handleDateChange} />
//       <h1>
//         {newDate.toLocaleDateString("en-US", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         })}
//         {days} days from now
//       </h1>
//       <button onClick={handleDecrease}>-</button>
//       <button onClick={handleIncrease}>+</button>
//     </div>
//   );
// }

// export default Demo;

import React, { useState } from 'react';

const Demo = () => {
  // Step 1: Initialize state
  const [selectedDate, setSelectedDate] = useState('');
  const [calculatedDate, setCalculatedDate] = useState('');

  // Helper function to add days to a date
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  // Step 2: Handle date input change
  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    const datePlusSeven = addDays(newDate, 7);
    setCalculatedDate(datePlusSeven.toISOString().split('T')[0]);
  };

  // Step 4: Increment/Decrement functions
  const changeDate = (delta) => {
    if (calculatedDate) {
      setCalculatedDate(
        addDays(calculatedDate, delta).toISOString().split('T')[0]
      );
    }
  };

  // Step 5: Buttons to change the date
  const handleIncrease = () => changeDate(1);
  const handleDecrease = () => changeDate(-1);

  return (
    <div>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <h1>{calculatedDate}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};

export default Demo;


// import React, { useState } from 'react';

// const Demo = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateChange = (event) => {
//     setSelectedDate(new Date(event.target.value));
//   };

//   const handleAddDays = () => {
//     const newDate = new Date(selectedDate);
//     newDate.setDate(selectedDate.getDate() + 7);
//     setSelectedDate(newDate);
//   };

//   const handleSubtractDays = () => {
//     const newDate = new Date(selectedDate);
//     newDate.setDate(selectedDate.getDate() - 7);
//     setSelectedDate(newDate);
//   };

//   return (
//     <div>
//       <label>
//         Select Date:
//         <input type="date" value={selectedDate.toISOString().split('T')[0]} onChange={handleDateChange} />
//       </label>
//       <br />
//       <button onClick={handleAddDays}>Increase by 7 days</button>
//       <button onClick={handleSubtractDays}>Decrease by 7 days</button>
//       <br />
//       <h1>{selectedDate.toDateString()}</h1>
//     </div>
//   );
// };

// export default Demo;

// import React, { useState } from 'react';

// const YourComponent = () => {
//  const [date, setDate] = useState(new Date());
//  const [inputValue, setInputValue] = useState(date.toISOString().split('T')[0]);

//  const addDays = (date, days) => {
//     const result = new Date(date);
//     result.setDate(result.getDate() + days);
//     return result;
//  };

//  const handleDateChange = (event) => {
//     const inputDate = new Date(event.target.value);
//     if (!isNaN(inputDate.getTime())) {
//       setDate(inputDate);
//       setInputValue(event.target.value); // Update the inputValue state as well
//     }
//  };

//  const increaseDate = () => {
//     const newDate = addDays(date, 7);
//     setDate(newDate);
//  };

//  const decreaseDate = () => {
//     const newDate = addDays(date, -7);
//     setDate(newDate);
//  };

//  return (
//     <div>
//       <input
//         type="date"
//         value={inputValue}
//         onChange={handleDateChange}
//       />
//       <h1>{date.toISOString().split('T')[0]}</h1>
//       <button onClick={increaseDate}>Increase by 7 days</button>
//       <button onClick={decreaseDate}>Decrease by 7 days</button>
//     </div>
//  );
// };

// export default YourComponent;

// import React from 'react';
// import { useForm } from 'react-hook-form';

// const YourComponent = () => {
//   const { register, handleSubmit, setValue, errors } = useForm();
//   const [date, setDate] = React.useState(new Date());
//   const [inputValue, setInputValue] = React.useState(date.toISOString().split('T')[0]);
//   const [submittedData, setSubmittedData] = React.useState([]);

//   const addDays = (date, days) => {
//     const result = new Date(date);
//     result.setDate(result.getDate() + days);
//     return result;
//   };

//   const handleDateChange = (event) => {
//     const inputDate = new Date(event.target.value);
//     if (!isNaN(inputDate.getTime())) {
//       setDate(inputDate);
//       setInputValue(event.target.value);
//     }
//   };

//   const increaseDate = () => {
//     const newDate = addDays(date, 7);
//     setDate(newDate);
//     setInputValue(newDate.toISOString().split('T')[0]);
//   };

//   const decreaseDate = () => {
//     const newDate = addDays(date, -7);
//     setDate(newDate);
//     setInputValue(newDate.toISOString().split('T')[0]);
//   };

//   const onSubmit = (data) => {
//     setSubmittedData([...submittedData, data]);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label>Date:</label>
//         <input
//           type="date"
//           name="date"
//           value={inputValue}
//           onChange={handleDateChange}
//           {...register("inputValue")}
//         />

//         <h1>{date.toISOString().split('T')[0]}</h1>

//         <button type="submit">Submit</button>
//       </form>

//       <button onClick={increaseDate}>Increase by 7 days</button>
//       <button onClick={decreaseDate}>Decrease by 7 days</button>

//       <ul>
//         {submittedData.map((item, index) => (
//           <li key={index}>{`Date: ${item.date}`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default YourComponent;

// import React, { useState } from 'react';

// const BreedHeat = () => {

//   const { register, handleSubmit , setValue} = useForm();
//   const [breed, setBreed] = useState([]);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);


//   const handleOpenDialog = () => {
//     setOpenModal(true);
//     setValue('milkforkid', "");
//     setValue('milkvolume', "");
//     setSelectedItem(null);
//   };

//   const handleCloseDialog = () => {
//     setOpenModal(false);
//     setValue('milkforkid', "");
//     setValue('milkvolume', "");
//     setSelectedItem(null);
//   };

//  const [date, setDate] = useState(new Date());
//  const [inputValue, setInputValue] = useState(date.toISOString().split('T')[0]);

//  const addDays = (date, days) => {
//     const result = new Date(date);
//     result.setDate(result.getDate() + days);
//     console.log(result.toLocaleDateString('en-GB'));
//     return result;
//  };

//  const handleDateChange = (event) => {
//     const inputDate = new Date(event.target.value);
//     if (!isNaN(inputDate.getTime())) {
//       setDate(inputDate);
//       setInputValue(event.target.value); // Update the inputValue state as well
//       console.log(inputDate)
//     }
//  };

//  const increaseDate = () => {
//     const newDate = addDays(date, 7);
//     setDate(newDate);
//     console.log(inputValue,date.toLocaleDateString('en-GB'));
//  };

//  const decreaseDate = () => {
//     const newDate = addDays(date, -7);
//     setDate(newDate);
//  };

//  const onsubmit = (data) => {
//   if (selectedItem !== null) {
//     // Edit existing data
//     const updatedData = [...breed];
//     updatedData[selectedItem] = data;
//     setBreed(updatedData);
//   } else {
//     // Add new data
//     setBreed([...breed, data]);
//   }
//   setUcaddkid(data)
//   console.log("final",data)
//   setOpenModal(false);
// };

// const handleEdit = (index) => {
//   setValue('milkforkid', breed[index].milkforkid);
//   setValue('milkvolume', breed[index].milkvolume);
//   setSelectedItem(index);
//   setOpenModal(true);
// };


// const handleDelete = (index) => {
//   const updatedData = [...breed];
//   updatedData.splice(index, 1);
//   setBreed(updatedData);
// };

//  return (
//   <>
//   <section className="bg-menu-theme">
//         <div className="layout-wrapper layout-content-navbar">
//           <div className="layout-container">
//             <div className="layout-page">
//               <div className="container-lg mt-4">
//                 <div>
//                   <div>
//                   <button
//                     className="mt-3 btn btn-primary w-auto"
//                     onClick={() => handleOpenDialog()}
//                   >
//                     Add Breed
//                   </button>
//                     {breed.map((item, index) => (
//                       <div className="row bg-light p-3 shadow row justify-content-evenly my-4" key={item.id}>
//                         <span className="text-center px-5 py-4 col-lg-3 ">
//                           <strong className="d-block animal-bg2">
//                             Number of kids  :
//                           </strong>{" "}
//                           <span className="animal-bg1 d-block px-2">
//                             {item.milkforkid}
//                           </span>
//                         </span>
//                         <span className="text-center px-5 py-4 col-lg-3 ">
//                           <strong className="d-block animal-bg2">
//                             Milk Volume  :
//                           </strong>{" "}
//                           <span className="animal-bg1 d-block px-2">
//                             {item.milkvolume}
//                           </span>
//                         </span>
//                         <span className="text-center mx-2">
//                           <button className="btn btn-warning w-auto mx-2" onClick={() => handleEdit(index)}>
//                             Edit
//                           </button>
//                           <button className="btn btn-danger w-auto mx-2" onClick={() => handleDelete(index)}>
//                             Delete
//                           </button>
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//   <Modal show={openModal} onHide={handleCloseDialog}>
//                     <Modal.Header>
//                       {selectedItem !== null ? "Edit Item" : "Add New Item"}
//                     </Modal.Header>
//                     <Modal.Body>
//                       <form onSubmit={handleSubmit(onsubmit)}>
//                     <div>
//       <input
//         type="date"
//         value={inputValue}
//         onChange={handleDateChange}
//         {...register("inputValue")}
//       />
//       <h1 {...register("date")}>{date.toISOString().split('T')[0]}</h1>
//       <button onClick={increaseDate}>Increase by 7 days</button>
//       <button onClick={decreaseDate}>Decrease by 7 days</button>
//     </div>
//                       </form></Modal.Body></Modal>
//                       </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
  

//   </>
//     // <div>
//     //   <input
//     //     type="date"
//     //     value={inputValue}
//     //     onChange={handleDateChange}
//     //   />
//     //   <h1>{date.toISOString().split('T')[0]}</h1>
//     //   <button onClick={increaseDate}>Increase by 7 days</button>
//     //   <button onClick={decreaseDate}>Decrease by 7 days</button>
//     // </div>
//  );
// };

// export default BreedHeat;



// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

// const YourComponent = () => {
//   const { register, handleSubmit, setValue } = useForm();
//   const [date, setDate] = useState(new Date());
//   const [inputValue, setInputValue] = useState(date.toISOString().split('T')[0]);

//   const addDays = (date, days) => {
//     const result = new Date(date);
//     result.setDate(result.getDate() + days);
//     return result;
//   };

//   const handleDateChange = (event) => {
//     const inputDate = new Date(event.target.value);
//     if (!isNaN(inputDate.getTime())) {
//       setDate(inputDate);
//       setInputValue(event.target.value); // Update the inputValue state as well
//     }
//   };

//   const increaseDate = () => {
//     const newDate = addDays(date, 7);
//     setDate(newDate);
//   };

//   const decreaseDate = () => {
//     const newDate = addDays(date, -7);
//     setDate(newDate);
//   };

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           type="date"
//           value={inputValue}
//           onChange={handleDateChange}
//           {...register('selectedDate')}
//         />
        
//         <h1>{date.toISOString().split('T')[0]}</h1>
//         <button type="submit">Submit</button>
//       </form>
//       <button onClick={increaseDate}>Increase by 7 days</button>
//       <button onClick={decreaseDate}>Decrease by 7 days</button>
//     </div>
//   );
// };

// export default YourComponent;
