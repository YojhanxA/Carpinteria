import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { AcercaD } from "./pages/AcercaD";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./components/Footer";
import { Proyectos } from "./pages/Proyectos";
import Salas from "./pages/Salas";
import Sofas from "./pages/Sofas";
import Cocinas from "./pages/Cocinas";
import Closets from "./pages/Closets";
import Camas from "./pages/Camas";
import Escritorios from "./pages/Escritorios";

// Renderizamos el componente de rutas
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<AcercaD />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/proyectos/salas" element={<Salas />} />
        <Route path="/proyectos/sofas" element={<Sofas />} />
        <Route path="/proyectos/cocinas" element={<Cocinas />} />
        <Route path="/proyectos/closets" element={<Closets />} />
        <Route path="/proyectos/camas" element={<Camas />} />
        <Route path="/proyectos/escritorios" element={<Escritorios />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
