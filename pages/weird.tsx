import type { NextPage } from 'next';
import Layout from '/components/Layout/Layout';
import Weird from '/components/pages/Weird/Weird';

const weirdPage: NextPage = () => {
  return (
    <Layout title="Weird">
      <Weird />
    </Layout>
  );
};

export default weirdPage;
