import React from 'react';
// IMPORTANTE: Asegúrate de que el archivo en la carpeta styles se llame productos.css (en minúsculas)
import '../styles/productos.css';

export const Productos = () => {
    // 1. Datos para los filtros
    const categoriasFiltros = ["ESTRUCTURA", "CUERO", "TELA", "TERRAZO"];

    // 2. Tu lista de productos real con links de imagen estables
    const listaProductos = [
        { id: 1, nombre: "SILLA NÓRDICA", precio: "$1.200.000", img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1000" },
        { id: 2, nombre: "MESA DE CENTRO TERRAZO", precio: "$2.500.000", img: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1000" },
        { id: 3, nombre: "POLTRONA CUERO", precio: "$3.800.000", img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1000" }
    ];

    return (
        <div className="productos-page-container">
            {/* CABECERA */}
            <section className="productos-hero-header">
                <nav className="breadcrumb-nav">
                    INICIO / TIENDA / <span className="current">PRODUCTOS</span>
                </nav>
                <h1 className="productos-display-title">PRODUCTOS</h1>
            </section>

            {/* BARRA DE UTILIDADES */}
            <div className="productos-utility-bar">
                <div className="view-icons d-none d-md-flex">
                    <i className="bi bi-grid-fill"></i>
                    <i className="bi bi-grid-3x3-gap"></i>
                    <i className="bi bi-list"></i>
                </div>

                <div className="total-count">{listaProductos.length} PRODUCTOS</div>

                <div className="sort-dropdown">
                    ORDENAR POR <i className="bi bi-chevron-down ms-1"></i>
                </div>
            </div>

            <div className="container-fluid px-0">
                <div className="row g-0">

                    {/* COLUMNA DE FILTROS */}
                    <aside className="col-md-2 border-end filter-column">
                        {categoriasFiltros.map((cat) => (
                            <div key={cat} className="filter-accordion-item">
                                <span>{cat}</span>
                                <i className="bi bi-chevron-down"></i>
                            </div>
                        ))}
                    </aside>

                    {/* GRILLA DE PRODUCTOS */}
                    <main className="col-md-10 products-display-area">
                        <div className="row g-0">
                            {listaProductos.map((prod) => (
                                <div className="col-6 col-lg-3 product-border-grid" key={prod.id}>
                                    <div className="item-card">
                                        <div className="image-box">
                                            <img src={prod.img} alt={prod.nombre} loading="lazy" />
                                        </div>
                                        <div className="text-box">
                                            <h3 className="item-name">{prod.nombre}</h3>
                                            <p className="item-price">{prod.precio}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};