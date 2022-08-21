import type { NextPage } from 'next';
import Link from 'next/link';
import Anchor from '../components/anchor';
import Banner from '../components/banner';
import Layout from '../components/layout';
import Hr from '../components/utils/hr';
import { baseURL } from '../utils/url';
import { navigableRoutes } from '../utils/utils';
import Test from './test';
import styles from '/styles/index.module.scss';

/* eslint-disable @next/next/no-img-element */
const Home: NextPage = () => {
  return (
    <Layout>
      {/* BANNER */}
      <Banner />
      <Hr variant="Blood" />

      <div className={styles.indexContainer}>
        {/* MAIN SIDE */}
        <main>
          {/* CONSTRUCTION */}
          <div>
            <img
              src="/img/under-construction-line.gif"
              alt="construction"
              height={48}
            />
            <div className={styles.underConstruction}>
              <img
                src="/img/under-construction.gif"
                alt="construction"
                height={48}
              />
              <h2 className="h4 blink">
                <u>SITE UNDER CONSTRUCTION</u>
              </h2>
              <img
                src="/img/under-construction.gif"
                alt="construction"
                height={48}
              />
            </div>
            <img
              src="/img/under-construction-line.gif"
              alt="construction"
              height={48}
            />
          </div>

          {/* LINKS LIST */}
          <div>
            <img src="/img/arrow-tdr.gif" alt="construction" height={64} />
            <span className="h4 dInline">
              <b> LINKS</b>
            </span>

            <ul className={`${styles.linkList} h5 red`}>
              {navigableRoutes.map(
                (name, i) =>
                  name.toUpperCase() != 'HOME' && (
                    <li key={i}>
                      <Link
                        href={`${baseURL}/${name.toLocaleLowerCase()}`}
                        passHref
                      >
                        <Anchor>
                          <img src="/img/sigil.gif" width={34} alt="sigil" />
                          <span>{name.toUpperCase()}</span>
                        </Anchor>
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        </main>

        {/* RIGHT SIDE */}
        <aside className={styles.aside}>
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
      </div>
    </Layout>
  );
};

export default Home;
