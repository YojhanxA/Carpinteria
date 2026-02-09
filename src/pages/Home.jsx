import React, { useState, useEffect } from "react";
import { Ticker } from "../components/Ticker";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { NuestraEsencia } from "../components/NuestraEsencia";

export const Home = () => {
  const [index, setIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const fondos = [
    "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497219055242-93359eeed651?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop"
  ];

  useEffect(() => {
    if (!isAutoplay) return;
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % fondos.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, [fondos.length, isAutoplay]);

  const handleSlideClick = (newIndex) => {
    setIndex(newIndex);
    setIsAutoplay(false);
  };

  return (
    <main style={{ backgroundColor: 'white' }}>
      {/* 1. SECCIÓN HERO MEJORADA */}
      <section className="hero-slider-fullscreen home-hero">
        {fondos.map((imagen, i) => (
          <div
            key={i}
            className={`hero-slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${imagen})` }}
          />
        ))}

        <div className="hero-overlay"></div>

        <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center text-white position-relative home-hero-content" style={{ zIndex: 3 }}>
          <span className="hero-badge fade-in">DESDE EL CORAZÓN DEL TALLER</span>
          <h1 className="hero-main-title fade-in-delayed-1">
            Carpintería Y <br /> Tapicería La 16
          </h1>

          <div className="hero-features d-none d-md-flex gap-4 mt-5 fade-in-delayed-2">
            <div className="feature-item">
              <span className="feature-number">01</span>
              <p>Madera de verdad</p>
            </div>
            <div className="feature-divider"></div>
            <div className="feature-item">
              <span className="feature-number">02</span>
              <p>Trabajo a pulso</p>
            </div>
            <div className="feature-divider"></div>
            <div className="feature-item">
              <span className="feature-number">03</span>
              <p>Muebles para siempre</p>
            </div>
          </div>

          {/* Indicadores de slides */}
          <div className="hero-indicators">
            {fondos.map((_, i) => (
              <button
                key={i}
                className={`indicator ${i === index ? 'active' : ''}`}
                onClick={() => handleSlideClick(i)}
                aria-label={`Ir a slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span className="scroll-text">DESCUBRE MÁS</span>
          <div className="scroll-arrow">
            <span></span>
          </div>
        </div>
      </section>

      {/* 2. PRESENTACIÓN PREMIUM */}
      <section className="home-intro-section">
        <div className="container">
          <div className="intro-content">
            <h2 className="intro-title">Artesanía Sin Compromisos</h2>
            <p className="intro-text">
              Desde hace años, La 16 ha sido sinónimo de calidad, innovación y dedicación. Cada mueble que creamos nace de la pasión de nuestros maestros artesanos, quienes combinan técnicas tradicionales con tecnología moderna para entregar piezas que transforman espacios.
            </p>
            <div className="intro-divider"></div>
          </div>
        </div>
      </section>

      {/* 3. NUESTRA ESENCIA */}
      <NuestraEsencia />

      {/* 4. TICKER */}
      <Ticker />

      {/* 5. PRODUCTOS DESTACADOS */}
      <FeaturedProducts />

      {/* 6. SECCIÓN CTA FINAL */}
      <section className="home-cta-final">
        <div className="container text-center">
          <h3 className="cta-final-title">Tu proyecto es nuestro lienzo</h3>
          <p className="cta-final-subtitle">Transformamos ideas en realidades de madera y textil</p>
          <a href="/contacto" className="btn-cta-primary">SOLICITAR CONSULTA</a>
        </div>
      </section>
    </main>
  );
};