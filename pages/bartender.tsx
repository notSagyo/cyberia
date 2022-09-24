import React from 'react';
import BartenderGame from '../components/BartenderGame/BartenderGame';
import BartenderGameContainer from '../components/BartenderGame/BartenderGameContainer';
import Layout from '../components/Layout/Layout';

const Bartender = () => {
  return (
    <Layout noPadding title="bartender.exe">
      <BartenderGameContainer>
        <BartenderGame />
      </BartenderGameContainer>
    </Layout>
  );
};

export default Bartender;
