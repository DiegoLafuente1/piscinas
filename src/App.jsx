import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Items from "./components/items/items";
import Footer from "./components/footer/footer";
import Contacto from "./components/contacto/contacto";
import ItemDetail from "./components/itemDetail/itemDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/itemDetail" element={<ItemDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
