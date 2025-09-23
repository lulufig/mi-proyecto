import React from 'react'
import logo from '../assets/logo-kaldi.png'
import '../styles/Header.css'


const Header = () => {
  return (
    <header className='kaldi-header' role='banner' aria-label='Kaldi Cafe header'>
      <div className='kaldi-container'>
        <div className='kaldi-brand'>
          <img src={logo} alt="Kaldi Cafe logo" className='kaldi-logo' /> 
          <h1 className='kaldi-title'>Kaldi Café</h1>
        </div>

        <nav className='kaldi-nav' role='navigation' aria-label='Menu principal'>
          <ul>
            <li><a href="#inicio">INICIO</a></li>
            <li><a href="#menu">MENU</a></li>
            <li><a href="#historia">HISTORIA</a></li>
            <li><a href="#contacto">CONTACTO</a></li>
          </ul>
        </nav>

      </div>

    </header>
  ); 
}

export default Header
