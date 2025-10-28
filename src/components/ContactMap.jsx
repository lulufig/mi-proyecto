import React from 'react';
import '../components/styles/ContactMap.css';

function ContactMap() {
  return (
    <div className="contact-map-wrapper">
      <iframe
        title="Ubicación de Kaldi Café"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661663385031!2d-99.1656636850527!3d19.43260798687905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8a8b8b8b8b8%3A0x9c9c9c9c9c9c9c9c!2sKaldi%20Caf%C3%A9!5e0!3m2!1ses!2smx!4v1698765432100!5m2!1ses!2smx"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* CARD CENTRADO */}
      <div className="map-overlay-card">
        <h3>Kaldi Café</h3>
        <p><strong>Dirección:</strong> Av. Café 123, Col. Centro</p>
        <p><strong>Horario:</strong> 7:00 AM - 9:00 PM</p>
        <p><strong>Tel:</strong> (55) 1234-5678</p>
        <a 
          href="https://maps.google.com/?q=Av.+Café+123,+CDMX" 
          target="_blank" 
          rel="noopener" 
          className="btn-directions"
        >
          Cómo llegar
        </a>
      </div>
    </div>
  );
}

export default ContactMap;