import React from "react";
import About from "../../components/About/About";

import Landing from "../../components/landing/Landing";
import OptionPage from "../OptionPage/OptionPage";

function HomePage() {
  return (
    <div>
      <Landing />
      <About />
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
