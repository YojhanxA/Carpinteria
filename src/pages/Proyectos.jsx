import React from 'react';
import '../styles/proyectos.css'; // Asegúrate de crear este archivo para estilos específicos

export const Proyectos = () => {
    return (
        <div className="proyectos-container">
            {/* HERO SECTION DE PROYECTOS */}
            <section className="hero-slider-fullscreen projects-hero">
                <div className="hero-slide active" style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')`,
                    opacity: '0.5' // Ajustamos la opacidad para que el texto sea legible
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

            {/* AQUÍ IRÍA EL CONTENIDO DE LA GALERÍA DE PROYECTOS */}
            <main className="container py-5">
                {/* Contenido de tus categorías o grilla de proyectos */}
            </main>
        </div>
    );
};