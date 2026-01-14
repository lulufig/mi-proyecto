# ☕ Kaldi Café - Sitio Web

Sitio web minimalista y elegante para Kaldi Café, una cafetería artesanal que celebra el arte del café en cada taza.

## 🌟 Características

- ✨ **Diseño Minimalista**: Interfaz limpia y elegante con estética luxury
- 📱 **Totalmente Responsive**: Optimizado para móviles, tablets y desktop
- 🎨 **Animaciones Suaves**: Efectos de scroll reveal y transiciones fluidas
- 🍽️ **Menú Interactivo**: Carrusel desplazable con filtros por categorías
- 🗺️ **Mapa Integrado**: Ubicación con Google Maps y tarjeta flotante
- 📧 **Formularios Validados**: Reservas y contacto con validación en tiempo real
- 🖼️ **Galería de Imágenes**: Carrusel infinito con lightbox interactivo
- ⚡ **Optimizado para Performance**: Imágenes WebP, code splitting, lazy loading
- ♿ **Accesible**: ARIA labels, skip links, contraste adecuado
- 🔍 **SEO Optimizado**: Meta tags, sitemap.xml, robots.txt

## 🛠️ Tecnologías Utilizadas

- **React** 19.1.1
- **Vite** 7.1.6 - Build tool ultra rápido
- **React Icons** 5.5.0 - Iconografía
- **CSS3** - Estilos personalizados con variables CSS
- **Google Maps API** - Integración de mapas
- **ESLint** - Linting y calidad de código

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

## 🚀 Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/lulufig/mi-proyecto.git
cd vite-proyecto
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
vite-proyecto/
├── public/                    # Archivos estáticos
│   ├── assets/               # Imágenes optimizadas (WebP)
│   ├── robots.txt            # Configuración SEO
│   └── sitemap.xml           # Mapa del sitio
├── src/
│   ├── components/           # Componentes React
│   │   ├── AboutUs.jsx       # Sección "Sobre Nosotros"
│   │   ├── ContactMap.jsx    # Mapa de contacto
│   │   ├── ErrorBoundary.jsx # Manejo de errores
│   │   ├── Footer.jsx        # Pie de página
│   │   ├── Gallery.jsx       # Galería de imágenes
│   │   ├── Header.jsx        # Navegación principal
│   │   ├── Main.jsx          # Hero/Inicio
│   │   ├── Menu.jsx          # Menú de productos
│   │   ├── Reservation.jsx   # Formularios de reserva
│   │   └── styles/           # CSS de componentes
│   │       ├── AboutUs.css
│   │       ├── ContactMap.css
│   │       ├── ErrorBoundary.css
│   │       ├── Footer.css
│   │       ├── Gallery.css
│   │       ├── Header.css
│   │       ├── Main.css
│   │       ├── Menu.css
│   │       └── Reservation.css
│   ├── data/
│   │   └── menuData.json     # Datos del menú
│   ├── hooks/
│   │   └── useScrollReveal.jsx  # Hook para animaciones
│   ├── utils/
│   │   └── validation.js     # Utilidades de validación
│   ├── App.jsx               # Componente principal
│   ├── index.css             # Estilos globales y variables CSS
│   └── main.jsx              # Punto de entrada
├── index.html                # HTML principal
├── vite.config.js            # Configuración de Vite
├── package.json
└── README.md
```

## 🎨 Secciones del Sitio

### 1. Hero/Inicio
- Diseño minimalista con imágenes decorativas
- Título principal con tipografía elegante
- Botón de navegación a reservas
- Indicador de scroll animado
- Totalmente responsive con layout adaptativo

### 2. Menú
- Carrusel horizontal desplazable con navegación
- Filtros por categorías (Cafés, Postres, etc.)
- Tarjetas de productos con imágenes optimizadas
- Badges de productos populares
- Efectos hover elegantes

### 3. Sobre Nosotros
- Timeline vertical interactiva
- Animaciones de scroll reveal
- Diseño alternado izquierda/derecha
- Puntos de marcador animados

### 4. Galería
- Carrusel infinito automático
- Lightbox para ver imágenes ampliadas
- Efectos hover con overlay
- Máscara de degradado en bordes

### 5. Reservas & Contacto
- Formulario de reservas con validación
- Formulario de contacto separado
- Validación en tiempo real (onChange y onBlur)
- Mensajes de error accesibles
- Modales de confirmación elegantes

### 6. Mapa
- Google Maps integrado con filtros minimalistas
- Tarjeta flotante con información de contacto
- Botón "Cómo llegar" integrado
- Diseño responsive con overlay adaptativo

### 7. Footer
- Información de contacto completa
- Enlaces de navegación
- Formulario de newsletter
- Redes sociales con iconos
- Diseño responsive en grid

## 🎯 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción (optimizado)
npm run build

# Preview del build
npm run preview

# Lint y corrección de código
npm run lint
```

