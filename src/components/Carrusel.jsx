import React, { useState } from "react";

export const Carousel = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState(null);



  return (
    <>
      {/* --- CARRUSEL --- */}
      <div
        id="carouselBootstrap"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselBootstrap"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner rounded-4 shadow">
          {images.map((img, i) => (
            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <img
                src={img}
                className="d-block w-100 img-fluid"
                alt={`Slide ${i + 1}`}
                style={{
                  objectFit: "cover",
                  maxHeight: "500px",
                  cursor: "zoom-in",
                }}
                onClick={() => setSelectedImg(img)}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              />
            </div>
          ))}
        </div>

        {/* Controles de navegación */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselBootstrap"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselBootstrap"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* --- MODAL PARA IMAGEN AMPLIADA --- */}
      <div
        className="modal fade"
        id="imageModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark border-0">
            <div className="modal-body p-0 position-relative">
              <button
                type="button"
                className="btn-close btn-close-white position-absolute top-0 end-0 m-3 shadow-none"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
                style={{ zIndex: 1051 }}
              ></button>

              {selectedImg && (
                <img
                  src={selectedImg}
                  alt="Vista ampliada"
                  className="img-fluid w-100 rounded-2"
                />
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}