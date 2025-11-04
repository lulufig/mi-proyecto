import React, { useState } from 'react';
import menuData from '../data/menuData.json';
import '../components/styles/Menu.css';

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filtrar ítems según categoría seleccionada
  const filteredItems = selectedCategory === 'all'
    ? menuData.flatMap(category => category.items)
    : menuData.find(category => category.categoria === selectedCategory)?.items || [];

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

        {/* Grid de Productos */}
        <div className="menu-grid">
          {filteredItems.map((item, index) => (
            <article key={index} className="menu-item animate-on-scroll fade-up">
              
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

      </div>
    </section>
  );
}

export default Menu;