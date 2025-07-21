export const AcercaD = () => {
  return (
    <main className="container py-5">
      <section className="text-center mb-5">
        <h2 className="display-4 fw-bold mb-3">¿Quiénes Somos?</h2>
        <p className="lead fw-semibold mb-2">
          En Carpintería y Tapicería La 16, más que muebles, construimos historias.
        </p>
        <p className="fw-medium mb-4">
          Somos una empresa familiar nacida del amor por el diseño, la madera y el trabajo bien hecho. Transformamos ideas en espacios únicos, con un sello artesanal que se siente en cada detalle.
        </p>
      </section>

      <section className="text-center">
        <img
          src="/carpinteria.png"
          alt="Taller de carpintería"
          className="img-fluid rounded-4 shadow"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </section>

      <section className="text-center mt-5">
        <h3 className="fw-bold mb-4">¿Dónde estamos ubicados?</h3>
        <p className="mb-4">
          Nos encontramos en la Calle 16 #8-92, Espinal - Tolima. Puedes visitarnos de lunes a sábado de 8:00 a.m. a 6:00 p.m.
        </p>
      </section>

      <section className="text-center">
        <img
          src="/Ubicacion.png"
          alt="Mapa de ubicación de Carpintería La 16 en Espinal, Tolima"
          className="img-fluid rounded-4 shadow"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
      </section>
    </main>
  );
};
