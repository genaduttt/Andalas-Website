import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import BangunanBersejarah from "./components/BangunanBersejarah";
import TempatWisata from "./components/TempatWisata";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Team from "./components/Team";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/destinasi" element={<Destinations />} />{" "}
          <Route
            path="/destinasi/bangunanbersejarah"
            element={<BangunanBersejarah />}
          />{" "}
          <Route path="/destinasi/tempatwisata" element={<TempatWisata />} />{" "}
          <Route path="/aboutus" element={<AboutUs />} />{" "}
          <Route path="/galeri" element={<Gallery />} />{" "}
          <Route path="/team" element={<Team />} />{" "}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
