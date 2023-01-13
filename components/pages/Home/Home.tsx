import { useEffect, useRef, useState } from 'react';
import { Themes, useThemeContext } from '../../../context/ThemeContext';
import Aside from './Aside';
import Banner from './Banner';
import styles from './Home.module.scss';
import HomeLinkList from './HomeLinkList';
import UnderConstruction from './UnderConstruction';
import Layout from '/components/Layout/Layout';
import Hr from '/components/utils/Hr/Hr';
import { getStoredCrt, useCrtContext } from '/context/CrtContext';
import ipService from '/services/ip-service';
import { GeoiplookupRes } from '/types/ip';

const Home = () => {
  const [ipInfo, setIpInfo] = useState<GeoiplookupRes>();
  const crtInputRef = useRef<HTMLInputElement>(null);
  const { setCrtEnabled } = useCrtContext();
  const { setTheme, theme } = useThemeContext();

  useEffect(() => {
    // Fetch IP from this app's API. If length > 3 (local ip) get the ip info
    (async () => {
      const ip = await ipService.fecthClientIp();
      const info = await ipService.getInfoGeoiplookup(ip.length > 3 ? ip : '');
      if (info) {
        ipService.saveInfoToStorage(JSON.stringify(info));
        setIpInfo(info);
      }
    })();
    crtInputRef.current && (crtInputRef.current.checked = getStoredCrt());
  }, []);

  return (
    <Layout>
      <Banner />
      <Hr variant="Blood" />

      <div className={'flex'}>
        {/* MAIN SIDE */}
        <main>
          <UnderConstruction />
          <img src="/img/open-24h.gif" width={200} alt="open 24 hours" />
          <section className={styles.ipSection}>
            <p>Welcome {ipInfo?.ip || 'ANONYMOUS_USER'}</p>
            <p>
              {ipInfo
                ? `from [${ipInfo.country_name}, ${ipInfo.region}]`
                : 'from [THE_WIRED]'}
            </p>
          </section>
          <HomeLinkList />

          {/* SETTINGS */}
          <div className={styles.inputWrapper}>
            <input
              type="checkbox"
              id="crt"
              ref={crtInputRef}
              onChange={() => setCrtEnabled(crtInputRef?.current?.checked)}
            />
            <label htmlFor="crt">Enable CRT effect</label>
          </div>
          <div className={styles.inputWrapper}>
            <select
              id="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value as Themes)}
            >
              <option value="default">default</option>
              <option value="green">neo green</option>
              <option value="blue">night owl</option>
              <option value="pink">cotton candy</option>
              <option value="red">dracula</option>
              <option value="ivory">ivory</option>
            </select>
            <label htmlFor="theme">Theme</label>
          </div>
          <noscript className={styles.inputWrapper}>
            To enjoy the {"site's"} full experience please enable JavaScript.
          </noscript>
        </main>

        {/* RIGHT SIDE */}
        <Aside />
      </div>
    </Layout>
  );
};

export default Home;
