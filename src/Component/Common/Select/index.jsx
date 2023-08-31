import React from "react";
import '../../../../src/'

const Select = (props) => {
  return (
    <>
      {/* <div>
        <select onChange={props.onChange}>
          <option>Select language</option>
          <option value={"en"}>English</option>
          <option value={"hi"}>Hindi </option>
        </select>
      </div> */}

        <div id="app-cover">
          <div id="select-box" onChange={props.onChange}>
            <input type="checkbox" id="options-view-button" />
            <div id="select-button" class="brd d-flex align-items-center">
              <div id="selected-value">
                <span>Select a platform</span>
              </div>
              <div id="chevrons">
                <i class="fas fa-chevron-up"></i>
                <i class="fas fa-chevron-down"></i>
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
                  value={"en"}
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
                  value={"hi"}
                />
                <i class="fab fa-dribbble"></i>
                <span class="label">Hindi</span>
                <span class="opt-val"> Hindi</span>
              </div>
              {/* <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="behance"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="behance"
                />
                <i class="fab fa-behance"></i>
                <span class="label">Behance</span>
                <span class="opt-val">Behance</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="hackerrank"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="hackerrank"
                />
                <i class="fab fa-hackerrank"></i>
                <span class="label">HackerRank</span>
                <span class="opt-val">HackerRank</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="stackoverflow"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="stackoverflow"
                />
                <i class="fab fa-stack-overflow"></i>
                <span class="label">StackOverflow</span>
                <span class="opt-val">StackOverflow</span>
              </div>
              <div class="option">
                <input
                  class="s-c top"
                  type="radio"
                  name="platform"
                  value="freecodecamp"
                />
                <input
                  class="s-c bottom"
                  type="radio"
                  name="platform"
                  value="freecodecamp"
                />
                <i class="fab fa-free-code-camp"></i>
                <span class="label">FreeCodeCamp</span>
                <span class="opt-val">FreeCodeCamp</span>
              </div> */}
              <div id="option-bg"></div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Select;
