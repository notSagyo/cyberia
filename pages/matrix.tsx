import type { NextPage } from 'next';
import Layout from '/components/Layout/Layout';
import Matrix from '/components/pages/Matrix/Matrix';

const MatrixPage: NextPage = () => {
  return (
    <Layout title="matrix.exe" noPadding className="bgBlack">
      <Matrix />
    </Layout>
  );
};

export default MatrixPage;
