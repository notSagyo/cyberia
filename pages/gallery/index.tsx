/* eslint-disable @next/next/no-img-element */
import Layout from '/components/Layout/Layout';
import LinkList, { Link } from '/components/LinkList/LinkList';
import { galleryURL } from '/utils/urls';

const links: Link[] = [
  {
    href: `${galleryURL}/omori`,
    title: '/pages/gallery/omori',
  },
  {
    href: `${galleryURL}/omori2`,
    title: '/pages/gallery/omori2',
  },
  {
    href: `${galleryURL}/omori3`,
    title: '/pages/gallery/omori3',
  },
  {
    href: `${galleryURL}/omori4`,
    title: '/pages/gallery/om.~??i4',
  },
  {
    href: `${galleryURL}/visual-experiments`,
    title: '/pages/gallery/visual_experiments',
  },
  {
    href: `${galleryURL}/an-omnipresence-in-wired`,
    title: '/pages/gallery/an_omnipresence_in_wired',
  },
  {
    href: `${galleryURL}/official-guide`,
    title: '/pages/gallery/official_guide',
  },
  {
    href: `${galleryURL}/hector`,
    title: '/pages/gallery/hector',
  },
  {
    href: `${galleryURL}/va-11_hall-a`,
    title: '/pages/gallery/va-11_hall-a',
  },
  {
    href: `${galleryURL}/psych-ward`,
    title: '/pages/gallery/psych_ward',
  },
];

// TODO: Add all lain artwork magazines
const GalleryPage = () => {
  return (
    <Layout title="Gallery" className="bgStars">
      <div>
        <h1 className="h1 textGlowBluePink">
          <u>
            <b>GALLERY</b>
          </u>
        </h1>
      </div>
      <LinkList links={links} />
    </Layout>
  );
};

export default GalleryPage;
