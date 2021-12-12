import React from "react";
import BabblebotAssistant from "./twitterComponents/BabblebotAssistant";
import BabblebotSound from "./twitterComponents/BabblebotSound";
import BabblebotFeedback from "./twitterComponents/BabblebotFeedback";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BabblebotAssistant />} />

        <Route path="/sound" element={<BabblebotSound />} />

        <Route path="/feedback" element={<BabblebotFeedback />} />
      </Routes>
    </Router>
  );
}
