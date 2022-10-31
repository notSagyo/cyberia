import Layout from '../../components/Layout/Layout';
import LinkList, { Link } from '../../components/LinkList/LinkList';
import { animeURL, surfaceURL } from '../../utils/urls';

const links: Link[] = [
  {
    href: animeURL,
    title: `/pages${animeURL}`,
  },
  {
    href: surfaceURL,
    title: `/pages${surfaceURL}`,
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
