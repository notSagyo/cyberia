import { useEffect, useState } from 'react';
import Head from 'next/head';
import Shell, { ShellProps } from './shell/shell';
import Link from 'next/link';
import styles from '/styles/layout.module.scss';
import Anchor from './utils/anchor';
import { getDateString, getTimeString, navbarRoutes } from '../utils/utils';
import cn from 'classnames';
import Void from './void';
import { baseURL } from '../utils/url';

interface LayoutProps extends ShellProps {
  title?: string;
  description?: string;
}

const Layout = ({
  children: children,
  title: title,
  description,
  ...props
}: LayoutProps) => {
  const [shellOpened, setShellOpened] = useState<boolean>(true);
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
      {/* PAGE HEAD ======================================================== */}
      <Head>
        <title>{title ? `${title} | Cyberia` : 'Cyberia'}</title>
        <meta name="description" content={description || 'bad end'} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      {/* SHELL ============================================================ */}
      <Shell
        shellTitle="CYBERIA.EXE"
        mainShell={true}
        onClose={() => setShellOpened(false)}
        {...props}
        className={cn(
          'bgNebula',
          styles.shell,
          !shellOpened && 'tvShutdown',
          props.className
        )}
        // NAV ITEMS
        navItems={
          <>
            {navbarRoutes.map((name, i) => (
              <li key={i}>
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
