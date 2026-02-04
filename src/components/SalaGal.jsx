import React, { useState } from "react";
import { Link } from "react-router-dom";

const salasGale = [
  {
    descripcion: "Sala de reuniones con mesa ovalada y sillas ergonómicas. Ideal para sesiones de trabajo colaborativo.",
    imagen: "/img/Sala1.jpeg",
    ruta: "/proyectos/salas",
  },
  {
    descripcion: "Sala ejecutiva con muebles de madera oscura y iluminación cálida. Perfecta para reuniones formales.",
    imagen: "/img/Sala1.jpeg",
    ruta: "/proyectos/salas",
  },
  {
    descripcion: "Sala de descanso con sofás cómodos y decoración moderna. Un espacio para relajarse y recargar energías.",
    imagen: "/img/Sala1.jpeg",
    ruta: "/proyectos/salas",
  },
];

export const SalasGaleComponent = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="container py-5">
      <div className="row">
        {salasGale.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={item.imagen}
                className="card-img-top"
                alt={item.descripcion}
                style={{
                  height: "250px",
                  objectFit: "cover",
                  cursor: "zoom-in",
                }}
                onClick={() => setSelectedImg(item.imagen)}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              />
              <div className="card-body d-flex flex-column">
                <p className="card-text flex-grow-1 text-secondary">
                  {item.descripcion}
                </p>
                <Link to={item.ruta} className="btn btn-outline-primary btn-sm">
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal - Reutilizable para todas las imágenes */}
      <div className="modal fade" id="imageModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Vista previa de Sala</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center p-0">
              {selectedImg && (
                <img
                  src={selectedImg}
                  alt="Vista previa"
                  className="img-fluid"
                  style={{
                    width: "100%",
                    maxHeight: "80vh",
                    objectFit: "contain",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}