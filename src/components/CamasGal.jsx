import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CamasGal = [
    {
    descripcion:"Cama matrimonial con cabecera tapizada en tela suave y estructura de madera robusta. Perfecta para un dormitorio elegante.",
    imagen:"/img/Cama1.jpg",
    ruta:"/proyectos/camas",
},
{
    descripcion:"Cama individual con diseño minimalista y almacenamiento debajo del colchón. Ideal para habitaciones pequeñas.",
    imagen:"/img/Cama2.jpg",
    ruta:"/proyectos/camas",
},
{
    descripcion:"Cama king size con dosel y detalles tallados en la madera. Añade un toque de lujo a cualquier habitación.",
    imagen:"/img/Cama3.jpg",
    ruta:"/proyectos/camas",
}

]

export const CamasGalComponent = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const openModal = (img) => {
        setSelectedImg(img);
        const modal = new bootstrap.Modal(document.getElementById("imageModal"));
        modal.show();
    };

    return (
        <div className="container py-5">
            <div className="row">
                {CamasGal.map((item, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img
                                src={item.imagen}
                                className="card-img-top"
                                alt={`Cama ${index + 1}`}
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
