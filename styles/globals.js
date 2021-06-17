import styled, { createGlobalStyle } from 'styled-components';
// import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${(props) => (props.primary ? '#4b59f7' : '#0467fb')};
  white-space: nowrap;
  padding: ${(props) => (props.big ? '1rem 4rem' : '0.5rem 1.5rem')};
  color: #fff;
  font-size: ${(props) => (props.big ? '1.5rem' : '1rem')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${(props) => (props.primary ? '#0467fb' : '#4b59f7')};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%auto;
  }
`;

export default GlobalStyle;
