/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Anchor from '../../components/utils/anchor';
import Layout from '../../components/layout';
import { galleryURL } from '../../utils/url';

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
];

const Gallery = () => {
  return (
    <Layout title="Gallery" className="bgStars">
      <div>
        <h1 className="h1 textGlowBluePink">
          <u>
            <b>GALLERY</b>
          </u>
        </h1>
      </div>
      {links.map((link, i) => (
        <h2 className="h3" key={i}>
          <Link href={link.href} passHref>
            <Anchor>{link.title}</Anchor>
          </Link>
        </h2>
      ))}
    </Layout>
  );
};

export default Gallery;
