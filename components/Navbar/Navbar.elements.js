import styled from 'styled-components';
import { Container } from '../../styles/globals';
import { IoLogoFirebase } from 'react-icons/io5';

export const Nav = styled.nav`
  background: ${(props) => props.theme.colors.background};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
`;

export const NavLogo = styled.a`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(IoLogoFirebase)`
  margin-right: 0.5rem;
`;

export const MobileMenuIcon = styled.div`
  display: none;
  color: white;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  color: white;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ menuOpen }) => (menuOpen ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${(props) => props.theme.colors.background};
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: ${(props) => `2px solid ${props.theme.colors.primaryLight}`};
  }

  ${(props) => props.theme.breakpoints.md} {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;
