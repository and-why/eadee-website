import Layout from '@/components/Layout';
import { componentSwitch } from '@/components/switch';
import { getAllPages, getPageById } from '@/lib/api';

export default function Page({ data }) {
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

export async function getStaticProps({ params }) {
  const allPages = await getAllPages();

  const [page] = allPages?.filter((page) => page.slug === params.slug);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: page,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const allPages = await getAllPages();
  console.log('allPages', allPages);
  const paths = allPages?.map((page) => {
    return {
      params: {
        slug: page.slug,
      },
    };
  });
  console.log('paths', paths);

  return {
    paths,
    fallback: 'blocking',
  };
}
