import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.css";
import imagelogo from "../../asset/img/undraw_savings_re_eq4w.svg";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="landingContainer">
        <div className="landingInfo">
          <h1>A NEW WAY TO LEARN fINANCE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            odit nihil ullam nesciunt quidem iste, Repellendus odit nihil
          </p>
          <button>Get Started</button>
        </div>
        <div className="landingImg">
          <img src={imagelogo} alt="LandingImage" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

// import React from 'react';
// import './HomePage.css';

// function HomePage() {
//   return (
//     <div class ="homePage">

//       <div class = "leftRectangle">

//           <div class = "pageTitle">
//             <p>EZFinance</p>
//           </div>

//           <div class = "pageDescription">
//             <p>Your one stop website for all financial advice!
//               Create an account or sign in to get started!</p>
//           </div>

//       </div>

//       <div class = "rightRectangle">
//       </div>

//     </div>
//   )
// }

// export default HomePage;
