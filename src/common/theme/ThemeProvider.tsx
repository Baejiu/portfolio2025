'use client';
import React, { useState } from 'react';
import { ThemeProvider as StyledCoponentThemeProvider } from 'styled-components';
import theme from './theme';

interface Props {
  children: React.ReactNode;
}

// TODO. 접근 기본 모드 확인 후 반영
// TODO. 로컬스토리지에 값 저장

function ThemeProvider({ children }: Props) {
  const [currentTheme, setTheme] = useState(theme.light);

  return (
    <StyledCoponentThemeProvider
      theme={{
        ...currentTheme,
        setTheme: () => {
          setTheme((prev) => (prev.id == 'light' ? theme.dark : theme.light));
        },
      }}
    >
      {children}
    </StyledCoponentThemeProvider>
  );
}

export default ThemeProvider;
