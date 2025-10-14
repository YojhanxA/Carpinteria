import React, { useState } from "react";
import { Link } from "react-router-dom";

const CocinaGal = [
{
    descripcion:
        "Cocina moderna con acabados en madera clara y encimeras de cuarzo blanco. Incluye isla central y electrodomésticos integrados.",
    imagen: "/img/Cocina1.jpg",
    ruta: "/proyectos/cocinas",
},
{
    descripcion:"Cocina rústica con armarios de madera oscura y encimeras de granito. Perfecta para un ambiente acogedor y tradicional.",
    imagen: "/img/Cocina2.jpg",
    ruta: "/proyectos/cocinas",
},
{
    descripcion:"cocina minimalista con diseño en blanco, perfecta para tu hogar",
    imagen: "/img/Cocina3.jpg",
    ruta: "/proyectos/cocinas",
}
]

export const CocinaGalComponent = () => {
  const [selectedImg, setSelectedImg] = useState(null);
    const openModal = (img) => {
    setSelectedImg(img);
    const modal = new bootstrap.Modal(document.getElementById("imageModal"));
    modal.show();
  } 
    return (
    <div className="container py-5">
      <div className="row">
        {CocinaGal.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={item.imagen}
                className="card-img-top"
                alt={`Cocina ${index + 1}`}
                style={{
                  height: "250px",
                  objectFit: "cover",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={() => openModal(item.imagen)}
              />
              <div className="card-body">
                <p className="card-text">{item.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de vista previa */}
      <div
        className="modal fade"
        id="imageModal"
        tabIndex="-1"
        aria-labelledby="imageModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="imageModalLabel">
                Vista previa
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              {selectedImg && (
                <img
                  src={selectedImg}
                  alt="Vista previa"
                  className="img-fluid"
                  style={{ maxHeight: "500px", objectFit: "contain" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
    
