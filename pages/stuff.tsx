import Layout from '../components/Layout/Layout';
import LinkList from '../components/LinkList/LinkList';
import LinkListItem from '../components/LinkList/LinkListItem';
import {
  bartenderURL,
  fortuneURL,
  getMeOutURL,
  hectorURL,
  matrixURL,
} from '../utils/urls';

const StuffPage = () => {
  return (
    <Layout>
      <h1 className="h1">STUFF</h1>
      <LinkList>
        <LinkListItem href={hectorURL} />
        <LinkListItem href={bartenderURL} />
        <LinkListItem href={fortuneURL} />
        <LinkListItem href={matrixURL} />
        <LinkListItem href={getMeOutURL} />
      </LinkList>
    </Layout>
  );
};

export default StuffPage;
