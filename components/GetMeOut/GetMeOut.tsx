import { useEffect } from 'react';
import { getMeOutURL } from '../../utils/urls';
import Layout from '../Layout/Layout';
import Anchor from '../utils/Anchor/Anchor';

const GetMeOut = ({ src }: { src: string }) => {
  const frame = <iframe style={{ height: '100%' }} src={src} />;

  useEffect(() => {
    const anchors = document.querySelectorAll('a');
    anchors.forEach((a) => {
      a.href = getMeOutURL;
      a.onclick = (e) => {
        e.preventDefault();
        while (true) console.log('GET. ME. OUT.');
      };
    });
  }, []);

  return (
    <Layout title="GET ME OUT" shellTitle="GET ME OUT">
      {frame}
      <Anchor id="getMeOut" href={getMeOutURL}>
        GET ME OUT
      </Anchor>
    </Layout>
  );
};

export default GetMeOut;
