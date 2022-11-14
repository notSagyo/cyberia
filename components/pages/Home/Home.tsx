import { useEffect, useState } from 'react';
import Banner from './Banner';
import styles from './Home.module.scss';
import HomeLinkList from './HomeLinkList';
import SpookyAd from './SpookyAd';
import UnderConstruction from './UnderConstruction';
import Layout from '/components/Layout/Layout';
import Hr from '/components/utils/Hr/Hr';
import ipService from '/services/ip-service';
import { Geoiplookup } from '/types/geoiplookup';

const Home = () => {
  const [ipInfo, setIpInfo] = useState<Geoiplookup>();

  useEffect(() => {
    ipService.getIpInfoGeoiplookup().then((data) => {
      if (data) {
        setIpInfo(data);
        ipService.saveIpInfoToStorage(JSON.stringify(data));
      }
    });
  }, []);

  return (
    <Layout>
      <Banner />
      <Hr variant="Blood" />

      <div className={'flex'}>
        {/* MAIN SIDE */}
        <main>
          <UnderConstruction />
          <section className={styles.ipSection}>
            <p>Welcome {ipInfo?.ip || 'XXX.XX.XX.XXX'}</p>
            <p>
              {ipInfo
                ? `from (${ipInfo.country_name}, ${ipInfo.region})`
                : 'from (THE_WIRED)'}
            </p>
          </section>
          <HomeLinkList />
        </main>

        {/* RIGHT SIDE */}
        <SpookyAd />
      </div>
    </Layout>
  );
};

export default Home;
