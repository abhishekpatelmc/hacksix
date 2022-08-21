import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import OptionPage from "./pages/OptionPage/OptionPage";
import Navbar from "./components/Navbar/Navbar";
import TimelineNodePage from "./pages/TimelineNodePage/TimelineNodePage";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />} />
        <Route path="/OptionPage" element={<OptionPage />} />
        <Route path="/Timeline" element={<TimelineNodePage />} />

        <Route path="/module/:moduleString/:id" element={<ArticlesPage />} />
      </Routes>
    </div>
  );
}

export default App;
