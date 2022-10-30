/* eslint-disable @next/next/no-img-element */
import Layout from '../../components/Layout/Layout';
import LinkList from '../../components/LinkList/LinkList';
import { galleryURL } from '../../utils/urls';

const links = [
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
    href: `${galleryURL}/hector`,
    title: '/pages/gallery/hector',
  },
  {
    href: `${galleryURL}/psych-ward`,
    title: '/pages/gallery/psych_ward',
  },
];

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
