import Layout from '@/components/Layout';
import { componentSwitch } from '@/components/switch';
import { getAllPages } from '@/lib/api';

export default function Page({ data }) {
  console.log('data', data);
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

export async function getStaticProps({ params, review = null }) {
  console.log('params', params);
  const allPages = await getAllPages();

  const [page] = allPages.filter((page) => page.slug === params.slug);

  return {
    props: {
      data: page,
    },
  };
}

export async function getStaticPaths() {
  const allPages = await getAllPages();

  const paths = allPages?.map((page) => {
    if (!page.is_homepage) {
      return {
        params: {
          slug: page.slug,
        },
      };
    } else {
      return {
        params: {
          slug: '',
        },
      };
    }
  });

  return {
    paths,
    fallback: 'blocking',
  };
}
