import Modal from "react-bootstrap/Modal";

// import viewmodal1 from "../../../assets/img/prod-img/prdcom-1.jpg"
// import viewmodal2 from "../../../assets/img/prod-img/prdcom-2.png"
// import viewmodal3 from "../../../assets/img/prod-img/prdcom-3.jpg"
// import viewmodal4 from "../../../assets/img/prod-img/prdcom-4.jpg"

function ViewModal({showModal,  closeModal, img, descrption}) {

    // const Data = [
    //     {
    //         img : viewmodal1,
    //         description : "product data"
    //     },
    //     {
    //         img : viewmodal2,
    //         description : "product data"
    //     },{
    //         img : viewmodal3,
    //         description : "product data"
    //     },{
    //         img : viewmodal4,
    //         description : "product data"
    //     },
    // ]


  return (
    <>
      <Modal
      show={showModal}
      onHide={closeModal}
        aria-labelledby="example-custom-modal-styling-title"
        max-width={100}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img className="w-100" src={img} alt="loading" />
                </div>
                <div className="col-lg-6">
                    <p>{descrption}</p>
                </div>
            </div>
         </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ViewModal;
