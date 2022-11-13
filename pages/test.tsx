// Page used to test stuff or smth
import { GetStaticProps } from 'next';
import React from 'react';

interface TestProps {}

const TestPage = ({ ...props }: TestProps) => {
  return <React.Fragment {...props}></React.Fragment>;
};

export default TestPage;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
