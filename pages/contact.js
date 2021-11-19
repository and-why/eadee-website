import ContactForm from '@/components/forms/contactForm';
import Layout from '@/components/Layout';
import { Container } from '@/components/styled-components/Container';
import { Form, Input } from '@/components/styled-components/Forms';
import useForm from '@/components/useForm';

export default function ContactPage() {
  return (
    <Layout>
      <Container>
        <ContactForm />
      </Container>
    </Layout>
  );
}
