import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from './Logo';
import { Container } from './styled-components/Container';
import useFooter from './utils/useFooter';

export default function Footer() {
  const { footer, isLoading, isError } = useFooter();
  console.log('footer', footer);
  if (isError) {
    return null;
  }
  return footer ? (
    <FooterOuterContainer>
      <Container>
        <CompanyInfoContainer>
          <LogoContainer>
            {footer.logo ? (
              <Image
                src={`${
                  process.env.NODE_ENV === 'production'
                    ? footer.logo.url
                    : `http://localhost:1337${footer.logo.url}`
                }`}
                alt={footer.logo.alternativeText}
                height='51px'
                width='51px'
                objectFit='contain'
                objectPosition='center'
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
                return <Link href={item.page ? item.page.slug : item.url}>{item.label}</Link>;
              })}
            </FooterBottomLevel>
          )}
        </FooterInnerContainer>
      </Container>
    </FooterOuterContainer>
  ) : null;
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
  background-color: var(--dark);
  width: 100%;
  padding: var(--xl) 0;
`;

const FooterInnerContainer = styled.div`
  width: 100%;
  color: white;
  font-size: var(--n);
  h4 {
    margin-top: 0;
  }
`;
const CompanyInfoContainer = styled.div`
  p {
    color: var(--darkgray);
    margin: var(--s) 0;
    font-size: var(--n);
  }
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  h2 {
    color: white;
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
    color: white;
    &:hover {
      border-color: white;
    }
  }
  img,
  svg {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 500px) {
    display: flex;
    flex-direction: row;
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
    color: white;
  }
`;
