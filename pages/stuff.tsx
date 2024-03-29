import Layout from '/components/Layout/Layout';
import LinkList, { Link } from '/components/LinkList/LinkList';
import {
  bartenderURL,
  citiesURL,
  fortuneURL,
  getMeOutURL,
  hectorURL,
  matrixURL,
} from '/utils/urls';

const links: Link[] = [
  { href: hectorURL },
  { href: bartenderURL },
  { href: fortuneURL },
  { href: matrixURL },
  { href: getMeOutURL },
  { href: citiesURL },
];

const StuffPage = () => {
  return (
    <Layout title="Stuff">
      <h1 className="h1">STUFF</h1>
      <LinkList links={links} />
    </Layout>
  );
};

export default StuffPage;
