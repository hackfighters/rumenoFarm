import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Third party i18next
import { useTranslation } from "react-i18next";

const FeedBackForm = () => {
  const { t } = useTranslation();

  const [data, setData] = useState({
    // State
    name: "",
    address: "",
    phoneNumber: "",
    bestTimeToContact: "",
    experience: "",
    landSize: "",
    category: "goat",
    other: "",
    need: "",
  });

  // Function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data",data)
  };

  return (
    <section className="service-form container-fluid ">
      <div className="row py-5 justify-content-center">
        <div className="col-sm-8">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{t("v121")}</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter Name"
                onChange={handleChange}
                value={data.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{t("v122")}</Form.Label>
              <Form.Control
                name="address"
                type="text"
                placeholder="Enter Address"
                onChange={handleChange}
                value={data.address}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{t("v123")}</Form.Label>
              <Form.Control
                name="phoneNumber"
                type="text"
                placeholder="Enter Phone Number"
                onChange={handleChange}
                value={data.phoneNumber}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{t("v124")}</Form.Label>
              <Form.Control
                name="bestTimeToContact"
                type="time"
                placeholder="Enter Time"
                onChange={handleChange}
                value={data.bestTimeToContact}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{t("v125")}</Form.Label>
              <Form.Control
                name="experience"
                type="text"
                placeholder="Enter Experience"
                onChange={handleChange}
                value={data.experience}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{t("v126")}</Form.Label>
              <Form.Control
                name="landSize"
                type="text"
                placeholder="Enter Land Size"
                onChange={handleChange}
                value={data.landSize}
              />
            </Form.Group>
            <Form.Group>
              <div className="custom-control custom-radio my-3">
                <input
                  // type="radio"
                  // id="customRadio1"
                  // name="customRadio"
                  // className="custom-control-input mx-2"
                  // onChange={handleChange}
                  // value={data.customRadio}
                  type="radio"
                  className="custom-control-input mx-2"
                  name="category"
                  value="goat"
                  checked={data.category === 'goat'}
                  onChange={handleChange}
                />
                <label className="custom-control-label" htmlFor="customRadio1">
                  {t("v127")}
                </label>
              </div>
              <div className="custom-control custom-radio my-3">
                <input
                  // type="radio"
                  // id="customRadio2"
                  // name="customRadio"
                  // className="custom-control-input mx-2"
                  // onChange={handleChange}
                  // value={data.customRadio}
                  type="radio"
                  className="custom-control-input mx-2"
                  name="category"
                  value="sheep"
                  checked={data.category === 'sheep'}
                  onChange={handleChange}
                />
                <label className="custom-control-label" htmlFor="customRadio1">
                  {t("v128")}
                </label>
              </div>
              <div className="custom-control custom-radio my-3">
                <input
                  // type="radio"
                  // id="customRadio3"
                  // name="customRadio"
                  // className="custom-control-input mx-2"
                  // onChange={handleChange}
                  // value={data.customRadio}
                  type="radio"
                  className="custom-control-input mx-2"
                  name="category"
                  value="cow"
                  checked={data.category === 'cow'}
                  onChange={handleChange}
                />
                <label className="custom-control-label" htmlFor="customRadio1">
                  {t("v129")}
                </label>
              </div>
              <div className="custom-control custom-radio my-3">
                <input
                  // type="radio"
                  // id="customRadio4"
                  // name="customRadio"
                  // className="custom-control-input mx-2"
                  // onChange={handleChange}
                  // value={data.customRadio}
                  type="radio"
                  className="custom-control-input mx-2"
                  name="category"
                  value="buffalo"
                  checked={data.category === 'buffalo'}
                  onChange={handleChange}
                />
                <label className="custom-control-label" htmlFor="customRadio2">
                  {t("v130")}
                </label>
              </div>
              <div className="my-2">
                <label htmlFor="formGroupExampleInput2">{t("v131")}</label>
                <input
                  type="text"
                  className="form-control w-50"
                  id="formGroupExampleInput2"
                  name="other"
                  placeholder="Other"
                  onChange={handleChange}
                  value={data.other}
                />
              </div>
            </Form.Group>
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>{t("v132")}</Form.Label>
              <Form.Control
                name="need"
                type="text"
                onChange={handleChange}
                value={data.need}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary border-0 gradient-custom-2 mb-3 w-25"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FeedBackForm;
