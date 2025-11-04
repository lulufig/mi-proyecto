import React, { useState } from 'react';
import menuData from '../data/menuData.json';
import '../components/styles/Menu.css';

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const menuItemsRef = useRef(null); // Referencia al contenedor de ítems para desplazamiento

  // Filtrar ítems según categoría seleccionada
  const filteredItems = selectedCategory === 'all'
    ? menuData.flatMap(category => category.items)
    : menuData.find(category => category.categoria === selectedCategory)?.items || [];

  // Función para desplazar el contenedor
  const scroll = (direction) => {
    if (menuItemsRef.current) {
      const scrollAmount = 300; // Cantidad de píxeles a desplazar
      menuItemsRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <section className="menu" aria-label="Menú digital de Kaldi Café">
      <h2>Nuestro Menú</h2>
      <div className="menu-categories">
        <button
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => setSelectedCategory('all')}
          aria-pressed={selectedCategory === 'all'}
        >
          Todos
        </button>
        {menuData.map(category => (
          <button
            key={category.categoria}
            className={selectedCategory === category.categoria ? 'active' : ''}
            onClick={() => setSelectedCategory(category.categoria)}
            aria-pressed={selectedCategory === category.categoria}
          >
            {category.categoria}
          </button>
        ))}
      </div>
      <div className="menu-navigation">
        <button
          className="nav-button left"
          onClick={() => scroll('left')}
          aria-label="Desplazar hacia la izquierda"
        >
          ←
        </button>
        <div className="menu-items" ref={menuItemsRef}>
          {filteredItems.map((item, index) => (
            <article key={index} className="menu-item" tabIndex="0">
              {item.popular && <span className="popular-badge">Popular</span>}
              <img
                src={item.image}
                alt={`Imagen de ${item.nombre}`}
                className="menu-item-img"
              />
              <h3>{item.nombre}</h3>
              <p className="price">${item.precio.toFixed(2)}</p>
              <p>{item.descripcion}</p>
            </article>
          ))}
        </div>
        <button
          className="nav-button right"
          onClick={() => scroll('right')}
          aria-label="Desplazar hacia la derecha"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default Menu;