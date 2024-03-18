import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const MultiStepForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [formData, setFormData] = useState({
    motherage: "",
    birthdate: "",
    gender: "",
    kidcode: "",
    kidscore: "",
    birthtype: "",
    birthweight: "",
    weandate: "",
    weanweight: "",
    motherweanweight: "",
    motherweandate: "",
    castration: "",
    comment: "",
    breeddate: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  

  const [num, setNum] = useState(2);
  const [DueDate, setDueDate] = useState(new Date());
var updatedDueDate = ''
  useEffect(() => {
    updatedDueDate = new Date(formData.breeddate);
    updatedDueDate.setDate(updatedDueDate.getDate() + num);
    setDueDate(updatedDueDate);
    setFormData((prevData) => ({ ...prevData, duedate:updatedDueDate }));
    console.log(updatedDueDate.toLocaleDateString('en-GB'))
    console.log(formData)
  }, [num, formData.breeddate]);

  const incrementDate = () => {
    setNum(num + 1);
  };

  const decrementDate = () => {
    setNum(num - 1);
  };
  


  const handleInputChange = (step, value) => {
    setFormData((prevData) => ({ ...prevData, [step]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log(formData);
  };

  return (
    <section className="home-backgroundColor">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-2 my-5">
            <ul className="list-unstyled">
              {[1,2,3,4].map(
                (step) => (
                  <li
                    key={step}
                    className={currentStep === step ? "active" : ""}
                    onClick={() => setCurrentStep(step)}
                  >
                    <a
                      href="#"
                      className="text-decoration-none nav-link mb-3 p-3 shadow bg-light"
                    >
                      {step}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col-lg-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              {currentStep === 1 && (
                <div className="row justify-content-center">
                  <h2 className="text-center">KID DATA</h2>
                  {/* <div className="col-lg-5 my-2 py-2 d-flex">
                  <label className="form-label" for="formBasicName">
                  <label className="form-label" for="formBasicName">
                      
                    </label>
                    </label>
                    <button
                      className="btn btn-light h-75 dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                    <input
                      type="text"
                      className="form-control h-75"
                      aria-label="Text input with dropdown button"
                    />
                  </div> */}
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
                      value={formData.motherage}
                      onChange={(e) =>
                        handleInputChange("motherage", e.target.value)
                      }
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
                      value={formData.birthdate}
                      onChange={(e) =>
                        handleInputChange("birthdate", e.target.value)
                      }
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
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3"
                      >
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
                      <option value="SLIGHT ASSISTANCE">
                        SLIGHT ASSISTANCE
                      </option>
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
                      <option selected>
                        Open this and select kidding score
                      </option>
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
                      value={formData.birthweight}
                      onChange={(e) =>
                        handleInputChange("birthweight", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-lg-5 my-2">
                    <div>
                      <label className="form-label px-2" htmlFor="weandate">
                        Wean Date
                      </label>
                      <span className="h-6">
                        ( when animal start eating food)
                      </span>
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
                      onChange={(e) => {
                        // setValue('motherweandate', e.target.value);
                        handleInputChange("motherweandate", e.target.value);
                      }}
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
                      onChange={(e) => {
                        // setValue('castration', e.target.value);
                        handleInputChange("castration", e.target.value);
                      }}
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
                      onChange={(e) => {
                        // setValue('comment', e.target.value);
                        handleInputChange("comment", e.target.value);
                      }}
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <div className="row justify-content-center">
                  <h2 className="text-center">POST WEANING MANAGEMENT </h2>
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
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3"
                      >
                        Wether
                      </label>
                    </div>
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
                      value={formData.birthdate}
                      onChange={(e) =>
                        handleInputChange("birthdate", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-lg-5 my-2">
                    <div>
                      <label className="form-label px-2" htmlFor="weandate">
                        Wean Date
                      </label>
                      <span className="h-6">
                        ( when animal start eating food)
                      </span>
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

                  <div className="col-lg-3 my-2">
                    <div>
                      <label
                        className="form-label d-block px-2"
                        htmlFor="90dayweandate"
                      >
                        90 Day Wean Date
                      </label>
                      <span className="h-6">
                        (wean means when goat start eating food)
                      </span>
                    </div>
                    <input
                      {...register("90dayweandate")}
                      placeholder="90 Day Wean Date"
                      type="date"
                      id="90dayweandate"
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-3 my-2">
                    <label
                      className="form-label px-2"
                      htmlFor="90dayweanweight"
                    >
                      90 Day Wean Weight
                    </label>
                    <input
                      {...register("90dayweanweight")}
                      placeholder="90 Day Wean Weight"
                      type="number"
                      id="90dayweanweight"
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-3 my-2">
                    <label className="form-label" for="90daybsc">
                      Select 90 Day Body Score
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      {...register("90daybsc")}
                      onChange={(e) => ("90daybsc", e.target.value)}
                    >
                      <option selected disabled>
                        select body score
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div className="row justify-content-center">
                  <h2 className="text-center">INVENTROY</h2>
                  <div className="col-lg-5 my-2">
                    <label className="form-label" for="birthdate">
                      Date of Purchasing
                    </label>
                    <input
                      name="purchasedate"
                      placeholder="Purchasing Date"
                      type="date"
                      id="purchasedate"
                      className="form-control"
                      {...register("purchasedate")}
                      value={formData.purchasedate}
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
                        {...register("invtgndr")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
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
                        {...register("invtgndr")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
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
                        {...register("invtgndr")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3"
                      >
                        Wether
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-5 my-2">
                    <label className="form-label" for="invtweight">
                      Weight
                    </label>
                    <input
                      name="invtweight"
                      placeholder="Weight"
                      type="number"
                      id="invtweight"
                      className="form-control"
                      {...register("invtweight")}
                      value={formData.invtweight}
                      onChange={(e) =>
                        handleInputChange("invtweight", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-lg-5 my-2">
                    <label className="form-label" for="invtheight">
                      Height
                    </label>
                    <input
                      name="invtheight"
                      placeholder="Height"
                      type="number"
                      id="invtheight"
                      className="form-control"
                      {...register("invtheight")}
                      value={formData.invtheight}
                      onChange={(e) =>
                        handleInputChange("invtheight", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-lg-5 my-2">
                    <label className="form-label" for="invtbsc">
                      Select Body Score
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      {...register("invtbsc")}
                      onChange={(e) => ("invtbsc", e.target.value)}
                    >
                      <option selected disabled>
                        select body score
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="col-lg-5 my-2">
                    <label className="form-label" for="invtage">
                      Age
                    </label>
                    <input
                      name="invtage"
                      placeholder="Age"
                      type="date"
                      id="invtage"
                      className="form-control"
                      {...register("invtage")}
                      value={formData.invtage}
                    />
                  </div>
                  <div className="col-lg-3 my-2">
                    <label className="form-label" for="invtfemaleselect">
                      Select if Female
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      {...register("invtfemaleselect")}
                      onChange={(e) => ("invtfemaleselect", e.target.value)}
                    >
                      <option selected disabled>
                        select if female
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="not confirm">not confirm</option>
                      <option value="not pregnent">not pregnent</option>
                    </select>
                  </div>
                  <div className="col-lg-3 my-2">
                    <label className="form-label" for="invtmaleselect">
                      Select if Male
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      {...register("invtmaleselect")}
                      onChange={(e) => ("invtmaleselect", e.target.value)}
                    >
                      <option selected disabled>
                        select if male
                      </option>
                      <option value="Wheater">Wheater</option>
                      <option value="Breeder">Breeder</option>
                    </select>
                  </div>
                </div>
              )}
              {currentStep === 4 && (
                <div className="row justify-content-center">
                  <h2 className="text-center">BREEDING </h2>
                  <div className="col-lg-5 my-2">
                    <label className="form-label" for="breeddate">
                      Date of Breed
                    </label>
                    <input
                      name="breeddate"
                      placeholder="Breed Date"
                      type="date"
                      id="breeddate"
                      className="form-control"
                      {...register("breeddate")}
                      value={formData.breeddate}
                      onChange={(e) =>
                        handleInputChange("breeddate", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-lg-5 my-2">
      <label className="form-label">Due Date</label>
      <h1 {...register('duedate')}
                      // value={formData.duedate}
                      // onChange={(e) =>handleInputChange("duedate", e.target.value)}
                      >{DueDate.toLocaleDateString("en-GB")}</h1>
      
      <button onClick={incrementDate}>Increase Due Date</button>
      <button onClick={decrementDate}>Decrease Due Date</button>
    </div>


                  <div className="col-lg-12">
                    <h3>Kid delivery Due Date</h3>
                  </div>
                </div>
              )}
              <div className="row">
                <div className="col-lg-6 d-flex justify-content-center">
                  <button
                    class="btn btn-primary mx-3 w-25"
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                  >
                    Back
                  </button>
                  <button
                    class="btn btn-primary mx-3 w-25"
                    onClick={handleNext}
                    type="submit"
                    disabled={currentStep === 4}
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiStepForm;
