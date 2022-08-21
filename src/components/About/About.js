import * as React from "react";
import aboutImg from "../../asset/img/undraw_printing_invoices_-5-r4r.svg";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="Heading">
        <h1> About </h1>
      </div>
      <div className="MainContainer">
        <div className="Image">
          <img src={aboutImg} alt="about" />
        </div>
        <div className="Info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
