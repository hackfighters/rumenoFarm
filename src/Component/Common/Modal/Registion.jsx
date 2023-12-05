// import React, { useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import { useTranslation } from "react-i18next";
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// // Third party Toastify
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // Image
// import logo from "../../../../src/assets/img/Logo/lv-bgr.png";
// import axios from "axios";

// const Registration = ({ showModal, closeModal }) => {
//   const { t } = useTranslation();
//   // const [response, setResponse] = useState(null);

//   // console.log("response",response)

//   const [registration, setRegistration] = useSta
//   te({
//     fullName: '',
//     mobile: '',
//     email: '',
//     password: '',
//     address: '',
//     city: '',
//     state: '',
//   });

//   const registrationHandleChange = (e) => {
//     const { name, value } = e.target;
//     setRegistration({
//       ...registration,
//       [name]: value,
//     });
//   };

//   const registrationapi = async (e) => {
//     e.preventDefault();
//     console.log(registration);
//     try {
//       const response = await axios.post('http://localhost:5000/api/user/register', registration);
//       console.log('Registration successful:', response.data);
//       if("status" === 300){
//         toast.success('successful');
//       }
//       else if("status" === 400){
//         toast.success('successful');
//       }

//     }   catch (error) {
//       console.error('Error:', error);
//       toast.error('Error 404', {
//         position: "top-center",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     }
//   };

//   return (
//     <>
//       <Modal
//         show={showModal}
//         onHide={closeModal}
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//         size="lg"
//       >
//         <Modal.Header className="border-0 fs-5 fw-bolder" closeButton>
//           Registration :-
//         </Modal.Header>
//         <Modal.Body>
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-6">
//                 <div className="text-center">
//                   <img src={logo} className="w-25" alt="logo" />
//                   <h4 className="mt-1 mb-3 pb-1">RUMENO</h4>
//                 </div>
//                 <form className="container" onSubmit={registrationapi}>
//                   <div className="form-row row d-flex">
//                     <div className="form-group col-lg-12 my-2">
//                       <label className="my-2">{t("v311")}</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="fullName"
//                         onChange={registrationHandleChange}
//                         value={registration.fullName}
//                         placeholder="Enter Name"
//                       />
//                     </div>
//                     <div className="form-group col-lg-12 my-2">
//                       <label className="my-2">{t("v312")}</label>
//                       <input
//                         type="mobile"
//                         className="form-control"
//                         name="mobile"
//                         onChange={registrationHandleChange}
//                         value={registration.mobile}
//                         placeholder="Mobile No"
//                       />
//                     </div>
//                     <div className="form-group col-lg-12 my-2">
//                       <label className="my-2">{t("v313")}</label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         name="email"
//                         onChange={registrationHandleChange}
//                         value={registration.email}
//                         placeholder="Email"
//                       />
//                     </div>
//                     <div className="form-group col-lg-12 my-2">
//                       <label className="my-2">{t("v314")}</label>
//                       <input
//                         type="password"
//                         className="form-control"
//                         name="password"
//                         onChange={registrationHandleChange}
//                         value={registration.password}
//                         placeholder="password"
//                       />
//                     </div>
//                     <div className="form-group col-lg-6 my-2">
//                       <label className="my-1">{t("v315")}</label>
//                       <select
//                         className="select w-100 p-2 border rounded"
//                         name="state"
//                         onChange={registrationHandleChange}
//                         value={registration.state}
//                       >
//                         <option value="1">State</option>
//                         <option value="2">Option 1</option>
//                         <option value="3">Option 2</option>
//                         <option value="4">Option 3</option>
//                       </select>
//                     </div>
//                     <div className="form-group col-lg-6 my-2">
//                       <label className="my-1">{t("v316")}</label>
//                       <select
//                         className="select w-100 p-2 border rounded"
//                         name="city"
//                         onChange={registrationHandleChange}
//                         value={registration.city}
//                       >
//                         <option value="1">City</option>
//                         <option value="2">Option 1</option>
//                         <option value="3">Option 2</option>
//                         <option value="4">Option 3</option>
//                       </select>
//                     </div>
//                     <div className="form-group col-lg-12 my-2">
//                       <label className="my-2">{t("v317")}</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="address"
//                         onChange={registrationHandleChange}
//                         value={registration.address}
//                         placeholder="Address"
//                       />
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-center">
//                     <button
//                       type="submit"
//                       className="btn text-white border-0 gradient-custom-2 my-3 w-75"
//                     >
//                       {t("v318")}
//                     </button>
//                     {/* <ToastContainer /> */}
//                   </div>
//                 </form>
//               </div>
//               <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
//                 <div className="text-white text-center px-2">
//                   <h4 className="mb-4">{t("v133")}</h4>
//                   <p className="small mb-0">
//                   {t("v134")}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default Registration;




