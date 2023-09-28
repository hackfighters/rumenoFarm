import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

// Image
import logo from "../../../../src/assets/img/lv-bgr.png";
import axios from "axios";

const Login = ({ showModal, closeModal, openRegistrationModal }) => {
  
  // State
  const [login, setLogin] = useState({
    username:'',
    password:'',
  });

  // Function
  const loginHandleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(login);
    try {
      const response = await axios.post('http://192.168.1.4:5000/rumeno_register', login);
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

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
                  <p className="mb-3">Please login to your account</p>
                  <div className="form-outline  mb-3">
                    <label className="form-label mx-2" for="form2Example11">
                      Username
                    </label>
                    <input
                      type="email"
                      name="username"
                      className="form-control"
                      placeholder="Phone number or email address"
                      onChange={loginHandleChange}
                      value={login.username}
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label mx-2" for="form2Example22">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={loginHandleChange}
                      value={login.password}
                    />
                  </div>

                  <div className="text-center pt-1  pb-1">
                    <button
                      className="btn btn-primary border-0 gradient-custom-2 mb-3 w-75"
                      type="submit"
                    >
                      Log in
                    </button>
                    <a className="text-muted d-block mb-4" href="#!">
                      Forgot password?
                    </a>
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={openRegistrationModal}
                    >
                      Create new
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-white text-center px-2">
                  <h4 className="mb-4">WELCOME TO RUMENO</h4>
                  <p className="small mb-0">
                    Rumeno Farmotech is a nutrition and feed supplement
                    technologies company offers a wide range of products,
                    including Probiotics, milk replacer, Macro & Micro Minerals,
                    Multi Vitamins, Enzymes, Amino Acids, feed additives,
                    premixes, concentrates, and specialty products for
                    livestock, poultry, and aquaculture.
                  </p>
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
