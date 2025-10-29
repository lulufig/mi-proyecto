import React from 'react'
import '../components/styles/Main.css'

const Main = () => {
  return (
    <main className='main'>
      
    <section className='hero'>
    

       {/*Contenido superpuesto */}
        <div className='hero-content'>
          <div className='hero-title-group'>
            <h1 className='hero-title'>
              <span className='title-line1'>KALDI</span><br />
              <span className='title-line2'>CAFÉ</span>
            </h1>
          </div>  
          
          <hr className='hero-divider' />
          
          <p className='hero-subtitle'>Descubre el sabor autentico del café artesanal en un ambiente único.</p>
          <div className='hero-buttons'>
            <a href='#reservas' className='btn'>Reservar ahora</a>
            <a href='#menu' className='btn'>Ver menú</a>
        </div>
      </div>
        
       
    </section>
      

    </main>
  );
}

/*Interior acogedor de Coffee Kaldi con aroma a cafe recien hecho*/

export default Main
