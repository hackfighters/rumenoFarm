// ModalComponent.js
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
import { UserContext } from "../Modal/logusecont";

const KidFormModal = ({showkidModal,closekidModal, onSubmit, uniqueKey }) => {
  const { register, handleSubmit } = useForm();

  const handleSubmitKidForm = (data) => {
    onSubmit(data);
  };


  return (
    <>
    <button onClick={showkidModal}>kidmodal</button>
    <Modal show={showkidModal} onHide={closekidModal} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Kid Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(handleSubmitKidForm)}>
          <div className="row justify-content-around">
            {/* <h2 className="text-center">KID DATA</h2> */}
            <div className="col-lg-5 my-2">
                    <label className="form-label" for="kiduniquename">
                      Unique Name
                    </label>
                    <input
                      name="kiduniquename"
                      placeholder="Unique Name"
                      type="textt"
                      id="kiduniquename"
                      className="form-control"
                      {...register("kiduniquename")}
                    />
                  </div>
            <div className="col-lg-5 my-2">
              <label className="form-label" for="motherage">
                Age of Mother
              </label>
              <input
                name="motherage"
                placeholder="Mother Age"
                type="number"
                id="motherage"
                className="form-control"
                {...register("motherage")}
                //   value={formData.motherage}
                //   onChange={(e) => handleInputChange("motherage", e.target.value)}
              />
            </div>
            <div className="col-lg-5 my-2">
              <label className="form-label" for="selectbreed">
                Select Breed
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                {...register("breed")}
                onChange={(e) => ("breed", e.target.value)}
              >
                <option selected disabled>
                  select Breed
                </option>
                <option value="Barbari">Barbari</option>
                <option value="Jakhrana">Jakhrana</option>
                <option value="jamunapari">jamunapari</option>
                <option value="Beetal">Beetal</option>
                <option value="Unidentified">Unidentified</option>
              </select>
            </div>
            <div className="col-lg-5 my-2">
              <label className="form-label" for="birthdate">
                Birth Date
              </label>
              <input
                name="birthdate"
                placeholder="Birth Date"
                type="date"
                id="birthdate"
                className="form-control"
                {...register("birthdate")}
                //   value={formData.birthdate}
                //   onChange={(e) => handleInputChange("birthdate", e.target.value)}
              />
            </div>

            <div className="col-lg-5 my-2">
              <label className="form-label d-block" htmlFor="gender">
                Gender
              </label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio1"
                  value="doe"
                  {...register("gender")}
                  onChange={() => ("gender", "doe")}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Doe
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio2"
                  value="buck"
                  {...register("gender")}
                  onChange={() => ("gender", "buck")}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Buck
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio3"
                  value="wether"
                  {...register("gender")}
                  onChange={() => ("gender", "wether")}
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  Wether
                </label>
              </div>
            </div>

            <div className="col-lg-5 my-2">
              <label className="form-label" htmlFor="kidcode">
                Kidding Code
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                {...register("kidcode")}
              >
                <option selected disabled>
                  Open this and select kidding code
                </option>
                <option value="NO ASSISTANCE">NO ASSISTANCE</option>
                <option value="SLIGHT ASSISTANCE">SLIGHT ASSISTANCE</option>
                <option value="jamunapari">jamunapari</option>
                <option value="HARD PULL">HARD PULL</option>
                <option value="ABNORMAL PRESENTATION">
                  ABNORMAL PRESENTATION
                </option>
              </select>
            </div>
            <div className="col-lg-5 my-2">
              <label className="form-label" htmlFor="kidscore">
                Kidding Score
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                {...register("kidscore")}
              >
                <option selected>Open this and select kidding score</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="col-lg-5 my-2">
              <label className="form-label" htmlFor="birthtype">
                Birth Type
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                {...register("birthtype")}
              >
                <option value="Single">Single</option>
                <option value="Twin">Twin</option>
                <option value="Triple">Triple</option>
                <option value="Quad">Quad</option>
              </select>
            </div>
            <div className="col-lg-5 my-2">
              <label className="form-label" htmlFor="birthweight">
                Birth Weight
              </label>
              <input
                name="birthweight"
                placeholder="Birth Weight"
                type="number"
                id="birthweight"
                className="form-control"
                {...register("birthweight")}
                //   value={formData.birthweight}
                //   onChange={(e) => handleInputChange("birthweight", e.target.value)}
              />
            </div>
            <div className="col-lg-5 my-2">
              <div>
                <label className="form-label px-2" htmlFor="weandate">
                  Wean Date
                </label>
                <span className="h-6">( when animal start eating food)</span>
              </div>
              <input
                {...register("weandate")}
                placeholder="Wean Date"
                type="date"
                id="weandate"
                className="form-control"
              />
            </div>

            <div className="col-lg-5 my-2">
              <label className="form-label px-2" htmlFor="weanweight">
                Wean Weight
              </label>
              <input
                {...register("weanweight")}
                placeholder="Wean Weight"
                type="number"
                id="weanweight"
                className="form-control"
              />
            </div>

            <div className="col-lg-5 my-2">
              <div className="">
                <label
                  className="form-label px-2 m-0 d-block"
                  htmlFor="motherweanweight"
                >
                  Mother Weight At Wean
                </label>
                <span className="">
                  ( weight of mother goat when child starts eating food)
                </span>
              </div>
              <input
                {...register("motherweanweight")}
                placeholder="Mother Weight at Wean"
                type="number"
                id="motherweanweight"
                className="form-control"
              />
            </div>
            <div className="col-lg-5 my-2">
              <div>
                <label
                  className="form-label px-2 m-0 d-block"
                  htmlFor="motherweandate"
                >
                  Mother Wean Date
                </label>
                <span className="h-6">
                  ( mother wean date when child start eating food)
                </span>
              </div>
              <input
                name="motherweandate"
                placeholder="Wean Date"
                type="date"
                id="motherweandate"
                className="form-control"
                {...register("motherweandate")}
                //   onChange={(e) => {
                //     // setValue('motherweandate', e.target.value);
                //     handleInputChange("motherweandate", e.target.value);
                //   }}
              />
            </div>
            <div className="col-lg-5 my-2">
              <div>
                <label className="form-label px-2" htmlFor="castration">
                  Castration Date
                </label>
                <span className="h-6">(not able to reproduce)</span>
              </div>
              <input
                name="castration"
                placeholder="Castration Date"
                type="date"
                id="forcastration"
                className="form-control"
                {...register("castration")}
                //   onChange={(e) => {
                //     // setValue('castration', e.target.value);
                //     handleInputChange("castration", e.target.value);
                //   }}
              />
            </div>
            <div className="col-lg-5 my-2">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Any Comment
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                {...register("comment")}
                //   onChange={(e) => {
                // setValue('comment', e.target.value);
                // handleInputChange("comment", e.target.value);
                //   }}
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-25 mt-3">
              Submit
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
    </>);
};

export default KidFormModal;
