import React from "react";
import "./OptionPage.css";
import { Link } from "react-router-dom";

const OptionPage = () => {
  return (
    <div>
      <div className="title">
        <p>Are you a Student or a New Comer? </p>
        <Link to="/Timeline">
          <button>Student</button>
        </Link>
        <button>New Comer</button>
      </div>
    </div>
  );
};

export default OptionPage;
