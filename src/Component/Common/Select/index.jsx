import React from "react";
import '../../../../src/'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Select = (props) => {
  return (
    <>

        <div id="app-cover">
          <div id="select-box" onChange={props.onChange}>
            <input type="checkbox" id="options-view-button" />
            <div id="select-button" class="brd d-flex align-items-center justify-content-between">
              <div id="selected-value">
                <span>Select a Language</span>
              </div>
              <div>
              <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
            <div id="options">
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value={"en"}
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                />
                <i class="fab fa-codepen"></i>
                <span class="label">English</span>
                <span class="opt-val"> English</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value={"hi"}
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                />
                <i class="fab fa-dribbble"></i>
                <span class="label">Hindi</span>
                <span class="opt-val"> Hindi</span>
              </div>
              <div id="option-bg"></div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Select;
