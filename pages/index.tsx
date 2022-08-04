import type { NextPage } from 'next';
import Link from 'next/link';
import Anchor from '../components/anchor';
import Banner from '../components/banner';
import Layout from '../components/layout';
import { navigableRoutes } from '../utils/utils';
import styles from '/styles/index.module.scss';

/* eslint-disable @next/next/no-img-element */
const Home: NextPage = () => {
  return (
    <Layout>
      <main>
        {/* BANNER */}
        <Banner />
        <hr className="hrImgBlood" />

        {/* CONSTRUCTION */}
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

        {/* LINKS LIST */}
        <div>
          <img src="/img/arrow-tdr.gif" alt="construction" height={64} />
          <span className="h4">
            <b> LINKS</b>
          </span>

          <ul className={`${styles.linkList} h5 red`}>
            {navigableRoutes.map(
              (name, i) =>
                name.toUpperCase() != 'HOME' && (
                  <li key={i}>
                    <Link href={`/${name.toLocaleLowerCase()}`} passHref>
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
    </Layout>
  );
};

export default Home;
