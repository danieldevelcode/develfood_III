import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

export default function App() {
  return(
    <ThemeProvider theme={theme}>
      <View style={{
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{
          fontSize: 32,
          color: 'white',
          fontFamily: 'Roboto-Medium'
        }}>Bora lá!</Text>
      </View>
    </ThemeProvider>
  )
}