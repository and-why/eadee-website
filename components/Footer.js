import { serverURL } from '../config';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from './Logo';
import { Container } from './styled-components/Container';
import { useEffect } from 'react';
export default function Footer({ footer }) {
  useEffect(() => {
    window.$crisp = [];
    $crisp.push(['safe', true]);
    window.CRISP_WEBSITE_ID = '919aea81-92d9-4484-81fc-de13f796d7f7';
    (() => {
      const d = document;
      const s = d.createElement('script');
      s.src = 'https://client.crisp.chat/l.js';
      s.async = 1;
      d.getElementsByTagName('body')[0].appendChild(s);
    })();
  }, []);

  if (footer) {
    return (
      <FooterOuterContainer>
        <Container>
          <CompanyInfoContainer>
            <LogoContainer>
              {footer.logo ? (
                <Image
                  src={`${serverURL}/footer.logo.url`}
                  alt={footer.logo.alternativeText}
                  height='51px'
                  width='51px'
                  objectFit='contain'
                  objectPosition='center'
                  placeholder='blur'
                  blurDataURL={footer.logo.formats.thumbnail.url}
                  quality={100}
                />
              ) : (
                <Logo />
              )}
              <h2>Eadee</h2>
            </LogoContainer>
            <p>Employee Directory, ED, Eadee. Get it?</p>
          </CompanyInfoContainer>
          <FooterInnerContainer>
            <FooterTopLevel>
              {footer.nav_menus &&
                footer.nav_menus.map((item) => {
                  return (
                    <FooterNavMenu key={item.id}>
                      {item.nav_link ? (
                        <NavMenu menu={item} />
                      ) : (
                        <Link href={item.page ? item.page.slug : item.url}>{item.label}</Link>
                      )}
                    </FooterNavMenu>
                  );
                })}
            </FooterTopLevel>
            {footer.legal_menu && (
              <FooterBottomLevel>
                © {new Date().getFullYear()} Eadee.
                {footer.legal_menu.map((item) => {
                  return (
                    <Link key={item.id} href={item.page ? item.page.slug : item.url}>
                      {item.label}
                    </Link>
                  );
                })}
              </FooterBottomLevel>
            )}
          </FooterInnerContainer>
        </Container>
      </FooterOuterContainer>
    );
  }
  return null;
}

const NavMenu = ({ menu }) => {
  return (
    <NavMenuStyles>
      <h4>{menu.heading}</h4>
      {menu.nav_link.map((item) => {
        return (
          <Link key={item.id} href={item.url}>
            {item.label}
          </Link>
        );
      })}
    </NavMenuStyles>
  );
};

const FooterOuterContainer = styled.div`
  background-color: var(--color-dark);
  width: 100%;
  padding: var(--xl) 0;
  z-index: 1;
`;

const FooterInnerContainer = styled.div`
  width: 100%;
  color: var(--color-white);
  font-size: var(--n);
  h4 {
    margin-top: 0;
  }
`;
const CompanyInfoContainer = styled.div`
  p {
    color: var(--color-gray_dark);
    margin: var(--s) 0;
    font-size: var(--n);
  }
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  h2 {
    color: var(--color-white);
    margin: 0;
    font-size: var(--l);
    font-weight: 900;
    margin: 0;
    margin-left: 10px;
  }
`;

const FooterTopLevel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: var(--n);
  margin: var(--xl) 0;
  align-items: start;
  justify-items: start;
  a {
    color: var(--color-white);
    &:hover {
      border-color: var(--color-white);
    }
  }
  img,
  svg {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
`;
const FooterNavMenu = styled.div`
  min-width: 100px;
  margin-bottom: var(--n);
`;
const NavMenuStyles = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin-bottom: var(--xs);
  }
`;

const FooterBottomLevel = styled.div`
  display: flex;
  grid-gap: var(--s);
  font-size: var(--s);
  a {
    color: var(--color-white);
  }
`;
