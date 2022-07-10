import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Interconvert from "./pages/Interconvert";
import Help from "./pages/Help";
import InterconvertCodes from "./pages/InterconvertCodes";
import InterconvertMenu from "./components/InterconvertMenu";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="interconvert" element={<Interconvert />}>
            <Route index element={<InterconvertMenu />} />
            <Route path="country-to-alpha2" element={<InterconvertCodes />} />
            <Route path="country-to-alpha3" element={<InterconvertCodes />} />
            <Route path="country-to-num3" element={<InterconvertCodes />} />
            <Route path="alpha2-to-country" element={<InterconvertCodes />} />
            <Route path="alpha2-to-alpha3" element={<InterconvertCodes />} />
            <Route path="alpha2-to-num3" element={<InterconvertCodes />} />
            <Route path="alpha3-to-country" element={<InterconvertCodes />} />
            <Route path="alpha3-to-alpha2" element={<InterconvertCodes />} />
            <Route path="alpha3-to-num3" element={<InterconvertCodes />} />
            <Route path="num3-to-country" element={<InterconvertCodes />} />
            <Route path="num3-to-alpha2" element={<InterconvertCodes />} />
            <Route path="num3-to-alpha3" element={<InterconvertCodes />} />
          </Route>
          <Route path="help" element={<Help />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
