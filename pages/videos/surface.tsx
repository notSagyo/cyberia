import type { NextPage } from 'next';
import Layout from '/components/Layout/Layout';
import LinkHeading from '/components/LinkHeading/LinkHeading';
import YtVideo from '/components/YtVideo/YtVideo';
import { surfaceURL, videosURL } from '/utils/urls';

const ytVideos: { id: string; title?: string; playlist?: boolean }[] = [
  { id: 'zW_Z6f4u5pw' },
  { id: 'aj13Y_H6lDo' },
  { id: '9vz06QO3UkQ' },
  { id: 'PLjuzMNNpQyOo-Wye9kSB4G2YW64lR7uzV', playlist: true },
  { id: '9pnHNkKz9Qs' },
  { id: '6VMRAGxjOoA', title: '6VMRAGxjOoA.avi' },
  { id: '-7o5-xcvCBc' },
];

const surfacePage: NextPage = () => {
  return (
    <Layout title="Surface">
      <LinkHeading href={videosURL} goBack>
        {surfaceURL}
      </LinkHeading>
      {ytVideos.map((vid, i) => (
        <YtVideo
          urlId={vid.id}
          title={vid.title || vid.id + '.mp4'}
          playlist={vid.playlist}
          key={i}
          shellProps={{
            style: { marginTop: 32 },
            titleProps: { style: { maxWidth: 560 } },
          }}
        />
      ))}
    </Layout>
  );
};

export default surfacePage;
