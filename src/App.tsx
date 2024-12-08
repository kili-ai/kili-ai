import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import MouseGlow from './components/MouseGlow';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen bg-jet-dark">
      <AnimatedBackground />
      <MouseGlow />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Contact />
    </div>
  );
}

export default App;