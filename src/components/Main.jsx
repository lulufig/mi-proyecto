import React from 'react'
import '../components/styles/Main.css'

const Main = () => {
  return (
    <main className='main'>
      <section className='hero'>

        {/*Contenido superpuesto */}
        <div className='hero-content'>
          <h2 className='hero-subtitle'>Descubre el sabor autentico del cafe artesanal en un ambiente unico.</h2>

          <div className='hero-buttons'>
            <a href='#reservas' className='btn btn-primary'>Reservar ahora</a>
            <a href='#menu' className='btn btn-secondary'>Ver menú</a>
          </div>
        </div>
        
      </section>
      

    </main>
  );
}

/*Interior acogedor de Coffee Kaldi con aroma a cafe recien hecho*/

export default Main
