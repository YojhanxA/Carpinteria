// src/components/Gallery.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (img) => {
    setSelectedImg(img);
    const modal = new bootstrap.Modal(document.getElementById("imageModal"));
    modal.show();
  };

  return (
    <>
      <div className="row g-4">
        {productos.map((item, i) => (
          <div key={i} className="col-12 col-md-4">
            <div className="card h-100 shadow-sm border-0" style={{ cursor: "pointer" }}>
              <img
                src={item.imagen}
                alt={item.titulo}
                className="card-img-top"
                style={{ objectFit: "cover", height: "250px" }}
              />
              <div className="card-body">

                <h5 className="card-title fw-bold">{item.titulo}</h5>
                <p
                  className="card-text text-muted"
                  style={{ fontSize: "0.95rem" }}
                >
                  <Link to={item.ruta} className="btn btn-primary">
                    Ver más
                  </Link>
                  {item.descripcion}
                </p>
              </div>
            </div>
          </div>
        ))};
      </div>

      {/* Aqui voy a poner el aumento de imagen al pasar el cursor */}
      <div
        className="modal fade"
        id="imageModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark">
            <div className="modal-body p-0">
              {selectedImg && (
                <img
                  src={selectedImg}
                  alt="Ampliada"
                  className="img-fluid w-100 rounded-2"
                />
              )}
            </div>
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3 btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};
