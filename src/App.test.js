import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renderiza correctamente la página de inicio', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Usa un texto que realmente exista en tu navbar, hero o cualquier componente visible
  const titulo = screen.getByText(/little lemon/i);
  expect(titulo).toBeInTheDocument();
});
