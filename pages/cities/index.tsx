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
  'https:/mebious.neocities.org/Layer/Wierd.html',
  'https:/fauux.neocities.org/',

  'https:/sailorsaturn.neocities.org/',
  'https:/squaredog.neocities.org/usagi-detail.html',

  'https:/ghastlyghosties.neocities.org/',
  'https:/sparklelollipop.neocities.org/',

  'https:/nyaa.neocities.org/',

  'https:/districts.neocities.org/',
];

export default CitiesPage;
