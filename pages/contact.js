import ContactForm from '@/components/forms/contactForm';
import Layout from '@/components/Layout';
import { Container } from '@/components/styled-components/Container';
import { getSomething } from '@/lib/api';

export default function ContactPage({ nav, footer }) {
  return (
    <Layout nav={nav} footer={footer}>
      <Container>
        <ContactForm />
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const nav = await getSomething('top-nav-menu');
  const footer = await getSomething('footer-nav');

  return {
    props: {
      nav,
      footer,
    },
  };
}
