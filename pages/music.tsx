/* eslint-disable @next/next/no-img-element */
import Layout from '../components/layout';
import Hr from '../components/utils/hr';
import YTVideo from '../components/yt-video';

function Music() {
  return (
    <Layout title="Music" className="bgStars">
      <div className="spaceBetween">
        <img src="/img/cd.gif" alt="disc image" />
        <h1 className="h1 textGlowBluePink"> MUSIC </h1>
        <img src="/img/cd.gif" alt="disc image" />
      </div>
      <Hr variant="Blue" />
      <YTVideo title="Cyberia > Mix" urlId="bEHUFRRK9Sk" />
      <Hr variant="Blue" />
      <YTVideo title="VA-11 HALL-A > Second Round" urlId="H8w_Q57RQJc" />
      <Hr variant="Blue" />
      <YTVideo title="Katana ZERO > OST" urlId="P196hEuA_Xc" />
      <Hr variant="Blue" />
      <YTVideo title="SEALTBELTS > COWBOY BEBOP" urlId="6Hj6hPqKiS4" />
    </Layout>
  );
}

export default Music;
