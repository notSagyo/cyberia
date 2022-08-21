import Link from 'next/link';
import Layout from '../components/layout';
import Anchor from '../components/utils/anchor';
import { hectorURL } from '../utils/url';

const stuff = () => {
  return (
    <Layout>
      <h1 className="h1">STUFF</h1>
      <ul>
        <li className="h3">
          <Link href={hectorURL} passHref>
            <Anchor>{hectorURL}</Anchor>
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export default stuff;
