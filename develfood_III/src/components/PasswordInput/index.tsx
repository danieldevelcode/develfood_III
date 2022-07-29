import React, { useState } from 'react'
import { TextInputProps, TouchableOpacity } from 'react-native';
import IconName from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';
import { Container, IconContainer, InputText } from './styles'

interface Props extends TextInputProps {
  iconName: string;
  value?: string;
}

export function PasswordInput({ iconName, value, ...rest }: Props) {
  const [isPasswordVisibility, setIsPasswordVisibility] = useState(true)
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value)
  }

  function handlePasswordVisibilityChange() {
    setIsPasswordVisibility((prevState) => !prevState);
  }

  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <IconName 
          name={iconName}
          size={24}
          color={
            isFocused || isFilled ? theme.colors.primary : theme.colors.shape
          }
        />
      </IconContainer>
      <InputText 
        autoCorrect={false}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={isPasswordVisibility}
        {...rest}
      />

      <TouchableOpacity 
        onPress={handlePasswordVisibilityChange}
      >
        <IconContainer>
          <IconName 
            name={isPasswordVisibility ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.shape}
          />
        </IconContainer>
      </TouchableOpacity>
    </Container>
  )
}