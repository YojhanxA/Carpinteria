import React, { useEffect } from 'react';
import { TapiceriaGal } from '../components/TapiceriaGal';
import '../styles/tapiceria.css';

export const Tapiceria = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="tapi-clean">
            <section className="hero-slider-fullscreen tapi-hero">
                <div
                    className="hero-slide active"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&q=80&w=2000')`,
                        opacity: '0.5'
                    }}>
                </div>

                <div className="hero-overlay"></div>

                <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center text-white position-relative" style={{ zIndex: 3 }}>
                    <div className="tapi-content-clean">
                        <h1>TAPIZADOS<br /><span>LA 16</span></h1>
                        <p>MAESTROS ARTESANOS DEL DETALLE.</p>
                    </div>
                </div>
            </section>

            <section className="tapi-philosophy">
                <div className="container">
                    <h2>Nuestra Filosofía</h2>
                    <p>Transformamos espacios con textiles seleccionados de alta gama.</p>
                </div>
            </section>

            <section className="tapi-characteristics">
                <div className="container">
                    <div className="characteristics-grid">
                        <div className="char-item">
                            <div className="char-icon">✦</div>
                            <h3>Textiles Premium</h3>
                            <p>Seleccionamos los mejores tejidos importados con durabilidad y estética incomparables.</p>
                        </div>
                        <div className="char-item">
                            <div className="char-icon">✦</div>
                            <h3>Artesanía Experta</h3>
                            <p>Cada puntada cuenta. Nuestros maestros tapiceros tienen décadas de experiencia.</p>
                        </div>
                        <div className="char-item">
                            <div className="char-icon">✦</div>
                            <h3>Diseño Personalizado</h3>
                            <p>Creamos piezas únicas que reflejan tu estilo y transforman tu ambiente.</p>
                        </div>
                    </div>
                </div>
            </section>

            <TapiceriaGal />
        </div>
    );
};