import Head from 'next/head';
import Navigation from './Navigation';

export default function Layout({ children, page, title, description }) {
  const fallbackTitle = 'Employee Directory Software - Making Connections Simpler';
  const fallbackDescription =
    'Eadee is a striaghtforward and simple employee directory system for helping your staff understand the company they are in and where they fit into it.';
  return (
    <>
      <Head>
        <link rel='icon' type='image/png' href='/favicon.ico' />
        <link rel='icon' type='image/png' href='/Logo.png' />
        <title>{title || fallbackTitle} | Eadee </title>
        <meta name='description' content={description || fallbackDescription}></meta>
      </Head>
      <Navigation page={page} />
      <div>{children}</div>
    </>
  );
}
