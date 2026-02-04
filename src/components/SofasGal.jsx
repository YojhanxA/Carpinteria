import React, { useState } from "react";
import { Link } from "react-router-dom";

const SofasGal = [
  {
    descripcion: "Sofá moderno de tres plazas con tapizado en tela gris y patas de madera. Perfecto para salas de estar contemporáneas.",
    imagen: "/img/Sofa1.jpeg",
    ruta: "/proyectos/sofas",
  },
  {
    descripcion: "Sofá seccional en L con tapizado en cuero marrón y cojines decorativos. Ideal para espacios amplios y acogedores.",
    imagen: "/img/Sofa2.jpg",
    ruta: "/proyectos/sofas",
  },
  {
    descripcion: "Sofá cama funcional con diseño minimalista y tapizado en tela azul. Perfecto para optimizar espacios pequeños.",
    imagen: "/img/Sofa3.jpg",
    ruta: "/proyectos/sofas",
  },
];

export const SofasGalComponent = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="container py-5">
      <div className="row">
        {SofasGal.map((item, index) => (
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

      {/* Modal - Reutilizado para Sofás */}
      <div className="modal fade" id="imageModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title">Vista previa</h5>
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