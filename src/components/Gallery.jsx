import React, { useState, useEffect, useMemo, useCallback } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../components/styles/Gallery.css';

const Gallery = () => {
  // Hook para animaciones (solo para el título, el carrusel se anima solo)
  useScrollReveal('.animada', 0.3);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Tus imágenes originales
  const originalImages = useMemo(() => [
    { src: '/cartelcoffekaldi.png', alt: 'Cartel Kaldi' },
    { src: '/cafe-frio.png', alt: 'Café Helado' },
    { src: '/croissant-2.png', alt: 'Croissant' },
    { src: '/exterior.png', alt: 'Fachada' },
    { src: '/muffins.png', alt: 'Muffins' },
    { src: '/interior-cafeteria1.png', alt: 'Interior' },
    { src: '/barista-2.png', alt: 'Barista' },
    { src: '/tortas-fac.png', alt: 'Pasteles' },
    { src: '/caja-coffekaldi.png', alt: 'Menú' }
  ], []);

  // Duplicamos las imágenes para el efecto infinito (Loop) - memoizado
  const carouselImages = useMemo(() => [...originalImages, ...originalImages], [originalImages]);

  const openLightbox = useCallback((img) => {
    setSelectedImage(img);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }, []);

  // Lógica de teclado para el lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isLightboxOpen, closeLightbox]);

  return (
    <section className="gallery-section" id="galeria">
      
      {/* Header */}
      <div className="gallery-header animada fade-in">
        <h2 className="gallery-title">Instantes</h2>
        <p className="gallery-subtitle">MOMENTOS QUE PERDURAN</p>
      </div>

      {/* Contenedor del Carrusel */}
      <div className="carousel-container">
        <div className="carousel-track">
          {carouselImages.map((img, idx) => (
            <div 
              className="carousel-item" 
              key={`${img.src}-${idx}`} // Key única
              onClick={() => openLightbox(img)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="carousel-img"
                loading="lazy" 
              />
              <div className="carousel-overlay">
                <span>Ver Imagen</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox (Visor) */}
      {isLightboxOpen && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Visor de imagen">
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Cerrar visor de imagen">&times;</button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage?.src} 
              alt={selectedImage?.alt} 
              className="lightbox-image"
            />
            <p className="lightbox-caption">{selectedImage?.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;