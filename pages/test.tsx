// Page used to test stuff or smth
import { GetStaticProps } from 'next';

// interface TestProps {}

const Test = () => {
  return <div>TEST</div>;
};

export default Test;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
