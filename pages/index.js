import { getHomepage, getSomething } from '@/lib/api';
import Layout from '../components/Layout';
import { componentSwitch } from '../components/switch';

export default function Home({ data, nav, footer }) {
  console.log('homepage body', data);
  console.log('homepage nav', nav);
  console.log('homepage footer', footer);
  return (
    <Layout nav={nav} footer={footer}>
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
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getHomepage();
  const nav = await getSomething('top-nav-menu');
  const footer = await getSomething('footer-nav');
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
      nav,
      footer,
    },
    revalidate: 10,
  };
}
