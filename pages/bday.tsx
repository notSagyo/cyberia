import type { NextPage } from 'next';
import Layout from '/components/Layout/Layout';
import Bday from '/components/pages/Bday/Bday';

const BdayPage: NextPage = () => {
  return (
    <Layout noPadding>
      <Bday />
    </Layout>
  );
};

export default BdayPage;
