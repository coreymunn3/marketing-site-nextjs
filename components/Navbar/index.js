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
import { Link } from 'react-scroll';

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
              <NavIcon /> YOUR COMPANY
            </NavLogo>
          </NextLink>
          <MobileMenuIcon onClick={handleMenuOpen}>
            {menuOpen ? <MdClose /> : <FaBars />}
          </MobileMenuIcon>
          <NavMenu onClick={handleMenuOpen} menuOpen={menuOpen}>
            <NavItem>
              <NavLink
                to='section-home'
                spy={true}
                smooth={true}
                duration={500}
                activeClass='active'
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='section-services'
                spy={true}
                smooth={true}
                duration={500}
                activeClass='active'
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='section-pricing'
                spy={true}
                smooth={true}
                duration={500}
                activeClass='active'
              >
                Pricing
              </NavLink>
            </NavItem>
            <NavItemBtn>
              <NextLink href='/signup' passHref>
                <Button primary>Sign Up</Button>
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
