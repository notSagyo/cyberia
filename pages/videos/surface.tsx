import type { NextPage } from 'next';
import Layout from '../../components/Layout/Layout';
import LinkHeading from '../../components/LinkHeading/LinkHeading';
import YtVideo from '../../components/YtVideo/YtVideo';
import { surfaceURL, videosURL } from '../../utils/urls';

const videosId = ['zW_Z6f4u5pw', 'aj13Y_H6lDo', 'wpTJDkqYIDc', '9vz06QO3UkQ'];

const surfacePage: NextPage = () => {
  return (
    <Layout>
      <LinkHeading href={videosURL} goBack>
        {surfaceURL}
      </LinkHeading>
      {videosId.map((url, i) => (
        <YtVideo
          urlId={url}
          title={url + '.mp4'}
          key={i}
          shellProps={{ style: { marginTop: 32 } }}
        />
      ))}
    </Layout>
  );
};

export default surfacePage;
