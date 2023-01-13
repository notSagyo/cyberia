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
  'blackwings.neocities.org/',
  'lainzine.org/',
  // SAILOR MOON
  'sailorsaturn.neocities.org/',
  'squaredog.neocities.org/',
  // RANDOM SHIT
  'vomitboyz.neocities.org/',
  'youthculture2000.com/',
  'hotlinecafe.com/',
  'psychicnewborn.neocities.org/',
  // PERSONAL
  'mrdoob.neocities.org/',
  'nyaa.neocities.org/',
  'cinni.net/',
  'uhmm-mo.neocities.org/home',
  'flatlinepsalms.neocities.org/',
  'shishka.neocities.org/',
  'kry.pt/',
  'sparklelollipop.neocities.org/',
  'dannarchy.com/',
  'rvklein.me/',
  'sanhyo.neocities.org/',
  // OTHER
  'districts.neocities.org/',
  'gifcities.org/',
  'lainchan.org/',
];

export default CitiesPage;
