import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../components/styles/Main.css';

const Main = () => {
  // Hook para animaciones
  useScrollReveal('.animada', 0.8);

  return (
    <main className="main">
      <section className="hero" id="inicio">
        
        {/* Imágenes Decorativas */}
        <img 
          src="/rama-de-cafe.webp" 
          alt="" 
          className="coffee-beans-left"
          loading="lazy"
          aria-hidden="true"
        />
        
        <img 
          src="/granos-de-cafe-2.webp" 
          alt="" 
          className="coffee-beans-right"
          loading="lazy"
          aria-hidden="true"
        />
        
        {/* Contenido Principal */}
        <div className="hero-content animada zoom-in">
          <h1 className="hero-title">
            <span className="title-line1">KALDI</span>
            <span className="title-line2">CAFÉ</span>
          </h1>

          <p className="hero-subtitle">
            Desde 2020. El arte del espresso.
          </p>
          
          
        </div>

        {/* Indicador de Scroll (Flecha o mouse) */}
        <div className="scroll-indicator" aria-hidden="true"></div>
      </section>
    </main>
  );
};

export default Main;