// src/components/Gallery.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../pages/App.css"; 


const productos = [
  {
    titulo: "Sala Moderna",
    imagen: "/img/1.jpeg",
    ruta: "/proyectos/salas"
  },
  {
    titulo: "Escritorio Ejecutivo",
    imagen: "/img/2.jpeg",
    ruta: "/proyectos/escritorios"
  },
  {
    titulo: "Sofá Tapizado",
    imagen: "/img/3.jpeg",
    ruta: "/proyectos/sofas"
  },
  {
    titulo: "Cocina Integral",
    imagen: "/img/4.jpeg",
    ruta: "/proyectos/cocinas"
  },
  {
    titulo: "Closet Modular",
    imagen: "/img/5.jpeg",
    ruta: "/proyectos/closets"
  },
  {
    titulo: "Camas",
    imagen: "/img/Cama.jpg",
    ruta: "/proyectos/camas"
  }
];

export const Gallery = () => {
  return (
    <div className="row g-4">
      {productos.map((item, i) => (
        <div key={i} className="col-12 col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="overflow-hidden">
              <img
                src={item.imagen}
                alt={item.titulo}
                className="card-img-top img-hover-zoom"
                style={{ objectFit: "cover", height: "250px", cursor: "pointer" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">{item.titulo}</h5>
              <Link to={item.ruta} className="btn btn-primary">
                Ver más
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
