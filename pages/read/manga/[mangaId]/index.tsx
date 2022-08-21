import { IMangaInfo } from '@consumet/extensions/dist/models';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import Anchor from '../../../../components/utils/anchor';
import Layout from '../../../../components/layout';
import mangas from '../../../../data/mangas';
import { mangadex } from '../../../../services/manga-service';
import { mangaURL, readURL } from '../../../../utils/url';

interface MangaIdProps {
  mangaInfo: IMangaInfo;
}

interface iQueryParams extends ParsedUrlQuery {
  mangaId: string;
}

const MangaId = ({ mangaInfo }: MangaIdProps) => {
  const mangaId = mangaInfo.id;
  const chapters = mangaInfo.chapters?.reverse() || [];

  const mangaName =
    mangas
      .find((manga) => manga.id == mangaId)
      ?.name.toLocaleLowerCase()
      .replaceAll(' ', '_') || '';

  return (
    <Layout>
      <Link href={readURL} passHref>
        <Anchor className="green">
          <h1 className="h2">{`..${mangaURL}/${mangaName}`}</h1>
        </Anchor>
      </Link>
      {chapters.map((chapter, index) => (
        <Link
          href={`${mangaURL}/${mangaId}/${chapter.id}/1`}
          key={chapter.id}
          passHref
        >
          <Anchor>
            <h4 className="h3">{`${mangaURL}/${mangaName}/${index}`}</h4>
          </Anchor>
        </Link>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<MangaIdProps> = async (context) => {
  const { mangaId } = context.params as iQueryParams;
  const mangaInfo = await mangadex.fetchMangaInfo(mangaId);
  return {
    props: { mangaInfo: { ...mangaInfo, title: mangaInfo.title || '' } },
  };
};

export const getStaticPaths: GetStaticPaths<iQueryParams> = async () => {
  const paths = mangas.map((manga) => ({ params: { mangaId: manga.id } }));
  return { paths, fallback: false };
};

export default MangaId;
