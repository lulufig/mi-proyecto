import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../components/styles/Footer.css';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

function Footer() {
  // Hook para animaciones al hacer scroll
  useScrollReveal('.animada');
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo + Info */}
        <div className="footer-brand">
          <h2 className="footer-logo">Kaldi Café</h2>
          <p className="footer-tagline">El arte del café en cada taza</p>
          <div className="footer-contact">
            <p><FaMapMarkerAlt /> Av. Café 123, Col. Centro</p>
            <p><FaClock /> Lun-Dom: 7:00 AM - 9:00 PM</p>
            <p><FaPhone /> <a href="tel:+5512345678">(55) 1234-5678</a></p>
          </div>
        </div>

        {/* Enlaces */}
        <div className="footer-links">
          <h3>Navegación</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#menu">Menú</a></li>
            <li><a href="#historia">Historia</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Recibe noticias y ofertas</p>
          <form 
            className="newsletter-form" 
            onSubmit={(e) => e.preventDefault()}
            aria-label="Formulario de suscripción al newsletter"
          >
            <label htmlFor="newsletter-email" className="sr-only">Email para newsletter</label>
            <input 
              type="email" 
              id="newsletter-email"
              name="newsletter-email"
              placeholder="Tu email" 
              aria-label="Email para newsletter"
              required
            />
            <button type="submit" aria-label="Suscribirse al newsletter">
              <FaEnvelope aria-hidden="true" />
            </button>
          </form>
        </div>

        {/* Redes sociales */}
        <div className="footer-social">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

        <div className="footer-bottom">
        <div className="divider"></div>
        <div className="bottom-content">
          <p>&copy; {new Date().getFullYear()} Kaldi Café. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;