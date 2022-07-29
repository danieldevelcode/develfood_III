import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { SignIn } from './screens/SignIn';

export default function App() {
  return(
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  )
}