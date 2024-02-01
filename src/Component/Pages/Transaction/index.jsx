import React, { useState, useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../Component/Common/Modal/logusecont";
import { faImage } from "@fortawesome/free-solid-svg-icons";

// Third party Fortawesome
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Common Component
import Footer from "../../Common/Footer";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import scanner from "../../../assets/img/scanner.png";
import { Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
// {/* Rumeno farm  */}
// {/* Rumeno */}
// {/* Veterinary */}
const Transaction = () => {
  const { amountData,UidData } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Upload Start

  const [loadingTextVisible, setLoadingTextVisible] = useState(false);
  const [previewImageVisible, setPreviewImageVisible] = useState(false);
  const [uploadAreaOpen, setUploadAreaOpen] = useState(false);
  const [fileDetailsOpen, setFileDetailsOpen] = useState(false);
  const [uploadedFileOpen, setUploadedFileOpen] = useState(false);
  const [uploadedFileInfoActive, setUploadedFileInfoActive] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [uploadedFileType, setUploadedFileType] = useState("");
  const [uploadedFileCounter, setUploadedFileCounter] = useState(0);
  const [image, setImage] = useState("");


  const dropZoneRef = useRef(null);
  const fileInputRef = useRef(null);
  const previewImageRef = useRef(null);

  const imagesTypes = ["jpeg", "png", "svg", "gif"];

  const handleDragOver = (event) => {
    event.preventDefault();
    // setIsDropZoneOver(true);
  };

  const handleDragLeave = () => {
    // setIsDropZoneOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    // setIsDropZoneOver(false);

    const file = event.dataTransfer.files[0];
    uploadFile(file);
    // console.log(uploadFile);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    uploadFile(file);
    setImage(file);
  };

  const uploadFile = (file) => {
    const fileType = file.type;
    const fileSize = file.size;

    if (fileValidate(fileType, fileSize)) {
      dropZoneRef.current.classList.add("drop-zoon--Uploaded");
      setLoadingTextVisible(true);
      setPreviewImageVisible(false);
      setUploadedFileOpen(false);
      setUploadedFileInfoActive(false);

      const fileReader = new FileReader();

      fileReader.onload = function () {
        setTimeout(() => {
          setUploadAreaOpen(true);
          setLoadingTextVisible(false);
          setPreviewImageVisible(true);
          setFileDetailsOpen(true);
          setUploadedFileOpen(true);
          setUploadedFileInfoActive(true);
        }, 500);

        // const UploadedImage = fileReader.result;
        // console.log(UploadedImage);

        previewImageRef.current.setAttribute("src", fileReader.result);
        setUploadedFileName(file.name);

        const fileTypeForState = imagesTypes.includes(fileType)
          ? fileType
          : "image";
        setUploadedFileType(fileTypeForState);
        progressMove();
      };

      fileReader.readAsDataURL(file);
    }
  };

  const progressMove = () => {
    let counter = 0;

    setTimeout(() => {
      const counterIncrease = setInterval(() => {
        if (counter === 100) {
          clearInterval(counterIncrease);
        } else {
          counter += 10;
          setUploadedFileCounter(counter);
        }
      }, 100);
    }, 600);
  };

  const fileValidate = (fileType, fileSize) => {
    const isImage = imagesTypes.filter(
      (type) => fileType.indexOf(`image/${type}`) !== -1
    );

    if (isImage.length !== 0) {
      if (fileSize <= 2000000) {
        return true;
      } else {
        toast.warn("Please Your File Should be 2 Megabytes or Less", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return false;
      }
    } else {
      toast.warn("Please make sure to upload An Image File Type", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    }
  };

  // upload End

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", image);
    
    const travdatat = {
      title: data.name,
      mobileNumber: data.mobileNumber,
      amount: data.amount,
      transactionID: data.transactionID,
      uID:UidData
    };
    axios
      .post(
        "https://89a8-2401-4900-1c08-7658-ec3a-e43b-4210-c5fa.ngrok-free.app/transaction_details",
        formData
      )
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        // console.log(err, "err");
          });


      axios
      .post(
        "https://89a8-2401-4900-1c08-7658-ec3a-e43b-4210-c5fa.ngrok-free.app/transaction_details",
        travdatat
      )
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        // console.log(err, "err");
      });

  };

  return (
    <>
      <div className="desk-nav">{/* <Navbar /> */}</div>
      <div className="mob-nav">
        <ResponsiveNavbar />
      </div>
      <section className="contact-sect container-fluid">
        <div className="row justify-content-center py-5">
          <div className="col-sm-10">
            <div className="contact_inner">
              <div className="row justify-content-between">
                <div className="col-sm-8">
                  <div className="contact_form_inner row  justify-content-center">
                    <Form className="contact_field col-sm-7 pt-1 pb-5">
                      <h3 className="my-2 text-center">Payment Gateway</h3>
                      <p className="my-3 text-center">Transaction Details</p>
                      <input
                        type="text"
                        className="form-control form-group py-3"
                        placeholder="Name"
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <span className="text-danger">Name is required</span>
                      )}
                      <input
                        type="text"
                        className="form-control form-group py-3"
                        placeholder="Mobile Number"
                        {...register("mobileNumber", {
                          required: true,
                          pattern: /^[0-9]{10}$/, // Regex pattern for only numbers
                        })}
                      />
                      {errors.mobileNumber && (
                        <span className="text-danger">
                          {
                            errors.mobileNumber.type === "required"
                              ? "Please enter your mobile number"
                              : "Please enter a valid mobile number" // Custom error message for pattern validation
                          }
                        </span>
                      )}
                      <input
                        type="text"
                        className="form-control form-group py-3"
                        placeholder="Transaction ID"
                        {...register("transactionID", { required: true })}
                      />
                      {errors.transactionID && (
                        <span className="text-danger">
                          Transaction ID is required
                        </span>
                      )}
                      <input
                        type="number"
                        className="form-control form-group py-3"
                        // placeholder="Amount"
                        value={amountData}
                        {...register("amount", {
                          required: true,
                          // pattern: /^[0-9]{10}$/, // Regex pattern for only numbers
                        })}
                      />
                      {errors.amount && (
                        <span className="text-danger">
                          {errors.amount.type === "required"
                            ? "Please enter your mobile number"
                            : "Please enter a valid mobile number"}
                        </span>
                      )}
                      {/* <input multiple onChange={(e) => setImage(e.target.files[0])} type="file" 
                      {...register("imges", {
                        required: true,
                      })}/> */}

                      {/* <TransImgUpload/> */}
                      <div
                        id="uploadArea"
                        className={`upload-area ${
                          uploadAreaOpen ? "upload-area--open" : ""
                        }`}
                      >
                        <h6 className="my-3 text-secondary">
                          Upload Transaction Screenshot
                        </h6>
                        <div
                          className="upload-area__drop-zoon drop-zoon"
                          ref={dropZoneRef}
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          onClick={handleClick}
                        >
                          <span className="drop-zoon__icon">
                            <FontAwesomeIcon icon={faImage} />
                          </span>
                          <p className="drop-zoon__paragraph">
                            Drop your Payment screenshot here
                          </p>
                          <span
                            id="loadingText"
                            className="drop-zoon__loading-text"
                            style={{
                              display: loadingTextVisible ? "block" : "none",
                            }}
                          >
                            Please Wait
                          </span>
                          <img
                            src=""
                            alt="loading"
                            id="previewImage"
                            className="drop-zoon__preview-image"
                            ref={previewImageRef}
                            style={{
                              display: previewImageVisible ? "block" : "none",
                            }}
                            draggable="false"
                          />
                          <input
                            type="file"
                            id="fileInput"
                            className="drop-zoon__file-input"
                            accept="image/*"
                            onChange={handleFileChange}
                            ref={fileInputRef}
                          />
                        </div>

                        <div
                          id="fileDetails"
                          className={`upload-area__file-details file-details ${
                            fileDetailsOpen ? "file-details--open" : ""
                          }`}
                        >
                          <h5 className="my-3">Uploaded File</h5>

                          <div
                            id="uploadedFile"
                            className={`uploaded-file ${
                              uploadedFileOpen ? "uploaded-file--open" : ""
                            }`}
                          >
                            <div className="uploaded-file__icon-container">
                              <i className="bx bxs-file-blank uploaded-file__icon"></i>
                              <span className="uploaded-file__icon-text">
                                {uploadedFileType}
                              </span>
                            </div>

                            <div
                              id="uploadedFileInfo"
                              className={`uploaded-file__info ${
                                uploadedFileInfoActive
                                  ? "uploaded-file__info--active"
                                  : ""
                              }`}
                            >
                              <span className="uploaded-file__name">
                                {uploadedFileName}
                              </span>
                              <span className="uploaded-file__counter">{`${uploadedFileCounter}%`}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="contact_form_submit mt-5"
                        type="submit"
                        onClick={handleSubmit(onSubmit)}
                      >
                        Submit
                      </button>
                    </Form>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="right_conatct_social_icon d-flex align-items-end justify-content-center">
                    <div className="socil_item_inner d-flex py-2">
                      <FontAwesomeIcon
                        className="text-white mx-3 h3"
                        type="button"
                        icon={faFacebook}
                      />
                      <FontAwesomeIcon
                        className="text-white mx-3 h3"
                        type="button"
                        icon={faInstagram}
                      />
                      <FontAwesomeIcon
                        className="text-white mx-3 h3"
                        type="button"
                        icon={faWhatsapp}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact_info_sec py-4">
                <h4 className="text-white text-center">SCANNER</h4>
                <div>
                  <img className="w-100 mb-3" src={scanner} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rumeno farm  */}
      {/* Rumeno */}
      {/* Veterinary */}
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Transaction;
