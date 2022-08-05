import Album from '../../components/album';
import Layout from '../../components/layout';
import styles from '/styles/omori.module.scss';

const images: iAlbumImage[] = [
  {
    path: '/img/omori/DW_New_Polaroid_1.jpg',
    description:
      "Everyone helped me water my plants today! I tend to ramble on for too long when I start talking about plants, so I'm glad my friends listened to me!",
  },
  {
    path: '/img/omori/DW_New_Polaroid_2.jpg',
    description:
      "We found an old couch in the JUNKYARD! There was only enough space on the couch for four people, but I don't mind. I have the best view in the entire world!",
  },
  {
    path: '/img/omori/DW_New_Polaroid_3.jpg',
    description:
      'A spider suddenly fell from a tree and surprised everyone! HERO is too AFRAID to look.',
  },
  {
    path: '/img/omori/DW_New_Polaroid_4.jpg',
    description: `Oh, boy! Oh, boy! We were able to score five tickets to "SWEETHEART'S QUEST FOR HEARTS"! I sure hope nothing unexpected happens...`,
  },
  {
    path: '/img/omori/DW_New_Polaroid_5.jpg',
    description:
      "We're at the LAST RESORT! KEL keeps losing at slots. He should really learn when to stop.",
  },
  {
    path: '/img/omori/DW_New_Polaroid_6.jpg',
    description:
      'We stopped by the MUSTARD SUB for some grub! COMBO MEALS for everyone!!',
  },
];

const Gallery = () => {
  return (
    <Layout title="Gallery" className="bgStars">
      <Album
        descriptionClassname={styles.description}
        imagesFolderPath="/img/omori"
        images={images}
        shellProps={{ noHr: true }}
      />
    </Layout>
  );
};

export default Gallery;
