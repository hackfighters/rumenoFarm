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
          <option selected>Choose...</option>
          <option value={"en"} className="option option1">English</option>
          <option value={"hi"} className="option option2">Hindi</option>
        </select>
      </div>

      {/* <div id="app-cover">
          <div id="select-box" onChange={props.onChange}>
            <input type="checkbox" id="options-view-button" />
            <div id="select-button" className="brd d-flex align-items-center justify-content-between">
              <div id="selected-value">
                <span>Select a Language</span>
              </div>
              <div>
              <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
            <div id="options">
              <div className="option">
                <input
                  className="s-c top"
                  type="radio"
                  name="platform"
                  value={"en"}
                />
                <input
                  className="s-c bottom"
                  type="radio"
                  name="platform"
                />
                <i className="fab fa-codepen"></i>
                <span className="label">English</span>
                <span className="opt-val"> English</span>
              </div>
              <div className="option">
                <input
                  className="s-c top"
                  type="radio"
                  name="platform"
                  value={"hi"}
                />
                <input
                  className="s-c bottom"
                  type="radio"
                  name="platform"
                />
                <i className="fab fa-dribbble"></i>
                <span className="label">Hindi</span>
                <span className="opt-val"> Hindi</span>
              </div>
              <div id="option-bg"></div>
            </div>
          </div>
        </div> */}
    </>
  );
};

export default Select;
