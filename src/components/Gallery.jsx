import React, { useState, useEffect } from 'react';
import '../components/styles/Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: '/coffessHD.png', alt: 'Taza de café con arte latte' },
    { src: '/cartelcoffekaldi.png', alt: 'Entrada con cartel Coffee Kaldi' },
    { src: '/cafe-frio.png', alt: 'Café helado con leche' },
    { src: '/croissant-2.png', alt: 'Croissant artesanal recién horneado' },
    { src: '/exterior.png', alt: 'Vista exterior del local' },
    { src: '/muffins.png', alt: 'Muffins caseros con azúcar' },
    { src: '/interior-cafeteria1.png', alt: 'Vista interior del local' },
    { src: '/barista-2.png', alt: 'Barista preparando café' },
    { src: '/tortas-fac.png', alt: 'Exhibidor de pasteles' },
    { src: '/caja-coffekaldi.png', alt: 'Pizarra de menú Coffee Kaldi' }
  ];

  const openLightbox = (img, idx) => {
    setSelectedImage(img);
    setCurrentIndex(idx);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage(e);
      if (e.key === 'ArrowRight') nextImage(e);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isLightboxOpen, currentIndex]);

  return (
    <section className="gallery-section" id="galeria">
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div key={idx} onClick={() => openLightbox(img, idx)} style={{ cursor: 'pointer', position: 'relative' }}>
              <img 
                src={img.src} 
                alt={img.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '15px',
                  transition: 'transform 0.3s ease'
                }}
                loading="lazy"
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  borderRadius: '15px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
              >
                <span style={{ fontSize: '4rem', color: 'white' }}>🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isLightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            &times;
          </button>
          
          <button className="lightbox-prev" onClick={prevImage}>
            &#8249;
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage?.src} 
              alt={selectedImage?.alt}
              className="lightbox-image"
            />
            <p className="lightbox-caption">{selectedImage?.alt}</p>
            <span className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
          
          <button className="lightbox-next" onClick={nextImage}>
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;