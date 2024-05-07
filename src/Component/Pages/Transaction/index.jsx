import React, { useState, useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../Component/Common/Modal/logusecont";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import ReactWhatsapp from "react-whatsapp";

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
import { Helmet } from "react-helmet";
import KeysWords from "../../Common/apiData/keyWords";
import { useNavigate } from "react-router-dom";
// {/* Rumeno farm  */}
// {/* Rumeno */}
// {/* Veterinary */}
const Transaction = () => {
  const { amountData, UidData } = useContext(UserContext);
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
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [Finalamt, setFinalamt] = useState(0);
  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
    if(event.target.value === "COD"){
      console.warn("COD payment")
      setFinalamt(amountData + amountData * 0.02)
      console.warn(Finalamt)
    }

  };

  const navigate = useNavigate();
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
    // console.log(formData);

    var paydata;
    if (data.paymode=="COD"){
      paydata = {
        name: data.name,
        mobileNumber: data.mobileNumber,
        address: data.address,
        amount: amountData,
        transactionID: "NA",
        cod_payment: "NA",
        paymode: data.paymode,
        uID: UidData
      };
      
      console.warn(paydata)
      axios
      .post(
        "http://192.168.1.8:5000/transaction_details",
        paydata
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
    }
    else{
      paydata = {
        name: data.name,
        mobileNumber: data.mobileNumber,
        address: data.address,
        amount: amountData,
        transactionID: data.transactionID,
        paymode: data.paymode,
        cod_payment: "NA",
        uID: UidData
      };
      console.warn(paydata)
      axios
        .post(
          "http://192.168.1.8:5000/transaction_details",
          formData
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err, "err");
        });
  
  
      axios
        .post(
          "http://192.168.1.8:5000/transaction_details",
          paydata
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err, "err");
        });
    }
// Navigate to Thankyou page
navigate("/thankyoupage");
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Transaction-Rumeno</title>
        <link rel="canonical" href="https://rumeno.in/transaction" />
      </Helmet>
      <ul className="d-none">
        {KeysWords.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <a className="d-none" href="https://www.amazon.in/Sheep-Goat-Feed/b?ie=UTF8&node=28179044031"></a>
      <a className="d-none" href="https://www.amazon.in/goat-medicine/s?k=goat+medicine"></a>
      <a className="d-none" href="https://www.amazon.in/goat-farming-accessories/s?k=goat+farming+accessories"></a>
      <a className="d-none" href="https://www.amazon.in/cow-farm-equipment/s?k=cow+farm+equipment"></a>
      <a className="d-none" href="https://www.amazon.in/cow-feed/s?k=cow+feed"></a>
      <a className="d-none" href="https://www.amazon.in/cattle-medicine/s?k=cattle+medicine"></a>
      <a className="d-none" href="https://www.indiamart.com/shakyaworldtrade/goat-farming-equipment-and-accessories.html"></a>
      <a className="d-none" href="https://www.flipkart.com/search?q=goat%20feed&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"></a>
      <a className="d-none" href="https://www.flipkart.com/search?q=goat%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"></a>
      <a className="d-none" href="https://www.flipkart.com/search?q=cow%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"></a>
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
                      <h3 className="my-2 text-center">Payment Process</h3>
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
                        placeholder="Address"
                        {...register("address", { required: true })}
                      />
                      {errors.address && (
                        <span className="text-danger">Address is required</span>
                      )}
                      <div className=" p-3 border-bottom fw-bold">₹ {amountData} /-</div>
                      <div className="row mt-3">
                        <div className="col-lg-6 text-center  border-end">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="cod"
                          name="paymentMethod"
                          onClick={handlePaymentMethodChange}
                          value="COD"
                          {...register('paymode', { required: true })}
                        />
                        <label htmlFor="cod" className="fw-bold text-danger mx-1">COD</label>
                        <p className="pt-1">(2% extra on Cash On Delivery)</p>
                        </div>
                        <div className="col-lg-6 text-center">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="upi"
                          name="paymentMethod"
                          onClick={handlePaymentMethodChange}
                          value="UPI"
                          {...register("paymode", { required: true })}

                        />
                        <label htmlFor="upi" className="fw-bold text-danger mx-1">UPI</label>
                        <p className="pt-1">(Pay Using Scanner or UPI Number)</p>
                        </div>
                      </div>
                      <hr className="mt-1" />

                      {/* <TransImgUpload/> */}
                      {selectedPaymentMethod === "UPI" && (
                        <>
                        <ul className="d-flex list-unstyled justify-content-center" >
                          <li className="mx-2">UPI NO:-<span className="fw-bold"> 7355043892</span></li>
                          <li className="mx-2">UPI ID:-<span className="fw-bold"> 7355043892m@pnb</span>
                          </li>
                        </ul>
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
                          <div
                            id="uploadArea"
                            className={`upload-area ${uploadAreaOpen ? "upload-area--open" : ""
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
                              className={`upload-area__file-details file-details ${fileDetailsOpen ? "file-details--open" : ""
                                }`}
                            >
                              <h5 className="my-3">Uploaded File</h5>

                              <div
                                id="uploadedFile"
                                className={`uploaded-file ${uploadedFileOpen ? "uploaded-file--open" : ""
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
                                  className={`uploaded-file__info ${uploadedFileInfoActive
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
                        </>
                      )}
                      {selectedPaymentMethod === "COD" && (
                        <>
                        
                        <ul>
                          <li className="justify-content-between d-flex my-1"><span>Amount</span> <span className="fw-bold " >₹ {amountData} /-</span></li>
                          <li className="justify-content-between d-flex my-1"><span>2% extra on COD</span> <span className="fw-bold mx-2 text-success">+ 2%</span></li>
                          <hr />
                          <li className="justify-content-between d-flex"><span>Total Amount </span> <span className="fw-bold text-danger h5">₹ {Finalamt} /-</span></li>
                        </ul>
                        </>
                      )}
                      
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
                      <a
                        href="https://www.facebook.com/RumenoFarmotech/"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          className="text-white mx-3 h3"
                          type="button"
                          icon={faFacebook}
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/rumenofarmotech/"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          className="text-white mx-3 h3"
                          type="button"
                          icon={faInstagram}
                        />
                      </a>
                      <ReactWhatsapp
                        className="bg-transparent border-0"
                        number="+91 7355043892"
                        message="Hello World"
                      >
                        <FontAwesomeIcon
                          className="text-white mx-3 h3"
                          type="button"
                          icon={faWhatsapp}
                        />
                      </ReactWhatsapp>
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

      <Footer />
    </>
  );
};

export default Transaction;
