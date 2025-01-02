'use client';
import React, { useEffect, useState } from 'react';
import { ThemeProvider as StyledCoponentThemeProvider } from 'styled-components';
import theme from './theme';

interface Props {
  children: React.ReactNode;
}

function ThemeProvider({ children }: Props) {
  const [currentTheme, setTheme] = useState(theme.light);
  const toggleDarkMode = () => {
    const darkMode = currentTheme.id == 'dark';
    setTheme(darkMode ? theme.light : theme.dark);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark =
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches);
      setTheme(isDark ? theme.dark : theme.light);
      updateDarkMode(isDark);
    }
  }, []);

  return (
    <StyledCoponentThemeProvider
      theme={{
        ...currentTheme,
        setTheme: toggleDarkMode,
      }}
    >
      {children}
    </StyledCoponentThemeProvider>
  );
}

function updateDarkMode(darkMode: boolean) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}

export default ThemeProvider;
