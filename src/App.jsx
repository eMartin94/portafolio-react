import { BrowserRouter } from 'react-router-dom';
import {
  Navbar,
  Hero,
  Skills,
  Experiencie,
  Projects,
  About,
} from './components';
import React, { useState } from 'react';

const App = () => {
  const [mode, setMode] = useState('light');

  const handleToggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <BrowserRouter>
      <div
        className={`relative z-0 ${
          mode == 'dark' ? 'bg-tertiary' : 'bg-white'
        } transition-all duration-500`}
      >
        <div
          className={`${
            mode == 'dark' ? 'bg-gradient-hero-dark' : 'bg-gradient-hero-light'
          } bg-cover bg-fixed`}
        >
          <Navbar mode={mode} onToggleMode={handleToggleMode} />
          <Hero />
        </div>
        <About mode={mode} />
        <Skills mode={mode} />
        <Experiencie mode={mode} />
        <Projects />
      </div>
    </BrowserRouter>
  );
};

export default App;
