import { useEffect, useState } from 'react';

import type { Theme } from '../types';

export const useTheme = (): {
  theme: Theme;
  toggleTheme: VoidFunction;
} => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const allowedThemes = new Set<Theme>(['light', 'dark']);
    const savedTheme = localStorage.getItem('theme') as Theme;

    if (savedTheme && allowedThemes.has(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return {
    theme,
    toggleTheme,
  };
};
