import ContactForm from '@/components/forms/contactForm';
import Layout from '@/components/Layout';
import { Container } from '@/components/styled-components/Container';
import { getAllPages, getSomething } from '@/lib/api';

export default function ContactPage({ data, nav, footer }) {
  return (
    <Layout nav={nav} footer={footer}>
      <Container>
        {data.Header &&
          data.Header.map((block) => {
            return componentSwitch(block);
          })}
        <div id='main'>
          {data.Body &&
            data.Body.map((block) => {
              return componentSwitch(block);
            })}
        </div>
        <ContactForm />
      </Container>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const allPages = await getAllPages();
  const nav = await getSomething('top-nav-menu');
  const footer = await getSomething('footer-nav');

  console.log('context', context);
  const [page] = allPages?.filter((page) => page.slug == 'contact');

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: page,
      nav,
      footer,
    },
    revalidate: 10,
  };
}
