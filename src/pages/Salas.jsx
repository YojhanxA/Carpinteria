import React from 'react';
import { SalasGaleComponent } from '../components/SalaGal';

const Salas = () => {
    return (
        <main className="container py-5">
            <div className="container py-5">
                <h2 className="mb-4">Nuestros diseños en salas</h2>
            </div>

            <section>
                <SalasGaleComponent />
            </section>

        </main>
    );
};

export default Salas;

