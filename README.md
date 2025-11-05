# ☕ Kaldi Café - Sitio Web

Sitio web minimalista y elegante para Kaldi Café, una cafetería artesanal que celebra el arte del café en cada taza.

![Kaldi Café](./public/screenshot.png)

## 🌟 Características

- ✨ **Diseño Minimalista**: Interfaz limpia y elegante
- 📱 **Responsive**: Adaptado para móviles, tablets y desktop
- 🎨 **Animaciones Suaves**: Efectos al hacer scroll
- 🍽️ **Menú Interactivo**: Carrusel desplazable con categorías
- 🗺️ **Mapa Integrado**: Ubicación con Google Maps
- 📧 **Formularios de Contacto**: Reservas y newsletter
- 🖼️ **Galería de Imágenes**: Lightbox interactivo

## 🛠️ Tecnologías Utilizadas

- **React** 18.x
- **Vite** - Build tool
- **React Icons** - Iconografía
- **CSS3** - Estilos personalizados
- **Google Maps API** - Integración de mapas

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

## 🚀 Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/lulufig/mi-proyecto.git
cd kaldi-cafe
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre tu navegador**
```
http://localhost:5173
```

## 📁 Estructura del Proyecto

```
mi-proyecto/
├── public/               # Archivos estáticos (imágenes)
├── src/
│   ├── assets/          # Assets del proyecto
│   ├── components/      # Componentes React
│   │   ├── Header.jsx
│   │   ├── Main.jsx
│   │   ├── Menu.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Gallery.jsx
│   │   ├── Reservation.jsx
│   │   ├── ContactMap.jsx
│   │   ├── Footer.jsx
│   │   └── styles/      # CSS de componentes
│   ├── data/
|   |── hooks/             # Datos del menú (JSON)
│   ├── App.jsx          # Componente principal
│   ├── index.css        # Estilos globales
│   └── main.jsx
|── index.html          # Punto de entrada
├── package.json
└── README.md
```

## 🎨 Secciones del Sitio

### 1. Hero/Inicio
- Imagen de fondo full-screen
- Título principal animado
- Botones de navegación

### 2. Menú
- Carrusel horizontal desplazable
- Filtros por categorías (Cafés, Postres, etc.)
- Tarjetas de productos con imágenes

### 3. Sobre Nosotros
- Historia de la cafetería
- Valores de la marca
- Diseño minimalista

### 4. Galería
- Grid de imágenes responsive
- Lightbox para ver imágenes ampliadas
- Efectos hover

### 5. Reservas & Contacto
- Formulario de reservas
- Formulario de contacto
- Validación de campos

### 6. Mapa
- Google Maps integrado
- Información de ubicación
- Botón "Cómo llegar"

### 7. Footer
- Información de contacto
- Enlaces de navegación
- Newsletter
- Redes sociales

## 🎯 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Lint
npm run lint
```

## 🌐 Build para Producción

```bash
# Crear build optimizado
npm run build

# La carpeta 'dist' contendrá los archivos listos para producción
```

## 📦 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta 'dist' a Netlify
```

### GitHub Pages
```bash
npm run build
# Sube la carpeta 'dist' a la rama gh-pages
```

## 🎨 Personalización

### Colores
Edita las variables CSS en `src/index.css`:
```css
:root {
  --color-primary: #2e1f17;
  --color-secondary: #5a5a5a;
  --color-accent: #b8734e;
  --color-bg: #fafafa;
}
```

### Contenido del Menú
Edita el archivo `src/data/menuData.json`

### Imágenes
Coloca tus imágenes en la carpeta `public/`

## 🐛 Troubleshooting

### Las imágenes no cargan
- Verifica que las imágenes estén en `public/`
- No uses el prefijo `/public/` en las rutas

### Las animaciones no funcionan
- Asegúrate de tener `ScrollAnimations.jsx` importado en `App.jsx`
- Verifica que los estilos de animación estén en `index.css`

### Error de módulos
```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

## 📱 Testing

### Testing Manual
1. Abre en diferentes navegadores (Chrome, Firefox, Safari, Edge)
2. Prueba en diferentes tamaños de pantalla
3. Verifica que todos los links funcionen
4. Prueba los formularios
5. Verifica que las imágenes carguen

### Herramientas Recomendadas
- **Chrome DevTools** - Modo responsive
- **Lighthouse** - Auditoría de rendimiento
- **GTmetrix** - Análisis de velocidad
- **BrowserStack** - Testing cross-browser

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👤 Autores


- GitHub: [@lulufig](https://github.com/lulufig) | [@soffmedina](https://github.com/soffmedina)
- Email: flourdes098@gmail.com | sm911682@gmail.com



---

⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!

📧 ¿Preguntas? Contacta a: flourdes098@gmail.com, medinasofia@gmail.com
