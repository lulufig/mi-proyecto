import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../components/styles/ContactMap.css';

function ContactMap() {
  
  useScrollReveal('.animada');

  return (
    <div className="contact-map-wrapper animada fade-in">
      <iframe
        title="Ubicación de Kaldi Café"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878894506!2d-58.38157048477038!3d-34.60373888045938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1640000000000!5m2!1ses-419!2sar"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-iframe"
      ></iframe>

      {/* CARD FLOTANTE (Estilo Dark Luxury) */}
      <div className="map-overlay-card">
        <h3>Visítanos</h3>
        <div className="card-divider"></div>
        
        <div className="card-info">
          <p className="info-label">DIRECCIÓN</p>
          <p className="info-text">Av. Café 123, Col. Centro</p>
          
          <p className="info-label">HORARIO</p>
          <p className="info-text">7:00 AM - 9:00 PM</p>
          
          <p className="info-label">CONTACTO</p>
          <p className="info-text">(55) 1234-5678</p>
        </div>

        <a 
          href="https://goo.gl/maps/PZ56Q8T6FZjxSh3w6" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-directions"
        >
          Cómo llegar
        </a>
      </div>
    </div>
  );
}

export default ContactMap;