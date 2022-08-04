import { HtmlHTMLAttributes, useEffect, useState } from 'react';
import Head from 'next/head';
import Shell from './shell';
import Link from 'next/link';
import styles from '/styles/layout.module.scss';
import Anchor from './anchor';
import { getDateString, getTimeString, navigableRoutes } from '../utils/utils';

interface LayoutProps extends HtmlHTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description, ...props }: LayoutProps) => {
  const [currentDate, setCurrentDate] = useState<string>();
  const [currentTime, setCurrentTime] = useState<string>();

  function updateDate() {
    setCurrentDate(getDateString());
    setCurrentTime(getTimeString());
  }

  useEffect(() => {
    updateDate();
    setInterval(() => updateDate(), 1 * 60 * 1000);
  }, []);

  return (
    <>
      <Head>
        <title>{title ? `${title} | Cyberia` : 'Cyberia'}</title>
        <meta name="description" content={description || 'bad end'} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Shell
        title="CYBERIA.EXE"
        className="bgNebula"
        mainShell={true}
        {...props}
        // NAV ITEMS =========================================================//
        navItems={
          <>
            {navigableRoutes.map((name, i) => (
              <li key={i}>
                <Link href={`/${name.toLocaleLowerCase()}`} passHref>
                  <Anchor>{name}</Anchor>
                </Link>
              </li>
            ))}
          </>
        }
        // NAV CONTENT =======================================================//
        navContent={
          <div className={styles.date}>
            {currentDate || 'PRESENT DAY'}・プレゼント・デイ ■
            <br />
            {currentTime || 'PRESENT TIME'}・プレゼント・タイム ■
          </div>
        }
      >
        {children}
      </Shell>
    </>
  );
};

export default Layout;
