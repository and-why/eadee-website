import Head from 'next/head';
import { useState } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';

export default function Layout({ children, page, title, description }) {
  const fallbackTitle = 'Employee Directory Software - Making Connections Simpler';
  const fallbackDescription =
    'Eadee is a striaghtforward and simple employee directory system for helping your staff understand the company they are in and where they fit into it.';
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <>
      <Head>
        <link rel='icon' type='image/png' href='/favicon.ico' />
        <link rel='icon' type='image/png' href='/images/logo.png' />
        <title>{title || fallbackTitle} | Eadee </title>
        <meta name='description' content={description || fallbackDescription}></meta>
      </Head>
      <Navigation page={page} menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      {!menuToggle && <div>{children}</div>}
      {!menuToggle && <Footer />}
    </>
  );
}
