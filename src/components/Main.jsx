import React from 'react'
import '../components/styles/Main.css'

const Main = () => {
  return (
    <main className='main'>
      
    <section className='hero'>
    

       {/*Contenido superpuesto */}
        <div className='hero-content'>
          <div className='hero-title-group'>
            <h1 className='hero-title'>COFFEE KALDI</h1>
          </div>
          <p className='hero-subtitle'>Descubre el sabor autentico del cafe artesanal en un ambiente unico.</p>

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
