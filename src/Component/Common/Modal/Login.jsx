import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import logo from "../../../../src/assets/img/Logo/lv-bgr.png";
import { UserContext } from "./logusecont";
import Cookies from "js-cookie";
import axios from "axios";

const Login = ({
  showModal,
  closeModal,
  openRegistrationModal,
  OpenSendOtpModal,
}) => {
  const { t } = useTranslation();
  const { setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = Cookies.get("loggedInUser");
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleLogin = async (data) => {
    // Use the values from the form data
    const { username, password } = data;

    // Perform API login request
    const response = await axios.post("https://dummyjson.com/auth/login", {
      username,
      password,
    });

    if (response.status === 200) {
      const data = await response.data;
      const firstTwoChars = data.username.substring(0, 2);
      setLoggedInUser(firstTwoChars);
      Cookies.set("loggedInUser", firstTwoChars);
      console.log(response);
      console.log(data);

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
    } else {
      console.error("Login failed");
      toast.warn("Login Failed", {
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
                <form onSubmit={handleSubmit(handleLogin)}>
                  <p className="mb-3">{t("v304")}</p>
                  <div className="form-outline  mb-3">
                    <label className="form-label mx-2" htmlFor="form2Example11">
                      {t("v305")}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone number or email address"
                      {...register("username", {
                        required: "Username is required",
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
                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">{t("v309")}</p>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={openRegistrationModal}
                    >
                      {t("v310")}
                    </button>
                  </div>
                </form>

                {/* <LoginForm/> */}
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

export default Login;
