import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { AcercaD } from "./pages/AcercaD";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./components/Footer";

// Renderizamos el componente de rutas
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<AcercaD />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
