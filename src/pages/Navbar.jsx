import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-3 shadow-sm">
        <div className="container-fluid">
          <h1 className="navbar-brand h4 fw-bold m-0">Carpintería La 16</h1>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="mainNavbar"
          >
            <ul className="navbar-nav align-items-lg-center gap-2 gap-lg-4">
              <li className="nav-item">
                <Link to="/" className="nav-link fw-medium">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/acerca" className="nav-link fw-medium">
                  Acerca de nosotros
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-dark rounded-pill px-4">
                  CONTÁCTANOS
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
