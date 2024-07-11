import React from "react";
import "./body.css";
import reward from "../assets/rewards.png";

function Body() {
  return (
    <>
      <div className="container">
        <div className="bodyContainer">
          <div className="rewardLogo">
            <img src={reward} alt="" />
            <h6 id="signUp">GET MORE INO</h6>
          </div>
          <div className="bodyLargeText">
            <h4 id="boldText">
              The happiest hour <br /> of the year
            </h4>
            <br />
            <h6 id="signUp">
              Sign up to get exclusive access to deals on drinks this holiday
              season
            </h6>
            <br />
            <a href="">
              <h6 id="signUp">SEND ME MAGIC</h6>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
