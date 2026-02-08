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
                <p>Calle 16 # 7-92, B/Santa Margarita Maria, Espinal - Tolima, Colombia</p>
              </div>

              <div className="contact-item mb-4">
                <span className="label">WHATSAPP / TEL</span>
                <p>+57 324 676 82110</p>
              </div>

              <div className="contact-item mb-4">
                <span className="label">HORARIO DE ATENCIÓN</span>
                <p>Lunes a Viernes: 8:00 AM - 6:00 PM<br/>Sábados: 8:00 AM - 1:00 PM</p>
              </div>

              {/* Contenedor del Mapa - Altura incrementada un 25% */}
              <div className="mini-map-placeholder mt-5 shadow-sm" style={{ height: '440px', position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
                <iframe
                  title="Mapa Carpintería La 16"
                  /* Ubicación exacta: Calle 16 # 7-92, Espinal */
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.620021356064!2d-74.8878536!3d4.1506443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3ef03799678f45%3A0x8e3ef03799678f45!2sCl.%2016%20%237-92%2C%20Espinal%2C%20Tolima!5e0!3m2!1ses!2sco!4v1714589000000!5m2!1ses!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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