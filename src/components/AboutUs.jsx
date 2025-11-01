import React from 'react';
import '../components/styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us" aria-label="Sección Sobre Nosotros">
      {/* Fondo con overlay */}
      <div className="about-us-bg"></div>

      <div className="about-us-container">
        <div className="about-us-content">
          <h2 className="about-us-title">Sobre Nosotros</h2>
          <div className="about-us-divider"></div>

          <p className="about-us-description">
            En <strong>Kaldi Café</strong> celebramos el arte del café artesanal. Nuestra historia comienza con una pasión por los sabores auténticos y los espacios que invitan a quedarse. Desde nuestros inicios, nos propusimos crear una cafetería donde cada taza cuente una historia, y cada visita se sienta como volver a casa.
          </p>

          <p className="about-us-description">
            Valoramos la calidad, la calidez y la comunidad. Usamos granos seleccionados, técnicas tradicionales y un ambiente diseñado para el disfrute. Creemos en el poder de una buena conversación, en la pausa que regala el aroma del café, y en los pequeños detalles que hacen grande una experiencia.
          </p>

          <div className="about-us-divider"></div>

          {/* Galería */}
          <div className="about-us-gallery">
            <div className="gallery-item">
              <img 
                src="/lugar-cafe.jpg" 
                alt="Interior de Kaldi Café" 
                loading="lazy"
              />
              <p className="gallery-caption">Interior de Kaldi Café para que te sientas en casa</p>
            </div>
            <div className="gallery-item">
              <img 
                src="/barista.jpg" 
                alt="Preparación de café artesanal" 
                loading="lazy"
              />
              <p className="gallery-caption">Preparación de café artesanal con dedicación</p>
            </div>
            <div className="gallery-item">
              <img 
                src="/cafe-sol.jpg" 
                alt="Café con luz natural" 
                loading="lazy"
              />
              <p className="gallery-caption">Café con un toque natural para comenzar tu día</p>
            </div>
          </div>

          <blockquote className="about-us-quote">
            "Cada taza cuenta una historia, cada sorbo una conexión."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;