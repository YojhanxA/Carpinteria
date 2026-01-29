import React, { useState, useEffect } from "react";
import { Gallery } from "../components/Gallery";



const fondos = [
  "/img/Closet1.jpg", 
  "/img/Cocina1.jpg",
  "/img/Salas1.jpg"
];

export const Home = () => {
  const [index, setIndex] = useState(0);

  // Lógica para el bucle de imágenes
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % fondos.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(intervalo);
  }, []);

  return (
    <main className="bg-white">
      {/* SECCIÓN HERO CON SLIDER DINÁMICO */}
      <section className="hero-slider">
        {fondos.map((imagen, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${imagen})` }}
          />
        ))}

        {/* Capa oscura para que el texto sea legible */}
        <div className="hero-overlay"></div>

        {/* Contenido del Hero */}
        <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center text-white position-relative" style={{ zIndex: 3 }}>
          <span className="small letter-spacing-3 mb-3 fade-in">
            DESDE EL CORAZÓN DEL TALLER
          </span>
          
          <h2 className="display-2 fw-light mb-4 text-uppercase tracking-tighter">
            Carpintería y Tapicería La 16
          </h2>
          
          <div className="mx-auto mb-4" style={{ width: "60px", height: "1px", backgroundColor: "#fff" }}></div>
          
          <p className="lead fs-4 mb-5 px-3 opacity-75">
            Transformamos espacios con estilo y calidad absoluta.
          </p>

          {/* Textos inferiores (como en la imagen de referencia) */}
          <div className="container position-absolute bottom-0 mb-5 d-none d-md-block">
            <div className="row small letter-spacing-2 opacity-75 text-uppercase">
              <div className="col-md-4">El origen está en<br/>lo que tocamos,</div>
              <div className="col-md-4">La historia en lo<br/>que transformamos,</div>
              <div className="col-md-4">Y el resultado en<br/>cómo lo habitamos.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FRANJA DE TEXTURAS */}
      <div className="container-fluid p-0 overflow-hidden">
        <div className="d-flex" style={{ height: "100px" }}>
            <div className="flex-fill" style={{ backgroundColor: '#2d1b14' }}></div>
            <div className="flex-fill" style={{ backgroundColor: '#4a332b' }}></div>
            <div className="flex-fill" style={{ backgroundColor: '#1a2421' }}></div>
            <div className="flex-fill" style={{ backgroundColor: '#634d41' }}></div>
        </div>
      </div>

      {/* GALERÍA DE PROYECTOS */}
      <section className="py-5 mt-5">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="fw-light text-uppercase tracking-widest" style={{ letterSpacing: '5px' }}>
                Nuestra Colección
            </h3>
          </div>
          <Gallery />
        </div>
      </section>
    </main>
  );
};