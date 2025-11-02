import React from 'react';
import '../components/styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us" aria-label="Sección Sobre Nosotros">
      <div className="about-us-overlay"></div>

      <div className="about-us-content">
        <h2 className="about-us-title">Sobre Nosotros</h2>
        <div className="about-us-divider"></div>

        <p className="about-us-description">
          En <strong>Kaldi Café</strong> celebramos el arte del café artesanal. Nuestra historia comienza con una pasión por los sabores auténticos y los espacios que invitan a quedarse. Desde nuestros inicios, nos propusimos crear una cafetería donde cada taza cuente una historia, y cada visita se sienta como volver a casa.
        </p>

        <p className="about-us-description">
          Valoramos la calidad, la calidez y la comunidad. Usamos granos seleccionados, técnicas tradicionales y un ambiente diseñado para el disfrute. Creemos en el poder de una buena comunicación, en la pausa que regala el aroma del café, y en los pequeños detalles que hacen grande una experiencia.
        </p>

        <div className="about-us-divider"></div>

        <div className="about-us-gallery">
          <div className="gallery-item">
            <img src="/lugar-cafe.jpg" alt="Interior de Kaldi Café" />
            <p className="gallery-caption">Interior de Kaldi Café para que te sientas en casa</p>
          </div>

          <div className="gallery-item">
            <img src="/barista.jpg" alt="Preparación de café artesanal" />
            <p className="gallery-caption">Preparación de café artesanal con dedicación</p>
          </div>

          <div className="gallery-item">
            <img src="/cafe-sol.jpg" alt="Café con un toque natural para comenzar tu día" />
            <p className="gallery-caption">Café con un toque natural para comenzar tu día</p>
          </div>
        </div>

        <p className="about-us-quote">“Cada taza cuenta una historia, cada sorbo una conexión.”</p>
      </div>
    </section>
  );
};

export default AboutUs;