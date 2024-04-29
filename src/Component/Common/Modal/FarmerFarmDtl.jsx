import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";


const FarmerDetails = ({showFarmModal,closeFarmModal}) => {
    const { register, handleSubmit,reset} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset()
    };

  return (
    <>
      <Modal
        show={showFarmModal}
        onHide={closeFarmModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header className="border-0 fs-5 fw-bolder" closeButton>
          Farmer Details
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)} className="container">
            <div className="row justify-content-around">
              <div className="col-lg-5 my-2">
                <label className="form-label" for="name">
                  Farmer Name
                </label>
                <input
                  name="name"
                  placeholder="Farmer Name"
                  type="text"
                  id="name"
                  className="form-control"
                  {...register("name")}
                />
              </div>
              <div className="col-lg-5 my-2">
                <label className="form-label" for="number">
                  Mobile Number
                </label>
                <input
                  name="number"
                  placeholder="Mobile Number"
                  type="number"
                  id="number"
                  className="form-control"
                  {...register("number")}
                />
              </div>
              <div className="col-lg-5 my-2">
                <label className="form-label" for="farmname">
                  Farm House Name
                </label>
                <input
                  name="farmname"
                  placeholder="Farm House Name"
                  type="text"
                  id="farmname"
                  className="form-control"
                  {...register("farmname")}
                />
              </div>
              <div className="col-lg-5 my-2">
                <label className="form-label" for="farmtype">
                  Farm House Type
                </label>
                <input
                  name="farmtype"
                  placeholder="Farm House Type"
                  type="text"
                  id="farmtype"
                  className="form-control"
                  {...register("farmtype")}
                />
              </div>
              
              <div className="col-lg-5 my-2">
                <label className="form-label" for="address">
                  Address
                </label>
                <input
                  name="address"
                  placeholder="Address"
                  type="text"
                  id="address"
                  className="form-control"
                  {...register("address")}
                />
              </div>
              <div className="col-lg-5 my-2">
                <div>
                  <label className="form-label px-2" htmlFor="noofanimal">
                    Number of Animals
                  </label>
                </div>
                <input
                  placeholder="Number of Animals"
                  type="number"
                  id="noofanimal"
                  className="form-control"
                  {...register("noofanimal")}
                />
              </div>
              
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-auto mt-3" onClick={closeFarmModal}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FarmerDetails;
