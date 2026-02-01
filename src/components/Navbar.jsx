import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="navbar-overlay pt-4">
      <div className="container text-center">
        <div className="d-flex justify-content-between align-items-center mb-3 position-relative">
          <div style={{ width: "40px" }}></div>
          <div className="d-flex gap-3 text-white iconos-header">
            <i className="bi bi-person cursor-pointer"></i>
            <i className="bi bi-search cursor-pointer"></i>
          </div>
        </div>
        <nav className="nav-inferior-overlay">
          <ul className="nav justify-content-center py-2">
            <li className="nav-item"><Link className="nav-link-white" to="/">INICIO</Link></li>
            <li className="nav-item"><Link className="nav-link-white" to="/productos">PRODUCTOS</Link></li>
            
            {/* ÍTEM CON DROPDOWN */}
            <li className="nav-item dropdown-custom">
              <Link className="nav-link-white d-flex align-items-center" to="/proyectos">
                PROYECTOS <i className="bi bi-chevron-down ms-2" style={{ fontSize: '0.6rem' }}></i>
              </Link>
              <ul className="submenu-custom">
                <li><Link to="/proyectos/salas">Salas</Link></li>
                <li><Link to="/proyectos/escritorios">Escritorios</Link></li>
                <li><Link to="/proyectos/sofas">Sofás</Link></li>
                <li><Link to="/proyectos/cocinas">Cocinas</Link></li>
                <li><Link to="/proyectos/closets">Closets</Link></li>
                <li><Link to="/proyectos/camas">Camas</Link></li>
                <li><hr className="dropdown-divider-custom" /></li>
                <li><Link to="/proyectos" className="ver-todo">Ver todo</Link></li>
              </ul>
            </li>

            <li className="nav-item"><Link className="nav-link-white" to="/sobre-nosotros">SOBRE NOSOTROS</Link></li>
            <li className="nav-item"><Link className="nav-link-white" to="/contacto">CONTACTO</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};