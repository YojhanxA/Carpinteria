import React from "react";
import { Link } from "react-router-dom";
import "../pages/App.css";

const productos = [
  { titulo: "SALAS", imagen: "/img/1.jpeg", ruta: "/proyectos/salas" },
  { titulo: "ESCRITORIOS", imagen: "/img/2.jpeg", ruta: "/proyectos/escritorios" },
  { titulo: "SOFÁS", imagen: "/img/3.jpeg", ruta: "/proyectos/sofas" },
  { titulo: "COCINAS", imagen: "/img/4.jpeg", ruta: "/proyectos/cocinas" },
  { titulo: "CLOSETS", imagen: "/img/5.jpeg", ruta: "/proyectos/closets" },
  { titulo: "CAMAS", imagen: "/img/Cama.jpg", ruta: "/proyectos/camas" }
];

export const Gallery = () => {
  return (
    <div className="container-fluid px-2">
      <div className="row g-2"> {/* Espaciado fino entre cuadros */}
        {productos.map((item, i) => (
          <div key={i} className="col-6 col-md-4 col-lg-3">
            <Link to={item.ruta} className="gallery-link">
              <div className="gallery-card">
                {/* Imagen de fondo */}
                <div
                  className="gallery-img"
                  style={{ backgroundImage: `url(${item.imagen})` }}
                ></div>

                {/* Capa oscura y Texto centrado */}
                <div className="gallery-overlay">
                  <h4 className="gallery-title">{item.titulo}</h4>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};