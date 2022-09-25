import cn from 'classnames';
import styles from './SpookyAd.module.scss';

const SpookyAd = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <aside {...props} className={cn(styles.aside, props.className)}>
      <div className={styles.asideHeader}>
        <img src="/img/pumpkin.gif" alt="pumpkin" width={48} height={48} />
        <div className="orange">
          FREE GAMES!!!!
          <br /> $GET$MONEY$
          <br /> ONLINE FORUM
          <span className="red">
            <br /> BLOODY EYE <br /> ACCELA
          </span>
        </div>
        <img src="/img/pumpkin.gif" alt="pumpkin" width={48} height={48} />
      </div>
      <div className={styles.asideSpotlight}>
        <div>
          S<br />P<br />O<br />O<br />K<br />Y
        </div>
        <div>
          B<br />O<br />O<br />G<br />I<br />E
        </div>
      </div>
      <span className="green"> www.spookyboogie.jp </span>
    </aside>
  );
};

export default SpookyAd;
