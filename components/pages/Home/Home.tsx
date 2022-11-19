import { useEffect, useRef, useState } from 'react';
import Banner from './Banner';
import styles from './Home.module.scss';
import HomeLinkList from './HomeLinkList';
import SpookyAd from './SpookyAd';
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
          <div className={styles.crtInputWrapper}>
            <input
              type="checkbox"
              id="crt"
              ref={crtInputRef}
              onChange={() => setCrtEnabled(crtInputRef?.current?.checked)}
            />
            <label htmlFor="crt">Enable CRT effect</label>
          </div>
        </main>

        {/* RIGHT SIDE */}
        <SpookyAd />
      </div>
    </Layout>
  );
};

export default Home;
