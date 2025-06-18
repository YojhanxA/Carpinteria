// src/pages/Home.jsx
import React from "react";
import { Carousel } from "./Carrusel";
export const Home = () => {
  const images = [
    "/img/1.jpeg",
    "/img/2.jpeg",
    "/img/3.jpeg",
    "/img/4.jpeg",
    "/img/5.jpeg",
  ];
  return (
    <main className="container py-5">
      <section className="text-center mb-5">
        <h2 className="display-4 fw-bold mb-3">
          Carpintería y Tapicería La 16
        </h2>
        <p className="lead fw-semibold mb-2">
          Transformamos espacios con estilo y calidad.
        </p>
        <p className="fw-medium mb-4">
          Desde muebles personalizados hasta tapicería fina, en La 16 creamos
          soluciones únicas que elevan tu hogar o negocio.
        </p>
        <button className="btn btn-dark px-4">Taller</button>
      </section>

      {/* IMAGEN */}
      <section className="text-center">
        <img
          src="/carpinteria.png"
          alt="Taller de carpintería"
          className="img-fluid rounded-4 shadow"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </section>
      <section className="text-center mt-5">
        <h3 className="fw-bold mb-4">Algunos diseños</h3>
      </section>
      <section>
        <Carousel images={images} />
      </section>
    </main>
  );
};
