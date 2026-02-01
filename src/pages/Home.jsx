import React, { useState, useEffect } from "react";
import { Ticker } from "../components/Ticker";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { NuestraEsencia } from "../components/NuestraEsencia";

export const Home = () => {
  const [index, setIndex] = useState(0);

  const fondos = [
    "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % fondos.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, [fondos.length]);

  return (
    <main style={{ backgroundColor: 'white' }}>
      {/* 1. SECCIÓN HERO / SLIDER */}
      <section className="hero-slider-fullscreen">
        {/* CORRECCIÓN AQUÍ: Quitamos los tres puntos (...) */}
        {fondos.map((imagen, i) => (
          <div
            key={i}
            className={`hero-slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${imagen})` }}
          />
        ))}

        <div className="hero-overlay"></div>

        <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center text-white position-relative" style={{ zIndex: 3 }}>
          <span className="small letter-spacing-3 mb-3 d-block fade-in">
            DESDE EL CORAZÓN DEL TALLER
          </span>
          <h2 className="display-1 fw-light mb-4 text-uppercase">
            Carpintería Y Tapicería La 16
          </h2>

          <div className="container position-absolute bottom-0 mb-5 d-none d-md-block">
            <div className="row small letter-spacing-2 opacity-75 text-uppercase">
              <div className="col-md-4">El origen está en lo que tocamos</div>
              <div className="col-md-4">La historia en lo que transformamos</div>
              <div className="col-md-4">El resultado en cómo lo habitamos</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NUESTRA ESENCIA */}
      <NuestraEsencia />

      {/* 3. TICKER */}
      <Ticker />

      {/* 4. PRODUCTOS DESTACADOS */}
      <FeaturedProducts />

    </main>
  );
};