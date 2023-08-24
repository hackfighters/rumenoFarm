import React from "react";

const Select = (props) => {
  return (
    <>
      <div>
        <select onChange={props.onChange}>
          <option>Select language</option>
          <option value={"en"}>English</option>
          <option value={"hi"}>Hindi </option>
        </select>
      </div>
    </>
  );
};

export default Select;
