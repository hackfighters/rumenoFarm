
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import axios from "axios"; // Import Axios
import logo from "../../../../src/assets/img/Logo/lv-bgr.png";
import SetNewPassword from "./newpassword";

const SendOtp = ({ showModal, closeModal }) => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [showNewPasswordModal, setShowNewPasswordModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const isPhoneNumberValid = phoneNumber.length === 10;

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const onSubmit = async (data) => {
    try {
      // Make a POST request to your API endpoint
      const response = await axios.post("YOUR_API_ENDPOINT", data);
      // console.log(response.data); // Handle the response as needed
      setShowNewPasswordModal(true);
      closeModal();
    } catch (error) {
      console.error("Error submitting form:", error);
      setShowNewPasswordModal(true); //remove this after adding api
      closeModal();// remove after adding api
      // Handle error, show a message to the user, etc.
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
          {t("forgotPasswordTitle")}
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-center">
                  <img src={logo} className="w-25" alt="logo" />
                  <h4 className="mt-1 mb-3 pb-1">RUMENO</h4>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p className="mb-3">Enter Register Mobile Number For OTP</p>
                  <div className="form-outline mb-3">
                    <label className="form-label mx-2" htmlFor="phoneNumberInput">
                      Enter Mobile Number
                    </label>
                    <input
                      {...register("phoneNumber", { required: true, minLength: 10, maxLength: 10 })}
                      type="text"
                      name="phoneNumber"
                      className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                      placeholder="Enter Number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                    {errors.phoneNumber && <div className="invalid-feedback">Please enter a valid 10-digit phone number</div>}
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label mx-2" htmlFor="otpInput">
                      Enter OTP
                    </label>
                    <input
                    {...register("otp", { required: true })}
                      type="text"
                      name="otp"
                      className={`form-control ${errors.otp ? 'is-invalid' : ''}`}
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={handleOtpChange}
                      disabled={!isPhoneNumberValid}
                    />
                    {errors.otp && <div className="invalid-feedback">Please enter the OTP</div>}
                  </div>
                  <div className="text-center pt-1 pb-1">
                    <button
                      className="btn btn-primary border-0 gradient-custom-2 mb-3 w-75"
                      type="submit"
                      disabled={!isPhoneNumberValid}
                    >
                      {t("submit")}
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
      <SetNewPassword showModal={showNewPasswordModal} closeModal={setShowNewPasswordModal} />
    </>
  );
};

export default SendOtp;
