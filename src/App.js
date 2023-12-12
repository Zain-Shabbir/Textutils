import "./App.css";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("blue-500");
  const [msg, setMsg] = useState(null);
  const toggleMode = () => {
    if (mode === "blue-300") {
      setMode("blue-900");
      setMsg("Dark-Mode Unabled");
      document.body.style.backgroundColor = "#4b6ccb";
    } else {
      setMode("blue-500");
      setMsg("Light-Mode Unabled");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <NavBar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert msg={msg} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={<TextForm heading="Enter Text To Analyse" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
