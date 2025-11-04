import React, { useState, useRef } from 'react';
import menuData from '../data/menuData.json';
import '../components/styles/Menu.css';

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const scrollContainerRef = useRef(null);

  // Filtrar ítems según categoría seleccionada
  const filteredItems = selectedCategory === 'all'
    ? menuData.flatMap(category => category.items)
    : menuData.find(category => category.categoria === selectedCategory)?.items || [];

  // Función para desplazar el contenedor
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="menu-section" id="menu">
      
      <div className="menu-container">
        
        {/* Título */}
        <div className="menu-header">
          <h2>Nuestro Menú</h2>
          <div className="menu-line"></div>
        </div>

        {/* Categorías */}
        <div className="menu-categories">
          <button
            className={selectedCategory === 'all' ? 'active' : ''}
            onClick={() => setSelectedCategory('all')}
          >
            Todos
          </button>
          {menuData.map(category => (
            <button
              key={category.categoria}
              className={selectedCategory === category.categoria ? 'active' : ''}
              onClick={() => setSelectedCategory(category.categoria)}
            >
              {category.categoria}
            </button>
          ))}
        </div>

        {/* Carrusel con botones de navegación */}
        <div className="menu-carousel-wrapper">
          
          {/* Botón Izquierda */}
          <button 
            className="carousel-btn carousel-btn-left"
            onClick={() => scroll('left')}
            aria-label="Desplazar hacia la izquierda"
          >
            ←
          </button>

          {/* Contenedor desplazable */}
          <div className="menu-carousel" ref={scrollContainerRef}>
            {filteredItems.map((item, index) => (
              <article key={index} className="menu-item">
                
                {/* Imagen */}
                <div className="item-image">
                  <img
                    src={item.image}
                    alt={item.nombre}
                    loading="lazy"
                  />
                  {item.popular && <span className="item-badge">Popular</span>}
                </div>

                {/* Contenido */}
                <div className="item-content">
                  <h3 className="item-name">{item.nombre}</h3>
                  <p className="item-price">${item.precio.toFixed(2)}</p>
                  <p className="item-description">{item.descripcion}</p>
                </div>

              </article>
            ))}
          </div>

          {/* Botón Derecha */}
          <button 
            className="carousel-btn carousel-btn-right"
            onClick={() => scroll('right')}
            aria-label="Desplazar hacia la derecha"
          >
            →
          </button>

        </div>

        {/* Indicador de scroll */}
        <p className="scroll-hint">← Desliza para ver más →</p>

      </div>
    </section>
  );
}

export default Menu;