import React, { useState, useCallback } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { validateEmail, validateName, validateDate, validateMessage } from '../utils/validation';
import '../components/styles/Reservation.css';

const Reservation = () => {
  // Hook para animaciones
  useScrollReveal('.animada', 0.3);

  const [reservationData, setReservationData] = useState({ name: '', email: '', date: '' });
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [errors, setErrors] = useState({ reservation: {}, contact: {} });
  const [touched, setTouched] = useState({ reservation: {}, contact: {} });

  // Validación en tiempo real para reservas
  const handleReservationChange = useCallback((e) => {
    const { name, value } = e.target;
    setReservationData(prev => ({ ...prev, [name]: value }));
    
    // Marcar campo como tocado
    setTouched(prev => ({
      ...prev,
      reservation: { ...prev.reservation, [name]: true }
    }));

    // Validar en tiempo real solo si el campo fue tocado
    let error = '';
    if (name === 'name') {
      error = validateName(value);
    } else if (name === 'email') {
      error = validateEmail(value);
    } else if (name === 'date') {
      error = validateDate(value);
    }

    setErrors(prev => ({
      ...prev,
      reservation: { ...prev.reservation, [name]: error }
    }));
  }, []);

  // Validación en tiempo real para contacto
  const handleContactChange = useCallback((e) => {
    const { name, value } = e.target;
    setContactData(prev => ({ ...prev, [name]: value }));
    
    // Marcar campo como tocado
    setTouched(prev => ({
      ...prev,
      contact: { ...prev.contact, [name]: true }
    }));

    // Validar en tiempo real solo si el campo fue tocado
    let error = '';
    if (name === 'name') {
      error = validateName(value);
    } else if (name === 'email') {
      error = validateEmail(value);
    } else if (name === 'message') {
      error = validateMessage(value);
    }

    setErrors(prev => ({
      ...prev,
      contact: { ...prev.contact, [name]: error }
    }));
  }, []);

  // Handler para blur (validar cuando el usuario sale del campo)
  const handleReservationBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      reservation: { ...prev.reservation, [name]: true }
    }));

    let error = '';
    if (name === 'name') {
      error = validateName(value);
    } else if (name === 'email') {
      error = validateEmail(value);
    } else if (name === 'date') {
      error = validateDate(value);
    }

    setErrors(prev => ({
      ...prev,
      reservation: { ...prev.reservation, [name]: error }
    }));
  }, []);

  const handleContactBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      contact: { ...prev.contact, [name]: true }
    }));

    let error = '';
    if (name === 'name') {
      error = validateName(value);
    } else if (name === 'email') {
      error = validateEmail(value);
    } else if (name === 'message') {
      error = validateMessage(value);
    }

    setErrors(prev => ({
      ...prev,
      contact: { ...prev.contact, [name]: error }
    }));
  }, []);

  const validateReservation = useCallback(() => {
    const { name, email, date } = reservationData;
    const newErrors = {
      name: validateName(name),
      email: validateEmail(email),
      date: validateDate(date)
    };

    // Marcar todos los campos como tocados
    setTouched(prev => ({
      ...prev,
      reservation: { name: true, email: true, date: true }
    }));

    setErrors(prev => ({ ...prev, reservation: newErrors }));
    return Object.values(newErrors).every(error => error === '');
  }, [reservationData]);

  const validateContact = useCallback(() => {
    const { name, email, message } = contactData;
    const newErrors = {
      name: validateName(name),
      email: validateEmail(email),
      message: validateMessage(message)
    };

    // Marcar todos los campos como tocados
    setTouched(prev => ({
      ...prev,
      contact: { name: true, email: true, message: true }
    }));

    setErrors(prev => ({ ...prev, contact: newErrors }));
    return Object.values(newErrors).every(error => error === '');
  }, [contactData]);

  const handleReservationSubmit = useCallback((e) => {
    e.preventDefault();
    if (validateReservation()) {
      setShowReservationModal(true);
      // Limpiar datos después de mostrar el modal
      setTimeout(() => {
        setReservationData({ name: '', email: '', date: '' });
        setErrors(prev => ({ ...prev, reservation: {} }));
        setTouched(prev => ({ ...prev, reservation: {} }));
      }, 0);
    }
  }, [validateReservation]);

  const handleContactSubmit = useCallback((e) => {
    e.preventDefault();
    if (validateContact()) {
      setShowContactModal(true);
      // Limpiar datos después de mostrar el modal
      setTimeout(() => {
        setContactData({ name: '', email: '', message: '' });
        setErrors(prev => ({ ...prev, contact: {} }));
        setTouched(prev => ({ ...prev, contact: {} }));
      }, 0);
    }
  }, [validateContact]);

  return (
    <section className="section-wrapper" id="contacto">
      {/* Título Principal */}
      <div className="section-header animada fade-in">
        <h2 className="section-title">Reservas & Contacto</h2>
        <div className="section-divider"></div>
      </div>

      <div className="card-container">
        
        {/* === COLUMNA 1: RESERVAS === */}
        <div className="card animada fade-in">
          <h3 className="card-title">Reservar Mesa</h3>
          <form onSubmit={handleReservationSubmit} noValidate>
            <div>
              <label htmlFor="res-name">Nombre y Apellido</label>
              <input 
                type="text" 
                id="res-name" 
                name="name" 
                placeholder="Ej. Juan Pérez"
                required 
                value={reservationData.name} 
                onChange={handleReservationChange}
                onBlur={handleReservationBlur}
                aria-invalid={!!errors.reservation.name}
                aria-describedby={errors.reservation.name ? 'res-name-error' : undefined}
              />
              {touched.reservation.name && errors.reservation.name && (
                <span className="error-message" id="res-name-error" role="alert">{errors.reservation.name}</span>
              )}
            </div>

            <div>
              <label htmlFor="res-email">Correo electrónico</label>
              <input 
                type="email" 
                id="res-email" 
                name="email" 
                placeholder="juan@ejemplo.com"
                required 
                value={reservationData.email} 
                onChange={handleReservationChange}
                onBlur={handleReservationBlur}
                aria-invalid={!!errors.reservation.email}
                aria-describedby={errors.reservation.email ? 'res-email-error' : undefined}
              />
              {touched.reservation.email && errors.reservation.email && (
                <span className="error-message" id="res-email-error" role="alert">{errors.reservation.email}</span>
              )}
            </div>

            <div>
              <label htmlFor="res-date">Fecha de reserva</label>
              <input 
                type="date" 
                id="res-date" 
                name="date" 
                required 
                value={reservationData.date} 
                onChange={handleReservationChange}
                onBlur={handleReservationBlur}
                min={new Date().toISOString().split('T')[0]}
                aria-invalid={!!errors.reservation.date}
                aria-describedby={errors.reservation.date ? 'res-date-error' : undefined}
              />
              {touched.reservation.date && errors.reservation.date && (
                <span className="error-message" id="res-date-error" role="alert">{errors.reservation.date}</span>
              )}
            </div>

            <button type="submit" className="submit-button">Confirmar Reserva</button>
          </form>

          {/* Modal Reserva */}
          {showReservationModal && (
            <div className="modal-overlay">
              <div className="modal-confirmation">
                <h3>¡Reserva confirmada!</h3>
                <p>{`Gracias, ${reservationData.name}. Te esperamos el ${reservationData.date} en Kaldi Café.`}</p>
                <button onClick={() => setShowReservationModal(false)} className="modal-close">Cerrar</button>
              </div>
            </div>
          )}
        </div>

        {/* === COLUMNA 2: CONTACTO === */}
        <div className="card animada fade-in">
          <h3 className="card-title">Escríbenos</h3>
          <form onSubmit={handleContactSubmit} noValidate>
            <div>
              <label htmlFor="con-name">Nombre y Apellido</label>
              <input 
                type="text" 
                id="con-name" 
                name="name" 
                placeholder="Ej. María García"
                value={contactData.name}
                onChange={handleContactChange}
                onBlur={handleContactBlur}
                required 
                aria-invalid={!!errors.contact.name}
                aria-describedby={errors.contact.name ? 'con-name-error' : undefined}
              />
              {touched.contact.name && errors.contact.name && (
                <span className="error-message" id="con-name-error" role="alert">{errors.contact.name}</span>
              )}
            </div>

            <div>
              <label htmlFor="con-email">Correo electrónico</label>
              <input 
                type="email" 
                id="con-email" 
                name="email" 
                placeholder="maria@ejemplo.com"
                value={contactData.email}
                onChange={handleContactChange}
                onBlur={handleContactBlur}
                required 
                aria-invalid={!!errors.contact.email}
                aria-describedby={errors.contact.email ? 'con-email-error' : undefined}
              />
              {touched.contact.email && errors.contact.email && (
                <span className="error-message" id="con-email-error" role="alert">{errors.contact.email}</span>
              )}
            </div>

            <div>
              <label htmlFor="con-message">Mensaje</label>
              <textarea 
                id="con-message" 
                name="message" 
                rows="4" 
                placeholder="¿En qué podemos ayudarte?"
                value={contactData.message}
                onChange={handleContactChange}
                onBlur={handleContactBlur}
                required
                aria-invalid={!!errors.contact.message}
                aria-describedby={errors.contact.message ? 'con-message-error' : undefined}
              ></textarea>
              {touched.contact.message && errors.contact.message && (
                <span className="error-message" id="con-message-error" role="alert">{errors.contact.message}</span>
              )}
            </div>

            <button type="submit" className="submit-button">Enviar Mensaje</button>
          </form>

          {/* Modal Contacto */}
          {showContactModal && (
            <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
              <div className="modal-confirmation">
                <h3 id="contact-modal-title">¡Mensaje enviado!</h3>
                <p role="alert" aria-live="polite">
                  Gracias por contactarnos. Te responderemos a la brevedad.
                </p>
                <button 
                  onClick={() => setShowContactModal(false)} 
                  className="modal-close"
                  aria-label="Cerrar modal de confirmación"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

      <p className="privacy-note">Kaldi Café © 2026. Tu información es confidencial.</p>
    </section>
  );
};

export default Reservation;