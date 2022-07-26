import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from './screens/Home';
import theme from './styles/theme';

export default function App() {
  return(
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}