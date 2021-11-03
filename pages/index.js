import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { componentSwitch } from '../components/switch';
import { server } from '../config';

export default function Home({ data }) {
  const [homepage] = data.filter((page) => page.page_title === 'homepage');
  console.log(homepage.Body);
  return (
    <Layout>
      {homepage.Header &&
        homepage.Header.map((block) => {
          return componentSwitch(block);
        })}
      <div id='main'>
        {homepage.Body &&
          homepage.Body.map((block) => {
            return componentSwitch(block);
          })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${server}/pages`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  return {
    props: { data },
  };
}
