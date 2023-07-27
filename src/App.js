import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import AboutUs from "./Components/About"; // Corrected component name
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<AboutUs />} /> {/* Corrected component name */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
