import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

export const Contact = () => {
  const form = useRef();
  const [enviando, setEnviando] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setEnviando(true);

    // Configuración con tus credenciales reales
    const SERVICE_ID = "service_g22k38a";
    const TEMPLATE_ID = "template_p06jpji";
    const PUBLIC_KEY = "e-SaC2GDXYa8sgs_8";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        // Se eliminó 'result' de los paréntesis para solucionar el error de Vercel
        alert("¡Solicitud enviada con éxito! José Gregorio te contactará pronto.");
        form.current.reset(); // Limpia el formulario
      }, (error) => {
        alert("Hubo un error al enviar. Por favor, intenta de nuevo.");
        console.error("Error EmailJS:", error.text);
      })
      .finally(() => {
        setEnviando(false);
      });
  };

  return (
    <section className="contacto-section">
      {/* HERO SECTION PREMIUM */}
      <div className="contacto-hero">
        <div className="hero-overlay"></div>
        <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center text-white position-relative" style={{ zIndex: 2 }}>
          <span className="hero-badge slide-down">HAGAMOS REALIDAD TUS IDEAS</span>
          <h1 className="hero-title slide-down-delayed">
            Hablemos de tu <span className="accent-text">Proyecto</span>
          </h1>
          <p className="hero-subtitle slide-down-delayed-2">
            Contáctanos para una consulta sin compromiso
          </p>
        </div>
      </div>

      <div className="container py-100">
        <div className="row g-5">

          {/* INFORMACIÓN DE CONTACTO CON ICONOS */}
          <div className="col-lg-5">
            <div className="info-wrapper">
              <h2 className="section-title mb-5">
                <span className="line-before"></span>
                Datos de Contacto
              </h2>

              {/* UBICACIÓN */}
              <div className="contact-item-modern mb-5">
                <div className="contact-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="contact-content">
                  <span className="label">UBICACIÓN</span>
                  <p className="contact-text">Calle 16 # 7-92, B/Santa Margarita Maria, El Espinal - Tolima, Colombia</p>
                </div>
              </div>

              {/* TELÉFONO/WHATSAPP */}
              <div className="contact-item-modern mb-5">
                <div className="contact-icon">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="contact-content">
                  <span className="label">WHATSAPP / TEL</span>
                  <p className="contact-text">
                    <a href="https://wa.me/573246768210" target="_blank" rel="noopener noreferrer" className="contact-link">
                      +57 324 676 82110
                    </a>
                  </p>
                </div>
              </div>

              {/* HORARIO */}
              <div className="contact-item-modern mb-5">
                <div className="contact-icon">
                  <i className="bi bi-clock"></i>
                </div>
                <div className="contact-content">
                  <span className="label">HORARIO DE ATENCIÓN</span>
                  <p className="contact-text">
                    Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                    Sábados: 8:00 AM - 1:00 PM
                  </p>
                </div>
              </div>

              {/* CORREO */}
              <div className="contact-item-modern">
                <div className="contact-icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="contact-content">
                  <span className="label">CORREO ELECTRÓNICO</span>
                  <p className="contact-text">
                    <a href="mailto:contacto@carpinterialasseis.com" className="contact-link">
                      contacto@carpinterialasseis.com
                    </a>
                  </p>
                </div>
              </div>

              {/* MAPA */}
              <div className="mini-map-placeholder mt-5">
                <iframe
                  title="Mapa Carpintería La 16"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.791552554271!2d-74.8872545!3d4.1517529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3927d6d1b74845%3A0xc665b6a7f457564d!2sCl.%2016%20%237-92%2C%20Espinal%2C%20Tolima!5e0!3m2!1ses!2sco!4v1707412345678"
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

          {/* FORMULARIO PREMIUM */}
          <div className="col-lg-7">
            <div className="form-container">
              <h2 className="section-title mb-5">
                <span className="line-before"></span>
                Solicitud de Cotización
              </h2>

              <form ref={form} onSubmit={sendEmail} className="form-premium">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label className="form-label">NOMBRE COMPLETO</label>
                      <input name="user_name" type="text" className="form-control custom-input" placeholder="Juan Pérez" required />
                      <div className="input-underline"></div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label className="form-label">CORREO ELECTRÓNICO</label>
                      <input name="user_email" type="email" className="form-control custom-input" placeholder="juan@ejemplo.com" required />
                      <div className="input-underline"></div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-group">
                    <label className="form-label">TIPO DE PROYECTO</label>
                    <select name="project_type" className="form-select custom-input" required>
                      <option value="">Seleccionar categoría...</option>
                      <option value="Carpintería Fina">Carpintería Fina</option>
                      <option value="Tapicería de Alto Confort">Tapicería de Alto Confort</option>
                      <option value="Remodelación Completa">Remodelación Completa</option>
                    </select>
                    <div className="input-underline"></div>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="form-group">
                    <label className="form-label">MENSAJE / DETALLES DEL PROYECTO</label>
                    <textarea name="message" className="form-control custom-input" rows="5" placeholder="Cuéntanos qué tienes en mente..." required></textarea>
                    <div className="input-underline"></div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-submit w-100 py-3"
                  disabled={enviando}
                >
                  <span className="btn-text">
                    {enviando ? "Enviando Solicitud..." : "Enviar Solicitud"}
                  </span>
                  <span className="btn-icon">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};