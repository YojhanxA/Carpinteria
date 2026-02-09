// src/components/NuestraEsencia.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/esencia.css";

export const NuestraEsencia = () => {
  const pilares = [
    {
      id: "01",
      titulo: "CARPINTERÍA",
      desc: "Maderas seleccionadas y ensambles precisos. Creamos estructuras que son el alma de tu hogar. Cada veta cuenta una historia.",
      icon: "bi bi-tools"
    },
    {
      id: "02",
      titulo: "TAPICERÍA",
      desc: "Texturas premium y confort ergonómico. El arte de vestir tus muebles con elegancia, suavidad y resistencia incomparable.",
      icon: "bi bi-palette"
    },
    {
      id: "03",
      titulo: "PERSONALIZACIÓN",
      desc: "Diseños únicos para espacios únicos. Transformamos tus ideas en realidad, creando piezas de mobiliario exclusivas y memorables.",
      icon: "bi bi-vector-pen"
    }
  ];

  return (
    <section className="essencia-section py-5 bg-white">
      <div className="container py-5">
        {/* Cabecera de la sección */}
        <div className="text-center mb-5 fade-in">
          <span className="letter-spacing-3 text-muted mb-2 d-block" style={{ fontSize: '0.7rem', textTransform: 'uppercase' }}>
            El arte de crear
          </span>
          <h2 className="brand-logo-central mb-4" style={{ fontSize: '2.5rem', color: '#3e4453', fontWeight: '300', letterSpacing: '1px' }}>
            Nuestra Esencia
          </h2>
          <div className="mx-auto" style={{ width: '60px', height: '2px', backgroundColor: '#3e4453', opacity: 0.6 }}></div>
        </div>

        {/* Pilares interactivos */}
        <div className="row g-5 mt-4">
          {pilares.map((pilar, index) => (
            <div key={index} className="col-md-4">
              <div className="essencia-card text-center p-4">
                <span className="pilar-number">{pilar.id}</span>
                <i className={`${pilar.icon} pilar-icon d-block mb-4`}></i>
                <h4 className="letter-spacing-2 mb-3" style={{ fontSize: '1.2rem', fontWeight: '500', color: '#3e4453' }}>
                  {pilar.titulo}
                </h4>
                <p className="text-muted fw-light" style={{ fontSize: '0.9rem', lineHeight: '1.8', color: '#666' }}>
                  {pilar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón de acción hacia Proyectos */}
        <div className="text-center mt-5 pt-4">
          <Link to="/proyectos" className="btn-premium-outline">
            Explorar Galería de Proyectos
          </Link>
        </div>
      </div>
    </section>
  );
};