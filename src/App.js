import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Interconvert from "./pages/Interconvert";
import Help from "./pages/Help";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/interconvert" element={<Interconvert />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
