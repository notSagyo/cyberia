import cn from 'classnames';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getDateString, getTimeString, navbarRoutes } from '../../utils/utils';
import Shell, { ShellProps } from '../Shell/Shell';
import Anchor from '../utils/Anchor/Anchor';
import Void from '../Void/Void';
import styles from './Layout.module.scss';
import { useMusicContext } from '/context/MusicContext';
import { baseURL } from '/utils/urls';

interface LayoutProps extends ShellProps {
  title?: string;
  description?: string;
  headChildren?: React.ReactNode;
}

const Layout = ({
  children,
  title,
  description = "No matter where you go, everyone's connected...",
  headChildren,
  ...props
}: LayoutProps) => {
  const [shellOpened, setShellOpened] = useState<boolean>(true);
  const [currentDate, setCurrentDate] = useState<string>();
  const [currentTime, setCurrentTime] = useState<string>();
  const musicContext = useMusicContext();

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(getDateString());
      setCurrentTime(getTimeString());
    };
    setTimeout(updateDate, 2000);
    const updateDateInterval = setInterval(updateDate, 1 * 60 * 1000);
    return () => clearInterval(updateDateInterval);
  }, []);

  return (
    <>
      {/* PAGE HEAD ======================================================== */}
      <Head>
        <title>{title ? `${title} | Cyberia` : 'Cyberia'}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />

        {/* Facebook Meta Tags */}
        <meta property="og:title" content="Cyberia" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cyberia.wtf" />
        <meta property="og:image" content="https://i.imgur.com/xPqwqaM.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="cyberia.wtf" />
        <meta property="twitter:url" content="https://cyberia.wtf" />
        <meta name="twitter:title" content="Cyberia" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://i.imgur.com/xPqwqaM.jpg" />

        {headChildren}
      </Head>

      {/* SHELL ============================================================ */}
      <Shell
        shellTitle="CYBERIA.EXE"
        mainShell={true}
        onClose={() => {
          setShellOpened(false);
          musicContext.setEnabled(false);
        }}
        {...props}
        className={cn(
          'bgNebula',
          styles.shell,
          !shellOpened && 'tvShutdown',
          props.className
        )}
        minimizeable={false}
        // NAV ITEMS
        navItems={
          <>
            {navbarRoutes.map((name) => (
              <li key={name}>
                <Anchor href={`${baseURL}/${name.toLocaleLowerCase()}`}>
                  <u>{name[0]}</u>
                  {name.slice(1)}
                </Anchor>
              </li>
            ))}
          </>
        }
        // NAV CONTENT
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

      {/* SHELL CLOSED ===================================================== */}
      <Void visible={!shellOpened} />
    </>
  );
};

export default Layout;
