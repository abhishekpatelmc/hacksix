import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import OptionPage from "./pages/OptionPage/OptionPage";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact="true" path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />} />
        <Route path="/OptionPage" element={<OptionPage />} />
        {/* <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/test" element={<OptionPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
