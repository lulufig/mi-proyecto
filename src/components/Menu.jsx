import React, {useState} from "react";
import menuData from '../data/menuData.json';
import '../components/styles/Menu.css';

function Menu() {
  // Estado para la categoría seleccionada (por defecto, muestra todos)
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filtrar ítems según categoría seleccionada
  const filteredItems = selectedCategory === 'all'
    ? menuData.flatMap(category => category.items)
    : menuData.find(category => category.categoria === selectedCategory)?.items || [];

  return (
    <section className="menu" aria-label="Menú digital de Kaldi Café">
      <h2>Nuestro Menú</h2>
      {/* Botones para seleccionar categoría */}
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
      {/* Grid de cards */}
      <div className="menu-items">
        {filteredItems.map((item, index) => (
          <article key={index} className="menu-item">
            <h3>{item.nombre}</h3>
            <p className="price">${item.precio.toFixed(2)}</p>
            <p>{item.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Menu;