import React from "react";
import "../styles/sobrenosotros.css";

export const AboutUs = () => {
    return (
        <section className="sobre-nosotros-section">
            <div className="container py-5" style={{ marginTop: '100px' }}>
                <div className="row align-items-center g-5">

                    {/* Lado Izquierdo: Imagen de Mueble Artesanal (URL Estable) */}
                    <div className="col-lg-6">
                        <div className="composition-wrapper position-relative">
                            <div className="main-img-frame">
                                <img
                                    src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1974&auto=format&fit=crop"
                                    alt="Detalle de mueble de madera artesanal"
                                    className="img-fluid shadow-lg"
                                    style={{
                                        borderRadius: '2px',
                                        objectFit: 'cover',
                                        height: '540px',
                                        width: '100%',
                                        display: 'block'
                                    }}
                                />
                            </div>
                            <div className="experience-badge fade-in">
                                <span className="years">20+</span>
                                <span className="label">AÑOS DE<br />MAESTRÍA</span>
                            </div>
                        </div>
                    </div>

                    {/* Lado Derecho: Narrativa */}
                    <div className="col-lg-6">
                        <div className="ps-lg-5">
                            <span className="letter-spacing-3 text-muted mb-2 d-block small">NUESTRA HISTORIA</span>
                            <h2 className="display-5 fw-light mb-4 text-uppercase" style={{ letterSpacing: '4px', color: '#3e4453' }}>
                                Artesanía en <br /><strong>Cada Detalle</strong>
                            </h2>

                            <div className="story-content">
                                <p className="lead text-muted fw-light mb-4">
                                    En <strong>Carpintería y Tapicería La 16</strong>, no fabricamos muebles; damos vida a los espacios que habitas.
                                </p>
                                <p className="text-secondary mb-5" style={{ lineHeight: '1.8', fontSize: '0.95rem', textAlign: 'justify' }}>
                                    Nacimos bajo la premisa de que el diseño excepcional debe ser eterno. Combinamos las técnicas ancestrales de la ebanistería con las tendencias contemporáneas de la tapicería de alto confort. Cada pieza que sale de nuestro taller lleva consigo nuestra esencia: maderas nobles, textiles premium y un compromiso innegociable con la perfección.
                                </p>

                                <div className="row g-4">
                                    <div className="col-6 border-start border-2 ps-4" style={{ borderColor: '#3e4453' }}>
                                        <h6 className="letter-spacing-2 text-uppercase mb-2" style={{ fontSize: '0.8rem', color: '#3e4453' }}>Visión Local</h6>
                                        <p className="small text-muted">Mano de obra experta transformando ideas desde el corazón del taller.</p>
                                    </div>
                                    <div className="col-6 border-start border-2 ps-4" style={{ borderColor: '#3e4453' }}>
                                        <h6 className="letter-spacing-2 text-uppercase mb-2" style={{ fontSize: '0.8rem', color: '#3e4453' }}>Compromiso</h6>
                                        <p className="small text-muted">Durabilidad garantizada mediante procesos de ensamble tradicionales.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};