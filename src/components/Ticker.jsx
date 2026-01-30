import React from 'react';

export const Ticker = () => {
  const mensaje = "Hecha a mano con pasión y dedicación • Carpintería La 16 • Espinal - Tolima";

  return (
    <div className="ticker-wrapper">
      <div className="ticker-scroll">
        {/* Repetimos el contenido para que el bucle no tenga cortes */}
        <span>{mensaje}</span>
        <span>{mensaje}</span>
        <span>{mensaje}</span>
        <span>{mensaje}</span>
        <span>{mensaje}</span>
        <span>{mensaje}</span>
      </div>
    </div>
  );
};