import { IMangaInfo } from '@consumet/extensions/dist/models';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Layout from '../../../../components/Layout/Layout';
import LinkHeading from '../../../../components/LinkHeading/LinkHeading';
import LinkList from '../../../../components/LinkList/LinkList';
import LinkListItem from '../../../../components/LinkList/LinkListItem';
import mangas from '../../../../data/mangas';
import { mangadex } from '../../../../services/manga-service';
import { mangaURL, readURL } from '../../../../utils/urls';

interface MangaIdProps {
  mangaInfo: IMangaInfo;
}

interface iQueryParams extends ParsedUrlQuery {
  mangaId: string;
}

const MangaId = ({ mangaInfo }: MangaIdProps) => {
  const mangaId = mangaInfo.id;
  const chapters = mangaInfo.chapters || [];

  const mangaName =
    mangas
      .find((manga) => manga.id == mangaId)
      ?.name.toLocaleLowerCase()
      .replaceAll(' ', '_') || '';

  return (
    <Layout>
      <LinkHeading href={`${readURL}`} goBack>
        {mangaURL}/{mangaName}
      </LinkHeading>

      <LinkList>
        {chapters.map((chapter) => (
          <LinkListItem
            href={`${mangaURL}/${mangaId}/${chapter.id}/1`}
            key={chapter.id}
          >
            {`${mangaURL}/${mangaName}/${chapter.title}`}
          </LinkListItem>
        ))}
      </LinkList>
    </Layout>
  );
};

// Static stuff ==============================================================//
export const getStaticProps: GetStaticProps<MangaIdProps> = async (context) => {
  const { mangaId } = context.params as iQueryParams;
  const mangaInfo = await mangadex.fetchMangaInfo(mangaId);
  return {
    props: {
      mangaInfo: {
        ...mangaInfo,
        title: mangaInfo.title || '',
        chapters: mangaInfo.chapters?.reverse(),
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths<iQueryParams> = async () => {
  const paths = mangas.map((manga) => ({ params: { mangaId: manga.id } }));
  return { paths, fallback: false };
};

export default MangaId;
