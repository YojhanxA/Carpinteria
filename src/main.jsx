import React, { useState, useEffect, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages/App.css";
import "./styles/productos.css";
import "./styles/loading.css";

// Páginas
import { Home } from "./pages/Home";
import { Productos } from "./pages/Productos";
import { Proyectos } from "./pages/Proyectos";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { Tapiceria } from "./pages/Tapiceria"; // <-- Nueva Importación
import Salas from "./pages/Salas";
import Sofas from "./pages/Sofas";
import Cocinas from "./pages/Cocinas";
import Closets from "./pages/Closets";
import Camas from "./pages/Camas";
import Escritorios from "./pages/Escritorios";

// Componentes
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";

export const App = () => {
  // Lógica de Sesión: Revisamos si ya cargó en esta pestaña anteriormente
  const [isLoading, setIsLoading] = useState(() => {
    const hasLoaded = sessionStorage.getItem("app_loaded");
    return hasLoaded ? false : true;
  });

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("app_loaded", "true");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/proyectos" element={<Proyectos />} />

          {/* Rutas de Categorías de Proyectos */}
          <Route path="/proyectos/salas" element={<Salas />} />
          <Route path="/proyectos/sofas" element={<Sofas />} />
          <Route path="/tapiceria" element={<Tapiceria />} /> {/* <-- Nueva Ruta */}
          <Route path="/proyectos/cocinas" element={<Cocinas />} />
          <Route path="/proyectos/closets" element={<Closets />} />
          <Route path="/proyectos/camas" element={<Camas />} />
          <Route path="/proyectos/escritorios" element={<Escritorios />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);