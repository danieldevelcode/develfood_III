import { css } from 'styled-components';
import styled from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View<Props>`
  flex-direction: row;
  margin-bottom: 8px;
  border-radius: 10px;
  border: 2px;
  border-color: ${({theme}) => theme.colors.shape};
  ${({ isFocused, theme }) => 
    isFocused && css`
      border: 2px;
      border-color: ${theme.colors.primary}
    `}
`;

export const IconContainer = styled.View`
  height: 46px;
  width: 46px;
  justify-content: center;
  align-items: center;
`;

export const InputText = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.regular_400};
  font-size: 16px;
  padding: 0 8px;
`;