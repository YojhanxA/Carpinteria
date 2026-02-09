import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/proyectos.css';

export const Proyectos = () => {
    const categorias = [
        {
            id: 'salas',
            nombre: "SALAS",
            img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200",
            link: "/proyectos/salas",
            descripcion: "Espacios de reunión diseñados para el confort y la elegancia",
            proyectos: 18
        },
        {
            id: 'escritorios',
            nombre: "ESCRITORIOS",
            img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=1200",
            link: "/proyectos/escritorios",
            descripcion: "Espacios funcionales que potencian tu productividad",
            proyectos: 24
        },
        {
            id: 'sofas',
            nombre: "SOFÁS",
            img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200",
            link: "/proyectos/sofas",
            descripcion: "Comodidad y estilo en cada rincón de tu hogar",
            proyectos: 31
        },
        {
            id: 'cocinas',
            nombre: "COCINAS",
            img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200",
            link: "/proyectos/cocinas",
            descripcion: "Ambientes culinarios modernos y funcionales",
            proyectos: 15
        },
        {
            id: 'closets',
            nombre: "CLOSETS",
            img: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=1200",
            link: "/proyectos/closets",
            descripcion: "Organización inteligente con diseño exclusive",
            proyectos: 22
        },
        {
            id: 'camas',
            nombre: "CAMAS",
            img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1200",
            link: "/proyectos/camas",
            descripcion: "Descanso premium en ambientes personalizados",
            proyectos: 19
        }
    ];

    const estadisticas = [
        { numero: '150+', label: 'Proyectos Realizados' },
        { numero: '12+', label: 'Años de Experiencia' },
        { numero: '98%', label: 'Clientes Satisfechos' },
        { numero: '100%', label: 'Garantía de Calidad' }
    ];

    return (
        <div className="proyectos-container">
            {/* HERO SECTION MEJORADO */}
            <section className="hero-slider-fullscreen projects-hero">
                <div className="hero-slide active" style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')`,
                    opacity: '0.5'
                }}></div>

                <div className="hero-overlay"></div>

                <div className="hero-content d-flex flex-column justify-content-center align-items-center text-white position-relative h-100">
                    <div className="text-center">
                        <span className="projects-hero-badge fade-in">ESPACIOS QUE INSPIRAN</span>
                        <h1 className="projects-hero-title fade-in-delayed-1">Nuestros Proyectos</h1>
                        <p className="projects-hero-subtitle fade-in-delayed-2">
                            Cada proyecto es una historia de diseño, innovación y excelencia
                        </p>

                        <div className="projects-hero-features fade-in-delayed-3">
                            <div className="feature">
                                <span className="feature-icon">◆</span>
                                <span>Diseño Premium</span>
                            </div>
                            <div className="feature">
                                <span className="feature-icon">◆</span>
                                <span>Calidad Garantizada</span>
                            </div>
                            <div className="feature">
                                <span className="feature-icon">◆</span>
                                <span>100% Personalizado</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-scroll-indicator">
                    <span>VER PROYECTOS</span>
                </div>
            </section>

            {/* SECCIÓN INTRODUCTORIA */}
            <section className="projects-intro-section">
                <div className="container">
                    <div className="intro-content">
                        <h2 className="intro-title">Transformamos Ideas en Realidad</h2>
                        <p className="intro-text">
                            Con más de una década de experiencia, hemos transformado espacios en ambientes extraordinarios.
                            Cada proyecto refleja nuestra dedicación a la calidad, el diseño innovador y la satisfacción de nuestros clientes.
                        </p>
                        <div className="intro-divider"></div>
                    </div>
                </div>
            </section>

            {/* ESTADÍSTICAS */}
            <section className="projects-stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {estadisticas.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-number">{stat.numero}</div>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GALERÍA DE PROYECTOS */}
            <main className="projects-main-content">
                <div className="container-lg">
                    <div className="projects-header">
                        <h2 className="projects-section-title">Nuestras Colecciones</h2>
                        <p className="projects-section-subtitle">
                            Explora nuestras categorías y descubre proyectos que inspiran
                        </p>
                    </div>

                    <div className="projects-grid-wrapper">
                        {categorias.map((cat, index) => (
                            <Link to={cat.link} key={index} className="project-premium-card">
                                <div className="card-image-box">
                                    <img src={cat.img} alt={cat.nombre} />
                                    <div className="card-image-overlay"></div>
                                </div>
                                <div className="card-glass-overlay">
                                    <div className="card-content">
                                        <span className="card-category-badge">{cat.id}</span>
                                        <h3 className="card-title-text">{cat.nombre}</h3>
                                        <p className="card-description">{cat.descripcion}</p>
                                        <div className="card-footer-action">
                                            <span className="projects-count">{cat.proyectos} Proyectos</span>
                                            <span className="explore-button">
                                                EXPLORAR
                                                <i className="bi bi-arrow-right"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            {/* SECCIÓN CTA FINAL */}
            <section className="projects-cta-section">
                <div className="container text-center">
                    <h2 className="cta-title">¿Tienes un Proyecto en Mente?</h2>
                    <p className="cta-subtitle">
                        Nuestro equipo de expertos está listo para transformar tu visión en una realidad diferente
                    </p>
                    <Link to="/contacto" className="btn-cta-projects">Solicitar Consulta Gratuita</Link>
                </div>
            </section>
        </div>
    );
};