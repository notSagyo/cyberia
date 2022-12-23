import { isArray } from 'lodash';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { HTMLAttributes } from 'react';
import Layout from '/components/Layout/Layout';

const FramePage: NextPage = ({}: HTMLAttributes<HTMLElement>) => {
  const router = useRouter();
  const { url } = router.query;
  const parsedUrl = isArray(url) ? url.join('/') : '';

  return (
    <Layout noPadding>
      <iframe src={parsedUrl} width={'100%'} height={'100%'} />
    </Layout>
  );
};

export default FramePage;
