import Layout from '@/components/Layout';
import { componentSwitch } from '@/components/switch';
import { getAllPages, getSomething } from '@/lib/api';

export default function Page({ data, nav, footer }) {
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

export async function getStaticProps({ params }) {
  const allPages = await getAllPages();
  const nav = await getSomething('top-nav-menu');
  const footer = await getSomething('footer-nav');

  const [page] = allPages?.filter((page) => page.slug === params.slug);

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

export async function getStaticPaths() {
  const allPages = await getAllPages();

  const paths = allPages?.map((page) => {
    if (page.slug !== 'contact') {
      return {
        params: {
          slug: page.slug,
        },
      };
    }
  });

  return {
    paths,
    fallback: 'blocking',
  };
}
