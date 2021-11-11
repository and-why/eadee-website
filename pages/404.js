import Layout from '@/components/Layout';
import { Container } from '@/components/styled-components/Container';
import { Section } from '@/components/styled-components/Section';

export default function Custom404() {
  return (
    <Layout>
      <Section>
        <Container>
          <h2>Whoopsie</h2>
          <p>This page doesn't exist. </p>
        </Container>
      </Section>
    </Layout>
  );
}
