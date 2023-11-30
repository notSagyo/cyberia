import { IMangaInfo } from '@consumet/extensions/dist/models';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '/components/Layout/Layout';
import LinkHeading from '/components/LinkHeading/LinkHeading';
import LinkList from '/components/LinkList/LinkList';
import mangas from '/data/mangas';
import { getMangaInfo } from '/services/consumet-service';
import { mangaURL, readURL } from '/utils/urls';
import { toUrlikeString } from '/utils/utils';

const MangaIdPage = () => {
  const [mangaInfo, setMangaInfo] = useState<IMangaInfo | null>(null);
  let { mangaId: mangaIdParam } = useRouter().query;
  const mangaId = mangaIdParam?.toString();

  useEffect(() => {
    mangaId &&
      getMangaInfo(mangaId)
        .then((res) => setMangaInfo(res))
        .catch((err) => console.error(err));
  }, [mangaId]);

  const chapters = mangaInfo?.chapters || [];

  const mangaName = toUrlikeString(
    mangas.default.find((manga) => manga.id == mangaId)?.title ||
      mangaId ||
      'manga',
  );

  return (
    <Layout title={mangaId}>
      <LinkHeading href={`${readURL}`} goBack>
        {mangaURL}/{mangaName}
      </LinkHeading>

      {mangaInfo ? (
        <LinkList
          links={chapters.map((chapter, i) => ({
            href: `${mangaURL}/${mangaId}/${chapter.id}/1`,
            title: `${mangaURL}/${mangaName}/${i + 1}`,
            key: chapter.id,
          }))}
        />
      ) : (
        <Image src="/img/loading.gif" alt="loading" width={384} height={51} />
      )}
    </Layout>
  );
};

// Static stuff ==============================================================//
export default MangaIdPage;
