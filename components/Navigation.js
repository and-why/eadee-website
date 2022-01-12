import Image from 'next/image';
import styled, { css } from 'styled-components';
import { Container } from './styled-components/Container';
import Link from 'next/link';
import Logo from './Logo';
import { Button } from './styled-components/Button';

export default function Navigation({ nav, page, menuToggle, setMenuToggle }) {
  return (
    <NavigationOuterContainer>
      <Container>
        <NavigationInnerContainer>
          <Link href='/' passHref>
            <LogoStyles>
              {nav?.logo ? (
                <Image
                  src={nav.logo.url}
                  alt={nav.logo.alternativeText}
                  height='51px'
                  width='51px'
                  objectFit='contain'
                  objectPosition='left'
                  placeholder='blur'
                  blurDataURL={nav.logo.formats.thumbnail.url}
                  quality={100}
                />
              ) : (
                <Logo />
              )}
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
                  <MenuItems nav={nav} mobile='mobile' />
                </MobileMenuContainer>
              </MobileMenu>
            </>
          )}
        </NavigationInnerContainer>
      </Container>
    </NavigationOuterContainer>
  );
}

export const MenuItems = ({ nav, mobile }) => {
  return (
    <>
      {nav &&
        nav.body.map((item) => {
          if (item.url || item.page) {
            return (
              <>
                {item.style == 'none' ? (
                  <Link key={item.id} href={item.page ? item.page.slug : item.url}>
                    {item.label}
                  </Link>
                ) : (
                  <Link key={item.id} href={item.page ? item.page.slug : item.url} passHref>
                    <Button buttonStyle={item.style}>
                      {mobile ? item.label.slice(0, 12) : item.label}
                    </Button>
                  </Link>
                )}
              </>
            );
          }
        })}
    </>
  );
};

const DesktopMenu = styled.div`
  display: none;
  button {
    margin-left: var(--s);
  }
  @media (min-width: 850px) {
    display: flex;
    align-items: center;
    font-size: var(--n);
    a {
      margin-left: var(--n);
      color: var(--color-dark);
      &:hover {
        color: var(--color-primary);
      }
    }
  }
`;

const MobileMenu = styled.div`
  display: block;
  @media (min-width: 850px) {
    display: none;
  }
`;
const MobileMenuContainer = styled.div`
  position: fixed;
  background: var(--color-white);
  overflow: hidden;
  max-height: 0px;
  width: 100%;
  top: 83px;
  right: 0px;
  z-index: 101;
  display: flex;
  flex-direction: column;
  button {
    margin-top: var(--m);
    font-size: var(--l);
  }
  ${(props) =>
    props.menuToggle &&
    css`
      padding: var(--l);
      max-height: 100vh;
      width: 100%;
      top: 83px;
      right: 0;
      a {
        color: var(--color-dark);
        padding: var(--m) 0;
        font-size: var(--l);
        border-bottom: 2px solid var(--color-dark);
        &:hover {
          text-decoration: none;
          color: var(--color-gray_dark);
          border-bottom: 2px solid var(--color-dark);å
        }
      }
    `}
`;

const NavigationOuterContainer = styled.div`
  margin: auto;
  position: sticky;
  top: 0px;
  z-index: 99;
  background: rgba(255, 255, 255, 0.95);
  justify-content: space-between;
  display: flex;
  margin: 10px auto;
  backdrop-filter: blur(2px);
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
    font-size: var(--l);
    font-weight: 900;
    margin: 0;
    margin-left: 10px;
    color: var(--color-dark);
    &:hover {
      color: var(--color-dark);
    }
  }
`;
