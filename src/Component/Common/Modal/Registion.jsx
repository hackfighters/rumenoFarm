import React from "react";
import Modal from "react-bootstrap/Modal";

// Image
import logo from "../../../../src/assets/img/lv-bgr.png";

const Registration = ({ showModal, closeModal }) => {
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
                      className="btn text-white border-0 gradient-custom-2 my-3 w-75"
                      
                    >
                      Sign in
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

export default Registration;
