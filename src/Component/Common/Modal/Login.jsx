import React, { useEffect, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import logo from "../../../../src/assets/img/Logo/lv-bgr.png";
import { UserContext } from "./logusecont";
import Cookies from "js-cookie";
import axios from "axios";


import { navDropdown } from "../navCloseResp/navDropdown";

const Login = ({
  showModal,
  closeModal,
  openRegistrationModal,
  OpenSendOtpModal,
}) => {

  const { t } = useTranslation();
  const apiUrl = process.env.REACT_APP_API;
  const { setLoggedInUser, setCart, setUidData, setfarmDtl, setFarmDataUMKid } = useContext(UserContext);





  useEffect(() => {
    const storedUser = JSON.parse(Cookies.get("loginUserData") ?? "{}");
    if (storedUser) {
      setLoggedInUser(storedUser.name);
      setfarmDtl(storedUser.FarmName)
    }

  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ---------------
  const onSubmit = async (data) => {
    const payload = {
      mobile: data?.username,
      password: data?.password
    }
    try {
      const response = await axios.post(
        `${apiUrl}/login`, payload
      );
      // Handle the login success, e.g., store token i n state or localStorage
      if (response.data.status == 200) {
        const { userName, FarmName, date, uID, pID, rId, sessionId, token } = response.data;
        const firstTwoChars = response.data.userName;
        const FarmerDtl = response.data.FarmName;
        const userNameWords = firstTwoChars.split(" ");
        const firstWord = userNameWords[0];
        const getUidata = response.data.uID;

        setUidData(getUidata);
        setFarmDataUMKid({ uID: getUidata })
        setLoggedInUser(firstWord);
        setfarmDtl(FarmerDtl)

        Cookies.set("loggedInUser", firstWord);
        Cookies.set("loginUserData", JSON.stringify({
          name: userName,
          date: date,
          FarmName: FarmName,
          uID: uID,
          pID: pID,
          rId: rId,
          sessionId: sessionId,
          token: token,
        }));

        // upload previous cart data
        setCart(response?.data?.pID)
        Cookies.set("cart", JSON.stringify(response?.data?.pID));

        toast.success("Login Successful", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        closeModal(); // Close the login modal
        reset();
        navDropdown()
      }
      else if (response?.data?.status == 404) {
        toast.error(response?.data?.message)
      } else if (response.data.status == 401) {
        toast.error(response?.data?.message)
      }

    } catch (error) {
      toast.error(error, {
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
          Login :-
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
                  <p className="mb-3">{t("v304")}</p>
                  <div className="form-outline  mb-3">
                    <label className="form-label mx-2" htmlFor="form2Example11">
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="username"
                      {...register("username", {
                        required: "mobile number is required",
                      })}
                    />
                    {errors.username && (
                      <div className="text-danger">
                        {errors.username.message}
                      </div>
                    )}
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label mx-2" htmlFor="form2Example22">
                      {t("v306")}
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors.password && (
                      <div className="text-danger">
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                  <div className="text-center pt-1  pb-1">
                    <button
                      className="btn btn-primary border-0 gradient-custom-2 mb-3 w-75"
                      type="submit"
                    >
                      {t("v307")}
                    </button>
                    <a
                      className="text-muted d-block mb-4"
                      href="#!"
                      onClick={OpenSendOtpModal}
                    >
                      {t("v308")}
                    </a>
                  </div>
                </form>
                <div className="d-flex align-items-center justify-content-center pb-4">
                  <p className="mb-0 me-2">{t("v309")}</p>
                  <button
                    type=""
                    className="btn btn-outline-danger"
                    onClick={openRegistrationModal}
                  >
                    {t("v310")}
                  </button>
                </div>
                {/* <LoginForm/> */}
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-white text-center p-2">
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

export default Login;
