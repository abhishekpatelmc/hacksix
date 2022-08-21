import React from "react";
import About from "../../components/About/About";
import Landing from "../../components/landing/Landing";
import AllModules from "../../components/AllMoules/AllModules";

function HomePage() {
  return (
    <div>
      <Landing />
      <About />
      <AllModules />
    </div>
  );
}

export default HomePage;
