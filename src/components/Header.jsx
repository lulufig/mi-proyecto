import React, { useState, useEffect } from 'react';
import { FaCoffee } from 'react-icons/fa';
import '../components/styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        
        {/* Logo */}
        {/* <div className="header-logo">
          <a href="#inicio">Kaldi Café</a>
        </div> */}
          <div className="logo">
            <FaCoffee className="logo-icon" />         
          </div>

        {/* Navegación Desktop */}
        <nav className="header-nav">
          <a href="#inicio">Inicio</a>
          <a href="#menu">Menú</a>
          <a href="#historia">Historia</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* Botón Hamburguesa */}
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Menú Mobile */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <a href="#inicio" onClick={closeMenu}>Inicio</a>
        <a href="#menu" onClick={closeMenu}>Menú</a>
        <a href="#historia" onClick={closeMenu}>Historia</a>
        <a href="#contacto" onClick={closeMenu}>Contacto</a>
      </div>
    </header>
  );
};

export default Header;