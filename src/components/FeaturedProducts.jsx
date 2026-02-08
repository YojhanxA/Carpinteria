import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const productos = [
    { id: 1, nombre: "EXHIBIDOR DE ROPA PARA BULLSTORE", precio: "$1.450.000", categoria: "tela", img: "/img/Exhibidor.jpg" },
    { id: 2, nombre: "SOFA DE 4 PUESTOS", precio: "$1.120.000", categoria: "estructura", img: "/img/SofaExhibicion.jpg" },
    { id: 3, nombre: "ESCRITORIO MODERNO PARA FRUTIMPORT", precio: "$560.000", categoria: "cuero", img: "/img/EscritorioExhibicion.png" },
    { id: 4, nombre: "COMEDOR ELEGANTE", precio: "$920.000", categoria: "cuero", img: "/img/ComedorExhibicion.jpg" },
    { id: 5, nombre: "CAMA MODERNA", precio: "$2.100.000", categoria: "terrazo", img: "/img/CamaExhibicion.jpg" }
];

export const FeaturedProducts = () => {
    const iconPrev = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%233e4453' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m15 18-6-6 6-6'/%3E%3C/svg%3E";
    const iconNext = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%233e4453' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m9 18 6-6-6-6'/%3E%3C/svg%3E";

    return (
        <section className="la16-featured-section py-5">
            <div className="container">
                <h2 className="la16-title text-center mb-5">PRODUCTOS DESTACADOS</h2>

                <div className="la16-swiper-outer position-relative">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.la16-next',
                            prevEl: '.la16-prev',
                        }}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="la16-swiper-main"
                    >
                        {productos.map((prod) => (
                            <SwiperSlide key={prod.id}>
                                <div className="la16-card">
                                    <div className="la16-img-container position-relative overflow-hidden">
                                        <img src={prod.img} alt={prod.nombre} className="img-fluid" />
                                        {/* Etiqueta de categoría flotante */}
                                        <span className="la16-badge">{prod.categoria}</span>
                                    </div>
                                    <div className="la16-info text-center py-4">
                                        <h4 className="la16-name">{prod.nombre}</h4>
                                        <p className="la16-price">{prod.precio}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* BOTONES DE NAVEGACIÓN */}
                    <div className="la16-prev custom-arrow">
                        <img src={iconPrev} alt="prev" className="arrow-icon" />
                    </div>
                    <div className="la16-next custom-arrow">
                        <img src={iconNext} alt="next" className="arrow-icon" />
                    </div>
                </div>
            </div>
        </section>
    );
};