// Page used to test stuff or smth
import { GetStaticProps } from 'next';

// interface TestProps {}

const TestPage = ({ ...props }: any) => {
  return <button {...props}>TEST</button>;
};

export default TestPage;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
