import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default function App() {
  return(
    <View style={{
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text style={{
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold'
      }}>Bora lá!</Text>
    </View>
  )
}