import { BrowserRouter } from 'react-router-dom';
import {
  Navbar,
  Hero,
  Skills,
  Experience,
  Projects,
  About,
  Foorter,
} from './components';
import React, { useState } from 'react';
import Contact from './components/Contact';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedMode = localStorage.getItem('mode');
    if (storedMode !== null) {
      return JSON.parse(storedMode);
    } else if (prefersDarkMode) {
      return true;
    } else {
      return false;
    }
  });

  const handleToggleMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('mode', JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <BrowserRouter>
      <div
        className={`relative z-0 ${
          isDarkMode ? 'bg-tertiary' : 'bg-white'
        } transition-all duration-500`}
      >
        <div
          className={`${
            isDarkMode ? 'bg-gradient-hero-dark' : 'bg-gradient-hero-light'
          } bg-cover bg-fixed`}
        >
          <Navbar isDarkMode={isDarkMode} onToggleMode={handleToggleMode} />
          <Hero isDarkMode={isDarkMode} />
        </div>
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Foorter isDark={isDarkMode} />
      </div>
    </BrowserRouter>
  );
};

export default App;
