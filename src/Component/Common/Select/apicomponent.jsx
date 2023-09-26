import React, { useState } from "react";

const MyForm = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const data = {
      fullName: "fullName",
      mobileNo: "mobileNo",
      email: 'email',
      password: 'password',
      state: 'state',
      city: 'city',
      address: 'address',
    };
    var requestOptions = {
        method: "POST",
        mode: "no-cors",
        headers: {"Content-Type":"application/json"},
        body: data,
        redirect: "follow",
      };

    fetch("http://192.168.1.4:5000/rumeno_register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <form className="container" onSubmit={handleFormSubmit}>
      <div className="form-row row d-flex">
        <div className="form-group col-lg-12 my-2">
          <label className="my-2" htmlFor="">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id=""
            placeholder="Enter Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group col-lg-12 my-2">
          <label className="my-2" htmlFor="">
            Mobile No
          </label>
          <input
            type="text"
            className="form-control"
            id=""
            placeholder="Mobile No"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div className="form-group col-lg-12 my-2">
          <label className="my-2" htmlFor="">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id=""
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group col-lg-12 my-2">
          <label className="my-2" htmlFor="inputAddress">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id=""
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group col-lg-6 my-2">
          <label className="my-1" htmlFor="inputAddress">
            State
          </label>
          <select
            className="select w-100 p-2 border rounded"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="1">State</option>
            <option value="2">Option 1</option>
            <option value="3">Option 2</option>
            <option value="4">Option 3</option>
          </select>
        </div>
        <div className="form-group col-lg-6 my-2">
          <label className="my-1" htmlFor="inputAddress">
            City
          </label>
          <select
            className="select w-100 p-2 border rounded"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="1">City</option>
            <option value="2">Option 1</option>
            <option value="3">Option 2</option>
            <option value="4">Option 3</option>
          </select>
        </div>
        <div className="form-group col-lg-12 my-2">
          <label className="my-2" htmlFor="inputAddress">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id=""
            placeholder="1234 Main St"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn text-white border-0 gradient-custom-2 my-3 w-75"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default MyForm;