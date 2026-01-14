import React, { useState, useRef, useMemo, useCallback } from 'react';
import menuData from '../data/menuData.json';
import useScrollReveal from '../hooks/useScrollReveal';
import '../components/styles/Menu.css';

function Menu() {
  // Hook para animaciones al hacer scroll
  useScrollReveal('.animada', 0.3);
  

  const [selectedCategory, setSelectedCategory] = useState('all');
  const scrollContainerRef = useRef(null);

  // Filtrar ítems según categoría seleccionada (memoizado)
  const filteredItems = useMemo(() => {
    return selectedCategory === 'all'
      ? menuData.flatMap(category => category.items)
      : menuData.find(category => category.categoria === selectedCategory)?.items || [];
  }, [selectedCategory]);

  // Función para desplazar el contenedor (memoizada)
  const scroll = useCallback((direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }, []);

  // Handlers memoizados para categorías
  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  return (
    <section className="menu-section" id="menu">
      
      <div className="menu-container">
        {/* Título */}
        <div className="menu-header animada fade-in">
          <h2>Nuestro Menú</h2>
          <div className="menu-line"></div>
        </div>

        {/* Categorías */}
        <div className="menu-categories">
          <button
            className={selectedCategory === 'all' ? 'active' : ''}
            onClick={() => handleCategoryChange('all')}
          >
            Todos
          </button>
          {menuData.map(category => (
            <button
              key={category.categoria}
              className={selectedCategory === category.categoria ? 'active' : ''}
              onClick={() => handleCategoryChange(category.categoria)}
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
            type="button"
          >
            ←
          </button>

          {/* Contenedor desplazable */}
          <div className="menu-carousel" ref={scrollContainerRef}>
            {filteredItems.map((item) => (
              <article key={`${item.nombre}-${item.image}`} className="menu-item">
                
                {/* Imagen */}
                <div className="item-image">
                  <img
                    src={item.image}
                    alt={item.nombre}
                    loading="lazy"
                    width="400"
                    height="400"
                    decoding="async"
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
            type="button"
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