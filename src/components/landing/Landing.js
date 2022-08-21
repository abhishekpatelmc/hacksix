import React from "react";
import "./Landing.css";
import imagelogo from "../../asset/img/undraw_savings_re_eq4w.svg";
import { Link } from "react-router-dom";
import About from "../About/About";

const Landing = () => {
  return (
    <div>
      <div className="landingContainer">
        <div className="landingInfo">
          <h1>A NEW WAY TO LEARN <br/>🍁 FINANCE</h1>
          <p>
            As a Canadian newcomer, it can be difficult to understand the great Canadian financial system. We're here to help you navigate through the maze and achieve financial independence and secure your new future!
          </p>
          <Link to="/OptionPage">
            <button>Get Started</button>
          </Link>
        </div>

        <div className="landingImg">
          <img src={imagelogo} alt="LandingImage" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
