import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/proyectos.css'; 

export const Proyectos = () => {
    // Definimos las categorías aquí arriba
    const categorias = [
        { nombre: "SALAS", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200", link: "/proyectos/salas" },
        { nombre: "ESCRITORIOS", img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=1200", link: "/proyectos/escritorios" },
        { nombre: "SOFÁS", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200", link: "/proyectos/sofas" },
        { nombre: "COCINAS", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200", link: "/proyectos/cocinas" },
        { nombre: "CLOSETS", img: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=1200", link: "/proyectos/closets" },
        { nombre: "CAMAS", img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1200", link: "/proyectos/camas" }
    ];

    return (
        <div className="proyectos-container">
            {/* HERO SECTION DE PROYECTOS - TAL CUAL ME LO PASASTE */}
            <section className="hero-slider-fullscreen projects-hero">
                <div className="hero-slide active" style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')`,
                    opacity: '0.5' 
                }}></div>
                
                <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-white">
                    <div className="text-center fade-in">
                        <span className="letter-spacing-3 mb-3 d-block" style={{ fontSize: '0.8rem' }}>
                            ESPACIOS QUE INSPIRAN
                        </span>
                        <h1 className="brand-logo-central mb-4">NUESTROS PROYECTOS</h1>
                        <div className="d-flex gap-4 mt-2 justify-content-center flex-wrap">
                            <span className="letter-spacing-2" style={{ fontSize: '0.65rem' }}>DISEÑO</span>
                            <span className="letter-spacing-2" style={{ fontSize: '0.65rem' }}>CALIDAD</span>
                            <span className="letter-spacing-2" style={{ fontSize: '0.65rem' }}>EXCLUSIVIDAD</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* AQUÍ ESTÁ LA MAGIA: LA GALERÍA IMPRESIONANTE */}   
            <main className="container-fluid projects-main-content py-5">
                <div className="container">
                    <div className="projects-grid-wrapper">
                        {categorias.map((cat, index) => (
                            <Link to={cat.link} key={index} className="project-premium-card">
                                <div className="card-image-box">
                                    <img src={cat.img} alt={cat.nombre} />
                                </div>
                                <div className="card-glass-overlay">
                                    <div className="card-content">
                                        <h3 className="card-title-text">{cat.nombre}</h3>
                                        <div className="card-footer-action">
                                            <span>EXPLORAR</span>
                                            <i className="bi bi-arrow-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};