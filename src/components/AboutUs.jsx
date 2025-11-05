import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../components/styles/AboutUs.css';

const AboutUs = () => {
  // Hook para animaciones al hacer scroll
  useScrollReveal( '.animada', 0.4 );
  return (
    <section className="about-section" id="historia">
      
      <div className="about-container">
        
        {/* Título Principal */}
        <h2 className="about-title animada zoom-in ">Sobre Nosotros</h2>
        <div className="title-underline animada zoom-in"></div>

        {/* Contenido Principal */}
        <div className="about-content animada slide-up">
          
          <div className="about-text">
            <p className="intro-paragraph">
              En <strong>Kaldi Café</strong> celebramos el arte del café artesanal. 
              Nuestra historia comienza con una pasión por los sabores auténticos y 
              los espacios que invitan a quedarse.
            </p>
            
            <p>
              Desde nuestros inicios, nos propusimos crear una cafetería donde cada 
              taza cuente una historia, y cada visita se sienta como volver a casa. 
              Valoramos la calidad, la calidez y la comunidad.
            </p>

            <p>
              Usamos granos seleccionados, técnicas tradicionales y un ambiente 
              diseñado para el disfrute. Creemos en el poder de una buena conversación, 
              en la pausa que regala el aroma del café, y en los pequeños detalles 
              que hacen grande una experiencia.
            </p>
          </div>

          <div className="about-values animada fade-left">
            <div className="value-box">
              <h3>Nuestra Misión</h3>
              <p>
                Ofrecer una experiencia única de café artesanal en un ambiente 
                acogedor que inspire conexión y comunidad.
              </p>
            </div>

            <div className="value-box">
              <h3>Nuestros Valores</h3>
              <p>
                Calidad, autenticidad, sostenibilidad y pasión por el café y las 
                personas.
              </p>
            </div>

            <div className="value-box">
              <h3>Nuestra Visión</h3>
              <p>
                Ser el punto de encuentro favorito donde el café de calidad 
                se une con momentos memorables.
              </p>
            </div>
          </div>

        </div>

        {/* Cita Final */}
        <blockquote className="about-quote animada zoom-in">
          "Cada taza cuenta una historia, cada sorbo una conexión."
        </blockquote>

      </div>
    </section>
  );
};

export default AboutUs;