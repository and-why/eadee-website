import styled, { css } from 'styled-components';
import { Container } from './styled-components/Container';
import useNav from './utils/useNav';
import Link from 'next/link';
import Logo from './Logo';
import { Button } from './styled-components/Button';
import { useState } from 'react';

export default function Navigation({ page, menuToggle, setMenuToggle }) {
  const { nav, isLoading, isError } = useNav();

  return (
    <NavigationOuterContainer>
      <Container>
        <NavigationInnerContainer>
          <Link href='/' passHref>
            <LogoStyles>
              <Logo />
              <h2>Eadee</h2>
            </LogoStyles>
          </Link>
          {nav && (
            <>
              <DesktopMenu>
                <MenuItems nav={nav} />
              </DesktopMenu>
              <MobileMenu>
                <Button className='mobile-menu' onClick={() => setMenuToggle(!menuToggle)}>
                  {menuToggle ? 'Close' : 'Menu'}
                </Button>

                <MobileMenuContainer menuToggle={menuToggle}>
                  <MenuItems nav={nav} />
                </MobileMenuContainer>
              </MobileMenu>
            </>
          )}
        </NavigationInnerContainer>
      </Container>
    </NavigationOuterContainer>
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
  @media (min-width: 800px) {
    display: none;
  }
`;
const MobileMenuContainer = styled.div`
  position: fixed;
  background: var(--white);
  overflow: hidden;
  max-height: 0px;
  width: 100%;
  top: 83px;
  right: 0px;
  z-index: 101;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.menuToggle &&
    css`
      padding: var(--l);
      max-height: 100vh;
      width: 100%;
      top: 83px;
      right: 0;
      a {
        color: var(--dark);
        padding: var(--m) 0;
        font-size: var(--l);
        border-bottom: 2px solid var(--dark);
        &:hover {
          color: var(--dark);
          border-bottom: 2px solid var(--dark);å
        }
      }
    `}
`;

const NavigationOuterContainer = styled.div`
  margin: auto;
  position: sticky;
  top: 0px;
  z-index: 99;
  background: white;
  justify-content: space-between;
  display: flex;
  margin: auto;
`;
const NavigationInnerContainer = styled.div`
  margin: auto;
  padding: var(--n) 0;
  height: 83px;
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
