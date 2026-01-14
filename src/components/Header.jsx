import React, { useState, useEffect, useRef } from 'react';
import { FaCoffee } from 'react-icons/fa';
import '../components/styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleScrollRef = useRef(null);

  useEffect(() => {
    // Usar useRef para mantener la referencia estable del handler
    handleScrollRef.current = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleScroll = handleScrollRef.current;
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        
     
          <div className="logo">
            <FaCoffee className="logo-icon" />         
          </div>

        {/* Navegación Desktop */}
        <nav className="header-nav" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#menu">Menú</a>
          <a href="#historia">Historia</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* Botón Hamburguesa */}
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

      </div>

      {/* Menú Mobile */}
      <nav 
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'active' : ''}`}
        aria-label="Menú de navegación móvil"
        aria-hidden={!menuOpen}
      >
        <a href="#inicio" onClick={closeMenu}>Inicio</a>
        <a href="#menu" onClick={closeMenu}>Menú</a>
        <a href="#historia" onClick={closeMenu}>Historia</a>
        <a href="#contacto" onClick={closeMenu}>Contacto</a>
      </nav>
    </header>
  );
};

export default Header;