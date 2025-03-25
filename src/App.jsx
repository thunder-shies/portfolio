import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Color from "./pages/Color";
import ParallelRealities from "./pages/ParallelRealities";
import MeaningfulPlay from "./pages/MeaningfulPlay";
import "./App.css";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/color" element={<Color />} />
        <Route path="/projects/parallel-realities" element={<ParallelRealities />} />
        <Route path="/projects/meaningful-play" element={<MeaningfulPlay />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
  );
}

export default App;