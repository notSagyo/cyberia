/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from '../components/layout';

const Hector = () => {
  return (
    <Layout>
      <h1>HECTOR</h1>
      <div style={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
        <img
          src={'https://i.imgur.com/vOEmcKG.png'}
          alt={'Hector, is a rock'}
        />
      </div>
    </Layout>
  );
};

export default Hector;
