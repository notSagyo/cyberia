import Album from '../../components/album';
import Layout from '../../components/layout';
import styles from '/styles/omori.module.scss';

const images: iAlbumImage[] = [
  {
    path: '/img/omori/dw_album_01.jpg',
    description:
      "MARI is teaching everyone how to make flower crowns! OMORI and KEL are holding MARI's example. So pretty...",
  },
  {
    path: '/img/omori/dw_album_02.jpg',
    description:
      'OMORI and KEL gave up and ran off, but AUBREY and I got the hang of it really fast!',
  },
  {
    path: '/img/omori/dw_album_03.jpg',
    description:
      "HERO's still making his flower crown. It's taking him a little while, but he's getting it. You have to admire his persistence.",
  },
  {
    path: '/img/omori/dw_album_04.jpg',
    description:
      "Everyone's eating watermelons. So juicy! AUBREY has some seeds on her face. Maybe someone should tell her.",
  },
  {
    path: '/img/omori/dw_album_05.jpg',
    description:
      "KEL drinking a bottle of MILK, his favorite! I shouldn't get too close or he might get my camera wet.",
  },
  {
    path: '/img/omori/dw_album_06.jpg',
    description:
      'MARI had HERO take a picture of us. Everyone thinks a flower crown really suits me.',
  },
  {
    path: '/img/omori/dw_album_07.jpg',
    description:
      'HERO leaning in for a smooch! KEL looks so annoyed. Ah, brotherly love...',
  },
  {
    path: '/img/omori/dw_album_08.jpg',
    description:
      "We're having a picnic today! MARI wanted to take a picture of everyone. Say cheese!",
  },
  {
    path: '/img/omori/dw_album_09.jpg',
    description:
      "After eating, everyone fell asleep, except HERO and MARI. I'm getting kind of sleepy myself.",
  },
  {
    path: '/img/omori/dw_album_10.jpg',
    description:
      "KEL said he took a picture of himself on accident, but I don't believe him....",
  },
  {
    path: '/img/omori/dw_album_11.jpg',
    description:
      'All of our feet in a circle! can you guess whose feet are whose?',
  },
  { path: '/img/omori/dw_album_12.jpg' },
];

const Gallery = () => {
  return (
    <Layout title="Gallery" className="bgStars">
      <Album
        descriptionClassname={styles.description}
        imagesFolderPath="/img/omori"
        images={images}
      />
    </Layout>
  );
};

export default Gallery;
