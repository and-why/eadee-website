import styled from 'styled-components';
import { Container } from './styled-components/Container';
import useNav from './utils/useNav';
import Link from 'next/link';
import Logo from './Logo';
import { Button } from './styled-components/Button';
import { useState } from 'react';

export default function Navigation({ page }) {
  const { nav, isLoading, isError } = useNav();
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <Container>
      <NavigationContainer>
        <Link href='/' passHref>
          <LogoStyles>
            <Logo />
            <h2>Eadee</h2>
          </LogoStyles>
        </Link>
        <Button className='mobile-menu' onClick={() => setMenuToggle(!menuToggle)}>
          {menuToggle ? 'Close' : 'Menu'}
        </Button>
        <DesktopMenu>
          <MenuItems nav={nav} />
        </DesktopMenu>
        <MobileMenu>
          <MenuItems nav={nav} />
        </MobileMenu>
      </NavigationContainer>
    </Container>
  );
}

export const MenuItems = ({ nav }) => {
  return (
    <>
      {nav &&
        nav.body.map((item) => {
          return <Link href={item.url ? item.url : item.page.slug}>{item.label}</Link>;
        })}
    </>
  );
};

const DesktopMenu = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    font-size: var(--n);
    a {
      margin-right: var(--n);
      color: var(--dark);
      &:hover {
        color: var(--primary);
      }
    }
  }
`;

const MobileMenu = styled.div`
  display: block;
`;

const NavigationContainer = styled.div`
  margin: auto;
  padding-top: 32px;
  position: sticky;
  top: 0px;
  z-index: 99;
  background: white;
  justify-content: space-between;
  display: flex;
  margin: auto;
`;

export const LogoStyles = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  h2 {
    font-size: 2em;
    font-weight: 900;
    margin: 0;
    margin-left: 10px;
    color: var(--dark);
    &:hover {
      color: var(--dark);
    }
  }
`;
