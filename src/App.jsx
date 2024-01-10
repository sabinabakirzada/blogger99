import React from "react";
import "./App.css";
import Header from "./layouts/header";

import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NewsPage from "./pages/newsPage";
import TravelPage from "./pages/travelPage";
import TeamPage from "./pages/teamPage";
import Ppages from "./pages/Ppages";
import FashionPage from "./pages/fashionPage";
import Footer from "./layouts/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/pages" element={<Ppages />} />
        <Route path="/fashion" element={<FashionPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
