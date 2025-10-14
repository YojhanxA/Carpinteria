import React, { useState } from "react";
import { Link } from "react-router-dom";

const closetsGale = [{

 descripcion:
  "Closet empotrado con puertas corredizas y acabado en madera clara. Ideal para maximizar el espacio de almacenamiento.",
    imagen: "/img/Closet1.jpg",
  ruta: "/proyectos/closets",
 },{

 descripcion:
  "Closet modular con estantes ajustables y espacio para ropa colgada. Perfecto para organizar prendas de diferentes tamaños.",
    imagen: "/img/Closet2.jpg",
  ruta: "/proyectos/closets",
 },{
    descripcion:
  "Closet de esquina con diseño compacto y funcional. Incluye cajones y compartimentos para accesorios.",
    imagen: "/img/Closet3.jpg",
  ruta: "/proyectos/closets",
}]


export const ClosetsGaleComponent = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const openModal = (img) => {
        setSelectedImg(img);
        const modal = new bootstrap.Modal(document.getElementById("imageModal"));
        modal.show();
    };

    return (
        <div className="container py-5">
            <div className="row">
                {closetsGale.map((item, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img
                                src={item.imagen}
                                className="card-img-top"
                                alt={`Closet ${index + 1}`}
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
