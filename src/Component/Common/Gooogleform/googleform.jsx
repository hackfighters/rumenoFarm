// import React, { useState } from "react";
// // import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// // Third party i18next
// import { useTranslation } from "react-i18next";

// const FeedBackForm = () => {
//   const { t } = useTranslation();

//   const [data, setData] = useState({
//     // State
//     name: "",
//     address: "",
//     phoneNumber: "",
//     bestTimeToContact: "",
//     experience: "",
//     landSize: "",
//     category: "goat",
//     other: "",
//     need: "",
//   });

//   // Function
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("data", data);
//   };

//   return (
//     <section className="service-form container-fluid ">
//       <div className="row py-5 justify-content-center">
//         <div className="col-sm-8">
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>{t("v121")}</Form.Label>
//               <Form.Control
//                 name="name"
//                 type="text"
//                 placeholder="Enter Name"
//                 onChange={handleChange}
//                 value={data.name}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>{t("v122")}</Form.Label>
//               <Form.Control
//                 name="address"
//                 type="text"
//                 placeholder="Enter Address"
//                 onChange={handleChange}
//                 value={data.address}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>{t("v123")}</Form.Label>
//               <Form.Control
//                 name="phoneNumber"
//                 type="text"
//                 placeholder="Enter Phone Number"
//                 onChange={handleChange}
//                 value={data.phoneNumber}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>{t("v124")}</Form.Label>
//               <Form.Control
//                 name="bestTimeToContact"
//                 type="time"
//                 placeholder="Enter Time"
//                 onChange={handleChange}
//                 value={data.bestTimeToContact}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>{t("v125")}</Form.Label>
//               <Form.Control
//                 name="experience"
//                 type="text"
//                 placeholder="Enter Experience"
//                 onChange={handleChange}
//                 value={data.experience}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>{t("v126")}</Form.Label>
//               <Form.Control
//                 name="landSize"
//                 type="text"
//                 placeholder="Enter Land Size"
//                 onChange={handleChange}
//                 value={data.landSize}
//               />
//             </Form.Group>
//             <Form.Group>
//               <div className="custom-control custom-radio my-3">
//                 <input
//                   type="radio"
//                   className="custom-control-input mx-2"
//                   name="category"
//                   value="goat"
//                   checked={data.category === "goat"}
//                   onChange={handleChange}
//                 />
//                 <label className="custom-control-label" htmlFor="customRadio1">
//                   {t("v127")}
//                 </label>
//               </div>
//               <div className="custom-control custom-radio my-3">
//                 <input
//                   type="radio"
//                   className="custom-control-input mx-2"
//                   name="category"
//                   value="sheep"
//                   checked={data.category === "sheep"}
//                   onChange={handleChange}
//                 />
//                 <label className="custom-control-label" htmlFor="customRadio1">
//                   {t("v128")}
//                 </label>
//               </div>
//               <div className="custom-control custom-radio my-3">
//                 <input
//                   type="radio"
//                   className="custom-control-input mx-2"
//                   name="category"
//                   value="cow"
//                   checked={data.category === "cow"}
//                   onChange={handleChange}
//                 />
//                 <label className="custom-control-label" htmlFor="customRadio1">
//                   {t("v129")}
//                 </label>
//               </div>
//                 <div className="custom-control custom-radio my-3">
//                 <input
//                   type="radio"
//                   className="custom-control-input mx-2"
//                   name="category"
//                   value="buffalo"
//                   checked={data.category === "buffalo"}
//                   onChange={handleChange}
//                 />
//                 <label className="custom-control-label" htmlFor="customRadio2">
//                   {t("v130")}
//                 </label>
//               </div>
//               <div className="my-2">
//                 <label htmlFor="formGroupExampleInput2">{t("v131")}</label>
//                 <input
//                   type="text"
//                   className="form-control w-50"
//                   id="formGroupExampleInput2"
//                   name="other"
//                   placeholder="Other"
//                   onChange={handleChange}
//                   value={data.other}
//                 />
//               </div>
//             </Form.Group>
//             <Form.Group className="my-3" controlId="formBasicEmail">
//               <Form.Label>{t("v132")}</Form.Label>
//               <Form.Control
//                 name="need"
//                 type="text"
//                 onChange={handleChange}
//                 value={data.need}
//               />
//             </Form.Group>
//             <div className="d-flex justify-content-center">
//               <button
//                 className="btn btn-primary border-0 gradient-custom-2 mb-3 w-25"
//                 type="submit"
//               >
//                 Submit
//               </button>
//             </div>
//           </Form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeedBackForm;



// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import Form from "react-bootstrap/Form";
// import { useTranslation } from "react-i18next";

// const FeedBackForm = () => {
//   const { t } = useTranslation();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [data, setData] = useState({
//     // State
//     name: "",
//     address: "",
//     phoneNumber: "",
//     bestTimeToContact: "",
//     experience: "",
//     landSize: "",
//     category: "",
//     need: ""
//   });

//   // Function
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const onSubmit = (data) => {
//     console.log("data", data);
//   };

//   return (
//     <section className="service-form container-fluid ">
//       <div className="row py-5 justify-content-center">
//         <div className="col-sm-8">
//           <Form onSubmit={handleSubmit(onSubmit)}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>{t("v121")}</Form.Label>
//               <Form.Control
//                 {...register("name", { required: "name is required" })}
//                 type="text"
//                 placeholder="Enter Name"
//                 onChange={handleChange}
//                 value={data.name}
//               />
//               {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>{t("v122")}</Form.Label>
//               <Form.Control
//                 {...register("address", { required: "address is required" })}
//                 type="text"
//                 placeholder="Enter Address"
//                 onChange={handleChange}
//                 value={data.address}
//               />
//               {errors.address && <Form.Text className="text-danger">{errors.address.message}</Form.Text>}
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>{t("v123")}</Form.Label>
//               <Form.Control
//                 {...register("phoneNumber", { required: "phone number is required" })}
//                 type="text"
//                 placeholder="Enter Phone Number"
//                 onChange={handleChange}
//                 value={data.phoneNumber}
//               />
//               {errors.phoneNumber && <Form.Text className="text-danger">{errors.phoneNumber.message}</Form.Text>}
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>{t("v124")}</Form.Label>
//               <Form.Control
//                 {...register("bestTimeToContact", { required: "time is required" })}
//                 type="time"
//                 placeholder="Enter Time"
//                 onChange={handleChange}
//                 value={data.bestTimeToContact}
//               />
//               {errors.bestTimeToContact && <Form.Text className="text-danger">{errors.bestTimeToContact.message}</Form.Text>}
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>{t("v125")}</Form.Label>
//               <Form.Control
//                 {...register("experience", { required: "experience is required" })}
//                 type="text"
//                 placeholder="Enter Experience"
//                 onChange={handleChange}
//                 value={data.experience}
//               />
//               {errors.experience && <Form.Text className="text-danger">{errors.experience.message}</Form.Text>}
//             </Form.Group>
//             {/*  */}
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>{t("v126")}</Form.Label>
//               <Form.Control
//                 {...register("landSize", { required: "Land size is required" })}
//                 type="text"
//                 placeholder="Enter Land Size"
//                 onChange={handleChange}
//                 value={data.landSize}
//               />
//               {errors.landSize && <Form.Text className="text-danger">{errors.landSize.message}</Form.Text>}
//             </Form.Group>

//             {/* Category Selection with Radio Buttons */}
//             <Form.Group>
//               <Form.Label>{t("v125")}</Form.Label>
//               <div className="custom-control custom-radio my-3">
//                 <input
//                   type="radio"
//                   className="custom-control-input mx-2"
//                   name="category"
//                   value="goat"
//                   checked={data.category === "goat"}
//                   onChange={handleChange}
//                   {...register("category")}
//                 />
//                 <Form.Label className="custom-control-label" htmlFor="customRadio1">
//                   {t("v127")}
//                 </Form.Label>
//               </div>
//               <div className="custom-control custom-radio my-3">
//                 <input
//                   type="radio"
//                   className="custom-control-input mx-2"
//                   name="category"
//                   value="sheep"
//                   checked={data.category === "sheep"}
//                   onChange={handleChange}
//                   {...register("category")}
//                 />
//                 <Form.Label className="custom-control-label" htmlFor="customRadio1">
//                   {t("v128")}
//                 </Form.Label>
//               </div>
//               <div className="custom-control custom-radio my-3">
//                 <input
//                   type="radio"
//                   className="custom-control-input mx-2"
//                   name="category"
//                   value="cow"
//                   checked={data.category === "cow"}
//                   onChange={handleChange}
//                   {...register("category")}
//                 />
//                 <Form.Label className="custom-control-label" htmlFor="customRadio1">
//                   {t("v129")}
//                 </Form.Label>
//               </div>
//               <div className="custom-control custom-radio my-3">
//                 <input
//                   type="radio"
//                   className="custom-control-input mx-2"
//                   name="category"
//                   value="buffalo"
//                   checked={data.category === "buffalo"}
//                   onChange={handleChange}
//                   {...register("category")}
//                 />
//                 <Form.Label className="custom-control-label" htmlFor="customRadio2">
//                   {t("v130")}
//                 </Form.Label>
//               </div>
//               <div className="my-2">
//                 <label htmlFor="formGroupExampleInput2">{t("v131")}</label>
//                 <input
//                   {...register("other")}
//                   type="text"
//                   className="form-control w-50"
//                   id="formGroupExampleInput2"
//                   name="other"
//                   placeholder="Other"
//                   onChange={handleChange}
//                   value={data.other}
//                 />
//               </div>
//               {errors.category && <Form.Text className="text-danger">{errors.category.message}</Form.Text>}
//               </Form.Group>
//               <Form.Group className="my-3" controlId="formBasicEmail">
//               <Form.Label>{t("v132")}</Form.Label>
//               <Form.Control
//                 {...register("need", { required: "need is required" })}
//                 name="need"
//                 type="text"
//                 onChange={handleChange}
//                 value={data.need}
//               />
//               {errors.need && <Form.Text className="text-danger">{errors.need.message}</Form.Text>}
//             </Form.Group>
//               <div className="d-flex justify-content-center">
//               <button
//                 className="btn btn-primary border-0 gradient-custom-2 mb-3 w-25"
//                 type="submit"
//               >
//                 Submit
//               </button>
//             </div>
//           </Form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeedBackForm;



import React from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import axios from "axios";

const FeedBackForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Make an HTTP POST request using Axios
      const response = await axios.post("http://127.0.0.1:5000/api/post_data", data);
      
      // Handle the response as needed
      console.log("API Response:", response.data);

      // Add additional logic or redirect the user if needed
    } catch (error) {
      // Handle errors
      console.error("Error sending form data:", error);
    }
  };
  return (
    <section className=" container-fluid ">
      <div className="row py-5 justify-content-center">
      <h2 className="py-2 px-4 service-head">Form</h2>
            <p className="px-2 text-center">{t("v120")}</p>
     
        <div className="col-sm-8">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{t("v121")}</Form.Label>
              <Form.Control
                {...register("name", { required: t("v121")+" required" })}
                type="text"
                placeholder={t("v121")}
              />
              {errors.name && (
                <Form.Text className="text-danger">
                  {errors.name.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>{t("v122")}</Form.Label>
              <Form.Control
                {...register("address", { required:"address required"})}
                type="text"
                placeholder={t("v122")}
              />
              {errors.address && (
                <Form.Text className="text-danger">
                  {errors.address.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
              <Form.Label>{t("v123")}</Form.Label>
              <Form.Control
                {...register("phoneNumber", { required: t("v123")+" required" })}
                type="text"
                placeholder={t("v123")}
              />
              {errors.phoneNumber && (
                <Form.Text className="text-danger">
                  {errors.phoneNumber.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTime">
              <Form.Label>{t("v124")}</Form.Label>
              <Form.Control
                {...register("bestTimeToContact", {
                  required: t("v124")+"required ",
                })}
                type="time"
                placeholder={t("v124")}
              />
              {errors.bestTimeToContact && (
                <Form.Text className="text-danger">
                  {errors.bestTimeToContact.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicExperience">
              <Form.Label>{t("v125")}</Form.Label>
              <Form.Control
                {...register("experience", { required: t("v125")+" required" })}
                type="text"
                placeholder={t("v125")}
              />
              {errors.experience && (
                <Form.Text className="text-danger">
                  {errors.experience.message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicExperience">
              <Form.Label>Your Budget</Form.Label>
              <Form.Control
                {...register("budget", { required: "please fill budget"+" required" })}
                type="text"
                placeholder="Budget"
              />
              {errors.budget && (
                <Form.Text className="text-danger">
                  {errors.budget.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLandSize">
              <Form.Label>{t("v126")}</Form.Label>
              <Form.Control
                {...register("landSize", { required: t("v126")+" required" })}
                type="text"
                placeholder={t("v126")}
              />
              {errors.landSize && (
                <Form.Text className="text-danger">
                  {errors.landSize.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCategory">
              <div className="custom-control custom-radio my-3">
                <input
                  type="radio"
                  className="custom-control-input mx-2"
                  id="categoryGoat"
                  name="category"
                  value="goat"
                  {...register("category", { required: t("v127")+" required" })}
                />
                <Form.Label
                  className="custom-control-label"
                  htmlFor="categoryGoat"
                >
                  {t("v127")}
                </Form.Label>
              </div>

              <div className="custom-control custom-radio my-3">
                {/* Add radio buttons for other categories */}
                <input
                  type="radio"
                  className="custom-control-input mx-2"
                  id="categorySheep"
                  name="category"
                  value="sheep"
                  {...register("category", { required: t("v128")+" required" })}
                />
                <Form.Label
                  className="custom-control-label"
                  htmlFor="categorySheep"
                >
                  {t("v128")}
                </Form.Label>
              </div>

              <div className="custom-control custom-radio my-3">
                <input
                  type="radio"
                  className="custom-control-input mx-2"
                  id="categoryCow"
                  name="category"
                  value="cow"
                  {...register("category", { required: t("v129")+" required" })}
                />
                <Form.Label
                  className="custom-control-label"
                  htmlFor="categoryCow"
                >
                  {t("v129")}
                </Form.Label>
              </div>

              <div className="custom-control custom-radio my-3">
                <input
                  type="radio"
                  className="custom-control-input mx-2"
                  id="categoryBuffalo"
                  name="category"
                  value="buffalo"
                  {...register("category", { required: t("v130")+" required" })}
                />
                <Form.Label
                  className="custom-control-label"
                  htmlFor="categoryBuffalo"
                >
                  {t("v130")}
                </Form.Label>
              </div>

              <div className="my-2">
                <label htmlFor="formGroupExampleInput2">{t("v131")}</label>
                <input
                  {...register("other")}
                  type="text"
                  className="form-control w-50"
                  id="formGroupExampleInput2"
                  name="other"
                  placeholder={t("v131")}
                />
              </div>

              {errors.category && (
                <Form.Text className="text-danger">
                  {errors.category.message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNeed">
              <Form.Label>{t("v132")}</Form.Label>
              <Form.Control
                {...register("need", { required: t("v132")+" required" })}
                type="text"
                placeholder={t("v132")}
              />
              {errors.need && (
                <Form.Text className="text-danger">
                  {errors.need.message}
                </Form.Text>
              )}
            </Form.Group>

            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary border-0 gradient-custom-2 mb-3 w-25"
                type="submit"
              >
                submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FeedBackForm;
