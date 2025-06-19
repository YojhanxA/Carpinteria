export const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 pt-4 pb-3">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Carpintería La 16</h5>
            <p className="small">
              Diseñamos y fabricamos muebles con amor, precisión y madera de la
              buena.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold">Contacto</h6>
            <ul className="list-unstyled small">
              <li>📍 Medellín, Colombia</li>
              <li>📞 +57 324 676 8211</li>
              <li>📧 aslanfto2018@gmail.com</li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold">Síguenos</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-white">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-whatsapp fs-5"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center small">
          &copy; {new Date().getFullYear()} Carpintería La 16. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
};
