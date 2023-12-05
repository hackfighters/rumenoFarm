import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Third party Fortawesome
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Common Component
import Footer from "../../Common/Footer";
import Navbar from "../../Common/Navbar/index";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import scanner from "../../../assets/img/scanner.png";
import { Form } from "react-bootstrap";
import axios from "axios";
// {/* Rumeno farm  */}
// {/* Rumeno */}
// {/* Veterinary */}
const Transaction = () => {
  const [values, setValues] = useState({
    name: "",
    number: "",
    transactionID: "",
    amount: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (transactionDetails) => {
    // Handle any errors in the form data
    if (errors) {
      console.error(errors);
      return;
    }

    // Send form data to the API endpoint
    axios
      .post("http://127.0.0.1:5000/api/post_data", transactionDetails)
      .then((response) => {
        console.log(
          "Transaction details submitted successfully:",
          response.data
        );
        setValues({
          name: "",
          number: "",
          transactionID: "",
          amount: "",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="desk-nav">
        {/* <Navbar /> */}
      </div>
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
          {errors.mobileNumber.type === "required"
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
                        type="text"
                        className="form-control form-group py-3"
                        placeholder="Amount"
                        {...register("amount", {
                          required: true,
                          pattern: /^[0-9]{10}$/, // Regex pattern for only numbers
                        })}
                      />
                     {errors.amount && (
        <span className="text-danger">
          {errors.amount.type === "required"
            ? "Please enter your mobile number"
            : "Please enter a valid mobile number" // Custom error message for pattern validation
          }
        </span>
      )}
                      <button
                        className="contact_form_submit mt-5"
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
                <div
                >
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
