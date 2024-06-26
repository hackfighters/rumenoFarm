
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
    console.log(data)
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
            <Form.Group className="mb-3" htmlFor="formBasicName">
              <Form.Label>{t("v121")}</Form.Label>
              <Form.Control
                {...register("name", { required: t("v121") + " required" })}
                type="text"
                placeholder={t("v121")}
              />
              {errors.name && (
                <Form.Text className="text-danger">
                  {errors.name.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" htmlFor="formBasicAddress">
              <Form.Label>{t("v122")}</Form.Label>
              <Form.Control
                {...register("address", { required: "address required" })}
                type="text"
                placeholder={t("v122")}
              />
              {errors.address && (
                <Form.Text className="text-danger">
                  {errors.address.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" htmlFor="formBasicPhoneNumber">
              <Form.Label>{t("v123")}</Form.Label>
              <Form.Control
                {...register("phoneNumber", { required: t("v123") + " required" })}
                type="text"
                placeholder={t("v123")}
              />
              {errors.phoneNumber && (
                <Form.Text className="text-danger">
                  {errors.phoneNumber.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" htmlFor="formBasicTime">
              <Form.Label>{t("v124")}</Form.Label>
              <Form.Control
                {...register("bestTimeToContact", {
                  required: t("v124") + "required ",
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

            <Form.Group className="mb-3" htmlFor="formBasicExperience">
              <Form.Label>{t("v125")}</Form.Label>
              <Form.Control
                {...register("experience", { required: t("v125") + " required" })}
                type="text"
                placeholder={t("v125")}
              />
              {errors.experience && (
                <Form.Text className="text-danger">
                  {errors.experience.message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" htmlFor="formBasicExperience">
              <Form.Label>Your Budget</Form.Label>
              <Form.Control
                {...register("budget", { required: "please fill budget" + " required" })}
                type="text"
                placeholder="Budget"
              />
              {errors.budget && (
                <Form.Text className="text-danger">
                  {errors.budget.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" htmlFor="formBasicLandSize">
              <Form.Label>{t("v126")}</Form.Label>
              <Form.Control
                {...register("landSize", { required: t("v126") + " required" })}
                type="text"
                placeholder={t("v126")}
              />
              {errors.landSize && (
                <Form.Text className="text-danger">
                  {errors.landSize.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" htmlFor="formBasicCategory">
              <div className="custom-control custom-radio my-3">
                <input
                  type="radio"
                  className="custom-control-input mx-2"
                  id="categoryGoat"
                  name="category"
                  value="goat"
                  {...register("category", { required: t("v127") + " required" })}
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
                  {...register("category", { required: t("v128") + " required" })}
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
                  {...register("category", { required: t("v129") + " required" })}
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
                  {...register("category", { required: t("v130") + " required" })}
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
            <Form.Group className="mb-3" htmlFor="formBasicNeed">
              <Form.Label>{t("v132")}</Form.Label>
              <Form.Control
                {...register("need", { required: t("v132") + " required" })}
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
