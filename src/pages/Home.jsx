// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Gallery } from "../components/Gallery";

export const Home = () => {
  return (
    <main className="container p-0">
      {/* HERO */}
      <section className="text-center py-5 bg-light position-relative overflow-hidden">
        <div className="container py-5">
          <h2 className="display-4 fw-bold mb-3">Carpintería y Tapicería La 16</h2>
          <p className="lead fw-semibold mb-2">Transformamos espacios con estilo y calidad.</p>
          <p className="fw-medium mb-4 px-3 px-md-5">
            Desde muebles personalizados hasta tapicería fina, en La 16 creamos soluciones únicas que elevan tu hogar o negocio.
          </p>
          <Link to="/about" className="btn btn-dark px-4">Taller</Link>
        </div>

        {/* Wave bottom */}
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 80 }}>
          <path d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </section>

      {/* IMAGE SECTION */}
      <section className="text-center bg-white pt-0">
        <div className="container">
          <div className="mx-auto" style={{ maxWidth: 1000 }}>
            <img
              src="/carpinteria.png"
              alt="Taller de carpintería"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
            />
          </div>
        </div>

        {/* Wave bottom (inverted) */}
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 80 }}>
          <path d="M0,80 C300,0 900,100 1200,0 L1200,120 L0,120 Z" fill="#f8f9fa" />
        </svg>
      </section>

      {/* GALLERY */}
      <section className="text-center bg-light py-5">
        <div className="container">
          <h3 className="fw-bold mb-4">Algunos diseños</h3>
          <Gallery />
        </div>
      </section>
    </main>
  );
};

