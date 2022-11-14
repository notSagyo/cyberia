import { SyntheticEvent } from 'react';
import styles from './Music.module.scss';
import MusicShowcase from './MusicShowcase';
import Hr from '/components/utils/Hr/Hr';
import { useMusicContext } from '/context/MusicContext';
import songs from '/data/songs';
import { ISong } from '/types/song';

const musicTags = new Set(songs.map((s) => s.tag));

const Music = () => {
  const musicContext = useMusicContext();

  const changeSong = (song: ISong) => {
    musicContext.setSong(song);
  };

  const onSearch = (e: SyntheticEvent) => {
    if (!e.target) return;
    const value = (e.target as HTMLInputElement).value;
    changeSong({ url: value, title: 'Custom Track' });
  };

  const showcases = Array.from(musicTags).map((tag) => (
    <div key={tag}>
      <Hr variant="Blue" />
      <span className={styles.tag}>{tag}</span>
      <div className={styles.showcasesContainer}>
        {songs
          .filter((song) => song.tag === tag)
          .map((song) => (
            <MusicShowcase
              key={song.url}
              videoUrl={song.url}
              thumbnailQuality={song?.res}
              showcaseTitle={song.title}
              imageUrl={song.imageUrl}
              shellProps={{ bodyProps: { onClick: () => changeSong(song) } }}
            />
          ))}
      </div>
    </div>
  ));

  return (
    <>
      <div className="spaceBetween">
        <img src="/img/cd.gif" alt="disc image" />
        <h1 className="h1 textGlowBluePink"> MUSIC </h1>
        <img src="/img/cd.gif" alt="disc image" />
      </div>
      {showcases}
      <div className={styles.searchContainer}>
        <label htmlFor="youtubeSearch">CUSTOM: </label>
        <input
          id="youtubeSearch"
          type="text"
          size={32}
          placeholder={'youtube url'}
          onKeyDown={(e) => e.key === 'Enter' && onSearch(e)}
        />
      </div>
    </>
  );
};

export default Music;
