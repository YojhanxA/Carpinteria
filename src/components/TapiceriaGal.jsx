import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const coloresTelas = [
    { id: 1, nombre: "Beige Arena", hex: "#D2B48C", tipo: "Lino Importado", descripcion: "Suavidad natural con resistencia excepcional" },
    { id: 2, nombre: "Gris Grafito", hex: "#383838", tipo: "Chenille Soft", descripcion: "Elegancia moderna con textura profunda" },
    { id: 3, nombre: "Azul Medianoche", hex: "#1A2B45", tipo: "Terciopelo", descripcion: "Lujo tactil que hipnotiza" },
    { id: 4, nombre: "Verde Botánico", hex: "#556B2F", tipo: "Lona Anti-fluido", descripcion: "Naturaleza y funcionalidad unidas" },
    { id: 5, nombre: "Rosa Palo", hex: "#D8A6A6", tipo: "Microfibra", descripcion: "Delicadeza sofisticada y duradera" },
    { id: 6, nombre: "Ocre Dorado", hex: "#C59942", tipo: "Jacquard", descripcion: "Calidez aristocrática para espacios premium" },
];

const inspiracion = [
    { id: 1, titulo: "Sala Contemporánea", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800", color: "Gris Grafito" },
    { id: 2, titulo: "Lounge Elegante", img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800", color: "Azul Medianoche" },
    { id: 3, titulo: "Comfort Moderno", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800", color: "Beige Arena" },
];

export const TapiceriaGal = () => {
    const [colorSeleccionado, setColorSeleccionado] = useState(coloresTelas[0]);

    return (
        <section className="tapiceria-gallery-section">

            {/* ===== SECCIÓN EDITORIAL MEJORADA ===== */}
            <div className="editorial-section pt-5 pb-5">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="editorial-content">
                                <span className="editorial-badge">LA EXPERIENCIA</span>
                                <h2 className="editorial-title">El tacto define la experiencia.</h2>
                                <p className="editorial-text">
                                    No es solo color, es sensación. En <strong>La 16</strong>, seleccionamos textiles que combinan tecnología anti-manchas con la suavidad que tu hogar merece. Cada fibra cuenta una historia de confort y elegancia.
                                </p>
                                <ul className="editorial-features">
                                    <li><span className="feature-icon">◆</span>Textiles importados de primera línea</li>
                                    <li><span className="feature-icon">◆</span>Garantía de durabilidad 10 años</li>
                                    <li><span className="feature-icon">◆</span>Personalización total en diseño</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="editorial-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
                                    alt="Sofá Premium"
                                    className="editorial-image"
                                />
                                <div className="image-accent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== PALETA DE COLORES INTERACTIVA ===== */}
            <div className="palette-section py-5">
                <div className="container">
                    <h3 className="palette-title text-center mb-5">PALETA DE TEMPORADA</h3>

                    <div className="palette-display mb-5">
                        <div className="selected-color-card">
                            <div className="color-preview" style={{ backgroundColor: colorSeleccionado.hex }}></div>
                            <div className="color-info">
                                <h4>{colorSeleccionado.nombre}</h4>
                                <p className="color-type">{colorSeleccionado.tipo}</p>
                                <p className="color-desc">{colorSeleccionado.descripcion}</p>
                            </div>
                        </div>
                    </div>

                    <div className="colors-grid">
                        {coloresTelas.map((tela) => (
                            <div
                                key={tela.id}
                                className={`color-swatch ${colorSeleccionado.id === tela.id ? 'active' : ''}`}
                                onClick={() => setColorSeleccionado(tela)}
                            >
                                <div className="swatch-inner" style={{ backgroundColor: tela.hex }}>
                                    <span className="swatch-label">{tela.nombre}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== GALERÍA DE INSPIRACIÓN ===== */}
            <div className="inspiration-section py-5">
                <div className="container">
                    <h3 className="inspiration-title text-center mb-5">PROYECTOS QUE INSPIRAN</h3>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        spaceBetween={30}
                        slidesPerView={1}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: true }}
                        breakpoints={{
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        className="inspiration-swiper"
                    >
                        {inspiracion.map((proyecto) => (
                            <SwiperSlide key={proyecto.id}>
                                <div className="inspiration-card">
                                    <div className="inspiration-img-wrapper">
                                        <img src={proyecto.img} alt={proyecto.titulo} className="inspiration-img" />
                                        <div className="inspiration-overlay"></div>
                                    </div>
                                    <div className="inspiration-content">
                                        <h5>{proyecto.titulo}</h5>
                                        <p>Realizado con {proyecto.color}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* ===== SECCIÓN CTA ===== */}
            <div className="cta-section py-5">
                <div className="container text-center">
                    <h3 className="cta-title">Tu proyecto merece lo mejor</h3>
                    <p className="cta-subtitle">Consulta con nuestros expertos sobre la tela perfecta para tu espacio</p>
                    <button className="cta-button">SOLICITAR CATÁLOGO COMPLETO</button>
                </div>
            </div>
        </section>
    );
};