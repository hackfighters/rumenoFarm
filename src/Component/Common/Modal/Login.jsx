import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import logo from "../../../../src/assets/img/Logo/lv-bgr.png";
import { UserContext } from './logusecont';
import Cookies from "js-cookie";

const Login = ({
  showModal,
  closeModal,
  openRegistrationModal,
  OpenSendOtpModal,
}) => {
  const { t } = useTranslation();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  // const loginHandleChange = (e) => {
  //   const { name, value } = e.target;
  //   setLogin({
  //     ...login,
  //     [name]: value,
  //   });
  // };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = Cookies.get('loggedInUser');
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);
    

  const handleLogin = async (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
    e.preventDefault();

    // Perform API login request
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      // setLoggedInUser(data.username);
      const firstTwoChars = data.username.substring(0, 2);
      setLoggedInUser(firstTwoChars);
      Cookies.set('loggedInUser', firstTwoChars);
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
    } else {
      console.error('Login failed');
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
                <form onSubmit={handleLogin}>
                  <p className="mb-3">{t("v304")}</p>
                  <div className="form-outline  mb-3">
                    <label className="form-label mx-2" htmlFor="form2Example11">
                      {t("v305")}
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Phone number or email address"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label mx-2" htmlFor="form2Example22">
                      {t("v306")}
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
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
