import { Fragment, useState } from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileMenuIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavItemBtn,
} from './Navbar.elements';
import { Button } from '../../styles/globals';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(!menuOpen);
  return (
    <Fragment>
      <Nav>
        <NavbarContainer>
          <NextLink href='/' passHref>
            <NavLogo>
              <NavIcon /> ULTRA
            </NavLogo>
          </NextLink>
          <MobileMenuIcon onClick={handleMenuOpen}>
            {menuOpen ? <MdClose /> : <FaBars />}
          </MobileMenuIcon>
          <NavMenu onClick={handleMenuOpen} menuOpen={menuOpen}>
            <NavItem>
              <NextLink href='/' passHref>
                <NavLink>Home</NavLink>
              </NextLink>
            </NavItem>
            <NavItem>
              <NextLink href='/services' passHref>
                <NavLink>Services</NavLink>
              </NextLink>
            </NavItem>
            <NavItem>
              <NextLink href='/products' passHref>
                <NavLink>Products</NavLink>
              </NextLink>
            </NavItem>
            <NavItemBtn>
              <NextLink href='/signup' passHref>
                <Button>Sign Up</Button>
              </NextLink>
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </Fragment>
  );
};

export default Navbar;

// Help styling NavLink with Styled-Components
// https://nextjs.org/docs/api-reference/next/link
