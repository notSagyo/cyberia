/* eslint-disable @next/next/no-img-element */
import Layout from '/components/Layout/Layout';
import hector from '/data/hector-html';

const HectorPage = () => {
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

export default HectorPage;
