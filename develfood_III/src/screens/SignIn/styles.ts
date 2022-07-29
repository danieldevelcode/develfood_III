import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.secundary};
`;

export const Content = styled.View`
  width: 100%;
  padding: 0 40px;
`;

export const ContentImage = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Form = styled.View`
  width: 100%;
`;


export const ForgotPassword = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-bottom: 22px;
`;

export const CreateAccountButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
`;