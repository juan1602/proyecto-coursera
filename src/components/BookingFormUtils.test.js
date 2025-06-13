// src/utils/BookingFormUtils.test.js

import { initializeTimes, updateTimes } from './BookingFormUtils';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>
}));

test('initializeTimes devuelve el array de horas esperado', () => {
  const times = initializeTimes();
  expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
});

test('updateTimes devuelve el mismo estado que se le pasa', () => {
  const mockState = ['17:00', '18:00', '19:00'];
  const result = updateTimes(mockState, { type: 'update', date: '2025-06-12' });
  expect(result).toEqual(mockState);
});
