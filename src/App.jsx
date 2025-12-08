






import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/hero';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Faq  from './components/faq';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
