import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import OptionPage from "./pages/OptionPage/OptionPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact="true" path="/" element={<Home />}></Route>
          <Route exact path="/OptionPage" element={<OptionPage />} />
          <Route exact path="/About" element={<OptionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
