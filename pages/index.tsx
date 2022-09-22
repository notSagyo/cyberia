import type { NextPage } from 'next';
import Anchor from '../components/utils/Anchor';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import Hr from '../components/utils/Hr';
import { baseURL } from '../utils/url';
import { linkListRoutes } from '../utils/utils';
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
          <section>
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
          </section>

          {/* LINKS LIST */}
          <section>
            <img src="/img/arrow-tdr.gif" alt="construction" height={64} />
            <span className="h4 dInline">
              <b> LINKS</b>
            </span>

            <ul className={`${styles.linkList} h5 red`}>
              {linkListRoutes.map(
                (name) =>
                  name.toUpperCase() != 'HOME' && (
                    <li key={name}>
                      <Anchor href={`${baseURL}/${name.toLocaleLowerCase()}`}>
                        <img src="/img/sigil.gif" width={34} alt="sigil" />
                        <span>{name.toUpperCase()}</span>
                      </Anchor>
                    </li>
                  )
              )}
            </ul>
          </section>
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
