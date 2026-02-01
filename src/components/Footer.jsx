import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row">
          
          {/* Columna 1: Newsletter */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">Registrate</h6>
            <div className="newsletter-form mt-3">
              <input type="email" placeholder="Correo electrónico" className="footer-input" />
              <button className="footer-btn">SUSCRIBIRSE</button>
            </div>
          </div>

          {/* Columna 2: Sobre Nosotros */}
          <div className="col-md-3 mb-4 px-md-4">
            <h6 className="footer-title">SOBRE NOSOTROS</h6>
            <p className="footer-text mt-3">
              CARPINTERIA UBICADO EN EL ESPINAL - TOLIMA, OFRECIENDO PRODUCTOS DE ALTA CALIDAD Y DISEÑO EXCLUSIVO.
            </p>
          </div>

          {/* Columna 3: Producto */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">PRODUCTO</h6>
            <ul className="footer-list mt-3">
              <li><Link to="/">Guía de Materiales</Link></li>
              <li><Link to="/">Muebles a Medida</Link></li> 
              <li><Link to="/">Diseños</Link></li>
            </ul>
          </div>

          {/* Columna 4: Ayuda */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">AYUDA</h6>
            <ul className="footer-list mt-3">
              <li><Link to="/">Política de privacidad</Link></li>
              <li><Link to="/">Términos de servicio</Link></li>
            </ul>
          </div>
        </div>

        {/* Sección Inferior: Redes y Copyright */}
        <div className="footer-bottom mt-5">
          <div className="social-links mb-3">
             <h6 className="footer-title">NUESTRAS REDES SOCIALES</h6>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-pinterest"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
          <p className="copyright">© 2026 — CARPINTERÍA LA 16</p>
        </div>
      </div>
    </footer>
  );
};