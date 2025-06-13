import React, { useState } from 'react';
import BookingForm from './BookingForm'; // Asegúrate de que tu formulario de reservas esté aquí
import { submitAPI } from '../api';  // Asegúrate de que submitAPI esté importado

function BookingPage() {
  // Estado para guardar las reservas
  const [bookingData, setBookingData] = useState([]);

  const handleReservation = (formData) => {
    // Verificar si la hora ya está ocupada
    const existingReservation = bookingData.find(reservation => reservation.time === formData.time);
    
    if (existingReservation) {
      alert(`La hora ${formData.time} ya está reservada. Elige otra hora.`);
      return false;
    } else {
      // Guardar la nueva reserva
      setBookingData([...bookingData, formData]);
      alert("¡Reserva exitosa!");
      return true;
    }
  };

  return (
    <div>
      <h1>Reservar una mesa</h1>
      
      {/* Formulario de reserva */}
      <BookingForm onSubmit={handleReservation} />

      {/* Tabla para mostrar las reservas */}
      <h2>Reservas realizadas</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Invitados</th>
            <th>Ocasión</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.length === 0 ? (
            <tr>
              <td colSpan="4">No hay reservas.</td>
            </tr>
          ) : (
            bookingData.map((booking, index) => (
              <tr key={index}>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.guests}</td>
                <td>{booking.occasion}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookingPage;


