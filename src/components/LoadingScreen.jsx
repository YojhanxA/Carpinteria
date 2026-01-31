import React from 'react';
import '../styles/loading.css'; // Asegúrate de crear este archivo CSS para los estilos
const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        {/* Tu Logo */}
        <img src="/Favicon.png" alt="Carpintería La 16" className="loading-logo" />
        
        {/* Texto Elegante */}
        <h2 className="loading-title">CARPINTERÍA LA 16</h2>
        <p className="loading-subtitle">Diseño y Estética</p>
        
        {/* Barra de Progreso Estilo Madera */}
        <div className="progress-container">
          <div className="progress-bar"></div>
        </div>
        
        <span className="loading-text">PREPARANDO TALLER...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;