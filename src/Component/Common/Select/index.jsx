import React from "react";

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
          <option value={"gu"} className="option option2">Gujrati</option>
          <option value={"ta"} className="option option2">Tamil</option>
          <option value={"ka"} className="option option2">Kannada</option>
          <option value={"ma"} className="option option2">Marathi</option>
          <option value={"pu"} className="option option2">Punjabi</option>
          <option value={"te"} className="option option2">Telugu</option>
        </select>
      </div>
    </>
  );
};

export default Select;
