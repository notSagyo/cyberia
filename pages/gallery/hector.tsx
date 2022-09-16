/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from '../../components/Layout';
import hector from '../../data/hectorHtml';

const Hector = () => {
  return (
    <Layout className="bgStars">
      <h1>HECTOR</h1>
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          letterSpacing: '0',
          lineHeight: 'initial',
          fontFamily: '"Consolas", monospace',
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: hector }}></div>
      </div>
    </Layout>
  );
};

export default Hector;
