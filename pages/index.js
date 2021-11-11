import { getAllPages } from '@/lib/api';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { componentSwitch } from '../components/switch';
import { server } from '../config';

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
  const allPages = await getAllPages();
  const homepages = allPages.filter((page) => page.is_homepage);
  const data = homepages[0];
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
