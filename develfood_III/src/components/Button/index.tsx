import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import theme from '../../styles/theme';
import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

export function Button({ 
  onPress, 
  title, 
  loading = false,
  ...rest
}: Props) {
  return (
    <Container
      onPress={onPress}
      loading={loading}
      enabled={!rest.disabled}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  )
}