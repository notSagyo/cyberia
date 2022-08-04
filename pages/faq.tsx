import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const faq: NextPage = () => {
  return (
    <>
      <Head>
        <title>FAQ - Frequently Asked Questions </title>
      </Head>
      <h1>FAQ</h1>
      <Link href={'/'}>
        <a>Volver al inicio</a>
      </Link>
    </>
  );
};

export default faq;
