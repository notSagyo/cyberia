/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Anchor from '../../components/anchor';
import Layout from '../../components/layout';

const links = [
  {
    href: '/gallery/omori',
    title: '../pages/gallery/omori',
  },
  {
    href: '/gallery/omori2',
    title: '../pages/gallery/omori2',
  },
  {
    href: '/gallery/omori3',
    title: '../pages/gallery/omori3',
  },
  {
    href: '/gallery/omori4',
    title: '../pages/gallery/om.~??i4',
  },
];

const Gallery = () => {
  return (
    <Layout title="Gallery" className="bgStars">
      <div>
        <h1 className="h1">GALLERY</h1>
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
