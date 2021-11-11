import { getHomepage } from '@/lib/api';
import Layout from '../components/Layout';
import { componentSwitch } from '../components/switch';

export default function Home({ data }) {
  console.log('homepage body', data);
  return (
    <Layout>
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
  console.log('homepage data', data);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
