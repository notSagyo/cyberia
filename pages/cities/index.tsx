import type { NextPage } from 'next';
import Layout from '/components/Layout/Layout';
import LinkHeading from '/components/LinkHeading/LinkHeading';
import LinkList from '/components/LinkList/LinkList';
import { citiesURL, stuffURL } from '/utils/urls';

const CitiesPage: NextPage = () => {
  return (
    <Layout>
      <LinkHeading href={stuffURL} goBack>
        {citiesURL}
      </LinkHeading>
      <LinkList
        links={links.map((link) => ({
          title: link,
          href: `${citiesURL}/${link}`,
        }))}
      />
    </Layout>
  );
};

const links = [
  // LAIN
  'https:/mebious.neocities.org/Layer/Wierd.html',
  'https:/fauux.neocities.org/',
  // SAILOR MOON
  'https:/sailorsaturn.neocities.org/',
  'https:/squaredog.neocities.org/usagi-detail.html',
  // RANDOM SHIT
  'https:/ghastlyghosties.neocities.org/',
  'https:/sparklelollipop.neocities.org/',
  'https:/nyaa.neocities.org/',
  // OTHER
  'https:/districts.neocities.org/',
];

export default CitiesPage;
