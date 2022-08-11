import styles from '/styles/banner.module.scss';
import cn from 'classnames';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.titleContainer}>
        <span className="textGlowGreen h1">WELCOME TO</span>
        <h1 className="textGlowPink h1"> CYBERIA</h1>
      </div>
      <div>
        <span className={cn('textGlowGreen', styles.nihongo)}>
          <br /> サイバーリア
          <br /> • ワールド
        </span>
      </div>
    </div>
  );
};

export default Banner;