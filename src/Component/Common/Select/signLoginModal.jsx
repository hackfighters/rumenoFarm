import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import logo from "../../../../src/assets/img/lv-bgr.png";

const MyModal = ({ showModal, closeModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(username);
  console.log(password);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("username:", username);
    console.log("password:", password);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var data = JSON.stringify({
      username: "himanshu",
      password: "12345678",
    });
    var requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };
    fetch(
      "https://3c5b-2401-4900-1ca3-6c2b-2127-a0aa-b62c-fe8e.ngrok.io/rumeno_login",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const [isContent1Visible, setIsContent1Visible] = useState(true);
  const toggleVisibility = () => {
    setIsContent1Visible(!isContent1Visible);
  };
  return (
    <Modal
      show={showModal}
      onHide={closeModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header className="border-0" closeButton></Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {isContent1Visible ? (
                <div className="">
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
                        id="username"
                        className="form-control"
                        placeholder="Phone number or email address"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-3">
                      <label className="form-label mx-2" for="form2Example22">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        onClick={toggleVisibility}
                      >
                        Create new
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div>
                  <form className="container">
                    <div className="form-row row d-flex">
                      <div className="form-group col-lg-12 my-2">
                        <label className="my-2" for="">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="Enter Name"
                        />
                      </div>
                      <div className="form-group col-lg-12 my-2">
                        <label className="my-2" for="">
                          Mobile No
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="Mobile No"
                        />
                      </div>
                      <div className="form-group col-lg-12 my-2">
                        <label className="my-2" for="">
                          {" "}
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id=""
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group col-lg-12 my-2">
                        <label className="my-2" for="inputAddress">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id=""
                          placeholder="password"
                        />
                      </div>
                      <div className="form-group col-lg-6 my-2">
                        <label className="my-1" for="inputAddress">
                          State
                        </label>
                        <select className="select w-100 p-2 border rounded">
                          <option value="1">State</option>
                          <option value="2">Option 1</option>
                          <option value="3">Option 2</option>
                          <option value="4">Option 3</option>
                        </select>
                      </div>
                      <div className="form-group col-lg-6 my-2">
                        <label className="my-1" for="inputAddress">
                          City
                        </label>
                        <select className="select w-100 p-2 border rounded">
                          <option value="1">City</option>
                          <option value="2">Option 1</option>
                          <option value="3">Option 2</option>
                          <option value="4">Option 3</option>
                        </select>
                      </div>
                      <div className="form-group col-lg-12 my-2">
                        <label className="my-2" for="inputAddress">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="1234 Main St"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-primary my-4"
                        onClick={toggleVisibility}
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white text-center px-2">
                <h4 className="mb-4">WELCOME TO RUMENO</h4>
                <p className="small mb-0">
                  Rumeno Farmotech is a nutrition and feed supplement
                  technologies company offers a wide range of products,
                  including Probiotics, milk replacer, Macro & Micro Minerals,
                  Multi Vitamins, Enzymes, Amino Acids, feed additives,
                  premixes, concentrates, and specialty products for livestock,
                  poultry, and aquaculture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
