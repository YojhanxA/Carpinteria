import React from "react";
import "../styles/contact.css";

export const Contact = () => {
  return (
    <section className="contacto-section">
      {/* Cabecera Elegante */}
      <div className="contacto-header text-center">
        <div className="container">
          <span className="letter-spacing-3 text-muted d-block mb-2">PROYECTOS A MEDIDA</span>
          <h1 className="display-4 fw-light text-uppercase" style={{ letterSpacing: '6px', color: '#3e4453' }}>
            Hablemos de tu <strong>Idea</strong>
          </h1>
          <div className="header-line mx-auto"></div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          
          {/* Columna Izquierda: Información de Contacto */}
          <div className="col-lg-5">
            <div className="info-wrapper pe-lg-5">
              <h3 className="h4 text-uppercase mb-4" style={{ letterSpacing: '2px' }}>Datos de Contacto</h3>
              
              <div className="contact-item mb-4">
                <span className="label">UBICACIÓN</span>
                <p>Carrera 16 #XX-XX, Tu Ciudad, País</p>
              </div>

              <div className="contact-item mb-4">
                <span className="label">WHATSAPP / TEL</span>
                <p>+57 300 000 0000</p>
              </div>

              <div className="contact-item mb-4">
                <span className="label">HORARIO DE ATENCIÓN</span>
                <p>Lunes a Viernes: 8:00 AM - 6:00 PM<br/>Sábados: 9:00 AM - 1:00 PM</p>
              </div>

              {/* Mapa o Imagen Decorativa */}
              <div className="mini-map-placeholder mt-5">
                <img 
                  src="/img/SofaExhibicion.jpg" 
                  alt="Taller La 16" 
                  className="img-fluid grayscale-filter" 
                />
                <div className="map-overlay">
                  <span>VISITA NUESTRO TALLER</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="col-lg-7">
            <div className="form-container bg-white p-4 p-md-5 shadow-sm">
              <form>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label small letter-spacing-2">NOMBRE COMPLETO</label>
                    <input type="text" className="form-control custom-input" placeholder="Ej. Juan Pérez" />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label small letter-spacing-2">CORREO ELECTRÓNICO</label>
                    <input type="email" className="form-control custom-input" placeholder="juan@ejemplo.com" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label small letter-spacing-2">TIPO DE PROYECTO</label>
                  <select className="form-select custom-input text-muted">
                    <option defaultValue>Seleccionar categoría...</option>
                    <option value="carpinteria">Carpintería Fina</option>
                    <option value="tapiceria">Tapicería de Alto Confort</option>
                    <option value="remodelacion">Remodelación Completa</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label className="form-label small letter-spacing-2">MENSAJE / DETALLES DEL PROYECTO</label>
                  <textarea className="form-control custom-input" rows="4" placeholder="Cuéntanos qué tienes en mente..."></textarea>
                </div>

                <button type="submit" className="btn btn-dark w-100 py-3 text-uppercase letter-spacing-3 btn-la16">
                  Enviar Solicitud de Cotización
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};