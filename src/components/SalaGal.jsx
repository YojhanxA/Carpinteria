import React, { useState } from "react";
import { Link } from "react-router-dom";

const salasGale = [
    {
        descripcion:
            "Sala de reuniones con mesa ovalada y sillas ergonómicas. Ideal para sesiones de trabajo colaborativo.",
        imagen: "/img/Salas1.jpg",
        ruta: "/proyectos/salas",
    },
    {
        descripcion:
            "Sala ejecutiva con muebles de madera oscura y iluminación cálida. Perfecta para reuniones formales.",
        imagen: "/img/Salas2.jpg",
        ruta: "/proyectos/salas",
    },
    {
        descripcion:
            "Sala de descanso con sofás cómodos y decoración moderna. Un espacio para relajarse y recargar energías.",
        imagen: "/img/Salas3.jpg",
        ruta: "/proyectos/salas",
    },
]

export const SalasGaleComponent = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const openModal = (img) => {
        setSelectedImg(img);
        const modal = new bootstrap.Modal(document.getElementById("imageModal"));
        modal.show();
    };

    return (
        <div className="container py-5">
            <div className="row">
                {salasGale.map((item, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img
                                src={item.imagen}
                                className="card-img-top"
                                alt={`Escritorio ${index + 1}`}
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
