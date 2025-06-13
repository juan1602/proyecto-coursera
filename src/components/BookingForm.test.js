// src/components/BookingForm.test.js

import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

const mockDispatch = jest.fn();
const mockAvailableTimes = ['17:00', '18:00', '19:00'];

test('Renderiza el campo de fecha correctamente', () => {
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  const labelElement = screen.getByLabelText('Fecha');
  expect(labelElement).toBeInTheDocument();
});

test('Renderiza las opciones de horas correctamente', () => {
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  const selectElement = screen.getByLabelText('Hora');
  expect(selectElement).toBeInTheDocument();
  expect(screen.getByText('17:00')).toBeInTheDocument();
  expect(screen.getByText('18:00')).toBeInTheDocument();
  expect(screen.getByText('19:00')).toBeInTheDocument();
});

jest.mock('react-router-dom', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ children }) => <div>{children}</div>
}));
