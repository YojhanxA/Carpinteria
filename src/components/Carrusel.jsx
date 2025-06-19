import React, { useState } from "react";

export const Carousel = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (img) => {
    setSelectedImg(img);
    const modal = new bootstrap.Modal(document.getElementById("imageModal"));
    modal.show();
  };

  return (
    <>
      {/* Carousel */}
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
                  cursor: "pointer",
                }}
                onClick={() => openModal(img)}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselBootstrap"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselBootstrap"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Modal para imagen ampliada */}
      <div
        className="modal fade"
        id="imageModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark">
            <div className="modal-body p-0">
              <img
                src={selectedImg}
                alt="Ampliada"
                className="img-fluid w-100 rounded-2"
              />
            </div>
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3 btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};
