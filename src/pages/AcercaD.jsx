import React from "react";
import { Link } from "react-router-dom";

export const AcercaD = () => {
  return (
    <main className="container py-5">
      {/* HERO */}
      <section className="text-center mb-5 py-5 bg-light rounded-4 shadow-sm">
        <h1 className="display-5 fw-bold mb-2">
          Acerca de Carpintería y Tapicería La 16
        </h1>
        <p className="lead mb-3">
          Más que muebles, construimos historias con madera, diseño y oficio.
        </p>
        <p className="text-muted mb-4 px-3 px-md-5">
          Somos un taller familiar con tradición artesanal: realizamos muebles a
          medida, restauraciones y tapicería con atención al detalle y materiales
          de calidad.
        </p>
        <div>
          <Link to="/taller" className="btn btn-dark me-2">
            Taller
          </Link>
          <Link to="/" className="btn btn-outline-dark">
            Inicio
          </Link>
        </div>
      </section>

      {/* WAVE -> IMAGE */}
      <section className="position-relative mb-5">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            display: "block",
            width: "100%",
            height: 60,
          }}
        >
          <path
            d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z"
            fill="#f8f9fa"
          />
        </svg>

        <div className="text-center bg-white py-4 rounded-4 shadow-sm">
          <div className="mx-auto" style={{ maxWidth: 1000 }}>
            <img
              src="/carpinteria.png"
              alt="Taller de carpintería"
              className="img-fluid rounded-4"
              style={{
                maxHeight: 420,
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
        </div>

        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            display: "block",
            width: "100%",
            height: 60,
          }}
        >
          <path
            d="M0,80 C300,0 900,100 1200,0 L1200,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </section>

      {/* SERVICIOS / VALORES */}
      <section className="mb-5">
        <h2 className="h4 fw-bold text-center mb-4">Servicios y valores</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-3 border rounded-3 h-100 text-center">
              <h3 className="h6 fw-bold">Muebles a medida</h3>
              <p className="small text-muted mb-0">
                Diseños personalizados que optimizan tu espacio y estilo.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 border rounded-3 h-100 text-center">
              <h3 className="h6 fw-bold">Tapicería</h3>
              <p className="small text-muted mb-0">
                Renovamos tus piezas con telas y acabados de calidad.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 border rounded-3 h-100 text-center">
              <h3 className="h6 fw-bold">Restauración</h3>
              <p className="small text-muted mb-0">
                Recuperamos piezas con técnicas tradicionales y materiales
                duraderos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="text-center mb-5">
        <h2 className="h5 fw-bold mb-3">¿Dónde estamos?</h2>
        <p className="text-muted mb-3">
          Calle 16 #8-92, Espinal - Tolima. Lunes a sábado 8:00 a.m. – 6:00
          p.m.
        </p>
        <div className="mx-auto" style={{ maxWidth: 700 }}>
          <img
            src="/Ubicacion.png"
            alt="Mapa de ubicación de Carpintería La 16"
            className="img-fluid rounded-4 shadow-sm"
            style={{
              objectFit: "cover",
              width: "100%",
              maxHeight: 350,
            }}
          />
        </div>
      </section>
        
      {/* CONTACTO / CTA */}
      <section className="text-center py-4 bg-light rounded-4">
        <h3 className="h6 fw-bold mb-2">¿Listo para tu proyecto?</h3>
        <p className="text-muted mb-3">
          Contáctanos para una cotización o visita al taller.
        </p>
        <div>
          <a href="tel:+573106366039" className="btn btn-dark me-2">
            Llamar
          </a>
          <a href="mailto:info@la16.com" className="btn btn-outline-dark">
            Escribir
          </a>
        </div>
      </section>
    </main>
  );
};
