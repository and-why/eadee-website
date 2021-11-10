import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { Container } from './styled-components/Container';
import useFooter from './utils/useFooter';

export default function Footer() {
  const { footer, isLoading, isError } = useFooter();
  console.log('footer', footer);
  return footer ? (
    <FooterOuterContainer>
      <Container>
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
          <FooterBottomLevel>
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
          </FooterBottomLevel>
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
`;

const FooterInnerContainer = styled.div`
  width: 100%;
  color: white;
  padding: var(--xxl) 0;
  font-size: var(--n);
  h4 {
    margin-top: 0;
  }
`;

const FooterTopLevel = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: var(--n);
  flex-direction: column;
  margin-bottom: var(--xl);
  a {
    color: white;
    &:hover {
      border-color: white;
    }
  }
  img {
    width: 50px;
    height: 50px;
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
const FooterBottomLevel = styled.div``;
