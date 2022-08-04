/* eslint-disable @next/next/no-img-element */
import Layout from '../components/layout';
import Video from '../components/video';

function Music() {
  return (
    <Layout title="Music" className="bgStars">
      <div className="spaceBetween">
        <img src="/img/cd.gif" alt="disc image" />
        <h1 className="h1 textGlowBluePink"> MUSIC </h1>
        <img src="/img/cd.gif" alt="disc image" />
      </div>
      <hr className="hrImgBlue" />
      <Video title="Katana ZERO > OST" urlId="P196hEuA_Xc" />
      <hr className="hrImgBlue" />
      <Video title="Cyberia > Mix" urlId="bEHUFRRK9Sk" />
      <hr className="hrImgBlue" />
      <Video title="VA-11 HALL-A > Second Round" urlId="H8w_Q57RQJc" />
      <hr className="hrImgBlue" />
      <Video title="SEALTBELTS > COWBOY BEBOP" urlId="6Hj6hPqKiS4" />
    </Layout>
  );
}

export default Music;
