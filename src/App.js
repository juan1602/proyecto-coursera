import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Main from './components/Main';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';  // Asegúrate de importar ConfirmedBooking

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Specials />
              <Testimonials />
              <About />
            </>
          } />
          <Route path="/reservas" element={<BookingPage />} />
          <Route path="/confirmacion" element={<ConfirmedBooking />} /> {/* Página de confirmación */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


