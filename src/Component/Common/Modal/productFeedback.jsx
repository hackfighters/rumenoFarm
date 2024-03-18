import React from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const ProudctFeedbackModal = ({ showfeedModal, closefeedModal, title }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    let feedbackdata = {
      product: title,
      feedback: data.feedback,
    }
    console.log(feedbackdata);
    reset();
  };

  return (
    <>
      <Modal
        show={showfeedModal}
        onHide={closefeedModal}
        aria-labelledby="example-custom-modal-styling-title"
        className="viewmodal modal model-size-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            
              {title}
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="container bd-example-modal-lg"
          >
            <div className="row">
              <div className="col-lg-12 my-2">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Any Feedback
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  {...register("feedback")}
                  rows="3"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-25 mt-3">
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

export default ProudctFeedbackModal;
