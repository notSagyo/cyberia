import Layout from '../../components/Layout/Layout';
import LinkList from '../../components/LinkList/LinkList';
import mangas from '../../data/mangas';
import { mangaURL } from '../../utils/urls';

const ReadPage = () => {
  return (
    <Layout>
      <h1 className="h1">READ</h1>
      <LinkList
        links={mangas.map((manga) => ({
          href: `${mangaURL}/${manga.id}`,
          title: `${mangaURL}/${manga.name
            .toLocaleLowerCase()
            .replaceAll(' ', '_')}`,
          key: manga.id,
        }))}
      />
    </Layout>
  );
};

export default ReadPage;

// import Layout from '/components/Layout/Layout';
// import LinkList from '/components/LinkList/LinkList';
// import mangas from '/data/mangas';
// import { mangaURL } from '/utils/urls';

// const ReadPage = () => {
//   return (
//     <Layout>
//       <h1 className="h1">READ</h1>
//       <LinkList
//         links={mangas.default.map((manga) => ({
//           href: `${mangaURL}/${manga.id}`,
//           title: `${mangaURL}/${(manga.name || manga.id)
//             .toLocaleLowerCase()
//             .replaceAll(' ', '_')}`,
//           key: manga.id,
//         }))}
//       />
//     </Layout>
//   );
// };

// export default ReadPage;
