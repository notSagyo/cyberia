import cn from 'classnames';
import styles from './Aside.module.scss';
import Anchor from '/components/utils/Anchor/Anchor';
import Img from '/components/utils/Img/Img';
import { birthday } from '/data/birthday';
import { bdayURL } from '/utils/urls';

const isBirthday = (() => {
  const date = new Date();
  const today = { day: date.getDate(), month: date.getMonth() + 1 };
  return today.day === birthday.day && today.month === birthday.month;
})();

const Aside = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <aside {...props} className={cn(styles.aside, props.className)}>
      {/* BIRTHDAY */}
      {isBirthday && (
        <div className={styles.bday}>
          <Anchor href={bdayURL} noColor noDecoration>
            <div className={styles.text} />
            <Img className={styles.cake} src="img/cake.gif" alt="cake" />
          </Anchor>
        </div>
      )}

      {/* SPOOKY AD */}
      <div className={styles.spooky}>
        <div className={styles.spookyHeader}>
          <img src="/img/pumpkin.gif" alt="pumpkin" width={48} height={48} />
          <div className="orange">
            FREE GAMES!!!! <br /> $GET$MONEY$ <br /> ONLINE FORUM
            <span className="red">
              <br /> BLOODY EYE <br /> ACCELA
            </span>
          </div>
          <img src="/img/pumpkin.gif" alt="pumpkin" width={48} height={48} />
        </div>
        <div className={styles.spookySpotlight}>
          <div>
            S<br />P<br />O<br />O<br />K<br />Y
          </div>
          <div>
            B<br />O<br />O<br />G<br />I<br />E
          </div>
        </div>
        <span className="green"> www.spookyboogie.jp </span>
      </div>
    </aside>
  );
};

export default Aside;
