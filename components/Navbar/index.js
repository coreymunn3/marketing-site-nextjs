import { Fragment } from 'react';
import { Nav, NavbarContainer, NavLogo, NavIcon } from './Navbar.elements';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <Fragment>
      <Nav>
        <NavbarContainer>
          <NextLink href='/' passHref>
            <NavLogo>
              <NavIcon /> ULTRA
            </NavLogo>
          </NextLink>
        </NavbarContainer>
      </Nav>
    </Fragment>
  );
};

export default Navbar;

// Help styling NavLink with Styled-Components
// https://nextjs.org/docs/api-reference/next/link
