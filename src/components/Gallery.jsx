import React, { useState, useRef } from 'react';
import '../components/styles/Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  const images = [
    { src: '/coffessHD.png', alt: 'Taza de café con arte latte' },
    { src: '/cartelcoffekaldi.png', alt: 'Entrada con cartel Coffee Kaldi' },
    { src: '/cafe-frio.png', alt: 'Café helado con leche' },
    { src: '/croissant-2.png', alt: 'Croissant artesanal recién horneado' },
    { src: '/exterior.png', alt: 'Vista exterior del local con cartel luminoso' },
    { src: '/muffins.png', alt: 'Muffins caseros con azúcar' },
    { src: '/interior-cafeteria1.png', alt: 'Vista interior del local' },
    { src: '/barista-2.png', alt: 'Máquina de espresso profesional en barra' },
    { src: '/tortas-fac.png', alt: 'Máquina de espresso profesional en barra' },
    { src: '/caja-coffekaldi.png', alt: 'Máquina de espresso profesional en barra' }
  ];

  return (
    <section className="gallery-section" aria-label="Galería de productos y espacios">
      {/*<h2 className="gallery-title">Galería Kaldi</h2>*/}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <img
              src={img.src}
              alt={img.alt}
              className="gallery-img"
              loading="lazy"
              onClick={() => openLightbox(img)}
            />
            
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox">
          <span className="close" onClick={closeLightbox}>&times;</span>
          <img className="lightbox-img" src={selectedImage?.src} alt={selectedImage?.alt} />
        </div>
      )}
    </section>
  );
};

export default Gallery




