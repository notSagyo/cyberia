import Layout from '../../components/Layout/Layout';
import LinkList from '../../components/LinkList/LinkList';
import { animeURL } from '../../utils/urls';

const links = [
  {
    href: animeURL,
    title: 'pages/videos/anime',
  },
];

function VideosPage() {
  return (
    <Layout title="Videos">
      <h1 className="h1">VIDEOS</h1>
      <LinkList links={links} />
    </Layout>
  );
}

export default VideosPage;
