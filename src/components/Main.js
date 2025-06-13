import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from '../utils/BookingFormUtils';
import { fetchAPI } from '../api';  // Asegúrate de que fetchAPI esté importado
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../api';

function Main() {
  // useReducer para manejar el estado de los horarios disponibles
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const navigate = useNavigate();  // Utilizamos useNavigate para la navegación

  // Función para manejar el envío del formulario
  const submitForm = (formData) => {
    const success = submitAPI(formData);  // Simula el envío a la API

    if (success) {
      navigate('/confirmacion');  // Redirigir a la página de confirmación
    } else {
      alert("Error al realizar la reserva.");
    }
  };

  // Función para actualizar los horarios disponibles en función de la fecha seleccionada
  const handleDateChange = (date) => {
    const times = fetchAPI(new Date(date));  // Obtener las horas disponibles de la API
    dispatch({ type: 'update', availableTimes: times });  // Actualizar el estado de los horarios disponibles
  };

  return (
    <div>
      <h1>Reservar una mesa</h1>
      {/* Pasamos dispatch y availableTimes a BookingForm */}
      <BookingForm onSubmit={submitForm} availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default Main;



