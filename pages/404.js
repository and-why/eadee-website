import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Container } from '@/components/styled-components/Container';
import { Section } from '@/components/styled-components/Section';
import { getSomething } from '@/lib/api';
import styled from 'styled-components';

export default function Custom404({ nav, footer }) {
  return (
    <Layout nav={nav} footer={footer}>
      <Section>
        <Container>
          <ErrorPageContainer>
            <div>
              <h2>Where am I?</h2>
              <p>This page doesn&apos;t exist. Try another</p>
            </div>
            <div>
              <Image
                alt='404 page image'
                src='/images/06.png'
                height='400'
                width='400'
                objectFit='contain'
              />
              <p className='small'>
                by <Link href='https://absurd.design/'>Absuddesigns</Link>
              </p>
            </div>
          </ErrorPageContainer>
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const nav = await getSomething('top-nav-menu');
  const footer = await getSomething('footer-nav');

  return {
    props: {
      nav,
      footer,
    },
    revalidate: 10,
  };
}

const ErrorPageContainer = styled.div`
  padding: var(--s-vmin) 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  .small {
    font-size: 8px;
  }
  a {
    color: inherit;
  }
`;
