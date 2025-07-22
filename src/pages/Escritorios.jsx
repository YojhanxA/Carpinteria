import React from "react";
import { EscritoriosGaleComponent } from "../components/EscritoriosGale";

const Escritorios = () => {
    return (
        <main className="container py-5">
            <div className="container py-5">
                <h2 className="mb-4">Nuestros diseños en escritorios</h2>
            </div>
            <section>
                <EscritoriosGaleComponent />
            </section>

        </main>
    );
};



export default Escritorios;
