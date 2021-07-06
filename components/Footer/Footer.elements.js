import styled from 'styled-components';
import { Button } from '../../styles/globals';

export const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding-bottom: 3rem;
  padding-top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-top: 100px;
  }
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

export const FooterSubText = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.offGray};
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 4px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0 0 16px 0;
    width: 100%;
  }
`;

export const FormSubmit = styled(Button)`
  height: 100%;
  font-size: 1rem;
  padding: 10px 20px;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  color: #fff;

  @media ${(props) => props.theme.breakpoints.md} {
    align-items: center;
    margin: 0;
    padding: 0.5rem;
    width: 100%100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.offGray};
  text-decoration: none;
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transition: 0.3s ease-in-out;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  width: 100%100%;
`;

export const SocialIconLink = styled.div`
  padding: 0.5rem;
  margin: 0 0.5rem;
  font-size: 2rem;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transition: 0.3s ease-in-out;
  }
`;
