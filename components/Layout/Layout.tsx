import { useEffect, useState } from 'react';
import Head from 'next/head';
import Shell, { ShellProps } from '../Shell/Shell';
import styles from './Layout.module.scss';
import Anchor from '../utils/Anchor/Anchor';
import { getDateString, getTimeString, navbarRoutes } from '../../utils/utils';
import cn from 'classnames';
import Void from '../Void/Void';
import { baseURL } from '../../utils/urls';
import { useMusicPlyrContext } from '../../contexts/MusicPlyrContext';

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

  const musicPlyrContext = useMusicPlyrContext();

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
        {headChildren}
      </Head>

      {/* SHELL ============================================================ */}
      <Shell
        shellTitle="CYBERIA.EXE"
        mainShell={true}
        onClose={() => {
          setShellOpened(false);
          musicPlyrContext.setPlyrElem(null);
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