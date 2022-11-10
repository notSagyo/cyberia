import { IMangaInfo } from '@consumet/extensions/dist/models';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Layout from '/components/Layout/Layout';
import LinkHeading from '/components/LinkHeading/LinkHeading';
import LinkList from '/components/LinkList/LinkList';
import mangas from '/data/mangas';
import { mangaProviders } from '/services/consumet-service-server';
import { mangaURL, readURL } from '/utils/urls';
import { toUrlikeString } from '/utils/utils';

interface MangaIdProps {
  mangaInfo: IMangaInfo;
}

interface iQueryParams extends ParsedUrlQuery {
  mangaId: string;
}

const MangaIdPage = ({ mangaInfo }: MangaIdProps) => {
  const mangaId = mangaInfo.id;
  const chapters = mangaInfo.chapters || [];

  const mangaName = toUrlikeString(
    mangas.default.find((manga) => manga.id == mangaId)?.title || mangaId
  );

  return (
    <Layout>
      <LinkHeading href={`${readURL}`} goBack>
        {mangaURL}/{mangaName}
      </LinkHeading>

      <LinkList
        links={chapters.map((chapter, i) => ({
          href: `${mangaURL}/${mangaId}/${chapter.id}/1`,
          title: `${mangaURL}/${mangaName}/${i + 1}`,
          key: chapter.id,
        }))}
      />
    </Layout>
  );
};

// Static stuff ==============================================================//
export const getStaticProps: GetStaticProps<MangaIdProps> = async (context) => {
  const { mangaId } = context.params as iQueryParams;
  const mangaInfo = await mangaProviders.default.fetchMangaInfo(mangaId);
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
  const paths = mangas.default.map((manga) => ({
    params: { mangaId: manga.id },
  }));
  return { paths, fallback: false };
};

export default MangaIdPage;
