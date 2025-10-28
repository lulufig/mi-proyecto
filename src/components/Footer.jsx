import React from 'react';
import '../components/styles/Footer.css';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPhone,
  FaEnvelope,
  FaCoffee,
  FaArrowUp
} from 'react-icons/fa';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">

        {/* Logo + Info */}
        <div className="footer-brand">
          <div className="logo">
            <FaCoffee className="logo-icon" />
            <h2>Kaldi Café</h2>
          </div>
          <p className="tagline">Donde el café es arte.</p>
          <div className="contact-info">
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
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#historia">Historia</a></li>
          </ul>
        </div>

        {/* Newsletter MEJORADO */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Recibe ofertas y nuevos sabores</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-wrapper">
              <input 
                type="email" 
                placeholder="Tu email" 
                aria-label="Ingresa tu email"
                required
              />
              <button type="submit" aria-label="Suscribirse al newsletter">
                <FaEnvelope />
              </button>
            </div>
          </form>
        </div>

        {/* Redes sociales */}
        <div className="footer-social">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      {/* Bottom CENTRADO */}
      <div className="footer-bottom">
        <div className="divider"></div>
        <div className="bottom-content">
          <p>&copy; {new Date().getFullYear()} Kaldi Café. Hecho con <span className="heart">amor</span> y café.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;