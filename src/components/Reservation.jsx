import React, { useState } from 'react';
import '../components/styles/Reservation.css'

const Reservation = () => {
  const [reservationData, setReservationData] = useState({ name: '', email: '', date: '' });
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleReservationChange = (e) => {
    setReservationData({ ...reservationData, [e.target.name]: e.target.value });
  };

  const validateReservation = () => {
    const { name, email, date } = reservationData;
    if (!name.trim() || !email.trim() || !date.trim()) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    if (validateReservation()) setShowReservationModal(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setShowContactModal(true);
    e.target.reset();
  };

  return (
    <section className="section-wrapper">
      <h2 className="section-title">Reservas & Contacto</h2>
      <div className="section-divider"></div>

      <div className="card-container">
        <div className="card fade-in">
          <h3 className="card-title">🗓️ Reservá tu visita</h3>
          <form onSubmit={handleReservationSubmit} noValidate>
            <label htmlFor="name">Nombre y Apellido:</label>
            <input type="text" id="name" name="name" required value={reservationData.name} onChange={handleReservationChange} />

            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required value={reservationData.email} onChange={handleReservationChange} />

            <label htmlFor="date">Fecha de reserva:</label>
            <input type="date" id="date" name="date" required value={reservationData.date} onChange={handleReservationChange} />

            <button type="submit" className="submit-button">Reservar ahora</button>
          </form>

          {showReservationModal && (
            <div className="modal-overlay" role="dialog" aria-modal="true">
              <div className="modal-confirmation">
                <h3>¡Reserva confirmada!</h3>
                <p>{`Gracias, ${reservationData.name}. Te esperamos el ${reservationData.date} en Kaldi Café!.`}</p>
                <button onClick={() => setShowReservationModal(false)} className="modal-close">Cerrar</button>
              </div>
            </div>
          )}
        </div>

        <div className="card fade-in">
          <h3 className="card-title">✉️ Contactanos</h3>
          <form onSubmit={handleContactSubmit} noValidate>
            <label htmlFor="contactName">Nombre y Apellido:</label>
            <input type="text" id="contactName" name="contactName" required />

            <label htmlFor="contactEmail">Correo electrónico:</label>
            <input type="email" id="contactEmail" name="contactEmail" required />

            <label htmlFor="contactMessage">Mensaje:</label>
            <textarea id="contactMessage" name="contactMessage" rows="4" required></textarea>

            <button type="submit" className="submit-button">Enviar</button>
          </form>

          {showContactModal && (
            <div className="modal-overlay" role="dialog" aria-modal="true">
              <div className="modal-confirmation">
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por tu mensaje. Te responderemos muy pronto.</p>
                <button onClick={() => setShowContactModal(false)} className="modal-close">Cerrar</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="privacy-note">Privacidad: Tu información será tratada con confidencialidad.</p>
    </section>
  );
};

export default Reservation;