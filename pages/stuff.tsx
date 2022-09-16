import Layout from '../components/Layout';
import LinkList from '../components/LinkList/LinkList';
import LinkListItem from '../components/LinkList/LinkListItem';
import { bartenderURL, hectorURL } from '../utils/url';

const Stuff = () => {
  return (
    <Layout>
      <h1 className="h1">STUFF</h1>
      <LinkList>
        <LinkListItem href={hectorURL} />
        <LinkListItem href={bartenderURL} />
      </LinkList>
    </Layout>
  );
};

export default Stuff;
