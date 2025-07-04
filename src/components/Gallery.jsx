// src/components/Gallery.jsx
import React, { useState } from "react";

const productos = [
  {
    titulo: "Sala Moderna",
    descripcion:
      "Conjunto esquinero tapizado en cuerotex negro y cojinería personalizada. Perfecto para salas familiares con estilo.",
    imagen: "/img/1.jpeg",
  },
  {
    titulo: "Escritorio Ejecutivo",
    descripcion:
      "Diseño compacto con cajoneras amplias y acabado en madera clara. Ideal para oficinas o estudios en casa.",
    imagen: "/img/2.jpeg",
  },
  {
    titulo: "Sofá Tapizado",
    descripcion:
      "Sofá de dos puestos en tela gris con cojines decorativos. Comodidad y elegancia en un solo mueble.",
    imagen: "/img/3.jpeg",
  },
  {
    titulo: "Cocina Integral",
    descripcion:
      "Cocina funcional con gabinetes de alta capacidad y acabados en tonos madera clara. Diseño práctico y moderno.",
    imagen: "/img/4.jpeg",
  },
  {
    titulo: "Closet Modular",
    descripcion:
      "Closet empotrado de seis puertas, cuatro cajones y zonas de colgado. Perfecto para optimizar el espacio.",
    imagen: "/img/5.jpeg",
  },
  {
    titulo: "Camas",
    descripcion:
      "Cama matrimonial con cabecera tapizada y estructura de madera. Diseño elegante y funcional para el descanso.",
    imagen: "/img/Cama.jpg",

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
            <div
              className="card h-100 shadow-sm border-0"
              style={{ cursor: "pointer" }}
              onClick={() => openModal(item.imagen)}
            >
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
                  {item.descripcion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para imagen ampliada */}
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
