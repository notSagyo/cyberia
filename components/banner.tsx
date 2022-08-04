import styles from '/styles/banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.titleContainer}>
        <span className="textGlowGreen">WELCOME TO</span>
        <h1 className="textGlowPink"> CYBERIA</h1>
      </div>
    </div>
  );
};

export default Banner;
