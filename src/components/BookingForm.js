import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { submitAPI, fetchAPI } from '../api';

function BookingForm({ onSubmit, availableTimes = [], dispatch }) {  
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  useEffect(() => {
    if (date) {
      const times = fetchAPI(new Date(date));  // Usamos fetchAPI con la fecha seleccionada
      dispatch({ type: 'update', availableTimes: times });  // Actualiza las horas disponibles
    }
  }, [date, dispatch]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate); // Actualiza el estado de la fecha
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { date, time, guests, occasion };

    // Llamada a la función onSubmit (que proviene de Main)
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '300px', gap: '20px' }}>
      <label htmlFor="res-date">Fecha</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Hora</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Seleccione una hora</option>
        {availableTimes.length > 0 ? (
          availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))
        ) : (
          <option value="">No hay horas disponibles</option>
        )}
      </select>

      <label htmlFor="guests">Número de invitados</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Ocasión</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Seleccione</option>
        <option value="cumpleaños">Cumpleaños</option>
        <option value="aniversario">Aniversario</option>
      </select>

      <button type="submit">Reservar</button>
      <Link to="/">
        <button type="button">Inicio</button>
      </Link>
    </form>
  );
}

export default BookingForm;
