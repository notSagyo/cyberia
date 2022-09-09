import Layout from '../components/layout';
import LinkList from '../components/link-list/link-list';
import LinkListItem from '../components/link-list/link-list-item';
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
