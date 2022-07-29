import styled from "styled-components/native";

interface Props {
  color?: string;
}

export const Container = styled.Text<Props>`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.bold_700};
  color: ${({ theme, color }) => color ? color : theme.colors.shape}
`;