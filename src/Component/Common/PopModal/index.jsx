import Modal from "react-bootstrap/Modal";


function ViewModal({showModal,  closeModal, img, description, title}) {

  return (
    <>
      <Modal
      show={showModal}
      onHide={closeModal}
        aria-labelledby="example-custom-modal-styling-title"
        className="viewmodal modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <div className="container bd-example-modal-lg">
            <div className="row">
                <div className="col-lg-6">
                    <img className="w-100 rounded" src={img} alt="loading" />
                </div>
                <div className="col-lg-6">
                    <span className="text-dark h3">{description}</span>
                </div>
            </div>
         </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ViewModal;