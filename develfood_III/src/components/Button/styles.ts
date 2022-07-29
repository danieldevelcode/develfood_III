import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface ButtonProps {
  loading?: boolean;
  enabled?: boolean;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
  opacity: ${({ enabled, loading }: ButtonProps) => 
    enabled === false || loading === true ? 0.5 : 1
  };
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.medium_500};
  font-size: 14px;
  color: ${theme.colors.secundary}
`;
