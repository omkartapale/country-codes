import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Interconvert from "./pages/Interconvert";
import About from "./pages/About";
import InterconvertCodes from "./pages/InterconvertCodes";
import InterconvertMenu from "./components/InterconvertMenu";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
            <Route path="country-to-alpha2" element={<InterconvertCodes conversionType="ctoa2"/>} />
            <Route path="country-to-alpha3" element={<InterconvertCodes conversionType="ctoa3"/>} />
            <Route path="country-to-num3" element={<InterconvertCodes conversionType="cton3"/>} />
            <Route path="alpha2-to-country" element={<InterconvertCodes conversionType="a2toc"/>} />
            <Route path="alpha2-to-alpha3" element={<InterconvertCodes conversionType="a2toa3"/>} />
            <Route path="alpha2-to-num3" element={<InterconvertCodes conversionType="a2ton3"/>} />
            <Route path="alpha3-to-country" element={<InterconvertCodes conversionType="a3toc"/>} />
            <Route path="alpha3-to-alpha2" element={<InterconvertCodes conversionType="a3toa2"/>} />
            <Route path="alpha3-to-num3" element={<InterconvertCodes conversionType="a3ton3"/>} />
            <Route path="num3-to-country" element={<InterconvertCodes conversionType="n3toc"/>} />
            <Route path="num3-to-alpha2" element={<InterconvertCodes conversionType="n3toa2"/>} />
            <Route path="num3-to-alpha3" element={<InterconvertCodes conversionType="n3toa3"/>} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
