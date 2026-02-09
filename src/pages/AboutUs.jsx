import React from "react";
import { Link } from 'react-router-dom';
import "../styles/sobrenosotros.css";

export const AboutUs = () => {
    const valores = [
        {
            icon: '◆',
            titulo: 'Excelencia',
            descripcion: 'Cada detalle cuenta. Nos comprometemos con la perfección en cada pieza que creamos.'
        },
        {
            icon: '◆',
            titulo: 'Sostenibilidad',
            descripcion: 'Maderas nobles y textiles premium que respetan el ambiente y el futuro.'
        },
        {
            icon: '◆',
            titulo: 'Innovación',
            descripcion: 'Tradición ancestral meets tendencias contemporáneas en diseño y comodidad.'
        }
    ];

    const hitos = [
        { año: '2015', titulo: 'Nacimiento de La 16', descripcion: 'Fundamos nuestro taller en nombre de la excelencia artesanal' },
        { año: '2017', titulo: 'Especialización Tapicería', descripcion: 'Expandimos hacia los más finos textiles del mercado' },
        { año: '2020', titulo: 'Reconocimiento Regional', descripcion: 'Nos posicionamos como referente en diseño personalizado' },
        { año: '2024', titulo: 'Expansión Digital', descripcion: 'Llevamos nuestro arte a nuevas audiencias del mundo' }
    ];

    const estadisticas = [
        { numero: '150+', label: 'Proyectos Completados' },
        { numero: '98%', label: 'Clientes Satisfechos' },
        { numero: '5+', label: 'Años de Maestría' },
        { numero: '100%', label: 'Garantía de Calidad' }
    ];

    return (
        <div className="about-us-container">
            {/* HERO SECTION */}
            <section className="hero-slider-fullscreen about-hero">
                <div className="hero-slide active" style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2000')`,
                    opacity: '0.5'
                }}></div>

                <div className="hero-overlay"></div>

                <div className="hero-content d-flex flex-column justify-content-center align-items-center text-white position-relative h-100">
                    <div className="text-center">
                        <span className="about-hero-badge fade-in">QUIÉNES SOMOS</span>
                        <h1 className="about-hero-title fade-in-delayed-1">Carpintería La 16</h1>
                        <p className="about-hero-subtitle fade-in-delayed-2">
                            Donde la tradición artesanal encuentra la innovación contemporánea
                        </p>
                    </div>
                </div>

                <div className="hero-scroll-indicator">
                    <span>DESCUBRE NUESTRA HISTORIA</span>
                </div>
            </section>

            {/* SECCIÓN MISIÓN - VISIÓN - VALORES */}
            <section className="about-mvv-section">
                <div className="container">
                    <div className="about-mvv-content">
                        <div className="mvv-item fade-in">
                            <h3 className="mvv-title">Nuestra Misión</h3>
                            <p className="mvv-text">
                                Transformar espacios en experiencias memorables a través del diseño excepcional,
                                la artesanía impeccable y el compromiso inquebrantable con la calidad.
                            </p>
                        </div>
                        <div className="mvv-divider"></div>
                        <div className="mvv-item fade-in">
                            <h3 className="mvv-title">Nuestra Visión</h3>
                            <p className="mvv-text">
                                Ser el referente de excelencia en carpintería y tapicería personalizada,
                                reconocidos por nuestra dedicación a la innovación y la durabilidad.
                            </p>
                        </div>
                        <div className="mvv-divider"></div>
                        <div className="mvv-item fade-in">
                            <h3 className="mvv-title">Nuestros Valores</h3>
                            <p className="mvv-text">
                                Excelencia, sostenibilidad, honestidad y pasión por el oficio.
                                Cada mueble es una promesa de calidad eterna.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN PILARES */}
            <section className="about-pillars-section">
                <div className="container">
                    <h2 className="section-title">Nuestros Pilares</h2>
                    <div className="pillars-grid">
                        {valores.map((valor, index) => (
                            <div key={index} className="pilar-card" style={{ animationDelay: `${index * 0.15}s` }}>
                                <div className="pilar-icon">{valor.icon}</div>
                                <h3 className="pilar-title">{valor.titulo}</h3>
                                <p className="pilar-description">{valor.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN HISTORIA CON IMAGEN */}
            <section className="about-story-section">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-image-side fade-in-left">
                            <div className="story-image-wrapper">
                                <img
                                    src="/img/Fondo_sobre.jpg"
                                    alt="Detalle de mueble de madera artesanal"
                                    className="story-image"
                                />
                                <div className="story-image-accent"></div>
                            </div>
                        </div>
                        <div className="story-text-side fade-in-right">
                            <span className="about-badge">NUESTRA HISTORIA</span>
                            <h2 className="story-title">Artesanía sin Compromisos</h2>
                            <p className="story-intro">
                                En Carpintería y Tapicería La 16, no fabricamos muebles; damos vida a los espacios que habitas.
                            </p>
                            <p className="story-body">
                                Nacimos bajo la premisa de que el diseño excepcional debe ser eterno. Combinamos las técnicas
                                ancestrales de la ebanistería con las tendencias contemporáneas de la tapicería de alto confort.
                                Cada pieza que sale de nuestro taller lleva consigo nuestra esencia: maderas nobles, textiles
                                premium y un compromiso innegociable con la perfección.
                            </p>
                            <div className="story-highlights">
                                <div className="highlight-item">
                                    <span className="highlight-number">+150</span>
                                    <span className="highlight-label">Proyectos Realizados</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-number">5</span>
                                    <span className="highlight-label">Años de Maestría</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN TIMELINE */}
            <section className="about-timeline-section">
                <div className="container">
                    <h2 className="section-title text-white">Nuestro Recorrido</h2>
                    <div className="timeline-wrapper">
                        {hitos.map((hito, index) => (
                            <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <span className="timeline-year">{hito.año}</span>
                                    <h3 className="timeline-title">{hito.titulo}</h3>
                                    <p className="timeline-description">{hito.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN ESTADÍSTICAS */}
            <section className="about-stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {estadisticas.map((stat, index) => (
                            <div key={index} className="stat-card about-stat">
                                <div className="stat-number">{stat.numero}</div>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN LLAMADA A ACCIÓN */}
            <section className="about-cta-section">
                <div className="container text-center">
                    <h2 className="cta-title">Vive la Experiencia La 16</h2>
                    <p className="cta-subtitle">
                        Descubre cómo transformamos tus espacios en ambientes extraordinarios
                    </p>
                    <Link to="/proyectos" className="btn-cta-about">Ver Nuestros Proyectos</Link>
                </div>
            </section>
        </div>
    );
};