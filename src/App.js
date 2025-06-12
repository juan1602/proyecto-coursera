import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
