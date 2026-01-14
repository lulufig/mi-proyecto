import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../components/styles/AboutUs.css';

const AboutUs = () => {
  // Activamos el hook para las clases .animada y .timeline-item
  useScrollReveal('.animada', 0.3);
  useScrollReveal('.timeline-item', 0.2); // Umbral bajo para que aparezcan rápido

  const timelineEvents = [
    {
      year: '2020',
      title: 'El Origen',
      desc: 'Nace la idea en un viaje a Italia, descubriendo el verdadero espresso.'
    },
    {
      year: '2022',
      title: 'Primera Taza',
      desc: 'Abrimos nuestras puertas en el barrio con una máquina y mucha pasión.'
    },
    {
      year: '2024',
      title: 'Tostadero Propio',
      desc: 'Comenzamos a tostar nuestros granos para garantizar la frescura perfecta.'
    },
    {
      year: '2026',
      title: 'Kaldi Hoy',
      desc: 'Un punto de referencia cultural y gastronómico para la comunidad.'
    }
  ];

  return (
    <section className="about-section" id="historia">
      <div className="about-container">
        
        {/* Título */}
        <div className="about-header animada fade-in">
          <h2 className="about-title">Nuestra Historia</h2>
          <div className="title-line-vertical"></div>
        </div>

        {/* --- LÍNEA DE TIEMPO VERTICAL --- */}
        <div className="timeline-wrapper">
          
          {/* La Línea Central (Se dibuja sola con CSS) */}
          <div className="timeline-line-center animada height-grow"></div>

          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              {/* Contenido (Texto) */}
              <div className="timeline-content">
                <span className="timeline-year">{event.year}</span>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-desc">{event.desc}</p>
              </div>

              {/* El Punto en el centro */}
              <div className="timeline-dot"></div>
            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
};

export default AboutUs;