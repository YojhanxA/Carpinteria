import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 2000);
    }
  };

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row g-5 footer-content">

          {/* Columna 1: Newsletter */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-section">
              <h6 className="footer-title">Mantente Conectado</h6>
              <p className="footer-subtitle">Recibe noticias sobre nuestros proyectos y colecciones exclusivas</p>
              <form onSubmit={handleSubscribe} className="newsletter-form mt-4">
                <div className="input-wrapper">
                  <input
                    type="email"
                    placeholder="tu@correo.com"
                    className="footer-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="footer-btn">
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
                {subscribed && <span className="success-message">¡Gracias por suscribirse!</span>}
              </form>
            </div>
          </div>

          {/* Columna 2: Sobre Nosotros */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-section">
              <h6 className="footer-title">La 16</h6>
              <p className="footer-text">
                Carpintería y tapicería ubicada en el Espinal, Tolima. Creamos muebles de alta calidad con diseños exclusivos y personalizados para transformar tus espacios.
              </p>
              <div className="footer-contact mt-4">
                <p className="contact-item">
                  <i className="bi bi-geo-alt"></i>
                  Espinal, Tolima
                </p>
                <p className="contact-item">
                  <i className="bi bi-telephone"></i>
                  +57 (8) XXXX-XXXX
                </p>
              </div>
            </div>
          </div>

          {/* Columna 3: Servicios */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-section">
              <h6 className="footer-title">Servicios</h6>
              <ul className="footer-list mt-3">
                <li><Link to="/proyectos">Carpintería</Link></li>
                <li><Link to="/tapiceria">Tapicería</Link></li>
                <li><Link to="/proyectos">Diseño a Medida</Link></li>
                <li><Link to="/contacto">Consultoría</Link></li>
              </ul>
            </div>
          </div>

          {/* Columna 4: Enlaces */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-section">
              <h6 className="footer-title">Enlaces</h6>
              <ul className="footer-list mt-3">
                <li><Link to="/pagina/proyectos">Proyectos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/">Política de Privacidad</Link></li>
                <li><Link to="/">Términos de Servicio</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sección Inferior: Redes y Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="social-section">
              <span className="social-label">Síguenos</span>
              <div className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                  <i className="bi bi-pinterest"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="copyright-section">
              <p className="copyright">© 2026 Carpintería La 16. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};