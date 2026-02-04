import React, { useState } from "react";
import { Link } from "react-router-dom";

const closetsGale = [
    {
        descripcion: "Closet empotrado con puertas corredizas y acabado en madera clara. Ideal para maximizar el espacio de almacenamiento.",
        imagen: "/img/Closet1.jpeg",
        ruta: "/proyectos/closets",
    },
    {
        descripcion: "Closet modular con estantes ajustables y espacio para ropa colgada. Perfecto para organizar prendas de diferentes tamaños.",
        imagen: "/img/Closet1.jpeg",
        ruta: "/proyectos/closets",
    },
    {
        descripcion: "Closet de esquina con diseño compacto y funcional. Incluye cajones y compartimentos para accesorios.",
        imagen: "/img/Closet1.jpeg",
        ruta: "/proyectos/closets",
    }
];

export const ClosetsGaleComponent = () => {
    const [selectedImg, setSelectedImg] = useState(null);



    return (
        <div className="container py-5">
            <div className="row">
                {closetsGale.map((item, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img
                                src={item.imagen}
                                className="card-img-top"
                                alt={item.descripcion}
                                style={{
                                    height: "250px",
                                    objectFit: "cover",
                                    width: "100%",
                                    cursor: "zoom-in",
                                }}
                                // Actualizamos el estado y dejamos que Bootstrap abra el modal
                                onClick={() => setSelectedImg(item.imagen)}
                                data-bs-toggle="modal"
                                data-bs-target="#imageModal"
                            />
                            <div className="card-body d-flex flex-column">
                                <p className="card-text flex-grow-1">{item.descripcion}</p>
                                { }
                                <Link to={item.ruta} className="btn btn-outline-primary btn-sm">
                                    Ver detalles
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal de vista previa - Único para toda la galería */}
            <div
                className="modal fade"
                id="imageModal"
                tabIndex="-1"
                aria-labelledby="imageModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="imageModalLabel">Detalle del Closet</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Cerrar"
                            ></button>
                        </div>
                        <div className="modal-body text-center bg-light rounded-bottom">
                            {selectedImg && (
                                <img
                                    src={selectedImg}
                                    alt="Vista previa closet"
                                    className="img-fluid rounded shadow"
                                    style={{ maxHeight: "70vh", objectFit: "contain" }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}