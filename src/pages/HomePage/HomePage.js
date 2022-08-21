import React from "react";
import About from "../../components/About/About";

import Contact from "../../components/Contact/Contact";
import Landing from "../../components/landing/Landing";
import AllModules from "../../components/AllMoules/AllModules";
import OptionPage from "../OptionPage/OptionPage";

function HomePage() {
  return (
    <div>
      <Landing />
      <About />

      <AllModules />
      {/* <Contact /> */}
    </div>
  );
}

export default HomePage;