import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import axios from "axios";

import logo from "../../../../src/assets/img/Logo/lv-bgr.png";

const Registration = ({ showModal, closeModal }) => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [registration, setRegistration] = useState({
    fullName: '',
    mobile: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
  });

  const registrationHandleChange = (e) => {
    const { name, value } = e.target;
    setRegistration({
      ...registration,
      [name]: value,
    });
  };

  // const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/register', data);
      console.log('Registration successful:', response.data);

      if (response.data.status === 300 || response.data.status === 400) {
        toast.success('Registration successful');
      } else {
        toast.error('Registration failed');
      }

    } catch (error) {
      console.error('Error:', error);
      toast.error('Error 404', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={closeModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header className="border-0 fs-5 fw-bolder" closeButton>
          Registration :-
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-center">
                  <img src={logo} className="w-25" alt="logo" />
                  <h4 className="mt-1 mb-3 pb-1">RUMENO</h4>
                </div>
                <form className="container" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-row row d-flex">
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-2">{t("v311")}</label>
                      <input
                        {...register("fullName", { required: "Full Name is required" })}
                        type="text"
                        className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                        name="fullName"
                        onChange={registrationHandleChange}
                        value={registration.fullName}
                        placeholder="Enter Name"
                      />
                      {errors.fullName && (
                        <span className="text-danger">
                          {errors.fullName.message}
                        </span>
                      )}
                    </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-2">{t("v312")}</label>
                      <input
                      {...register("mobile", { required: "Mobile No is required" })}
                        type="text"
                        className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                        name="mobile"
                        onChange={registrationHandleChange}
                        value={registration.mobile}
                        placeholder="Mobile No"
                      />
                      {errors.mobile && (
                        <span className="text-danger">
                          {errors.mobile.message}
                        </span>
                      )}
                    </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-2">{t("v313")}</label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        type="text"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        name="email"
                        onChange={registrationHandleChange}
                        value={registration.email}
                        placeholder="Email"
                      />
                      {errors.email && (
                        <span className="text-danger">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-2">{t("v314")}</label>
                      <input
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long"
                          }
                        })}
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        name="password"
                        onChange={registrationHandleChange}
                        value={registration.password}
                        placeholder="password"
                      />
                      {errors.password && (
                        <span className="text-danger">
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                    <div className="form-group col-lg-6 my-2">
                      <label className="my-1">{t("v315")}</label>
                      <select
                        {...register("state", { required: "State is required" })}
                        className={`select w-100 p-2 border rounded ${errors.state ? 'is-invalid' : ''}`}
                        name="state"
                        onChange={registrationHandleChange}
                        value={registration.state}
                      >
                        <option value="1">State</option>
                        <option value="2">Option 1</option>
                        <option value="3">Option 2</option>
                        <option value="4">Option 3</option>
                      </select>
                      {errors.state && (
                        <span className="text-danger">
                          {errors.state.message}
                        </span>
                      )}
                    </div>
                    <div className="form-group col-lg-6 my-2">
                      <label className="my-1">{t("v316")}</label>
                      <select
                        {...register("city", { required: "City is required" })}
                        className={`select w-100 p-2 border rounded ${errors.city ? 'is-invalid' : ''}`}
                        name="city"
                        onChange={registrationHandleChange}
                        value={registration.city}
                      >
                        <option value="1">City</option>
                        <option value="2">Option 1</option>
                        <option value="3">Option 2</option>
                        <option value="4">Option 3</option>
                      </select>
                      {errors.city && (
                        <span className="text-danger">
                          {errors.city.message}
                        </span>
                      )}
                    </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-2">{t("v317")}</label>
                      <input
                        {...register("address", { required: "Address is required" })}
                        type="text"
                        className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                        name="address"
                        onChange={registrationHandleChange}
                        value={registration.address}
                        placeholder="Address"
                      />
                      {errors.address && (
                        <span className="text-danger">
                          {errors.address.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn text-white border-0 gradient-custom-2 my-3 w-75"
                    >
                      {t("v318")}
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-white text-center px-2">
                  <h4 className="mb-4">{t("v133")}</h4>
                  <p className="small mb-0">{t("v134")}</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Registration;
