import { useEffect, useState } from 'react';
import { geIpapi } from '../../../services/ipapi-service';
import { ipapi } from '../../../types/ipapi';
import Layout from '../../Layout/Layout';
import Hr from '../../utils/Hr/Hr';
import Banner from './Banner';
import styles from './Home.module.scss';
import LinkList from './LinkList';
import SpookyAd from './SpookyAd';
import UnderConstruction from './UnderConstruction';

const Home = () => {
  const [ip, setIp] = useState<ipapi | null>(null);

  useEffect(() => {
    geIpapi().then((data) => setIp(data));
  }, []);

  return (
    <Layout>
      <Banner />
      <Hr variant="Blood" />

      <div className={'flex'}>
        {/* MAIN SIDE */}
        <main>
          <UnderConstruction />
          {ip && (
            <section className={styles.ipSection}>
              <p>Welcome {ip?.ip}</p>
              <p>
                from ({ip?.country_name}, {ip?.region})
              </p>
            </section>
          )}
          <LinkList />
        </main>

        {/* RIGHT SIDE */}
        <SpookyAd />
      </div>
    </Layout>
  );
};

export default Home;
