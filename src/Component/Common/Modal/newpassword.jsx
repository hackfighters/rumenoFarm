import React,{useState} from "react";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";

import logo from "../../../../src/assets/img/Logo/lv-bgr.png";
import Login from "./Login";


const SetNewPassword = ({ showModal, closeModal }) => {

  const [showLoginModal, setShowLoginModal] = useState(false);


  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLoginModal(true);
    closeModal();
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
          Create New Password :-
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-center">
                  <img src={logo} className="w-25" alt="logo" />
                  <h4 className="mt-1 mb-3 pb-1">RUMENO</h4>
                </div>
                <form  onSubmit={handleSubmit}>
                  <p className="mb-3">create your new password</p>
                  <div className="form-outline  mb-3">
                    <label className="form-label mx-2" for="form2Example11">
                    Create Password
                    </label>
                    <input
                      type="text"
                      name="newpassword"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label mx-2" for="form2Example22">
                    Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmpassword"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <div className="text-center pt-1  pb-1">
                    <button
                      className="btn btn-primary border-0 gradient-custom-2 mb-3 w-75"
                      type="submit"
                     
                    >
                      {t("v307")}
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-white text-center px-2">
                  <h4 className="mb-4">{t("v133")}</h4>
                  <p className="small mb-0">
                  {t("v134")}
                  </p>
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

export default SetNewPassword;
