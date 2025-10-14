import React from 'react';  
import { SofasGalComponent } from '../components/SofasGal';
const Sofas = () => {
    return (
       <main className="container py-5">
                   <div className="container py-5">
                       <h2 className="mb-4">Nuestros diseños en sofas</h2>
                   </div>
       
                   <section>
                       <SofasGalComponent />
                   </section>
       
               </main>

    );
};

export default Sofas;
