import classNames from 'classnames';
import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import Layout from '/components/Layout/Layout';
import { cleanup, initBday } from '/components/pages/Bday/BdayHelper';
import styles from '/styles/pages/bday.module.scss';

const BdayPage: NextPage = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvas.current) initBday(canvas.current);
    return () => cleanup();
  }, []);

  return (
    <Layout noPadding>
      <div className={styles.bdayContainer}>
        <div className={styles.goodSide}>
          <div>
            <img src="/img/hello-kitty.gif" alt="hello kitty" />
          </div>
          <div>
            <img src="/img/cake.gif" alt="hello kitty" />
          </div>
          <h1 className={styles.title}>IT&apos;S YOUR BIRTHDAY</h1>
          <div>
            <img src="/img/tfm.png" alt="transformice marry" />
          </div>
        </div>
        <div className={classNames('bgMoon', styles.badSide)}>
          <canvas ref={canvas} />
        </div>
      </div>
    </Layout>
  );
};

export default BdayPage;
