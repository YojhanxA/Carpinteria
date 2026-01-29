import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="bg-white pt-4"> {/* Reducimos un poco el pt para que no flote tanto */}
      <div className="container text-center">
        
        {/* NIVEL 1: LOGO CENTRADO E ICONOS */}
        <div className="d-flex justify-content-between align-items-center mb-4 position-relative">
          {/* Espacio vacío para equilibrar el centrado del logo */}
          <div style={{ width: "80px" }} className="d-none d-md-block"></div>

          {/* EL LOGO DEBE IR AQUÍ PARA QUE EL MENÚ QUEDE ABAJO */}
      

          {/* Iconos de Usuario y Búsqueda */}
          <div className="d-flex gap-3 iconos-header">
            <i className="bi bi-person cursor-pointer"></i>
            <i className="bi bi-search cursor-pointer"></i>
          </div>
        </div>

        {/* NIVEL 2: MENÚ DE NAVEGACIÓN (ABAJO) */}
        <nav className="border-top border-bottom py-2">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link-custom" to="/">INICIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link-custom" to="/productos">PRODUCTOS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link-custom" to="/proyectos">PROYECTOS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link-custom" to="/sobre-nosotros">SOBRE NOSOTROS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link-custom" to="/contacto">CONTACTO</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};