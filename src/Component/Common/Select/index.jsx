import React from "react";
import '../../../../src/'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Select = (props) => {

  return (
    <>
      <div className="input-group">
        <div className="input-group-prepend">
        </div>
        <select className="custom-select w-100  border rounded p-2" id="inputGroupSelect01" onChange={props.onChange}>
          <option selected>Choose Language</option>
          <option value={"en"} className="option option1">English</option>
          <option value={"hi"} className="option option2">Hindi</option>
        </select>
      </div>
    </>
  );
};

export default Select;
