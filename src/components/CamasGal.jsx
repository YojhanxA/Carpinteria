import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CamasGal = [
    {
        descripcion: "Cama matrimonial con cabecera tapizada en tela suave y estructura de madera robusta.",
        imagen: "/img/Cama1.jpg",
        ruta: "/proyectos/camas",
    },

    {
        descripcion: "Cama individual con diseño minimalista y almacenamiento debajo del colchón. Ideal para habitaciones pequeñas.",
        imagen: "/img/Cama1.jpg",
        ruta: "/proyectos/camas",
    },

    {

        descripcion: "Cama king size con dosel y detalles tallados en la madera. Añade un toque de lujo a cualquier habitación.",

        imagen: "/img/Cama1.jpg",

        ruta: "/proyectos/camas",

    },

];

export const CamasGalComponent = () => {
    const [selectedImg, setSelectedImg] = useState(null);


    return (
        <div className="container py-5">
            <div className="row">
                {CamasGal.map((item, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={item.imagen}
                                className="card-img-top"
                                alt={item.descripcion}
                                style={{ height: "250px", objectFit: "cover", cursor: "zoom-in" }}
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

            {/* Modal - Se mantiene igual pero el trigger es automático por ID */}
            <div className="modal fade" id="imageModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Vista previa</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center p-0">
                            {selectedImg && (
                                <img
                                    src={selectedImg}
                                    alt="Vista previa"
                                    className="img-fluid"
                                    style={{ width: "100%", maxHeight: "80vh", objectFit: "contain" }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}