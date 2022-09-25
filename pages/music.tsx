/* eslint-disable @next/next/no-img-element */
import Layout from '../components/Layout/Layout';
import MusicShowcase from '../components/MusicPlyr/MusicShowcase';
import Hr from '../components/utils/Hr/Hr';
import { useMusicPlyrContext } from '../contexts/MusicPlyrContext';
import songs from '../data/songs';

function MusicPage() {
  const musicPlyrContext = useMusicPlyrContext();

  const onSongClick = (videoId: string, videoTitle: string) => {
    musicPlyrContext.setVideoId(videoId);
    musicPlyrContext.setVideoTitle(videoTitle);
  };

  return (
    <Layout title="Music" className="bgStars">
      <div className="spaceBetween">
        <img src="/img/cd.gif" alt="disc image" />
        <h1 className="h1 textGlowBluePink"> MUSIC </h1>
        <img src="/img/cd.gif" alt="disc image" />
      </div>
      <>
        {songs.map((song) => (
          <div key={song.id}>
            <Hr variant="Blue" />
            <MusicShowcase
              videoId={song.id}
              videoTitle={song.title}
              thumbnailQuality={song?.res || undefined}
              shellProps={{
                bodyProps: { onClick: () => onSongClick(song.id, song.title) },
              }}
            />
          </div>
        ))}
      </>
    </Layout>
  );
}

export default MusicPage;
