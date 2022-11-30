import type { NextPage } from 'next';
import ProviderPage from './[provider]';

// TODO: ability to choose provider
const AnimePage: NextPage = () => {
  return <ProviderPage provider={'default'} />;
};

export default AnimePage;
