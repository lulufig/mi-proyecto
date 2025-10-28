import React from 'react'
import '../components/styles/AboutUs.css'

const AboutUs = () => {
    return (
        <aboutus className='about-us'>
        <section className='about-us'aria-label='Seccion Sobre Nosotros'>
            <div className='about-us-overlay'></div>
                <div className='about-us-content'>
                    <h2 className='about-us-title'>Sobre Nosotros</h2>
                    <div className='about-us-divider'></div>
                    <p className='about-us-description'>
                        En <strong> Kaldi Café</strong> celebramos el arte del café artesanal. Nuestra historia comienza con una pasión por los sabores autenticos y los espacios que invitan a quedarse. Desde nuestros inicios, nos propusimos crear una cafeteria donde cada taza cuente una historia, y cada visita se sienta como volver a casa.
                    </p>

                    <p className='about-us-description'>
                    Valoramos la calidad, la calidez y la comunidad. Usamos granos seleccionados, técnicas tradicionales y un ambiente diseñado para el disfrute. Creemos en el poder de una buena comunicación, en la pausa que regala el aroma del café, y en los pequeños detalles que hacen grande una experiencia.
                    </p>
                    <div className='about-us-divider'></div>

                    <div className='about-us-gallery'>
                        <div className='gallery-item'>
                            <img src='/lugar-cafe.jpg' alt='Interior de Kaldi Cafe' />
                            <p className='gallery-caption'>Interior de Kaldi Cafe para que te sientas en casa </p>
                        </div>
                        <div className='gallery-item'>
                            <img src='/barista.jpg' alt='Preparacion de café ' />
                            <p className='gallery-caption'>Preparacion de café artesanal con dedicacion</p>
                        </div>
                        <div className='gallery-item'>
                            <img src='/cafe-sol.jpg' alt='Cafe con un toque natural para comenzar tu dia' />
                            <p className='gallery-caption'>Café con un toque natural para comenzar tu día</p>
                        </div>
                    <p className="about-us-quote">“Cada taza cuenta una historia, cada sorbo una conexión.”</p>
                    <p className='about-us-gallery img'>

                    </p>

                </div>
            </div>
        </section>

        </aboutus>
    )
}

export default AboutUs