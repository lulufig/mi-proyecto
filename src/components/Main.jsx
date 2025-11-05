import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../components/styles/Main.css';

const Main = () => {
  // Hook para animaciones al hacer scroll
  useScrollReveal( '.animada', 0.7);
  
  // Función para hacer scroll suave a una sección
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <main className="main">
      <section className="hero" id="inicio">
        {/* Contenido superpuesto */}
        <div className="hero-content animada zoom-in">
          <div className="hero-title-group">
            <h1 className="hero-title">
              <span className="title-line1">KALDI</span>
              <br />
              <span className="title-line2">CAFÉ</span>
            </h1>
          </div>

          <hr className="hero-divider" />

          <p className="hero-subtitle">
            Descubre el sabor auténtico del café artesanal en un ambiente único.
          </p>

          <div className="hero-buttons">
            <button 
              onClick={() => scrollToSection('contacto')}
              className="btn"
            >
              Reservar ahora
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="btn"
            >
              Ver menú
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
