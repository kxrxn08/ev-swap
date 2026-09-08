import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import CustomerPage from "./pages/CustomerPage";
import MarketingPage from "./pages/MarketingPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CustomerPage />} />
        <Route path="/about" element={<MarketingPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
