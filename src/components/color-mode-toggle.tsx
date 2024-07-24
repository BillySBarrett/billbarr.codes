'use client';
// components/ThemeToggle.js
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('violet');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'violet';
    if (!savedTheme) {
      return;
    }
    document.documentElement.classList.add(savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = (newTheme: string) => {
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div>
      <button type="button" onClick={() => toggleTheme('violet')}>violet Mode</button>
      <button type="button" onClick={() => toggleTheme('grass')}>grass Mode</button>
    </div>
  );
};

export default ThemeToggle;
