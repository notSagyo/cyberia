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
  description,
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
    setTimeout(updateDate, 5000);
    const updateDateInterval = setInterval(updateDate, 1 * 60 * 1000);
    return () => clearInterval(updateDateInterval);
  }, []);

  return (
    <>
      {/* PAGE HEAD ======================================================== */}
      <Head>
        <title>{title ? `${title} | Cyberia` : 'Cyberia'}</title>
        <meta name="description" content={description || 'bad end'} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
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
