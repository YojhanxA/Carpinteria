import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
      <h1 className="h4 fw-bold m-0">Carpintería La 16</h1>
      <nav className="d-flex align-items-center gap-3">
        <Link to="/" className="text-decoration-none text-dark fw-medium">
          Inicio
        </Link>
        <Link to="/acerca" className="text-decoration-none text-dark fw-medium">
          Acerca de nosotros
        </Link>
        <button className="btn btn-dark rounded-pill px-4">CONTÁCTANOS</button>
      </nav>
    </header>
  );
};
