import React, { useState } from 'react'
import { TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';
import { Container, IconContainer, InputText } from './styles'

interface Props extends TextInputProps {
  iconName: string;
  value?: string;
}

export function Input({ iconName, value, ...rest }: Props) {
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

  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <Icon 
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
        {...rest}
      />
    </Container>
  )
}