// src/components/Navbar.jsx

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="navbar-overlay pt-4"> {/* Clase personalizada */}
      <div className="container text-center">
        <div className="d-flex justify-content-between align-items-center mb-3 position-relative">
          <div style={{ width: "40px" }}></div>
          <div className="d-flex gap-3 text-white iconos-header">
            <i className="bi bi-person cursor-pointer"></i>
            <i className="bi bi-search cursor-pointer"></i>
          </div>
        </div>
        <nav className="nav-inferior-overlay">
          <ul className="nav justify-content-center py-2">
            <li className="nav-item"><Link className="nav-link-white" to="/">INICIO</Link></li>
            <li className="nav-item"><Link className="nav-link-white" to="/productos">PRODUCTOS</Link></li>
            <li className="nav-item"><Link className="nav-link-white" to="/proyectos">PROYECTOS</Link></li>
            <li className="nav-item"><Link className="nav-link-white" to="/sobre-nosotros">SOBRE NOSOTROS</Link></li>
            <li className="nav-item"><Link className="nav-link-white" to="/contacto">CONTACTO</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};