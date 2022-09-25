import Bartender from '../components/BartenderGame/Bartender';
import BartenderContainer from '../components/BartenderGame/BartenderContainer';
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
