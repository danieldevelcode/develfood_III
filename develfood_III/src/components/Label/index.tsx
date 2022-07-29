import React from 'react';
import { Container } from './styles';

interface Props {
  title: string;
  color?: string;
}

export function Label({ title, color }: Props) {
  return (
    <Container color={color}>{title}</Container>
  )
}