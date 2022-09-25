import cn from 'classnames';
import styles from './Banner.module.scss';

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
