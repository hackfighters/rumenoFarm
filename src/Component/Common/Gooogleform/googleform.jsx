import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FeedBackForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get form values
    const name = event.target.elements.name.value;
    const address = event.target.elements.address.value;
    const phoneNumber = event.target.elements.phoneNumber.value;
    const bestTimeToContact = event.target.elements.bestTimeToContact.value;
    const experience = event.target.elements.experience.value;
    const landSize = event.target.elements.landSize.value;
    const animalType = event.target.elements.customRadio.value;
    const other = event.target.elements.other.value;
    const need = event.target.elements.need.value;

    // Log form values
    console.log("Name:", name);
    console.log("Address:", address);
    console.log("Phone Number:", phoneNumber);
    console.log("Best Time to Contact:", bestTimeToContact);
    console.log("Experience:", experience);
    console.log("Land Size:", landSize);
    console.log("Animal Type:", animalType);
    console.log("Other:", other);
    console.log("Need:", need);
  };

  return (
    <section className="service-form container-fluid ">
      <div className="row py-5 justify-content-center">
        <div className="col-sm-8">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name / नाम</Form.Label>
              <Form.Control name="name" type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address / पता</Form.Label>
              <Form.Control
                name="address"
                type="text"
                placeholder="Enter Address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone number / फ़ोन नंबर</Form.Label>
              <Form.Control
                name="phoneNumber"
                type="text"
                placeholder="Enter Number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Best time to contact you / आपसे संपर्क का सही समय क्या है
              </Form.Label>
              <Form.Control
                name="bestTimeToContact"
                type="time"
                placeholder="Enter Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                How much experience do you have in Livestock Farming and numbers
                of animals you have / आपके पास पशुपालन का कितना अनुभव है और
                आपके पास कितने पशु हैं
              </Form.Label>
              <Form.Control
                name="experience"
                type="text"
                placeholder="Enter"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Size of the land for Animal Farming / पशु पालन के लिए भूमि का
                आकार
              </Form.Label>
              <Form.Control name="landSize" type="text" placeholder="Enter" />
            </Form.Group>
            <Form.Group>
              <div className="custom-control custom-radio my-3">
                <input
                  type="radio"
                  id="customRadio1"
                  name="customRadio"
                  className="custom-control-input mx-2"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customRadio1"
                >
                  Goat / बकरी
                </label>
              </div>
              <div className="custom-control custom-radio my-3">
                <input
                  type="radio"
                  id="customRadio2"
                  name="customRadio"
                  className="custom-control-input mx-2"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customRadio1"
                >
                  Sheep / भेड़
                </label>
              </div>
              <div className="custom-control custom-radio my-3">
                <input
                  type="radio"
                  id="customRadio3"
                  name="customRadio"
                  className="custom-control-input mx-2"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customRadio1"
                >
                  Cow/ गाय
                </label>
              </div>
              <div className="custom-control custom-radio my-3">
                <input
                  type="radio"
                  id="customRadio4"
                  name="customRadio"
                  className="custom-control-input mx-2"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customRadio2"
                >
                  Buffalo / भैंस
                </label>
              </div>
              <div className="my-2">
                <label htmlFor="formGroupExampleInput2">Other / अन्य</label>
                <input
                  type="text"
                  className="form-control w-50"
                  id="formGroupExampleInput2"
                  name="other"
                  placeholder=" Enter"
                />
              </div>
            </Form.Group>
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>
                Please let us know your need / कृपया हमें अपनी आवश्यकता बताएं
              </Form.Label>
              <Form.Control name="need" type="text" placeholder="Enter" />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FeedBackForm;