## 🌐 Build para Producción

El build está optimizado con:
- Code splitting automático
- Minificación con Terser
- Eliminación de console.log en producción
- Optimización de imágenes
- Compresión de assets

```bash
# Crear build optimizado
npm run build

# La carpeta 'dist' contendrá los archivos listos para producción
```

## 🎨 Personalización

### Variables CSS
Edita las variables CSS en `src/index.css`:

```css
:root {
  /* Fondos */
  --color-bg-light: #F9F7F4;
  --color-bg-white: #FFFFFF;
  --color-bg-neutral: #F2EFE9;

  /* Colores principales */
  --color-espresso: #2C1E16;
  --color-gold: #C5A059;

  /* Textos */
  --color-text: #2C1E16;
  --color-text-light: #6E6E6E;
  --color-text-muted: #9CA3AF;

  /* Fuentes */
  --font-serif: 'Playfair Display', serif;
  --font-sans: 'Montserrat', sans-serif;
}
```

### Contenido del Menú
Edita el archivo `src/data/menuData.json` para actualizar productos y categorías.

### Imágenes
- Coloca tus imágenes optimizadas en formato WebP en `public/`
- Usa rutas relativas desde `/` (ej: `/taza-cafe-espresso.webp`)
- Las imágenes decorativas están en `public/assets/`

## ⚡ Optimizaciones Implementadas

- ✅ **Imágenes WebP**: Formato moderno y optimizado
- ✅ **Lazy Loading**: Carga diferida de imágenes
- ✅ **Code Splitting**: Separación de código por chunks
- ✅ **Font Loading**: Preconnect y font-display: swap
- ✅ **Minificación**: Terser con eliminación de console.log
- ✅ **SEO**: Meta tags, sitemap.xml, robots.txt
- ✅ **Accesibilidad**: ARIA labels, skip links, contraste WCAG

## 📱 Responsive Design

El sitio está completamente optimizado para:
- 📱 **Móviles**: 360px - 480px
- 📱 **Tablets pequeñas**: 481px - 768px
- 💻 **Tablets**: 769px - 992px
- 💻 **Laptops**: 993px - 1200px
- 🖥️ **Desktop**: 1201px+

## 🔧 Hooks Personalizados

### useScrollReveal
Hook para animaciones al hacer scroll:
```jsx
import useScrollReveal from '../hooks/useScrollReveal';

// En el componente
useScrollReveal('.animada', 0.7);
```

## 🐛 Troubleshooting

### Las imágenes no cargan
- Verifica que las imágenes estén en `public/`
- Usa rutas desde `/` (ej: `/taza-cafe-espresso.webp`)
- Verifica que los archivos tengan extensión `.webp`

### Las animaciones no funcionan
- Asegúrate de tener `useScrollReveal` importado en los componentes
- Verifica que los elementos tengan la clase `.animada`
- Revisa la consola del navegador para errores

### Error de módulos
```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

### Problemas de build
```bash
# Limpia el cache de Vite
rm -rf node_modules/.vite
npm run build
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
# Arrastra la carpeta 'dist' a Netlify o conecta el repositorio
```

### GitHub Pages
```bash
npm run build
# Sube la carpeta 'dist' a la rama gh-pages
```

## 📱 Testing

### Testing Manual
1. Abre en diferentes navegadores (Chrome, Firefox, Safari, Edge)
2. Prueba en diferentes tamaños de pantalla (360px a 1920px+)
3. Verifica que todos los links funcionen
4. Prueba los formularios con validación
5. Verifica que las imágenes carguen correctamente
6. Prueba las animaciones de scroll
7. Verifica accesibilidad con lectores de pantalla

### Herramientas Recomendadas
- **Chrome DevTools** - Modo responsive y Lighthouse
- **Lighthouse** - Auditoría de rendimiento, SEO y accesibilidad
- **GTmetrix** - Análisis de velocidad
- **BrowserStack** - Testing cross-browser
- **WAVE** - Evaluación de accesibilidad

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

### Guía de Estilo
- Usa componentes funcionales con hooks
- Sigue las convenciones de nombres (PascalCase para componentes)
- Mantén los comentarios de sección en CSS
- Usa TypeScript cuando sea posible
- Escribe código accesible y semántico

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👤 Autores

- GitHub: [@lulufig](https://github.com/lulufig) | [@soffmedina](https://github.com/soffmedina)
- Email: flourdes098@gmail.com | sm911682@gmail.com

---

⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!

📧 ¿Preguntas? Contacta a: flourdes098@gmail.com, medinasofia@gmail.com
