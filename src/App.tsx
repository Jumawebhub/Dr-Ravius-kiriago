import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div id="home">
        <Home setActiveSection={setActiveSection} />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="services">
        <Services />
      </div>
      
      <div id="booking">
        <Booking />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;