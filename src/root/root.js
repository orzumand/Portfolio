import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Root;
