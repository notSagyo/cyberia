import Bartender from '../components/Bartender/Bartender';
import BartenderContainer from '../components/Bartender/BartenderContainer';
import Layout from '../components/Layout/Layout';

const BartenderPage = () => {
  return (
    <Layout noPadding title="bartender.exe">
      <BartenderContainer>
        <Bartender />
      </BartenderContainer>
    </Layout>
  );
};

export default BartenderPage;
