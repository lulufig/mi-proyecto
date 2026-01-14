import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Menu from './components/Menu'
import AboutUs from './components/AboutUs'
import Gallery from './components/Gallery'
import Reservation from './components/Reservation'
import ContactMap from './components/ContactMap'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'


function App () {

  return (
    <ErrorBoundary>
      {/* Skip to main content link para accesibilidad */}
      <a href="#inicio" className="skip-link" aria-label="Saltar al contenido principal">
        Saltar al contenido principal
      </a>
      <Header />
      <Main />
      <Menu />
      <AboutUs />
      <Gallery />
      <Reservation />
      <ContactMap />
      <Footer />
    </ErrorBoundary>
  )
}

export default App
