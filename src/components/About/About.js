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
          <h1>
            A NEW WAY TO LEARN <br />
            FINANCE
          </h1>
          <p>
            EZFinance gathers all financial resources in one place and is
            completely free for users to use. It offers tailored information for
            newcomers and students to help leverage their financial freedom
            while ensuring marginalized communities across Canada have full
            access to financial information from a single source.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
