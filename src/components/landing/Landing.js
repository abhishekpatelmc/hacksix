import React from "react";
import "./Landing.css";
import imagelogo from "../../asset/img/undraw_savings_re_eq4w.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landingContainer">
      <div className="landingInfo">
        <h1>A NEW WAY TO LEARN fINANCE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          odit nihil ullam nesciunt quidem iste, Repellendus odit nihil
        </p>
        <Link to="/OptionPage">
          <button>Get Started</button>
        </Link>
      </div>
      <div className="landingImg">
        <img src={imagelogo} alt="LandingImage" />
      </div>
    </div>
  );
};

export default Landing;
