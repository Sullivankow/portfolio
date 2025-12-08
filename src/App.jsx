import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Faq from './components/faq';
import Footer from './components/footer';




// Suppression du composant Home inutile


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <Faq />
            <Footer />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
