// Utilidades de validación reutilizables

export const validateEmail = (email) => {
  if (!email.trim()) {
    return 'El email es requerido';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'El email no es válido';
  }
  return '';
};

export const validateName = (name) => {
  if (!name.trim()) {
    return 'El nombre es requerido';
  }
  if (name.trim().length < 2) {
    return 'El nombre debe tener al menos 2 caracteres';
  }
  return '';
};

export const validateDate = (date) => {
  if (!date.trim()) {
    return 'La fecha es requerida';
  }
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (selectedDate < today) {
    return 'La fecha no puede ser anterior a hoy';
  }
  return '';
};

export const validateMessage = (message) => {
  if (!message.trim()) {
    return 'El mensaje es requerido';
  }
  if (message.trim().length < 10) {
    return 'El mensaje debe tener al menos 10 caracteres';
  }
  return '';
};
