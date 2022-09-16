/* eslint-disable @next/next/no-img-element */
import Layout from '../components/Layout';
import MusicPlyr from '../components/MusicPlyr';
import Hr from '../components/utils/Hr';

const songs = [
  { title: 'Cyberia > Mix', videId: 'bEHUFRRK9Sk' },
  { title: 'VA-11 HALL-A > Second Round', videId: 'H8w_Q57RQJc' },
  { title: 'Katana ZERO > OST', videId: 'P196hEuA_Xc' },
  { title: 'OMORI > OST', videId: 'pw-2e3T03Co' },
  { title: 'SEALTBELTS > COWBOY BEBOP', videId: '6Hj6hPqKiS4' },
];

const musicElems = songs.map((song, i) => (
  <div key={i}>
    <Hr variant="Blue" />
    <MusicPlyr videoTitle={song.title} videoId={song.videId} />
  </div>
));

function Music() {
  return (
    <Layout title="Music" className="bgStars">
      <div className="spaceBetween">
        <img src="/img/cd.gif" alt="disc image" />
        <h1 className="h1 textGlowBluePink"> MUSIC </h1>
        <img src="/img/cd.gif" alt="disc image" />
      </div>
      <>{musicElems}</>
    </Layout>
  );
}

export default Music;
