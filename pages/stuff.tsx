import Layout from '../components/layout';
import LinkList from '../components/link-list/link-list';
import LinkListItem from '../components/link-list/link-list-item';
import { hectorURL } from '../utils/url';

const stuff = () => {
  return (
    <Layout>
      <h1 className="h1">STUFF</h1>
      <LinkList>
        <LinkListItem href={hectorURL} />
      </LinkList>
    </Layout>
  );
};

export default stuff;
