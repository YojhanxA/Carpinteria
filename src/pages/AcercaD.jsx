export const AcercaD = () => {
  return (
    <main className="container py-5">
      <section className="text-center mb-5">
        <h2 className="display-4 fw-bold mb-3">¿Quiénes Somos?</h2>
        <p className="lead fw-semibold mb-2">
          En Carpintería y Tapicería La 16, más que muebles, construimos
          historias.
        </p>
        <p className="fw-medium mb-4">
          Somos una empresa familiar nacida del amor por el diseño, la madera y
          el trabajo bien hecho. Transformamos ideas en espacios únicos, con un
          sello artesanal que se siente en cada detalle.
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
        <h3 className="fw-bold mb-4">Lo que nos mueve</h3>
        <p className="mb-4">
          Nos motiva ver cómo un cliente sonríe al ver su mueble terminado. Por
          eso, trabajamos con pasión, precisión y materiales de primera. Aquí no
          se improvisa: se diseña, se mide y se entrega con el corazón.
        </p>
        <p className="mb-4">
          Cada corte, cada puntada y cada acabado reflejan nuestro compromiso
          por ofrecerte lo mejor. En La 16 no vendemos muebles, creamos espacios
          donde vivir mejor.
        </p>
      </section>
    </main>
  );
};
