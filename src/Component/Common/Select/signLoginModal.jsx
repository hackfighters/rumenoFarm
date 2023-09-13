import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import logo from '../../../../src/assets/img/lv-bgr.png';


const MyModal = ({ showModal, closeModal }) => {
  
  const [isContent1Visible, setIsContent1Visible] = useState(true);
  const toggleVisibility = () => {
    setIsContent1Visible(!isContent1Visible);
  };
  return (
    <Modal show={showModal}
      onHide={closeModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div className="container">



          <div class="row">
            <div class="col-lg-6 py-4">

              {isContent1Visible ? (
              <div class="">

                <div class="text-center">
                  <img src={logo} className="w-25" alt="logo" />
                  <h4 class="mt-1 mb-3 pb-1">RUMENO</h4>
                </div>

                <form>
                  <p className="mb-3">Please login to your account</p>

                  <div class="form-outline  mb-3">
                    <label class="form-label mx-2" for="form2Example11">Username</label>
                    <input type="email" id="form2Example11" class="form-control"
                      placeholder="Phone number or email address" />
                  </div>

                  <div class="form-outline mb-3">
                    <label class="form-label mx-2" for="form2Example22">Password</label>
                    <input type="password" id="form2Example22" class="form-control"
                      placeholder="Password" />
                  </div>

                  <div class="text-center pt-1  pb-1">
                    <button class="btn btn-primary border-0 gradient-custom-2 mb-3 w-75" type="button">Log
                      in</button>
                    <a class="text-muted d-block mb-4" href="#!">Forgot password?</a>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                    <button type="button" class="btn btn-outline-danger" onClick={toggleVisibility}>Create new</button>
                  </div>

                </form>

              </div>) :
                (<div>
                  <form className="container">
                    <div class="form-row row d-flex">
                      <div class="form-group col-lg-6 my-2">
                        <label className="my-2" for="">First Name</label>
                        <input type="text" class="form-control" id="" placeholder="First Name" />
                      </div>
                      <div class="form-group col-lg-6 my-2">
                        <label className="my-2" for="">Last Name</label>
                        <input type="text" class="form-control" id="" placeholder="Last Name" />
                      </div>
                      <div class="form-group col-lg-12 my-2">
                        <label className="my-2" for="">Mobile No</label>
                        <input type="text" class="form-control" id="" placeholder="Mobile No" />
                      </div>
                      <div class="form-group col-lg-12 my-2">
                        <label className="my-2" for=""> Email</label>
                        <input type="email" class="form-control" id="" placeholder="Email" />
                      </div>
                      <div class="form-group col-lg-12 my-2">
                        <label className="my-2" for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="" placeholder="1234 Main St" />
                      </div>
                      <div class="form-group col-lg-12 my-2">
                        <label className="my-2" for="inputAddress">Password</label>
                        <input type="password" class="form-control" id="" placeholder="password" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="submit" class="btn btn-primary my-4" onClick={toggleVisibility}>Sign in</button>
                    </div>
                  </form>
                </div>)
              }
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white text-center px-2">
                <h4 class="mb-4">WELCOME TO RUMENO</h4>
                <p class="small mb-0">Rumeno Farmotech is a nutrition and feed supplement technologies company offers a wide range of products, including Probiotics, milk replacer, Macro & Micro Minerals, Multi Vitamins, Enzymes, Amino Acids, feed additives, premixes, concentrates, and specialty products for livestock, poultry, and aquaculture.</p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;