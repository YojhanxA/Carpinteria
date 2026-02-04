import React, { useState } from "react";
import { Link } from "react-router-dom";

const EscritoriosGale = [
  {
    descripcion: "Diseño compacto con cajoneras amplias y acabado en madera clara. Ideal para oficinas o estudios en casa.",
    imagen: "/img/Escritorio1.jpeg",
    ruta: "/proyectos/escritorios",
  },
  {
    descripcion: "Escritorio moderno con superficie de vidrio templado y estructura metálica. Perfecto para un ambiente contemporáneo.",
    imagen: "/img/Escritorio1.jpeg",
    ruta: "/proyectos/escritorios",
  },
  {
    descripcion: "Escritorio rústico de madera maciza con detalles artesanales. Ideal para un toque natural en tu espacio.",
    imagen: "/img/Escritorio1.jpeg",
    ruta: "/proyectos/escritorios",
  },
];

export const EscritoriosGaleComponent = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="container py-5">
      <div className="row">
        {EscritoriosGale.map((item, index) => (
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
                <p className="card-text flex-grow-1">{item.descripcion}</p>
                <Link to={item.ruta} className="btn btn-outline-primary btn-sm">
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Unificado */}
      <div className="modal fade" id="imageModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Vista previa del diseño</h5>
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