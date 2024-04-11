import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import axios from "axios";
// import { Country, State, City } from "country-state-city";
// import Select from "react-select";

import logo from "../../../../src/assets/img/Logo/lv-bgr.png";
import Login from "./Login";

const Registration = ({ showModal, closeModal }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const countrydata = selectedCountry?.name
  const countrystate = selectedState?.name
  const countrycity = selectedCity?.name


  const onSubmit = async (data) => {

    const Registrationdata = 
      {
        country : countrydata,
        state: countrystate,
        city: countrycity,
        fullName : data.fullName,
        mobile : data.mobile,
        email : data.email,
        password : data.password,
        address: data.address
        
      }
    // console.log(Registrationdata)
    try {
      const response = await axios.post('https://7e94-2401-4900-1ca3-f9e5-4d3f-f6b7-3825-7f58.ngrok-free.app/rumeno_register', Registrationdata);
      // console.log('Registration successful:', response.data);

      if (response.data.status === 200) {
        toast.success('Registration successful');
        reset()
        setShowLoginModal(true);
        closeModal();
      } else {
        toast.error('Registration failedvvcv');
      }

    } catch (error) {
      console.error('Error:', error);
      // closeModal()
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
                        {...register("fullName", {
                          required: "Full Name is required",
                        })}
                        type="text"
                        className={`form-control ${
                          errors.fullName ? "is-invalid" : ""
                        }`}
                        name="fullName"
                     
                        placeholder="Enter Name"
                      />
                      {errors.fullName && (
                        <>
                        <span className="text-danger">
                          {errors.fullName.message}
                        </span>
                          <span className="d-none">
                            {toast.error(errors.fullName.message)}
                            </span>
                            </>
                            
                      )}
                    </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-2">{t("v312")}</label>
                      <input
                        {...register("mobile", {
                          required: "Mobile Number is required",
                        })}
                        type="text"
                        className={`form-control ${
                          errors.mobile ? "is-invalid" : ""
                        }`}
                        name="mobile"
                      
                        placeholder="Mobile Number"
                      />
                      {errors.mobile && (
                        <span className="text-danger">
                          {errors.mobile.message}
                          <span className="d-none">{toast.error(errors.mobile.message)}</span>
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
                            message: "Invalid email address",
                          },
                        })}
                        type="text"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        name="email"
                 
                        placeholder="Email"
                      />
                      {errors.email && (
                        <span className="text-danger">
                          {errors.email.message}
                          <span className="d-none">{toast.error(errors.email.message)}</span>
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
                            message:
                              "Password must be at least 8 characters long",
                          },
                        })}
                        type="password"
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        name="password"
                 
                        placeholder="password"
                      />
                      {errors.password && (
                        <span className="text-danger">
                          {errors.password.message}
                          <span className="d-none">{toast.error(errors.password.message)}</span>
                        </span>
                      )}
                    </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-1">Country</label>
                      {/* <Select
                        options={Country.getAllCountries()}
                        getOptionLabel={(options) => {
                          return options["name"];
                        }}
                        getOptionValue={(options) => {
                          return options["name"];
                        }}
                        onChange={(item) => {
                          setSelectedCountry(item);
                        }}
                        // name="country"
                      /> */}
                    </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-1">State</label>
                      {/* <Select
                        options={State?.getStatesOfCountry(
                          selectedCountry?.isoCode
                        )}
                        getOptionLabel={(options) => {
                          return options["name"];
                        }}
                        getOptionValue={(options) => {
                          return options["name"];
                        }}
                        // name="state"
                        onChange={(item) => {
                          setSelectedState(item);
                        }}
                      /> */}
                    </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-1">City</label>
{/* 
                      <Select
                        options={City.getCitiesOfState(
                          selectedState?.countryCode,
                          selectedState?.isoCode
                        )}
                        getOptionLabel={(options) => {
                          return options["name"];
                        }}
                        getOptionValue={(options) => {
                          return options["name"];
                        }}
                        onChange={(item) => {
                          setSelectedCity(item);
                        }}
                        // name="city"
                      /> */}
                    </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-2">{t("v317")}</label>
                      <input
                        {...register("address", {
                          required: "Address is required",
                        })}
                        type="text"
                        className={`form-control ${
                          errors.address ? "is-invalid" : ""
                        }`}
                        name="address"
                  
                        placeholder="Address"
                      />
                      {errors.address && (
                        <span className="text-danger">
                          {errors.address.message}
                          <span className="d-none">{toast.error(errors.address.message)}</span>
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
      <Login showModal={showLoginModal} closeModal={setShowLoginModal}/>
    </>
  );
};

export default Registration;
