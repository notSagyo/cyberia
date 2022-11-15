import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import styles from './Bday.module.scss';
import { cleanup, initBday } from '/components/pages/Bday/BdayHelper';

const Bday = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvas.current) initBday(canvas.current);
    return () => cleanup();
  }, []);

  return (
    <div {...props} className={styles.bdayContainer}>
      <div className={styles.goodSide}>
        <div>
          <img src="/img/hello-kitty.gif" alt="hello kitty" />
        </div>
        <div>
          <img src="/img/cake.gif" alt="hello kitty" />
        </div>
        <h1 className={styles.title}>{"IT'S YOUR BIRTHDAY"}</h1>
        <div>
          <img src="/img/tfm.png" alt="transformice marry" />
        </div>
      </div>
      <div className={classNames('bgMoon', styles.badSide)}>
        <canvas ref={canvas} />
      </div>
    </div>
  );
};

export default Bday;
