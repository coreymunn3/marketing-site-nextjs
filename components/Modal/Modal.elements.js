import styled from 'styled-components';

export const Overlay = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalContainer = styled.div`
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 2rem;
`;

export const ModalHeader = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SignInFieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

export const SignInFieldLabel = styled.label`
  width: 100%;
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.colors.background};
`;

export const SignInField = styled.input`
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.offWhite};
  padding: 0.5rem;
  font-size: 1.2rem;
  width: 100%;
  display: block;
  color: ${(props) => props.theme.colors.primary};

  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.offGray};
  }
`;
