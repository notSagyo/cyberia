import type { NextPage } from 'next';
import Layout from '/components/Layout/Layout';
import LinkHeading from '/components/LinkHeading/LinkHeading';
import LinkList from '/components/LinkList/LinkList';
import { citiesURL, stuffURL } from '/utils/urls';

const CitiesPage: NextPage = () => {
  return (
    <Layout title="Cities">
      <LinkHeading href={stuffURL} goBack>
        {citiesURL}
      </LinkHeading>
      <LinkList
        links={links.map((link) => ({
          title: `https://${link}`,
          href: `${citiesURL}/${link}`,
        }))}
      />
    </Layout>
  );
};

const links = [
  // LAIN
  'mebious.neocities.org/Layer/Wierd.html',
  'fauux.neocities.org/',
  // SAILOR MOON
  'sailorsaturn.neocities.org/',
  'squaredog.neocities.org/usagi-detail.html',
  // RANDOM SHIT
  'sparklelollipop.neocities.org/',
  'nyaa.neocities.org/',
  // PERSONAL
  'shishka.neocities.org/',
  'cinni.net/',
  // OTHER
  'districts.neocities.org/',
  'gifcities.org/',
];

export default CitiesPage;
