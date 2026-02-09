import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/productos.css';

export const Productos = () => {
    const [filtroActivo, setFiltroActivo] = useState("TODOS");
    const [layout, setLayout] = useState("grid-4");
    const [orden, setOrden] = useState("DEFAULT");
    const [busqueda, setBusqueda] = useState("");
    const [productSeleccionado, setProductSeleccionado] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);

    const categoriasFiltros = ["TODOS", "SILLAS", "SOFÁS", "MESAS", "CAMAS", "CLOSETS"];

    const listaProductos = [
        { id: 1, categoria: "SILLAS", nombre: "SILLA NÓRDICA MINIMALISTA", precio: 1200000, img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1000", badge: "BESTSELLER", rating: 4.8, stock: true, descripcion: "Diseño escandinavo con líneas limpias", especificaciones: { material: "Madera de Haya + Tapizaje Lino", dimensiones: "70cm A × 60cm A × 65cm F", peso: "8 kg", colores: ["Natural", "Gris", "Azul"], mantenimiento: "Limpiar con paño húmedo", garantia: "2 años" } },
        { id: 2, categoria: "MESAS", nombre: "MESA DE CENTRO TERRAZO", precio: 2500000, img: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1000", badge: "NUEVO", rating: 5, stock: true, descripcion: "Base en acero, tapa terrazo premium", especificaciones: { material: "Terrazo Natural + Base Acero Cromado", dimensiones: "120cm A × 40cm A × 60cm P", peso: "45 kg", colores: ["Blanco", "Gris", "Negro"], mantenimiento: "Sellador anual recomendado", garantia: "3 años" } },
        { id: 3, categoria: "SOFÁS", nombre: "POLTRONA CUERO GENUINO", precio: 3800000, img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1000", badge: null, rating: 4.9, stock: true, descripcion: "Cuero importado con estructura robusta", especificaciones: { material: "Cuero Genuino Italiano + Estructura Madera", dimensiones: "90cm A × 95cm A × 85cm P", peso: "35 kg", colores: ["Café", "Negro", "Blanco"], mantenimiento: "Acondicionador de cuero c/6 meses", garantia: "5 años" } },
        { id: 4, categoria: "CAMAS", nombre: "CAMA TAPIZADA PREMIUM", precio: 5200000, img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1000", badge: "BESTSELLER", rating: 4.7, stock: true, descripcion: "Base tapizada en lino, estructura de madera", especificaciones: { material: "Lino Premium + Estructura Roble Macizo", dimensiones: "160cm A × 50cm A", peso: "80 kg", colores: ["Beige", "Gris", "Crema"], mantenimiento: "Aspirar regularmente", garantia: "5 años" } },
        { id: 5, categoria: "CLOSETS", nombre: "CLOSET MODULAR ROBLE", precio: 4500000, img: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=1000", badge: null, rating: 4.6, stock: true, descripcion: "Madera roble maciza, herrajes alemanes", especificaciones: { material: "Roble Macizo + Herrajes Alemanes Blum", dimensiones: "220cm A × 60cm P × 240cm Al", peso: "120 kg", colores: ["Roble Natural", "Roble Oscuro"], mantenimiento: "Aceite protector anual", garantia: "10 años" } },
        { id: 6, categoria: "SILLAS", nombre: "SILLA ERGONÓMICA EJECUTIVA", precio: 1800000, img: "https://images.unsplash.com/photo-1533090161892-a37266e8f6d8?auto=format&fit=crop&q=80&w=1000", badge: null, rating: 4.8, stock: true, descripcion: "Ideal para home office con soporte lumbar", especificaciones: { material: "Malla Breathable + Acero Cromado", dimensiones: "70cm A × 70cm P × 120cm Al", peso: "15 kg", colores: ["Negro", "Gris", "Azul"], mantenimiento: "Limpiar malla con paño", garantia: "3 años" } },
        { id: 7, categoria: "SOFÁS", nombre: "SOFÁ SECCIONAL 3 PIEZAS", precio: 6200000, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000", badge: "NUEVO", rating: 5, stock: true, descripcion: "Modular, tela importada lavable", especificaciones: { material: "Tela Importada 100% Poliéster + Estructura Pino", dimensiones: "280cm A × 150cm P", peso: "95 kg", colores: ["Gris", "Beige", "Azul"], mantenimiento: "Tela removible e lavable", garantia: "5 años" } },
        { id: 8, categoria: "MESAS", nombre: "MESA COMEDOR ROBLE MACIZO", precio: 3200000, img: "https://images.unsplash.com/photo-1555041439-4b710a2d81d7?auto=format&fit=crop&q=80&w=1000", badge: null, rating: 4.7, stock: true, descripcion: "Para 8 personas, extensible", especificaciones: { material: "Roble Macizo", dimensiones: "200-280cm A × 100cm P", peso: "65 kg", colores: ["Natural", "Oscuro"], mantenimiento: "Aceite protector c/6 meses", garantia: "5 años" } },
        { id: 9, categoria: "CAMAS", nombre: "CAMA CANTERA CLÁSICA", precio: 4100000, img: "https://images.unsplash.com/photo-1540932239986-310128078ceb?auto=format&fit=crop&q=80&w=1000", badge: "BESTSELLER", rating: 4.9, stock: true, descripcion: "Madera cantera, diseño tradicional", especificaciones: { material: "Madera Cantera Tallada", dimensiones: "160cm A × 50cm A", peso: "75 kg", colores: ["Cantera Natural", "Cantera Oscura"], mantenimiento: "Barniz protector anual", garantia: "10 años" } },
        { id: 10, categoria: "CLOSETS", nombre: "CLOSET ESPEJO BLANCO MODERNO", precio: 3800000, img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1000", badge: null, rating: 4.6, stock: true, descripcion: "Lacado blanco, espejo integrado", especificaciones: { material: "Lacado Blanco + Espejo Temperado", dimensiones: "200cm A × 60cm P × 220cm Al", peso: "100 kg", colores: ["Blanco", "Gris"], mantenimiento: "Limpiar con desengrasante suave", garantia: "3 años" } },
        { id: 11, categoria: "SILLAS", nombre: "SILLA INDUSTRIAL METAL", precio: 1400000, img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&q=80&w=1000", badge: null, rating: 4.5, stock: true, descripcion: "Estructura acero, asiento tapizado", especificaciones: { material: "Acero Industrial + Tapiz Cuero", dimensiones: "70cm A × 60cm A", peso: "12 kg", colores: ["Negro", "Marrón"], mantenimiento: "Limpiar estructura con trapo seco", garantia: "2 años" } },
        { id: 12, categoria: "SOFÁS", nombre: "CHAISE LOUNGE TERCIOPELO", precio: 2800000, img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1000", badge: "NUEVO", rating: 4.8, stock: true, descripcion: "Terciopelo importado, base patas de madera", especificaciones: { material: "Terciopelo Importado + Patas de Roble", dimensiones: "150cm A × 80cm P", peso: "40 kg", colores: ["Bordeaux", "Verde", "Gris"], mantenimiento: "Cepillo suave para terciopelo", garantia: "3 años" } },
        { id: 13, categoria: "MESAS", nombre: "MESA LATERAL VIDRIO TEMPLADO", precio: 1600000, img: "https://images.unsplash.com/photo-1555041439-4b710a2d81d7?auto=format&fit=crop&q=80&w=1000", badge: null, rating: 4.7, stock: true, descripcion: "Vidrio templado con base de acero", especificaciones: { material: "Vidrio Templado 12mm + Base Acero", dimensiones: "50cm A × 50cm P", peso: "20 kg", colores: ["Transparente", "Ahumado"], mantenimiento: "Limpiar con vidrio", garantia: "2 años" } },
        { id: 14, categoria: "CAMAS", nombre: "CAMA STORAGE GRIS", precio: 3500000, img: "https://images.unsplash.com/photo-1540932239986-310128078ceb?auto=format&fit=crop&q=80&w=1000", badge: null, rating: 4.6, stock: true, descripcion: "Con cajonera integrada, tapizado gris", especificaciones: { material: "Tapiz Gris + Estructura Pino con Cajones", dimensiones: "160cm A × 50cm A", peso: "70 kg", colores: ["Gris Claro", "Gris Oscuro"], mantenimiento: "Cepillar regularmente", garantia: "3 años" } },
        { id: 15, categoria: "CLOSETS", nombre: "CLOSET CEDRO AROMÁTICO", precio: 5800000, img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1000", badge: "BESTSELLER", rating: 5, stock: true, descripcion: "Cedro natural, puertas corredizas", especificaciones: { material: "Cedro Aromático Natural", dimensiones: "240cm A × 70cm P × 240cm Al", peso: "130 kg", colores: ["Cedro Natural"], mantenimiento: "Pulir anualmente", garantia: "15 años" } },
        { id: 16, categoria: "SILLAS", nombre: "SILLA CUERO CROMADA", precio: 1550000, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000", badge: null, rating: 4.8, stock: true, descripcion: "Cuero genuino, estructura cromada", especificaciones: { material: "Cuero Genuino + Base Cromada", dimensiones: "65cm A × 65cm P", peso: "14 kg", colores: ["Negro", "Café", "Blanco"], mantenimiento: "Acondicionador trimestral", garantia: "3 años" } },
        { id: 17, categoria: "SOFÁS", nombre: "SOFÁ DÍA TAPIZADO BEIGE", precio: 2400000, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000", badge: null, rating: 4.7, stock: true, descripcion: "Convertible, tela teñida 100% algodón", especificaciones: { material: "Algodón 100% + Estructura Pino", dimensiones: "210cm A × 90cm P", peso: "50 kg", colores: ["Beige", "Crema", "Gris"], mantenimiento: "Lavable, remover cojín", garantia: "3 años" } },
        { id: 18, categoria: "MESAS", nombre: "MESA ESCRITORIO ROBLE NOGAL", precio: 2100000, img: "https://images.unsplash.com/photo-1555041439-4b710a2d81d7?auto=format&fit=crop&q=80&w=1000", badge: "NUEVO", rating: 4.6, stock: true, descripcion: "Perfecto para home office", especificaciones: { material: "Roble Nogal Macizo", dimensiones: "140cm A × 70cm P", peso: "45 kg", colores: ["Nogal Natural"], mantenimiento: "Aceite protector semestral", garantia: "5 años" } },
    ];

    const procesarProductos = () => {
        let filtrados = filtroActivo === "TODOS"
            ? [...listaProductos]
            : listaProductos.filter(p => p.categoria === filtroActivo);

        if (busqueda) {
            filtrados = filtrados.filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase()));
        }

        if (orden === "PRECIO_MIN") {
            filtrados.sort((a, b) => a.precio - b.precio);
        } else if (orden === "PRECIO_MAX") {
            filtrados.sort((a, b) => b.precio - a.precio);
        } else if (orden === "ALFA") {
            filtrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
        }
        return filtrados;
    };

    const productosAMostrar = procesarProductos();

    const abrirModal = (producto) => {
        setProductSeleccionado(producto);
        setMostrarModal(true);
        document.body.style.overflow = 'hidden';
    };

    const cerrarModal = () => {
        setMostrarModal(false);
        setProductSeleccionado(null);
        document.body.style.overflow = 'auto';
    };


    const getLayoutClass = () => {
        if (layout === "grid-2") return "col-6 col-lg-6";
        if (layout === "grid-list") return "col-12 layout-list";
        return "col-6 col-lg-3";
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <i key={i} className={`${i < Math.floor(rating) ? 'bi bi-star-fill' : 'bi bi-star'}`}></i>
            );
        }
        return stars;
    };

    return (
        <div className="productos-container">
            {/* HERO SECTION */}
            <section className="hero-slider-fullscreen productos-hero">
                <div className="hero-slide active" style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2000')`,
                    opacity: '0.5'
                }}></div>

                <div className="hero-overlay"></div>

                <div className="hero-content d-flex flex-column justify-content-center align-items-center text-white position-relative h-100">
                    <div className="text-center">
                        <span className="productos-hero-badge fade-in">COLECCIÓN PREMIUM</span>
                        <h1 className="productos-hero-title fade-in-delayed-1">Nuestros Productos</h1>
                        <p className="productos-hero-subtitle fade-in-delayed-2">
                            Diseño excepcional y calidad garantizada en cada pieza
                        </p>
                    </div>
                </div>

                <div className="hero-scroll-indicator">
                    <span>EXPLORAR CATÁLOGO</span>
                </div>
            </section>

            {/* SEARCH & FILTERS SECTION */}
            <section className="productos-filters-section">
                <div className="container">
                    <div className="search-wrapper">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Buscar producto..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                        <i className="bi bi-search"></i>
                    </div>

                    <div className="filters-tags">
                        {categoriasFiltros.map((cat) => (
                            <button
                                key={cat}
                                className={`filter-tag ${filtroActivo === cat ? 'active' : ''}`}
                                onClick={() => setFiltroActivo(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="productos-controls">
                        <div className="view-icons">
                            <i className={`bi bi-grid-fill ${layout === 'grid-2' ? 'active-view' : ''}`} onClick={() => setLayout('grid-2')} title="2 columnas"></i>
                            <i className={`bi bi-grid-3x3-gap ${layout === 'grid-4' ? 'active-view' : ''}`} onClick={() => setLayout('grid-4')} title="4 columnas"></i>
                            <i className={`bi bi-list ${layout === 'grid-list' ? 'active-view' : ''}`} onClick={() => setLayout('grid-list')} title="Vista lista"></i>
                        </div>

                        <div className="sort-dropdown">
                            <select
                                className="sort-select"
                                value={orden}
                                onChange={(e) => setOrden(e.target.value)}
                            >
                                <option value="DEFAULT">ORDENAR POR</option>
                                <option value="PRECIO_MIN">PRECIO: MENOR A MAYOR</option>
                                <option value="PRECIO_MAX">PRECIO: MAYOR A MENOR</option>
                                <option value="ALFA">NOMBRE: A-Z</option>
                            </select>
                        </div>

                        <div className="total-count">{productosAMostrar.length} PRODUCTOS</div>
                    </div>
                </div>
            </section>

            {/* PRODUCTS GRID */}
            <section className="productos-grid-section">
                <div className="container-fluid">
                    {productosAMostrar.length > 0 ? (
                        <div className="row g-4">
                            {productosAMostrar.map((prod, index) => (
                                <div className={`${getLayoutClass()}`} key={prod.id} style={{ animationDelay: `${index * 0.08}s` }}>
                                    <div className="product-premium-card">
                                        <div className="card-image-wrapper">
                                            <img src={prod.img} alt={prod.nombre} className="product-image" />
                                            <div className="card-image-overlay"></div>

                                            {prod.badge && (
                                                <div className={`product-badge badge-${prod.badge.toLowerCase()}`}>
                                                    {prod.badge}
                                                </div>
                                            )}

                                            {prod.stock && (
                                                <div className="stock-indicator">EN STOCK</div>
                                            )}
                                        </div>

                                        <div className="card-content">
                                            <div className="product-rating">
                                                <div className="stars">
                                                    {renderStars(prod.rating)}
                                                </div>
                                                <span className="rating-value">({prod.rating})</span>
                                            </div>

                                            <h3 className="product-name">{prod.nombre}</h3>

                                            <p className="product-description">{prod.descripcion}</p>

                                            <div className="product-footer">
                                                <div className="price-section">
                                                    <span className="product-price">${(prod.precio / 1000000).toFixed(1)}M</span>
                                                </div>
                                                <button onClick={() => abrirModal(prod)} className="btn-details">
                                                    VER DETALLES
                                                    <i className="bi bi-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-products">
                            <p>No encontramos productos que coincidan con tu búsqueda</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="productos-cta-section">
                <div className="container text-center">
                    <h2 className="cta-title">¿No Encontraste lo Que Buscas?</h2>
                    <p className="cta-subtitle">
                        Nuestro equipo de diseñadores puede crear la pieza perfecta para ti
                    </p>
                    <Link to="/contacto" className="btn-cta-productos">Solicitar Diseño Personalizado</Link>
                </div>
            </section>

            {/* MODAL DETALLE PRODUCTO */}
            {mostrarModal && productSeleccionado && (
                <div className="modal-backdrop" onClick={cerrarModal}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={cerrarModal}>
                            <i className="bi bi-x"></i>
                        </button>

                        <div className="modal-content">
                            <div className="modal-image-section">
                                <img src={productSeleccionado.img} alt={productSeleccionado.nombre} className="modal-product-image" />
                                {productSeleccionado.badge && (
                                    <div className={`modal-badge badge-${productSeleccionado.badge.toLowerCase()}`}>
                                        {productSeleccionado.badge}
                                    </div>
                                )}
                            </div>

                            <div className="modal-details-section">
                                <div className="modal-header">
                                    <h2 className="modal-title">{productSeleccionado.nombre}</h2>
                                    <div className="modal-rating">
                                        <div className="stars">
                                            {renderStars(productSeleccionado.rating)}
                                        </div>
                                        <span className="rating-value">({productSeleccionado.rating})</span>
                                    </div>
                                </div>

                                <p className="modal-description">{productSeleccionado.descripcion}</p>

                                <div className="modal-price">
                                    <span className="price-label">PRECIO</span>
                                    <span className="price-value">${(productSeleccionado.precio / 1000000).toFixed(1)}M</span>
                                </div>

                                <div className="modal-specifications">
                                    <h3 className="specs-title">Especificaciones</h3>
                                    <div className="specs-grid">
                                        <div className="spec-item">
                                            <span className="spec-label">Material</span>
                                            <span className="spec-value">{productSeleccionado.especificaciones.material}</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Dimensiones</span>
                                            <span className="spec-value">{productSeleccionado.especificaciones.dimensiones}</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Peso</span>
                                            <span className="spec-value">{productSeleccionado.especificaciones.peso}</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Garantía</span>
                                            <span className="spec-value">{productSeleccionado.especificaciones.garantia}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-colors">
                                    <h4 className="colors-title">Colores Disponibles</h4>
                                    <div className="colors-list">
                                        {productSeleccionado.especificaciones.colores.map((color, idx) => (
                                            <div key={idx} className="color-tag">{color}</div>
                                        ))}
                                    </div>
                                </div>

                                <div className="modal-care">
                                    <h4 className="care-title">Instrucciones de Cuidado</h4>
                                    <p className="care-text">{productSeleccionado.especificaciones.mantenimiento}</p>
                                </div>

                                <div className="modal-actions">
                                    <Link to="/contacto" className="btn-contact-modal">
                                        <i className="bi bi-chat-dots"></i>
                                        CONSULTAR
                                    </Link>
                                    <button onClick={cerrarModal} className="btn-close-modal">
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};