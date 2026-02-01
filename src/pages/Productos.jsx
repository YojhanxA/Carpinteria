import React, { useState } from 'react';
import '../styles/productos.css';

export const Productos = () => {
    const [filtroActivo, setFiltroActivo] = useState("TODOS");
    const [layout, setLayout] = useState("grid-4");
    // 1. Nuevo estado para el ordenamiento
    const [orden, setOrden] = useState("DEFAULT");

    const categoriasFiltros = ["TODOS", "ESTRUCTURA", "CUERO", "TELA", "TERRAZO"];

    const listaProductos = [
        { id: 1, categoria: "ESTRUCTURA", nombre: "SILLA NÓRDICA", precio: 1200000, img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1000" },
        { id: 2, categoria: "TERRAZO", nombre: "MESA DE CENTRO TERRAZO", precio: 2500000, img: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1000" },
        { id: 3, categoria: "CUERO", nombre: "POLTRONA CUERO", precio: 3800000, img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1000" }
    ];

    // 2. Lógica combinada: Primero filtramos, luego ordenamos
    const procesarProductos = () => {
        let filtrados = filtroActivo === "TODOS" 
            ? [...listaProductos] 
            : listaProductos.filter(p => p.categoria === filtroActivo);

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

    const getLayoutClass = () => {
        if (layout === "grid-2") return "col-4"; 
        if (layout === "grid-list") return "col-12 layout-list"; 
        return "col-6 col-lg-3"; 
    };

    return (
        <div className="productos-page-container">
            <section className="productos-hero-header">
                <nav className="breadcrumb-nav">INICIO / TIENDA / <span className="current">PRODUCTOS</span></nav>
                <h1 className="productos-display-title">PRODUCTOS</h1>
            </section>

            <div className="productos-utility-bar">
                <div className="view-icons d-none d-md-flex">
                    <i className={`bi bi-grid-fill ${layout === 'grid-2' ? 'active-view' : ''}`} onClick={() => setLayout('grid-2')}></i>
                    <i className={`bi bi-grid-3x3-gap ${layout === 'grid-4' ? 'active-view' : ''}`} onClick={() => setLayout('grid-4')}></i>
                    <i className={`bi bi-list ${layout === 'grid-list' ? 'active-view' : ''}`} onClick={() => setLayout('grid-list')}></i>
                </div>

                <div className="total-count">{productosAMostrar.length} PRODUCTOS</div>

                {/* 3. Dropdown de ordenamiento funcional */}
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
            </div>

            <div className="container-fluid px-0">
                <div className="row g-0">
                    <aside className="col-md-2 border-end filter-column">
                        {categoriasFiltros.map((cat) => (
                            <div 
                                key={cat} 
                                className={`filter-accordion-item ${filtroActivo === cat ? 'active-filter' : ''}`}
                                onClick={() => setFiltroActivo(cat)}
                            >
                                <span>{cat}</span>
                                <i className={`bi ${filtroActivo === cat ? 'bi-chevron-right' : 'bi-chevron-down'}`}></i>
                            </div>
                        ))}
                    </aside>

                    <main className="col-md-10 products-display-area">
                        <div className="row g-0">
                            {productosAMostrar.map((prod) => (
                                <div className={`${getLayoutClass()} product-border-grid`} key={prod.id}>
                                    <div className="item-card">
                                        <div className="image-box">
                                            <img src={prod.img} alt={prod.nombre} loading="lazy" />
                                        </div>
                                        <div className="text-box">
                                            <h3 className="item-name">{prod.nombre}</h3>
                                            <p className="item-price">
                                                {/* Formateo de precio a moneda */}
                                                ${prod.precio.toLocaleString('es-CO')}
                                            </p>
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